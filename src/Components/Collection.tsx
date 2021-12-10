import classes from "./Collection.module.css";
import { products } from "../db/collection";

function Collection() {
  return (
    <section>
      <div className={classes["title-container"]}>
        <h2>our collection</h2>
        <div className={classes["title-layer"]}></div>
      </div>
      <div className={classes["products-container"]}>
        {products.map((product) => {
          const { id, image, title, description } = product;
          return (
            <div key={id} className={classes.product}>
              <img src={image} alt={title} />
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

export default Collection;
