import React from "react";
import "./style.css";

function CardBtn(props) {
  return (
    <button
      className={`card-btn ${props["data-value"]}`}
      onClick={props.handleBtnClick}
      {...props}
    />
  );
}

export default CardBtn;
