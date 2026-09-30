import classes from './Contacts.module.css'

import image_map from '../../assets/images/contacts/map.jpg';
import vk_map from '../../assets/images/contacts/vk.png';
import telegram_map from '../../assets/images/contacts/telegram.png';

const Contacts = () => {
  return (
    <div className={classes.contacts}>
      <img className={classes.map} src={image_map} alt="карта" />
      <p className={classes.address}>Заволжье, проспект Дзержинского, 15, 2</p>
      <a className={classes.tel} href='tel:+79524405897'>+7 (952) 440-58-97</a>
      <div className={classes.icons}>
        <a className={classes.icon__link} href="#">
          <img className={classes.icon__img} src={telegram_map} alt="telegram" />
        </a>
        <a className={classes.icon__link} href="#">
          <img className={classes.icon__img} src={vk_map} alt="telegram" />
        </a>
      </div>
    </div>
  )
}

export default Contacts;