import classes from "./HowItWorks.module.css";
import steps from "../db/steps";
import Button from "./UI/Button";

function HowItWorks() {
  return (
    <section className={classes.container}>
      <h2>How it works</h2>
      <div className={classes["steps-container"]}>
        {steps.map((step, i) => {
          const { number, title, description } = step;

          return (
            <div key={i} className={classes.step}>
              <p className={classes.number}>{number}</p>
              <h3 className={classes.title}>{title}</h3>
              <p className={classes.description}>{description}</p>
            </div>
          );
        })}
      </div>
      <div className={classes["button-container"]}>
        <Button text="Create your plan" />
      </div>
    </section>
  );
}

export default HowItWorks;
