import styles from './styles.module.scss';
import heart from '@icons/svgs/heart.svg';
import reload from '@icons/svgs/reload.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import eyeIcon from '@icons/svgs/eyeIcon.svg';

function ProductItem({ src, prevSrc, name, price }) {
    const {
        boxImg,
        showImgageWhenHover,
        showFunctionWhenHover,
        boxIcon,
        title,
        priceItem
    } = styles;
    setTimeout(() => {}, 3000);
    return (
        <div>
            <div className={boxImg}>
                <img
                    src={src}
                    alt=''
                />
                <img
                    src={prevSrc}
                    alt=''
                    className={showImgageWhenHover}
                />
                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <img src={cartIcon} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={heart} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={reload} alt='' />
                    </div>
                    <div className={boxIcon}>
                        <img src={eyeIcon} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <div className={title}>{name}</div>
                <div className={priceItem}>{price}</div>
            </div>
        </div>
    );
}

export default ProductItem;
