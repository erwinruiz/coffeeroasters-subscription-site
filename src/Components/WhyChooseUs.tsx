import classes from "./WhyChooseUs.module.css";
import features from "../db/features";

function WhyChooseUs() {
  return (
    <section className={classes.container}>
      <div className={classes.mask}>
        <img
          className={classes["bg-mobile"]}
          src="./assets/about/mobile/bg-quality.png"
          alt=""
        />
        <img
          className={classes["bg-tablet"]}
          src="./assets/about/tablet/bg-quality.png"
          alt=""
        />
      </div>
      <div className={classes["text-content"]}>
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className={classes["features-container"]}>
        {features.map((feature, id) => {
          const { image, title, description } = feature;
          return (
            <div key={id} className={classes.feature}>
              {image}
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChooseUs;
