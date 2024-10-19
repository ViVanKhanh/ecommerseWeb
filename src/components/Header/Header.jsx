import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/Constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.png';
import reload from '@icons/svgs/reload.svg';
import heart from '@icons/svgs/heart.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container
    } = styles;

    const {isOpen, setIsOpen} = useContext(SideBarContext)


    
    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => {
                            return (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            );
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return (
                                <Menu
                                    key={index}
                                    content={item.content}
                                    href={item.href}
                                    
                                />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <img
                        src={Logo}
                        alt='LOGO'
                        style={{ width: '153px', height: '53px' }}
                    />
                </div>
                <div>
                    <div className={containerBox}>
                        <div className={containerMenu}>
                            {dataMenu
                                .slice(3, dataMenu.length)
                                .map((item, index) => {
                                    return (
                                        <Menu
                                            key={index}
                                            content={item.content}
                                            href={item.href}
                                            setIsOpen={setIsOpen}
                                        ></Menu>
                                    );
                                })}
                        </div>
                        <div className={containerBoxIcon}>
                            <img src={reload} alt='' />
                            <img src={heart} alt='' />
                            <img src={cartIcon} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
