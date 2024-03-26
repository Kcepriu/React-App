import { FC, useEffect } from "react";
import { FormikHelpers, useFormik } from "formik";
import { TextField } from "@mui/material";
import { EmptyTaskList, ITaskList } from "../../../types/taskList.type";
import { validationSchema } from "./validationSchema";
import ButtonEditSave from "../../ButtonEditSave/ButtonEditSave";
import { WrapTitle } from "./EditTaskList.styled";

interface IProps {
  taskList: ITaskList;
  handleSave: () => void;
}

const EditTaskList: FC<IProps> = ({ taskList, handleSave }) => {
  const handlerSubmitForm = async (
    values: ITaskList,
    { setSubmitting }: FormikHelpers<ITaskList>
  ) => {
    // console.log("submit", values);
    // task = { ...values };
    // handleSaveTask();
    // await saveAboutUser(convertToAboutUser(values));
    // if (addHandlerSubmitForm) addHandlerSubmitForm(values);
    handleSave();
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
    initialValues: EmptyTaskList,
    validationSchema: validationSchema,
    onSubmit: handlerSubmitForm,
  });

  useEffect(() => {
    const { id, name, count } = taskList;
    try {
      setFieldValue("id", id);
      setFieldValue("name", name);
      setFieldValue("count", count);
    } catch {}
  }, [taskList, setFieldValue]);

  return (
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
          title="Save Task list"
        />
      </WrapTitle>
    </form>
  );
};

export default EditTaskList;
