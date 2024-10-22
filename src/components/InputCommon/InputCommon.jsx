import { useState } from 'react';
import styles from './styles.module.scss';

import { FiEyeOff } from 'react-icons/fi';
import { FiEye } from 'react-icons/fi';
function InputCommon({ label, type, isRequire = false }) {
    const { container, labelInput, boxInput, boxIcon } = styles;
    const [showPassword, setShowPassword] = useState(true);
    const isPassWord = type === 'password';
    const isShowTextPassword = type === 'password' && showPassword ? 'text' : type;


    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className={container}>
            
            <div className={labelInput}>
                {label} {isRequire && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {isPassWord && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputCommon;
