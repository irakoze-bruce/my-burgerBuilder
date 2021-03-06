/** @format */

import React from "react";
import style from "./Input.module.css";

function Input(props) {
  let inputElement = null;
  let inputStyle = [style.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputStyle.push(style.Invalid);
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputStyle.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <input
          className={inputStyle.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <select
          className={inputStyle.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={inputStyle.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={style.Input}>
      <label className={style.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
}

export default Input;
