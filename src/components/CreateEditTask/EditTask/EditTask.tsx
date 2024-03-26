import { FC, useEffect } from "react";
import { FormikHelpers, useFormik } from "formik";
import { TextField, Select, MenuItem } from "@mui/material";
import { ITask } from "../../../types/task.type";

import { LiaCrosshairsSolid } from "react-icons/lia";
import { LiaShirtsinbulk } from "react-icons/lia";
import { LuCalendar } from "react-icons/lu";
import { validationSchema } from "./validationSchema";
import { EmptyTask } from "../../../types/task.type";
import { TypePriority } from "../../../types/task.type";
import DatePicker from "react-datepicker";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";
import {
  LineInformation,
  TitleLine,
  WrapInformation,
  TitleDescription,
  WrapDescription,
  WrapTitle,
} from "./EditTask.styled";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  task: ITask;
  handleSaveTask: () => void;
}
const EditTask: FC<IProps> = ({ task, handleSaveTask }) => {
  const { priority } = task;

  const handlerSubmitForm = async (
    values: ITask,
    { setSubmitting }: FormikHelpers<ITask>
  ) => {
    // console.log("submit", values);
    // task = { ...values };
    // handleSaveTask();
    // await saveAboutUser(convertToAboutUser(values));
    // if (addHandlerSubmitForm) addHandlerSubmitForm(values);
    handleSaveTask();
  };

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    setFieldValue,
    handleSubmit,
  } = useFormik({
    initialValues: EmptyTask,
    validationSchema: validationSchema,
    onSubmit: handlerSubmitForm,
  });

  useEffect(() => {
    const { id, name, description, due_date, priority } = task;
    try {
      setFieldValue("id", id);
      setFieldValue("name", name);
      setFieldValue("description", description);
      setFieldValue("due_date", due_date);
      setFieldValue("priority", priority);
    } catch {}
  }, [task, setFieldValue]);

  const handleChangeDate = (date: Date) => {
    !!date && setFieldValue("due_date", date.getTime());
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <WrapTitle>
          <TextField
            id="name"
            name="name"
            label="Task name *"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <ButtonEditSave
            handleButton={() => handleSubmit()}
            title="Save Task"
          />
        </WrapTitle>

        <WrapInformation>
          <LineInformation>
            <TitleLine>
              <LiaCrosshairsSolid size={24} />
              Status
            </TitleLine>
            <p>{priority} ERROR</p>
          </LineInformation>

          <LineInformation>
            <TitleLine>
              <LuCalendar size={24} />
              Due date
            </TitleLine>
            <DatePicker
              selected={new Date(values.due_date)}
              onChange={handleChangeDate}
              dateFormat="EEE, dd LLL"
            />
          </LineInformation>

          <LineInformation>
            <TitleLine>
              <LiaShirtsinbulk size={24} />
              Priority
            </TitleLine>
            <Select
              id="priority"
              labelId="priority"
              name="priority"
              value={values.priority}
              label="Priority"
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.priority && Boolean(errors.priority)}
              // helperText={touched.priority && errors.priority}
              size="small"
            >
              {Object.values(TypePriority).map((priority) => (
                <MenuItem value={priority} key={priority}>
                  {priority}
                </MenuItem>
              ))}
            </Select>
          </LineInformation>
        </WrapInformation>

        <TitleDescription>Description</TitleDescription>
        <WrapDescription>
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description *"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            multiline
            rows={6}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
            size="small"
          />
        </WrapDescription>
      </form>
    </>
  );
};

export default EditTask;
