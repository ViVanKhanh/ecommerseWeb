import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/HeadingListProduct/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct() {
    const { container, containerItem } = styles;

    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner/>
                <div className={containerItem}>
                    <ProductItem/>
                    <ProductItem/>
                    
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
