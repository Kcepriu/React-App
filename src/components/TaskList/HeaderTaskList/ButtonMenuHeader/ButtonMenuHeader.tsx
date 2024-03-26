import { FC } from "react";
import { Menu, MenuItem } from "@szhsin/react-menu";
import { FiMoreVertical } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useModalWindow } from "../../../../hooks/useModalWindow";
import CreateEditTaskList from "../../../CreateEditTaskList/CreateEditTaskList";
import CreateEditTask from "../../../CreateEditTask/CreateEditTask";
import { EmptyTask } from "../../../../types/task.type";

import "@szhsin/react-menu/dist/index.css";
import { Button, Item } from "./ButtonMenuHeader.styled";
import { ITaskList } from "../../../../types/taskList.type";

interface IProps {
  taskList: ITaskList;
}
const ButtonMenuHeader: FC<IProps> = ({ taskList }) => {
  const {
    MobileWindowComponent: MobileWindowComponentCreate,
    setShowModal: setShowModalCreate,
  } = useModalWindow({
    contentComponent: <CreateEditTask isEdit={true} task={{ ...EmptyTask }} />,
  });

  const {
    MobileWindowComponent: MobileWindowComponentEdit,
    setShowModal: setShowModalEdit,
  } = useModalWindow({
    contentComponent: <CreateEditTaskList isEdit={false} taskList={taskList} />,
  });

  const handleDeleteTaskList = () => {
    console.log("Delete task list");
  };

  const handleEditTaskList = () => {
    setShowModalEdit(true);
    console.log("Edit task list");
  };

  const handleCreateTask = () => {
    setShowModalCreate(true);
    console.log("Create task list");
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
        <MenuItem onClick={handleEditTaskList}>
          <Item>
            <FiEdit size={24} />
            Edit
          </Item>
        </MenuItem>
        <MenuItem onClick={handleCreateTask}>
          <Item>
            <FiPlus size={24} />
            Add new card
          </Item>
        </MenuItem>
        <MenuItem onClick={handleDeleteTaskList}>
          <Item data-is-delete={true}>
            <RiDeleteBin6Line size={24} />
            Delete
          </Item>
        </MenuItem>
      </Menu>
      {MobileWindowComponentCreate}
      {MobileWindowComponentEdit}
    </>
  );
};

export default ButtonMenuHeader;
