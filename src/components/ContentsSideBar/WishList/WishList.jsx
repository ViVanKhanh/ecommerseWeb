import HeaderSideBar from '@components/ContentsSideBar/components/HeaderSideBar/HeaderSideBar';
import { CiHeart } from 'react-icons/ci';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentsSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function WishList() {
    const { container, boxButton } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar
                    icon={<CiHeart style={{ fontSize: '30px' }} />}
                    title={'WISHLIST'}
                />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <div className={boxButton}>
                <Button content={'VIEW WISHLIST'} />
            </div>
            <div className={boxButton}>
                <Button content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
    );
}

export default WishList;
