import classes from "./Form.module.css";
import questions from "../db/form-questions";
import Button from "./UI/Button";

function Form() {
  return (
    <form className={classes.form}>
      <div className={classes["questions-container"]}>
        {questions.map((question, i) => {
          const { title, options } = question;

          return (
            <div key={i} className={classes.question}>
              <div className={classes["question-header"]}>
                <h2>{title}</h2>
                <svg
                  className={classes.arrow}
                  width="19"
                  height="13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z"
                    fill="#0E8784"
                    fillRule="nonzero"
                  />
                </svg>
              </div>
              <div className={classes["answers-container"]}>
                {options.map((answer, i) => {
                  const { title, description } = answer;
                  return (
                    <div key={i} className={classes.answer}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes["order-summary"]}>
        <p className={classes.title}>Order Summary</p>
        <p className={classes.description}>
          “I drink my coffee as <span>Filter</span>, with a <span>Decaf</span>{" "}
          type of bean. <span>250g</span> ground ala <span>Cafetiére</span>,
          sent to me <span>Every Week</span>.”
        </p>
      </div>
      <div className={classes["button-container"]}>
        <Button text="Create my plan!" />
      </div>
    </form>
  );
}

export default Form;
