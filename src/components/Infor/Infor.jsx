import { dataInfor } from '@components/Infor/Contants';
import InforCard from '@components/Infor/InforCard/InforCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
function Infor() {
    const {container} = styles
    return (
        <div >
            <MainLayout>
                <div className={container}>
                    {
                        dataInfor.map((item, index) => {
                            return <InforCard key={index}  title={item.title} description={item.description} src={item.src}/>
                        })
                    }
                </div>
            </MainLayout>
        </div>
    );
}

export default Infor;
