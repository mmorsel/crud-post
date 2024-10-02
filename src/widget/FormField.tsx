import { TextField } from "@mui/material";
import { useController, useFormContext } from "react-hook-form";

interface IFormField {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
}

const FormField: React.FC<IFormField> = ({ name, label, required, type }) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required },
  });

  const isTextArea = type === "textarea";

  return (
    <TextField
      {...field}
      error={!!error}
      label={label}
      fullWidth
      multiline={isTextArea}
      rows={10}
      helperText={error ? "Нужно заполнить поле" : " "}
    />
  );
};

export default FormField;
