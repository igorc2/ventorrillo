
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { FormLabel, FormControl } from "@chakra-ui/react";

import { SingleDatepicker } from "chakra-dayzed-datepicker";

// interface IDatePickerWithValidation
//   extends UseControllerProps<StudentFormData> {
//   label: string
// }

interface IControlledDatePickerProps<
  T extends FieldValues
> extends UseControllerProps<T> {
  label: string
}

export function ControlledDatePicker<T extends FieldValues>(props: IControlledDatePickerProps<T>) {
  const { field } = useController(props)

  return (
    <FormControl isRequired>
      <FormLabel>{props.label}</FormLabel>
      <SingleDatepicker
        name={props.name}
        onDateChange={field.onChange}
        date={field.value}
      />
    </FormControl>
  )
}
