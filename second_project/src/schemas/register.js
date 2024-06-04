import * as yup from 'yup';

const registerSchema = yup.object().shape({
    name: yup.string().required().min(3),
    email: yup.string().required().email(),
    password: yup.string().required().min(6).max(30),
    confirmPassword: yup.string().required().oneOf([yup.ref('password')])
})

export default registerSchema;