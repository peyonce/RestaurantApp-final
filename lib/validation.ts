import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const registerSchema = yup.object({
  name: yup.string().required('First name is required'),
  surname: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Invalid phone number (10 digits)').required('Phone is required'),
  address: yup.string().required('Address is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});

export const cardSchema = yup.object({
  cardNumber: yup.string().matches(/^[0-9]{16}$/, 'Invalid card number (16 digits)').required('Card number is required'),
  cardHolder: yup.string().required('Card holder name is required'),
  expiryDate: yup.string().matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Invalid expiry date (MM/YY)').required('Expiry date is required'),
  cvv: yup.string().matches(/^[0-9]{3,4}$/, 'Invalid CVV (3-4 digits)').required('CVV is required'),
});
