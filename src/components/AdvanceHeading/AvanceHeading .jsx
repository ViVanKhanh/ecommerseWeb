import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
function AdvanceHeading() {
    const { container, content, headLine, containerMiddleBox, title, des } = styles;
    return (
        <MainLayout>
            <div className={container}>
                <div className={content}>
                    <div className={headLine}></div>
                    <div className={containerMiddleBox}>
                        <p className={des}>don't miss super offers</p>
                        <h2 className={title}>Our best products</h2>
                    </div>
                    <div className={headLine}></div>
                </div>
            </div>
        </MainLayout>
    );
}

export default AdvanceHeading;
