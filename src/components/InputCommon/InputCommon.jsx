import { useState } from 'react';
import styles from './styles.module.scss';

import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
function InputCommon({ label, type, isRequire = false, ...props }) {
    const { container, labelInput, boxInput, boxIcon, errorMes } = styles;
    const { formik, id } = props;

    const [showPassword, setShowPassword] = useState(true);
    const isPassWord = type === 'password';
    const isShowTextPassword =
        type === 'password' && showPassword ? 'text' : type;

    const isError = formik.touched[id] && formik.errors[id];
    const mesErr = formik.errors[id];
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequire && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassWord && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                    </div>
                )}
            </div>
            {isError &&  <div className={errorMes}>{mesErr}</div>}
           
        </div>
    );
}

export default InputCommon;
