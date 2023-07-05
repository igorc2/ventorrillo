'use client'

import React from "react";
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ControlledSelect from '../ControlledSelect'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  Toast,
  useColorModeValue,
} from "@chakra-ui/react";
import { ControlledDatePicker } from "../ControlledDatePicker";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Source, TransactionCategory } from "@prisma/client";

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

type SignupReason = z.infer<typeof selectOptionSchema>

export const TransactionSchema = z.object({
  amount: z.string(),
  transactionCategory: selectOptionSchema,
  source: selectOptionSchema,
  createdAt: z.date(),
  description: z.string().optional().nullable(),
})

export type TransactionData = z.infer<typeof TransactionSchema>

interface TransactionFormHorizontalProps {
  sources: Source[]
  transactionCategories: TransactionCategory[]
}

export const TransactionFormHorizontal: React.FC<TransactionFormHorizontalProps> = ({sources, transactionCategories}) => {

  const sourcesOptions = sources.map(source => ({
    label: source.name,
    value: source.id,
  }))

  const transactionCategoriesOptions = transactionCategories.map(transactionCategory => ({
    label: transactionCategory.name,
    value: transactionCategory.id,
  }))

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    control,
    reset
  } = useForm<TransactionData>({
    defaultValues: {
      amount: '',
      transactionCategory: undefined,
      source: undefined,
      createdAt: new Date(),
      description: '',
    },
    resolver: zodResolver(TransactionSchema)
  })

  const createTransaction = (data: TransactionData) => {
    console.log('data', data)

    axios.post('api/transaction', data)
      .then(() => {
        toast.success('Transaction created successfully')
        reset()
      })

  }

  return (
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
        <form noValidate onSubmit={handleSubmit(createTransaction)}>
          <Stack spacing={6}>
            <code>{JSON.stringify(errors)}</code>
            <Stack spacing={5} direction={{ base: "column", md: "row" }}>
              <FormControl isRequired>
                <FormLabel>Value</FormLabel>
                <NumberInput>
                  <NumberInputField {...register('amount')} />
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <ControlledSelect<TransactionData, SignupReason, true>
                  name='transactionCategory'
                  control={control}
                  label="Category"
                  placeholder="Select a category"
                  options={transactionCategoriesOptions}
                  useBasicStyles
                />
              </FormControl>

              <ControlledSelect<TransactionData, SignupReason, true>
                name='source'
                control={control}
                label="Source"
                placeholder="Select a source"
                options={sourcesOptions}
                useBasicStyles
              />

              <ControlledDatePicker
                name='createdAt'
                control={control}
                label="Date"
              />

            </Stack>
            <FormControl>
              <FormLabel>Description</FormLabel>

              <Textarea
                placeholder="Transaction Description"
                rows={2}
                resize="none"
                {...register('description')}
              />
            </FormControl>
            <Button
              colorScheme="blue"
              bg="blue.400"
              color="white"
              width={200}
              alignSelf={{base: "center", md: "end"}}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
            >
              Add transaction
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  )
}
