import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountDownBanner from '@components/HeadingListProduct/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductItem';

function HeadingListProduct({data}) {
    const { container, containerItem } = styles;



    
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner/>
                <div className={containerItem}>
                    {
                        data && 
                        data.map((item, index) => {
                            return <ProductItem  key={index}
                            src={item.images[0]}
                            prevSrc={item.images[1]}
                            name={item.name}
                            price={item.price}
                            />
                        })
                    }
                    
                    
                </div>
            </div>
        </MainLayout>
    );
}

export default HeadingListProduct;
