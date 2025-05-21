import { TextField, TextFieldProps } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

type ControlledTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
} & TextFieldProps;

export function ControlledTextField<T extends FieldValues>({
  name,
  control,
  ...textFieldProps
}: ControlledTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          {...textFieldProps}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
}
