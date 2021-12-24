import classes from "./HowItWorks.module.css";
import steps from "../db/steps";
import Button from "./UI/Button";
import { useNavigate } from "react-router-dom";

type HowItWorksProps = {
  title: boolean;
  button: boolean;
  darkColor: boolean;
};

function HowItWorks({ title, button, darkColor }: HowItWorksProps) {
  const navigate = useNavigate();

  const createPlanHandler = () => {
    navigate("/subscribe");
  };

  return (
    <section
      className={`${classes.container} ${
        darkColor ? classes["dark-container"] : ""
      }`}
    >
      {title && <h2>How it works</h2>}
      <div className={classes.figure}>
        <div className={classes.circule}></div>
        <div className={classes.line}></div>
        <div className={classes.circule}></div>
        <div className={classes.line}></div>
        <div className={classes.circule}></div>
      </div>
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
        <div
          className={classes["button-container"]}
          onClick={createPlanHandler}
        >
          <Button text="Create your plan" />
        </div>
      )}
    </section>
  );
}

export default HowItWorks;
