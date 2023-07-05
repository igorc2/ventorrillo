'use client'

import { z } from 'zod'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react"
import { SingleDatepicker } from "chakra-dayzed-datepicker"
import { Select } from "chakra-react-select"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import React from "react"
import ControlledSelect from './ControlledSelect'

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

const selectOptionSchema = z.object({
  label: z.string(),
  value: z.string(),
});

type SignupReason = z.infer<typeof selectOptionSchema>;


export const TransactionSchema = z.object({
  amount: z.number().min(0),
  transactionCategoryId: z.string(),
  category: z.string(),
  createdAt: z.string(),
  description: z.string().optional().nullable(),
})

export type TransactionData = z.infer<typeof TransactionSchema>


export default function TransactionForm() {


  const [value, setValue] = React.useState('')
  const [date, setDate] = React.useState(new Date())

  const {
    register,
    handleSubmit,
    formState: { isDirty, isSubmitting },
    control,
    reset
  } = useForm<TransactionData>({
    // defaultValues: deserializeStudentData(studentData),
    resolver: zodResolver(TransactionSchema)
  })

  const createTransaction = (data: TransactionData) => {
    console.log('data', data)
  }

  return (
    <Flex
      align="center"
      justify="center"
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <form noValidate onSubmit={handleSubmit(createTransaction)}>
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Value doido</FormLabel>
                      <NumberInput
                      >
                        <NumberInputField {...register('amount')} />
                      </NumberInput>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Category</FormLabel>
                      <ControlledSelect<TransactionData, SignupReason, true>
                        isMulti
                        name='category'
                        control={control}
                        label="Reasons for Sign Up (at least 2)"
                        placeholder="Select some reasons"
                        options={categories}
                        useBasicStyles
                      />
                      {/* <Select
                        colorScheme="purple"
                        {...register('category')}
                        options={categories}
                      /> */}
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Source</FormLabel>
                      <Select
                        colorScheme="purple"
                        options={sources}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Date</FormLabel>
                      <SingleDatepicker
                        name="date-input"
                        date={date}
                        onDateChange={setDate}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>Description</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Transaction Description"
                        rows={3}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Add transaction
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

