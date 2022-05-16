import { useState } from "react";
import "../../styles.css";

const CheckboxComponent = ({ item, onDelete }) => {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);

  const onMouseHoverHandler = () => {
    setHover(true);
  };

  return (
    <div
      onMouseOver={onMouseHoverHandler}
      onMouseLeave={() => setHover(false)}
      className="checkbox-component-wrapper"
    >
      <div>
        <input
          onChange={() => setChecked(!checked)}
          checked={checked}
          type="checkbox"
        />
        <span
          style={{
            textDecoration: checked ? "line-through" : ""
          }}
        >
          {item}
        </span>
      </div>
      {hover && <button onClick={onDelete}>X</button>}
    </div>
  );
};

export default CheckboxComponent;
