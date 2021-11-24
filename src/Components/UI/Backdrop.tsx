import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

type BackdropProps = {
  onClick: () => void;
};

function Backdrop({ onClick }: BackdropProps) {
  const content = <div onClick={onClick} className={classes.backdrop}></div>;
  return (
    <>
      {ReactDOM.createPortal(
        content,
        document.getElementById("backdrop-root")!
      )}
    </>
  );
}

export default Backdrop;
