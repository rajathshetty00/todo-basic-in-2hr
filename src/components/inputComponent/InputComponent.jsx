import { useRef } from "react";
import "../../styles.css";

const InputComponent = ({ inputValue, setInputValue }) => {
  const inputRef = useRef();

  return (
    <div className="input-component-wrapper">
      <input
        ref={inputRef}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setInputValue([...inputValue, e.target.value]);
            inputRef.current.value = "";
          }
        }}
        placeholder="What needs to be done?"
        type="text"
      />
    </div>
  );
};

export default InputComponent;
