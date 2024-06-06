import {FieldValidation, FieldValidationParams} from './type';

/**
 * validate email string
 * @param email
 */
const isValidEmail = (email: string) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email);
};

export const useValidation = (): FieldValidation => {
  const isValidNumber = (value: string) => {
    if (isNaN(Number(value))) {
      return 'Invalid number';
    }
    return null;
  };

  const validate = ({value, fieldType}: FieldValidationParams) => {
    let error = null;
    if (!value) {
      error = 'Required';
      return error;
    }
    switch (fieldType) {
      case 'email':
        if (isValidEmail(String(value))) {
          error = null;
        } else error = 'Invalid email';
        break;
      default:
        error = null;
        break;
    }
    return error;
  };

  return {validate};
};
