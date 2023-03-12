'use client'

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
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Select } from "chakra-react-select";
import React from "react";

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

export default function TransactionFormHorizontal() {

  const [value, setValue] = React.useState('')
  const [date, setDate] = React.useState(new Date())

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
        <Stack
          spacing={6}
        >
          <Stack spacing={5} direction={{ base: "column", md: "row" }}>
            <FormControl isRequired>
              <FormLabel>Value</FormLabel>
              <NumberInput
                onChange={setValue}
                value={value}
              >
                <NumberInputField />
              </NumberInput>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Category</FormLabel>
              <Select
                colorScheme="purple"
                options={categories}
              />
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


          </Stack>
          <FormControl>
            <FormLabel>Description</FormLabel>

            <Textarea
              name="message"
              placeholder="Transaction Description"
              rows={2}
              resize="none"
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
          >
            Add transaction
          </Button>
        </Stack>
      </Box>
    </Stack>
  )
}
