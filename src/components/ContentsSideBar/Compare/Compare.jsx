import HeaderSideBar from '@components/ContentsSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ContentsSideBar/components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
function Compare() {
    const { container, boxContent, boxButton  } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar
                    icon={<TfiReload style={{ fontSize: '25px' }} />}
                    title={'COMPARE'}
                />
                <ItemProduct />
                <ItemProduct />
                <ItemProduct />
            </div>
            <div className={boxButton }>
                <Button content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;
