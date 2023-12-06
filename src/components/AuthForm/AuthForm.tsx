import {
  Container,
  Flex,
  TextInput,
  Card,
  Text,
  Button,
} from '@gravity-ui/uikit';
import React, { FC, useEffect } from 'react';
import './AuthForm.scss';
import useValidation from '@src/hooks/Validation';
import { useLoginUserMutation } from '@src/services/AuthService';
import { useNavigate } from 'react-router-dom';

const AuthForm: FC = () => {
  const { values, onChange } = useValidation();
  const [loginUser, { isSuccess, isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await loginUser(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess, navigate]);

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
              ></TextInput>
              <TextInput
                placeholder="Пароль"
                className="auth-form__input"
                name="password"
                value={values.password || ''}
                onChange={onChange}
              ></TextInput>
              <Button type="submit" className="auth-form__btn">
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
