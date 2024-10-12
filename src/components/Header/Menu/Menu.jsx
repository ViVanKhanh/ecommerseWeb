import styles from '../styles.module.scss'

function menu({ content, href }) {
  const {menu} = styles
  return <div className={menu}>{content}</div>;
}

export default menu;
