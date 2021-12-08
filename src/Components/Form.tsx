import classes from "./Form.module.css";
import questions from "../db/form-questions";
import Button from "./UI/Button";
import { FormEvent, Fragment, useState } from "react";
import OrderSummary from "./UI/OrderSummary";
import Backdrop from "./UI/Backdrop";
import ScrollToTop from "./ScrollToTop";

const questionsInitialState = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
};

const answersInitialState = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
};

const summaryInitialState = {
  1: null,
  2: null,
  3: null,
  4: null,
  5: null,
};

let isFormComplete = false;

function Form() {
  const [isQuestionOpen, setIsQuestionOpen] = useState<any>(
    questionsInitialState
  );
  const [isAnswerOpen, setIsAnswerOpen] = useState<any>(answersInitialState);
  const [summary, setSummary] = useState<any>(summaryInitialState);
  const [createPlan, setCreatePlan] = useState(false);

  const questionHandler = (questionId: number) => {
    setIsQuestionOpen({
      ...isQuestionOpen,
      [questionId]: !isQuestionOpen[questionId],
    });
  };

  isFormComplete = Object.values(summary).every((value) => value !== null);

  const createPlanHandler = (e: FormEvent) => {
    e.preventDefault();
    setCreatePlan(true);
  };

  const answerHandler = (
    questionId: number,
    answerId: number,
    title: string
  ) => {
    setIsAnswerOpen({
      ...isAnswerOpen,
      [questionId]: answerId === isAnswerOpen[questionId] ? null : answerId,
    });
    setSummary({
      ...summary,
      [questionId]: title === summary[questionId] ? null : title,
    });
  };

  return (
    <Fragment>
      <form className={classes.form}>
        <div className={classes["questions-container"]}>
          {questions.map((question) => {
            const { title, options, id: questionId } = question;
            const isOpen = isQuestionOpen[questionId];

            return (
              <div
                key={questionId}
                className={`${classes.question} ${
                  isOpen ? classes["question-open"] : ""
                }`}
              >
                <div
                  onClick={() => questionHandler(questionId)}
                  className={classes["question-header"]}
                >
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
                {isQuestionOpen[questionId] && (
                  <div className={classes["answers-container"]}>
                    {options.map((answer) => {
                      const { title, description, id } = answer;
                      return (
                        <div
                          key={id}
                          className={`${classes.answer} ${
                            isAnswerOpen[questionId] === id
                              ? classes["selected-answer"]
                              : ""
                          }`}
                          onClick={() => answerHandler(questionId, id, title)}
                        >
                          <h3>{title}</h3>
                          <p>{description}</p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={classes["order-summary"]}>
          <p className={classes.title}>Order Summary</p>
          <p className={classes.description}>
            “I drink my coffee as <span>{summary[1] || "_____"}</span>, with a{" "}
            <span>{summary[2] || "_____"}</span> type of bean.{" "}
            <span>{summary[3] || "_____"}</span> ground ala{" "}
            <span>{summary[4] || "_____"}</span>, sent to me{" "}
            <span>{summary[5] || "_____"}</span>.”
          </p>
        </div>
        <div className={classes["button-container"]}>
          <Button
            text="Create my plan!"
            disabled={!isFormComplete}
            onClick={(e: FormEvent) => createPlanHandler(e)}
          />
        </div>
      </form>
      {createPlan && (
        <>
          <ScrollToTop />
          <OrderSummary
            howDoYouDrink={summary[1]}
            typeOfCoffee={summary[2]}
            howMuch={summary[3]}
            grind={summary[4]}
            howOften={summary[5]}
          />
        </>
      )}
      {createPlan && (
        <Backdrop onClick={() => setCreatePlan(false)} needColor />
      )}
    </Fragment>
  );
}

export default Form;
