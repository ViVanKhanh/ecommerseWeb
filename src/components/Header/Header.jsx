import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/Constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '../../assets/icon/images/Logo-retina.png';
import reload from '../../assets/icon/svgs/reload.svg'
import heart from '../../assets/icon/svgs/heart.svg'
import cartIcon from '../../assets/icon/svgs/cartIcon.svg'






function MyHeader() {
  const { containerBoxIcon, containerMenu, containerHeader, containerBox } =
    styles;
  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon.map((item, index) => {
            return <BoxIcon type={item.type} href={item.href} />;
          })}
        </div>
        <div className={containerMenu}>
          {dataMenu.slice(0, 3).map((item, index) => {
            return <Menu content={item.content} href={item.href}></Menu>;
          })}
        </div>
      </div>
      <div>
        <img src={Logo} alt='LOGO' style={{ width: '153px', height: '53px' }} />
      </div>
      <div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return <Menu content={item.content} href={item.href}></Menu>;
            })}
          </div>
          <div className={containerBoxIcon}>
            <img src={reload} alt="" />
            <img src={heart} alt="" />
            <img src={cartIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
