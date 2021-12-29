import classes from "./FormProgress.module.css";
import FormSections from "../db/form-sections";

type FormProgressProps = {
  questions: any;
  answers: any;
  onSectionHandler: (idSection: number) => void;
  isCapsuleSelected: boolean;
};

function FormProgress(props: FormProgressProps) {
  const { questions, answers, onSectionHandler, isCapsuleSelected } = props;

  const sectionHandler = (idSection: number) => {
    onSectionHandler(idSection);
  };

  return (
    <div className={classes.container}>
      {FormSections.map((section, id) => {
        const isSelected = questions[id + 1];
        const isAnswerSelected = answers[id + 1] !== null ? true : false;
        const grindDisabled = isCapsuleSelected && section.number === "04";

        return (
          <div
            key={id}
            className={`${classes.section} ${
              isSelected ? classes["section-active"] : ""
            }
            ${isAnswerSelected ? classes["section-completed"] : ""}
            ${grindDisabled ? classes["section-disabled"] : ""}
            `}
            onClick={() => sectionHandler(id + 1)}
          >
            <h3>
              <span>{section.number}</span>
              {section.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

export default FormProgress;
