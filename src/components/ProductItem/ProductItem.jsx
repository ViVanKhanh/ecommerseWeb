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
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min-285x340.jpg'
                    alt=''
                />
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
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
                <div className={title}>10K Yellow Gold</div>
                <div className={priceItem}>$99.99</div>
            </div>
        </div>
    );
}

export default ProductItem;
