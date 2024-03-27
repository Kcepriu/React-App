import { FC } from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import { FiMoreVertical } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useModalWindow } from "../../hooks/useModalWindow";
import CreateEditTask from "../CreateEditTask/CreateEditTask";
import { Button, Item } from "./ButtonMenuTask.styled";

import "@szhsin/react-menu/dist/index.css";
import { ITask } from "../../types/task.type";

interface IProps {
  task: ITask;
}
const ButtonMenuTask: FC<IProps> = ({ task }) => {
  const {
    MobileWindowComponent: MobileWindowComponentEdit,
    setShowModal: setShowModalEdit,
  } = useModalWindow({
    contentComponent: (
      <CreateEditTask
        isEdit={false}
        task={task}
        handleCloseModal={() => setShowModalEdit(false)}
      />
    ),
  });

  const handleDeleteTaskList = () => {
    console.log("Delete task list");
  };

  const handleEditTask = () => {
    setShowModalEdit(true);
  };

  return (
    <>
      <Menu
        menuButton={
          <Button>
            <FiMoreVertical size={24} />
          </Button>
        }
      >
        <MenuItem onClick={handleEditTask}>
          <Item>
            <FiEdit size={24} />
            Edit
          </Item>
        </MenuItem>
        <MenuItem onClick={handleDeleteTaskList}>
          <Item data-is-delete={true}>
            <RiDeleteBin6Line size={24} />
            Delete
          </Item>
        </MenuItem>
      </Menu>
      {MobileWindowComponentEdit}
    </>
  );
};

export default ButtonMenuTask;
