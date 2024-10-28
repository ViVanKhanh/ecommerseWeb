import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
function Login() {
    const { container, title, boxRemember, boxButton, lostPW } = styles;
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'password must be at least 6 characters')
                .required('password is required')
        }),
        onSubmit: (value) => {
            console.log(value);
            
        }
    });
    
    return (
        <div className={container}>
            <div className={title}>Sign IN</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id='email'
                    label='Email'
                    type='text'
                    isRequire={true}
                   
                    formik={formik}
                />
                
                <InputCommon
                    id='password'
                    label='Password'
                    type='password'
                    isRequire={true}
                    
                    formik={formik}
                />
                
                <div className={boxRemember}>
                    <input type='checkbox' />
                    <span>Remember me</span>
                </div>
                <div className={boxButton}>
                    <Button content={'LOGIN'} type={'submit'}/>
                </div>
            </form>
            <div className={lostPW}>Lost your password?</div>
        </div>
    );
}

export default Login;
