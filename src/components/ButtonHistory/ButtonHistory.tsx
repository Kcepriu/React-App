import { FC } from "react";
import { FiRotateCcw } from "react-icons/fi";
import { useMobileMenu } from "../../hooks/useMobileMenu";
import { Button } from "./ButtonHistory.styled";

const ButtonHistory: FC = () => {
  const contentComponent = (
    <>
      <p>Test</p>
    </>
  );

  const { ModalMenuComponent, setShowMobileMenu } = useMobileMenu({
    contentComponent,
    title: "History",
  });

  return (
    <>
      <Button onClick={() => setShowMobileMenu(true)}>
        <FiRotateCcw size={24} />
        History
      </Button>
      {ModalMenuComponent}
    </>
  );
};

export default ButtonHistory;
