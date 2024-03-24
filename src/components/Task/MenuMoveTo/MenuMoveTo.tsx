import { FC } from "react";
import { Select } from "./MenuMoveTo.styled";

const MenuMoveTo: FC = () => {
  return (
    <>
      <Select name="moveTo">
        <option value="" disabled selected hidden>
          Move to:
        </option>
        <option value="xs">To Do</option>
        <option value="s">Planet</option>
        <option value="m">In Progress</option>
        <option value="l">Closed</option>
      </Select>
    </>
  );
};

export default MenuMoveTo;
