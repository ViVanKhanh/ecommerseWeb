import styles from '../../Header/styles.module.scss';
import fbIcon from '../../../assets/icon/svgs/fbIcon.svg';
import insta from '../../../assets/icon/svgs/insta.svg';
import youtube from '../../../assets/icon/svgs/youtube.svg';


function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return insta;
      case 'ytb':
        return youtube;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
