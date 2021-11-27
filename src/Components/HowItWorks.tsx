import classes from "./HowItWorks.module.css";
import steps from "../db/steps";
import Button from "./UI/Button";

type HowItWorksProps = {
  title: boolean;
  button: boolean;
  darkColor: boolean;
};

function HowItWorks({ title, button, darkColor }: HowItWorksProps) {
  return (
    <section className={classes.container}>
      {title && <h2>How it works</h2>}
      <div
        className={`${classes["steps-container"]} ${
          darkColor ? classes["dark-color"] : ""
        }`}
      >
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
      {button && (
        <div className={classes["button-container"]}>
          <Button text="Create your plan" />
        </div>
      )}
    </section>
  );
}

export default HowItWorks;
