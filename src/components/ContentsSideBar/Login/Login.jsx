import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { getInfo, register, signIn } from '@components/Services/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SidebarProvider';
import { StoreContext } from '@/contexts/StoreProvider';
function Login() {
    const { container, title, boxRemember, boxButton, lostPW } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useContext(ToastContext);

    const {setIsOpen} = useContext(SideBarContext)
    const {setUserId} = useContext(StoreContext)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            cfpassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'password must be at least 6 characters')
                .required('password is required'),
            cfpassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Password must match'
            )
        }),
        onSubmit: async (values) => {
            const { email: username, password } = values;
            if (isLoading) {
                return;
            }
            setIsLoading(true);
            if (isRegister) {
                await register({ username, password })
                    .then((res) => {
                        toast.success(res.data.message);
                        setIsLoading(false);
                    })
                    .catch((err) => {
                        toast.error(err.response.data.message);
                        setIsLoading(false);
                    });
            }
            if (!isRegister) {
                await signIn({ username, password })
                    .then((res) => {
                        setIsLoading(false);
                        const {id , refreshToken, token} = res.data;
                        setUserId(id)
                        console.log(res);
                        Cookies.set('token', token);
                        Cookies.set('refreshToken', refreshToken);
                        Cookies.set('userId', id);
                        setIsOpen(false)
                        
                    })
                    .catch((res) => {
                        setIsLoading(false);
                    })
            }
            
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };
    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
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
                {isRegister && (
                    <InputCommon
                        id='cfpassword'
                        label='Confirm Password'
                        type='password'
                        isRequire={true}
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRemember}>
                        <input type='checkbox' />
                        <span>Remember me</span>
                    </div>
                )}
                <div className={boxButton}>
                    <Button
                        content={
                            isLoading
                                ? 'LOADING...'
                                : isRegister
                                ? 'REGISTER'
                                : `LOGIN`
                        }
                        type={'submit'}
                        onClick={() => toast.success("Success")}
                    />
                </div>
            </form>
            <div className={boxButton}>
                <Button
                    content={
                        isRegister
                            ? 'Already have an account'
                            : `Don't have an account`
                    }
                    isPrimary={false}
                    type={'submit'}
                    onClick={handleToggle}
                />
            </div>
            {!isRegister && <div className={lostPW}>Lost your password?</div>}
        </div>
    );
}

export default Login;
