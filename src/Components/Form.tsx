import classes from "./Form.module.css";
import questions from "../db/form-questions";
import Button from "./UI/Button";
import { FormEvent, useState } from "react";
import OrderSummary from "./UI/OrderSummary";
import Backdrop from "./UI/Backdrop";
import ScrollToTop from "./ScrollToTop";
import FormProgress from "./FormProgress";

const questionsInitialState = {
  "1": true,
  "2": false,
  "3": false,
  "4": false,
  "5": false,
};

const answersInitialState = {
  "1": null,
  "2": null,
  "3": null,
  "4": null,
  "5": null,
};

const summaryInitialState = {
  "1": null,
  "2": null,
  "3": null,
  "4": null,
  "5": null,
};

let isFormComplete = false;
let isCapsuleSelected = false;

function Form() {
  const [isQuestionOpen, setIsQuestionOpen] = useState<any>(
    questionsInitialState
  );
  const [isAnswerOpen, setIsAnswerOpen] = useState<any>(answersInitialState);
  const [summary, setSummary] = useState<any>(summaryInitialState);
  const [createPlan, setCreatePlan] = useState(false);
  let selectedPrice: number = 0;

  if (isCapsuleSelected) {
    isFormComplete = Object.values(summary).every((value, i) => {
      if (i + 1 === 4) {
        return true;
      }
      return value !== null;
    });
  } else {
    isFormComplete = Object.values(summary).every((value) => value !== null);
  }

  if (summary[3] && isFormComplete) {
    const amount = summary[3].substring(0, summary[3].length - 1);
    let price: number;

    switch (summary[5]) {
      case "Every week":
        if (amount === "250") {
          price = 7.2;
        } else if (amount === "500") {
          price = 13.0;
        } else {
          price = 22.0;
        }
        selectedPrice = price * 4;
        break;
      case "Every 2 weeks":
        if (amount === "250") {
          price = 9.6;
        } else if (amount === "500") {
          price = 17.5;
        } else {
          price = 32.0;
        }
        selectedPrice = price * 2;
        break;
      case "Every month":
        if (amount === "250") {
          price = 12.0;
        } else if (amount === "500") {
          price = 22.0;
        } else {
          price = 42.0;
        }

        selectedPrice = price;
        break;
    }
  }

  if (summary[1] === "Capsule") {
    isCapsuleSelected = true;
  } else {
    isCapsuleSelected = false;
  }

  const questionHandler = (questionId: number) => {
    if (questionId === 4 && isCapsuleSelected) {
      // If "Capsule" is selected for the first option
      // The "Want us to grind them?" section should be disabled and not able to be opened
      return;
    }
    setIsQuestionOpen({
      ...isQuestionOpen,
      [questionId.toString()]: !isQuestionOpen[questionId],
    });
  };

  const createPlanHandler = (e: FormEvent) => {
    e.preventDefault();
    setCreatePlan(true);
  };

  const answerHandler = (
    questionId: number,
    answerId: number,
    title: string
  ) => {
    if (title === "Capsule") {
      setIsQuestionOpen({
        ...isQuestionOpen,
        "4": false,
      });
    }
    setIsAnswerOpen({
      ...isAnswerOpen,
      [questionId.toString()]:
        answerId === isAnswerOpen[questionId.toString()] ? null : answerId,
    });
    setSummary({
      ...summary,
      [questionId.toString()]:
        title === summary[questionId.toString()] ? null : title,
    });
  };

  return (
    <div className={classes["form-container"]}>
      <div className={classes["form-progress-container"]}>
        <FormProgress
          questions={isQuestionOpen}
          answers={isAnswerOpen}
          onSectionHandler={(idSection: number) => questionHandler(idSection)}
          isCapsuleSelected={isCapsuleSelected}
        />
      </div>
      <div>
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
                    className={`${classes["question-header"]} ${
                      isCapsuleSelected
                        ? questionId === 4 && classes["question-disabled"]
                        : ""
                    }`}
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
                        let price: number | null = null;

                        if (summary[3] && questionId === 5) {
                          let amount = summary[3].substring(
                            0,
                            summary[3].length - 1
                          );

                          switch (id) {
                            case 1:
                              if (amount === "250") {
                                price = 7.2;
                              } else if (amount === "500") {
                                price = 13.0;
                              } else {
                                price = 22.0;
                              }
                              break;

                            case 2:
                              if (amount === "250") {
                                price = 9.6;
                              } else if (amount === "500") {
                                price = 17.5;
                              } else {
                                price = 32.0;
                              }
                              break;

                            case 3:
                              if (amount === "250") {
                                price = 12.0;
                              } else if (amount === "500") {
                                price = 22.0;
                              } else {
                                price = 42.0;
                              }
                              break;

                            default:
                          }
                        }

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
                            {!price && (
                              <p>Select the amount of grams to see the price</p>
                            )}
                            {price && (
                              <p>
                                ${price.toFixed(2)} {description}
                              </p>
                            )}
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
              “I drink my coffee {isCapsuleSelected ? "using" : "as"}{" "}
              <span>{summary["1"] || "_____"}</span>, with a{" "}
              <span>{summary["2"] || "_____"}</span> type of bean.{" "}
              <span>{summary["3"] || "_____"}</span>{" "}
              {isCapsuleSelected ? "" : "ground ala"}{" "}
              {!isCapsuleSelected && <span>{summary["4"] || "_____"}</span>},
              sent to me <span>{summary["5"] || "_____"}</span>.”
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
              howDoYouDrink={summary["1"]}
              typeOfCoffee={summary["2"]}
              howMuch={summary["3"]}
              grind={summary["4"]}
              howOften={summary["5"]}
              isCapsuleSelected={isCapsuleSelected}
              price={selectedPrice}
            />
          </>
        )}
        {createPlan && (
          <Backdrop onClick={() => setCreatePlan(false)} needColor />
        )}
      </div>
    </div>
  );
}

export default Form;
