import { FormEvent } from "react";
import classes from "./Button.module.css";

type ButtonProps = {
  text: string;
  disabled?: boolean;
  onClick?: (e: FormEvent) => void;
};

function Button({ text, disabled, onClick }: ButtonProps) {
  return (
    <button
      className={`${classes.button} ${disabled ? classes.disabled : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
