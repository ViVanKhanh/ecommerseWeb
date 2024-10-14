import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AvanceHeading ';
import Infor from '@components/Infor/Infor';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

function HomePage() {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Infor/>
                <AdvanceHeading/>
                <HeadingListProduct/>
                <div style={{height: '200px'}}></div>
            </div>
        </div>
    );
}

export default HomePage;
