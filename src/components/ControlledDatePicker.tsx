
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { FormLabel, FormControl } from "@chakra-ui/react";

import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { ChangeEvent } from 'react';

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

  const onDateChange = (date: Date) => {
    const event = {
      target: {
        name: field.name,
        value: date
      }
    } as unknown as React.ChangeEvent<HTMLInputElement>;
    field.onChange(event);
  }

  return (
    <FormControl isRequired>
      <FormLabel>{props.label}</FormLabel>
      <SingleDatepicker
        name={props.name}
        onDateChange={onDateChange}
        date={field.value}
      />
    </FormControl>
  )
}
