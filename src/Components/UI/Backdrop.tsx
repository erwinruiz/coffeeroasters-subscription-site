import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";

type BackdropProps = {
  onClick: () => void;
  needColor?: boolean;
};

function Backdrop({ onClick, needColor }: BackdropProps) {
  const content = (
    <div
      onClick={onClick}
      className={`${classes.backdrop} ${needColor ? classes["bg-color"] : ""}`}
    ></div>
  );
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
