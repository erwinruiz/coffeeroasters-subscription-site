import classes from "./Button.module.css";
type ButtonProps = {
    text: string;
}

function Button({ text }: ButtonProps) {
  return <button className={classes.button}>{text}</button>;
}

export default Button;
