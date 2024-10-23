import HeaderSideBar from '@components/ContentsSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentsSideBar/components/ItemProduct/ItemProduct';
function Compare() {
    const { container } = styles;
    return (
        <div className={container}>
            <HeaderSideBar
                icon={<TfiReload style={{ fontSize: '30px' }} />}
                title={'COMPARE'}
            />
            <ItemProduct/>
        </div>
    );
}

export default Compare;
