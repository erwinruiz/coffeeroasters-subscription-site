import classes from "./Button.module.css";

type ButtonProps = {
  text: string;
  disabled?: boolean;
};

function Button({ text, disabled }: ButtonProps) {
  return (
    <button className={`${classes.button} ${disabled ? classes.disabled : ""}`}>
      {text}
    </button>
  );
}

export default Button;
