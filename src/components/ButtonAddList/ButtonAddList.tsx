import { FC } from "react";
import { FiPlus } from "react-icons/fi";

import { Button } from "./ButtonAddList.styled";

const ButtonAddList: FC = () => {
  return (
    <Button>
      <FiPlus size={24} />
      Create new list
    </Button>
  );
};

export default ButtonAddList;
