import styles from './styles.module.scss';
import classNames from 'classnames';
function Button({ content, isPrimary = true, ...props }) {
    const { btn, primaryBtn, secondBtn } = styles;
    return (
        <div>
            <button
                className={classNames(btn, {
                    [primaryBtn]: isPrimary,
                    [secondBtn]: !isPrimary
                })}
                {...props}
            >
                {content}
            </button>
        </div>
    );
}

export default Button;
