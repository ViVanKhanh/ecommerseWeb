import styles from './styles.module.scss';
import classNames from 'classnames';
function Button({content, isPrimary = true}) {
    const {btn, primaryBtn, secondBtn} = styles;
    return <div>
        <button className={classNames(btn, {
            [primaryBtn]: isPrimary,
            [secondBtn]: !isPrimary
        })}>{content}</button>
    </div>
}

export default Button;