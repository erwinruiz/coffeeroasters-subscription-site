import Collection from "../Components/Collection";
import HowItWorks from "../Components/HowItWorks";
import Button from "../Components/UI/Button";
import WhyChooseUs from "../Components/WhyChooseUs";
import classes from "./Home.module.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const createPlanHandler = () => {
    navigate("/subscribe");
  };

  return (
    <section className={classes.home}>
      <div className={classes["hero-container"]}>
        <img
          className={`${classes.hero} ${classes["hero-mobile"]}`}
          src="./assets/home/mobile/image-hero-coffeepress.jpg"
          alt="coffeepress"
        />
        <img
          className={`${classes.hero} ${classes["hero-tablet"]}`}
          src="./assets/home/tablet/image-hero-coffeepress.jpg"
          alt="coffeepress"
        />
        <img
          className={`${classes.hero} ${classes["hero-desktop"]}`}
          src="./assets/home/desktop/image-hero-coffeepress.jpg"
          alt="coffeepress"
        />
      </div>
      <div className={classes["text-content"]}>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <div
          className={classes["button-container"]}
          onClick={createPlanHandler}
        >
          <Button text="Create your plan" />
        </div>
      </div>
      <div className={classes.content}>
        <Collection />
        <WhyChooseUs />
        <HowItWorks title button darkColor={false} />
      </div>
    </section>
  );
}

export default Home;
