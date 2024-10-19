import styles from '../styles.module.scss'

function menu({ content, href, setIsOpen }) {
  const {menu} = styles
  return <div className={menu} onClick={() => setIsOpen(true)}>{content}</div>;
}

export default menu;
