import classes from './Home.module.css';
import SliderFeedback from "../../components/SliderFeedback/SliderFeedback";
import SliderPortfolio from "../../components/SliderPortfolio/SliderPortfolio";
import Price from '../../components/Price/Price';
import Contacts from '../../components/Contacts/Contacts';

const Home = () => {
  return (
    <div className="body">
      <section className="section main">
        <div className="container">
          <div className={classes.name}>
            <h1 className={classes.title}>ТАТЬЯНА ШИМИЧЕВА</h1>
            <h2 className={classes.subtitle}>мастер маникюра и педикюра</h2>
          </div>
          <div className={classes.bottom}>
            <a className={classes.tel} href="tel:+79524405897">+7 (952) 440-58-97</a>
            <p className={classes.text}>записаться</p>
          </div>
        </div>
      </section>

      <section className="section feedbacks">
        <div className="container">
          <SliderFeedback />
        </div>
      </section>

      <section className="section portfolio">
        <div className="container">
          <SliderPortfolio />
        </div>
      </section>

      <section className="section price">
        <div className="container">
          <Price />
        </div>
      </section>

       <section className="section contacts">
        <div className="container">
          <Contacts />
        </div>
      </section>
    </div>
  )
}

export default Home;