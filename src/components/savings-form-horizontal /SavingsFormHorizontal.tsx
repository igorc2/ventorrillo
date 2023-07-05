'use client'

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Select } from "chakra-react-select";
import React from "react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";

const sources = [
  {
    label: "Bank account",
    value: "bank",
    colorScheme: "red", // The option color scheme overrides the global
  },
  {
    label: "Credit Card",
    value: "credit",
  },
]

const categories = [
  {
    label: "Lunch",
    value: "lunch",
    colorScheme: "red",
  },
  {
    label: "Pharmacy",
    value: "pharmacy",
  },
  {
    label: "Supermarket",
    value: "supermarket",
  },
]

export interface IInvestment {
  initialInvestmentValue: string
  createdAt: Date
  institution: { label: string; value: string }
  description: string
  category: { label: string; value: string }
  currentValue?: string
  dividends?: string
}


interface SavingFormsHorizontalProps {
  onSubmitInvestment: (data: IInvestment) => void
}

export function SavingsFormHorizontal (props : SavingFormsHorizontalProps) : JSX.Element {

  const { register, control, handleSubmit } = useForm<IInvestment>();
  const onSubmit : SubmitHandler<IInvestment> = props.onSubmitInvestment
  
  return ( 

    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        spacing={{ base: 4, md: 8, lg: 20 }}
        direction={{ base: "column", md: "row" }}
        mb={8}
      >
        <Box
          width="100%"
          bg={useColorModeValue("white", "gray.700")}
          borderRadius="lg"
          p={8}
          color={useColorModeValue("gray.700", "whiteAlpha.900")}
          shadow="base"
        >
          <Stack
            spacing={6}
          >
            <Stack spacing={5} direction={{ base: "column", md: "row" }}>
              <FormControl isRequired>
                <FormLabel>Value</FormLabel>
                <Controller
                  name="initialInvestmentValue"
                  control={control}
                  render={({ field }) => <NumberInput
                    {...field}
                    >
                    <NumberInputField />
                  </NumberInput>}
                />
                  
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Type</FormLabel>
                {/* <Controller
                  name="category"
                  control={control}
                  render={({ field }) => <Select 
                    {...field} 
                    options={categories} 
                  />}
                /> */}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Institution</FormLabel>
                {/* <Controller
                  name="institution"
                  control={control}
                  render={({ field }) => <Select 
                    {...field} 
                    options={sources} 
                  />}
                /> */}
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Date</FormLabel>
                <Controller
                  name="createdAt"
                  control={control}
                  render={({ field }) => <SingleDatepicker
                    date={field.value}
                    onDateChange={(date) => field.onChange(date)}

                  />}
                />
              </FormControl>


            </Stack>
            <FormControl>
              <FormLabel>Description</FormLabel>

              <Textarea
                placeholder="Investment Description"
                rows={2}
                resize="none"
                {...register("description")}
              />
            </FormControl>
            <Button
              type="submit"
              colorScheme="blue"
              bg="blue.400"
              color="white"
              width={200}
              alignSelf={{base: "center", md: "end"}}
              _hover={{
                bg: "blue.500",
              }}
            >
              Add investment
            </Button>
          </Stack>
        </Box>
      </Stack>
    </form>
  )
}
