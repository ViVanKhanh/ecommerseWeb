import HeaderSideBar from '@components/ContentsSideBar/components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { PiShoppingCartThin } from "react-icons/pi";
import ProductItem from '@components/ProductItem/ProductItem';
import ItemProduct from '@components/ContentsSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Cart() {
    const { container, boxButton, total } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar 
                icon={<PiShoppingCartThin style={{ fontSize: '30px' }} />} 
                title={'CART'}
                
                />
                <ItemProduct cart={true}/>
                <ItemProduct cart={true}/>
            </div>
            <div className={total}>
                <p>Subtotal:</p> 
                <p>$1,159.40</p>
            </div>
            <div className={boxButton}>
                <Button content={'VIEW CART'} />
            </div>
            <div className={boxButton}>
                <Button content={'CHECKOUT'} isPrimary={false} />
            </div>
        </div>
    );
}

export default Cart;
