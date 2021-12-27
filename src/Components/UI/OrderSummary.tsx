import classes from "./OrderSummary.module.css";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";

type OrderSummaryProps = {
  howDoYouDrink: string;
  typeOfCoffee: string;
  howMuch: string;
  grind: string;
  howOften: string;
};

function OrderSummary(props: OrderSummaryProps) {
  const { howDoYouDrink, typeOfCoffee, howMuch, grind, howOften } = props;

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/");
  };

  const content = (
    <div className={classes.container}>
      <div className={classes["title-container"]}>
        <h2>Order Summary</h2>
      </div>
      <div className={classes["text-container"]}>
        <p className={classes["text-order-summary"]}>
          “I drink my coffee as <span>{howDoYouDrink}</span>, with a{" "}
          <span>{typeOfCoffee}</span> type of bean. <span>{howMuch}</span>{" "}
          ground ala <span>{grind}</span>, sent to me <span>{howOften}</span>.”
        </p>
        <p className={classes["text-verify-order"]}>
          Is this correct? You can proceed to checkout or go back to plan
          selection if something is off. Subscription discount codes can also be
          redeemed at the checkout.
        </p>
      </div>
      <div className={classes["button-container"]}>
        <h3>$14.00/ mo</h3>
        <button
          onClick={checkoutHandler}
          className={`${classes.button} ${classes["button-mobile"]}`}
        >
          Checkout - $14.00/ mo
        </button>
        <button
          onClick={checkoutHandler}
          className={`${classes.button} ${classes["button-tablet-desktop"]}`}
        >
          Checkout
        </button>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("overlay-root")!
  );
}

export default OrderSummary;
