import classes from "./OurHeadquarters.module.css";
import headquarters from "../db/headquarters";

function OurHeadquarters() {
  return (
    <section className={classes.container}>
      <h2>Our headquarters</h2>
      <div className={classes["headquarters-container"]}>
        {headquarters.map((headquarter) => {
          return (
            <div key={headquarter.country} className={classes.headquarter}>
              <img src={headquarter.image} alt="country" />
              <h3>{headquarter.country}</h3>
              <p>{headquarter.location.lineOne}</p>
              <p>{headquarter.location.lineTwo}</p>
              <p>{headquarter.location.lineThree}</p>
              <p>{headquarter.telephone}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurHeadquarters;
