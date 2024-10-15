import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AvanceHeading ';
import Infor from '@components/Infor/Infor';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProducts } from '@components/Services/productsService';
import PopularProducts from '@components/PopularProducts/Popularproducts';
import SaleHomePage from '@components/SaleHomePage/SaleHomePage';

function HomePage() {
    const { container } = styles;
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res);
        });
    }, []);

    

    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Infor />
                <AdvanceHeading />
                <HeadingListProduct data={listProduct.slice(0, 2)}/>
                <PopularProducts data={listProduct.slice(2, listProduct.length)}/>
                <SaleHomePage/>
                <div style={{ height: '1000px' }}></div>
            </div>
        </div>
    );
}

export default HomePage;
