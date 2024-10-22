import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';

function Login() {
    const { container, title, boxRemember, boxButton, lostPW } = styles;

    return (
        <div className={container}>
            <div className={title}>Sign IN</div>
            <InputCommon label='Email' type='text' isRequire={true} />
            <InputCommon label='Password' type='password' isRequire={true} />
            <div className={boxRemember}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            <div className={boxButton}>
                <Button content={'LOGIN'} />
            </div>
            <div className={lostPW}>
                Lost your password?
            </div>
        </div>
    );
}

export default Login;
