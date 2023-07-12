'use client'

import React from "react";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ControlledSelect from '@/components/ControlledSelect'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { ControlledDatePicker } from "@/components/ControlledDatePicker";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Investment, InvestmentType } from "@prisma/client";
import { NewInvestmentData, NewInvestmentSchema, Option } from "../types";

const investmentTypeOptions = [
  {
    label: 'Fixed income',
    value:  InvestmentType.FIXED,
  },
  {
    label: 'Variable income',
    value:  InvestmentType.VARIABLE,
  },
  {
    label: 'Investment fund',
    value:  InvestmentType.FUND,
  },  
]

interface InvestmentFormProps {
  investments: Investment[]
}

export const InvestmentForm: React.FC<InvestmentFormProps> = ({investments}) => {
  
  console.log('investments', investments)
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    control,
    reset
  } = useForm<NewInvestmentData>({
    defaultValues: {
      investedValue: '',
      name: '',
      type: undefined,
      createdAt: new Date(),
      description: '',
    },
    resolver: zodResolver(NewInvestmentSchema)
  })

  const createInvestment = (data: NewInvestmentData) => {

    const postData = {
      ...data,
      updatedAt: data.createdAt,
      netValue: data.investedValue,
    }

    console.log('data', data)

    axios.post('api/investment', postData)
      .then((data) => {
        console.log('criout investment', data)
        toast.success('Investment created successfully')
        reset()
      }, (error) => {
        console.log('error', error)
        toast.error('Error creating investment ')
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
        <form noValidate onSubmit={handleSubmit(createInvestment)}>
          <Stack spacing={6}>
            <Stack spacing={5} direction={{ base: "column", md: "row" }}>
              
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input {...register('name')} />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Value</FormLabel>
                <NumberInput>
                  <NumberInputField {...register('investedValue')} />
                </NumberInput>
              </FormControl>

              <FormControl isRequired>
                <ControlledSelect<NewInvestmentData, Option, true>
                  name='type'
                  control={control}
                  label="Type"
                  placeholder="Select a type"
                  options={investmentTypeOptions}
                  useBasicStyles
                />
              </FormControl>

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
              Add investment
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  )
}
