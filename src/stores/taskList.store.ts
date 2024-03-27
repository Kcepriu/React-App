import { create } from "zustand";
import httpServices from "../service/http";
import {
  ITaskListWithTask,
  ITaskListWithCount,
  ITaskList,
} from "../types/taskList.type";

interface IStateTaskList {
  tasksList: ITaskListWithTask[];
  onlyTasksList: ITaskList[];
  isError: boolean;
  isLoad: boolean;
  messageError: string;
  updateOperationOk: boolean;

  fetchTasksList: () => Promise<void>;
  updateTaskList: (taskList: ITaskListWithCount) => Promise<void>;
  createTaskList: (taskList: ITaskListWithCount) => Promise<void>;
  deleteTaskList: (taskList: ITaskListWithCount) => Promise<void>;
  setIsError: (isError: boolean) => void;
  setUpdateOperationOk: (updateOperationOk: boolean) => void;
  setIsLoad: (isLoad: boolean) => void;
}

const createOnlyTaskList = (taskList: ITaskListWithTask[]): ITaskList[] => {
  const onlyTasksList = taskList.map((taskList) => {
    const { tasks, ...newTaskList } = taskList;
    return newTaskList;
  });

  return onlyTasksList;
};

export const useTaskList = create<IStateTaskList>()((set, get) => ({
  tasksList: [],
  onlyTasksList: [],
  isLoad: false,
  isError: false,
  messageError: "",
  updateOperationOk: false,

  setIsError: (isError: boolean) => {
    return set((state) => ({
      isError,
    }));
  },

  setUpdateOperationOk: (updateOperationOk: boolean) => {
    return set((state) => ({
      updateOperationOk,
    }));
  },

  setIsLoad: (isLoad: boolean) => {
    return set((state) => ({
      isLoad,
    }));
  },

  fetchTasksList: async () => {
    set({ isLoad: true, isError: false, messageError: "" });

    try {
      const { code, data, message } = await httpServices.fetchAllTaskList();

      set({
        tasksList: data,
        onlyTasksList: createOnlyTaskList(data),
        isError: code !== 200,
        messageError: message,
      });
    } catch (error) {
      set({
        isError: true,
        messageError: "Error fetch tasks",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  createTaskList: async (taskList: ITaskListWithCount) => {
    set({
      isLoad: true,
      isError: false,
      updateOperationOk: false,
      messageError: "",
    });

    try {
      const { count, ...createTaskList } = taskList;
      const { code, data, message } = await httpServices.createTaskList(
        createTaskList
      );

      if (!!data && code === 201) {
        const newTasksList = [...get().tasksList, { ...data, tasks: [] }];

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 201,
          messageError: message,
          updateOperationOk: code === 201,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error create Task List",
        });
      }
    } catch (error) {
      console.error("Error create task list:", error);
      set({
        isError: true,
        messageError: "Error create Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  deleteTaskList: async (taskList: ITaskListWithCount) => {
    set({
      isLoad: true,
      isError: false,
      messageError: "",
    });

    try {
      const { id } = taskList;
      const { code, data, message } = await httpServices.deleteTaskList(id);

      if (!!data && code === 200) {
        const newTasksList = [
          ...get().tasksList.filter((taskList) => taskList.id !== id),
        ];

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 200,
          messageError: message,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error deleted Task List",
        });
      }
    } catch (error) {
      console.error("Error deleted task list:", error);
      set({
        isError: true,
        messageError: "Error deleted Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },

  updateTaskList: async (taskList: ITaskListWithCount) => {
    set({
      isLoad: true,
      isError: false,
      updateOperationOk: false,
      messageError: "",
    });

    try {
      const { count, ...updateTaskList } = taskList;
      const { code, data, message } = await httpServices.updateTaskList(
        updateTaskList
      );

      if (!!data && code === 200) {
        const newTasksList = [...get().tasksList];

        const { id } = data;

        const indexUpdateTaskList = newTasksList.findIndex(
          (taskList) => taskList.id === id
        );

        const { tasks } = newTasksList[indexUpdateTaskList];

        newTasksList[indexUpdateTaskList] = { ...data, tasks };

        set({
          tasksList: newTasksList,
          onlyTasksList: createOnlyTaskList(newTasksList),
          isError: code !== 200,
          messageError: message,
          updateOperationOk: code === 200,
        });
      } else {
        set({
          isError: true,
          messageError: message || "Error update Task List",
        });
      }
    } catch (error) {
      console.error("Error update task list:", error);
      set({
        isError: true,
        messageError: "Error update Task List",
      });
    } finally {
      set({ isLoad: false });
    }
  },
}));
