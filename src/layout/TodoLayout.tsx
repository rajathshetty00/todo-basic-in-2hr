import React, { useState } from "react";
import CheckboxComponent from "../components/checkboxComponent/CheckboxComponent";
import InputComponent from "../components/inputComponent/InputComponent";
import "../styles.css";

const TodoLayout = () => {
  const [inputValue, setInputValue] = useState([]);

  const onDeleteHandler = (index) => {
    const copyOfInputValue = [...inputValue];
    copyOfInputValue.splice(index, 1);
    setInputValue(copyOfInputValue);
  };

  return (
    <div className="todo-layout-wrapper">
      <h1>Todos</h1>
      <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
      {inputValue?.map((item, index) => (
        <CheckboxComponent
          onDelete={(index) => onDeleteHandler(index)}
          item={item}
        />
      ))}
    </div>
  );
};

export default TodoLayout;
