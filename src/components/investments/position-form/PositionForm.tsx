"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledSelect from "@/components/ControlledSelect";
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
import toast, { Toaster } from "react-hot-toast";
import { Investment } from "@prisma/client";
import {
  InvestmentPositionData,
  InvestmentPositionSchema,
  Option,
} from "../types";

interface PositionFormProps {
  investments: Investment[];
}

export const PositionForm: React.FC<PositionFormProps> = ({ investments }) => {
  const investmentOptions = investments.map((investment) => ({
    label: investment.name,
    value: investment.id,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    control,
    reset,
  } = useForm<InvestmentPositionData>({
    defaultValues: {
      updatedAt: new Date(),
      netValue: undefined,
    },
    resolver: zodResolver(InvestmentPositionSchema),
  });

  const createInvestment = (data: InvestmentPositionData) => {
    const postData = {
      ...data,
      investmentId: data.investment.value,
    };

    axios.post("api/position", postData).then(
      () => {
        toast.success("Investment created successfully");
        reset();
      },
      (error) => {
        console.log("error", error);
        toast.error("Error creating investment ");
      }
    );
  };

  return (
    <Stack
      spacing={{ base: 4, md: 8, lg: 20 }}
      direction={{ base: "column", md: "row" }}
      mb={8}
    >
      <Toaster />
      <Box
        width="100%"
        bg={useColorModeValue("white", "gray.700")}
        borderRadius="lg"
        p={8}
        color={useColorModeValue("gray.700", "whiteAlpha.900")}
        shadow="base"
      >
        <form noValidate onSubmit={handleSubmit(createInvestment)}>
          <pre>{JSON.stringify(errors)}</pre>
          <Stack spacing={5} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <ControlledSelect<InvestmentPositionData, Option, true>
                name="investment"
                control={control}
                label="Type"
                placeholder="Select a type"
                options={investmentOptions}
                useBasicStyles
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Value</FormLabel>
              <NumberInput>
                <NumberInputField {...register("netValue")} />
              </NumberInput>
            </FormControl>

            <ControlledDatePicker
              name="updatedAt"
              control={control}
              label="Date"
            />

            <Button
              colorScheme="blue"
              bg="blue.400"
              color="white"
              width={400}
              alignSelf={{ base: "center", md: "end" }}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
            >
              Update position
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};
