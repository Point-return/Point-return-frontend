import {
  Container,
  Flex,
  TextInput,
  Card,
  Text,
  Button,
  Icon,
  useToaster,
} from '@gravity-ui/uikit';
import { Eye, EyeSlash } from '@gravity-ui/icons';
import React, { FC, useEffect, useState } from 'react';
import './AuthForm.scss';
import useValidation from '@src/hooks/Validation';
import { useLoginUserMutation } from '@src/services/AuthService';
import { useNavigate } from 'react-router-dom';

const AuthForm: FC = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const { values, errors, isValid, onChange } = useValidation();
  const [loginUser, { isSuccess, isLoading, isError }] = useLoginUserMutation();
  const navigate = useNavigate();
  const { add } = useToaster();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
      add({
        title: 'Успешный вход',
        name: 'success',
        type: 'success',
      });
    }
    if (isError) {
      add({
        title: 'Произошла ошибка. Повторите.',
        name: 'success',
        type: 'error',
      });
    }
  }, [add, isError, isSuccess, navigate]);

  return (
    <Container>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        space={5}
      >
        <Card className="auth-form__container">
          <form onSubmit={handleSubmit}>
            <Flex
              direction="column"
              alignItems="center"
              justifyContent="center"
              space={3}
            >
              <Text variant="header-1">Войти</Text>
              <TextInput
                placeholder="Email"
                className="auth-form__input"
                name="email"
                value={values.email || ''}
                onChange={onChange}
                validationState={errors.email && 'invalid'}
                errorPlacement="inside"
                errorMessage={errors.email}
                disabled={isLoading ? true : false}
              ></TextInput>
              <TextInput
                placeholder="Пароль"
                className="auth-form__input"
                name="password"
                value={values.password || ''}
                onChange={onChange}
                validationState={errors.password && 'invalid'}
                errorPlacement="inside"
                errorMessage={errors.password}
                rightContent={
                  <Button
                    size="s"
                    onClick={() => setHidePassword(!hidePassword)}
                  >
                    {hidePassword ? (
                      <Icon data={Eye} />
                    ) : (
                      <Icon data={EyeSlash} />
                    )}
                  </Button>
                }
                type={`${hidePassword && 'password'}`}
                disabled={isLoading ? true : false}
              ></TextInput>
              <Button
                type="submit"
                className="auth-form__btn"
                disabled={!isValid}
              >
                {isLoading ? 'Вход...' : 'Войти'}
              </Button>
            </Flex>
          </form>
        </Card>
      </Flex>
    </Container>
  );
};

export default AuthForm;
