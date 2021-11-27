import Form from "../Components/Form";
import HowItWorks from "../Components/HowItWorks";
import classes from "./Subscribe.module.css";

function Subscribe() {
  return (
    <section className={classes.container}>
      <div className={classes["first-subcontainer"]}>
        <div className={classes["hero-container"]}>
          <img
            className={classes.hero}
            src="./assets/plan/mobile/image-hero-blackcup.jpg"
            alt="blackcup"
          />
        </div>
        <div className={classes["text-content"]}>
          <h2>Create a plan</h2>
          <p>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </p>
        </div>
      </div>
      <HowItWorks title={false} button={false} darkColor={true} />
      <Form />
    </section>
  );
}

export default Subscribe;
