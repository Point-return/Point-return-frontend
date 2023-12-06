import { useCallback, useState } from 'react';
import isEmail from 'validator/es/lib/isEmail';

function useValidation() {
  const [values, setValues] = useState<any>({});
  const [errors, setErrors] = useState<any>({});
  const [isValid, setValid] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    const { name, value } = target;
    if (name === 'email' && !isEmail(value)) {
      target.setCustomValidity(
        'Укажите правильно e-mail в формате name@example.ru',
      );
    } else if ((name === 'password' && value.length < 3) || value.length > 20) {
      target.setCustomValidity('Длина пароля должны быть от 3 до 20 символов');
    } else {
      target.setCustomValidity('');
    }
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setValid(target.closest('form')!.checkValidity());
  }

  const resetValidation = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValid(newIsValid);
      setValues(newValues);
      setErrors(newErrors);
    },
    [setValid, setValues, setErrors],
  );

  return {
    values,
    errors,
    isValid,
    onChange,
    resetValidation,
  };
}

export default useValidation;
