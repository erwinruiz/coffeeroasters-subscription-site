import Collection from "../Components/Collection";
import HowItWorks from "../Components/HowItWorks";
import Button from "../Components/UI/Button";
import WhyChooseUs from "../Components/WhyChooseUs";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.home}>
      <img
        className={classes.hero}
        src="./assets/home/mobile/image-hero-coffeepress.jpg"
        alt="coffeepress"
      />
      <div className={classes["text-content"]}>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Button text="Create your plan" />
      </div>
      <div className={classes.content}>
        <Collection />
        <WhyChooseUs />
        <HowItWorks />
      </div>
    </div>
  );
}

export default Home;
