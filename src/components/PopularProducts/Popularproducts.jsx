import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductItem from '@components/ProductItem/ProductItem';
function PopularProducts({ data }) {
    const { container } = styles;
    return (
        <MainLayout>
            <div className={container}>

                    {data &&
                        data.map((item, index) => {
                            return (
                                <ProductItem
                                    key={index}
                                    src={item.images[0]}
                                    prevSrc={item.images[1]}
                                    name={item.name}
                                    price={item.price}
                                />
                            );
                        })}
            </div>
        </MainLayout>
    );
}

export default PopularProducts;