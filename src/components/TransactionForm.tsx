'use client'

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  NumberInput,
  NumberInputField,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import { Select } from "chakra-react-select";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const confetti = {
  light: {
    primary: "D28A91", // blue.400
    secondary: "BEE3F8", // blue.100
  },

  dark: {
    primary: "1A365D", // blue.900
    secondary: "2A4365", // blue.800
  },
};

export default function ContactFormWithSocialButtons() {

  // const format = (val: string) => `$` + val
  // const parse = (val: string) => val.replace(/^\$/, '')

  const [value, setValue] = React.useState('')
  const [date, setDate] = React.useState(new Date())

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.900")}
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
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Value</FormLabel>
                    <NumberInput
                      onChange={setValue}
                      value={value}
                    >
                      <NumberInputField />
                      {/* <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper> */}
                    </NumberInput>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Select
                      colorScheme="purple"
                      options={[
                        {
                          label: "coisa",
                          value: "coisa",
                          colorScheme: "red", // The option color scheme overrides the global
                        },
                        {
                          label: "outro",
                          value: "outro",
                        },
                        {
                          label: "coiso",
                          value: "coiso",
                        },
                      ]}
                    />
                    {/* <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup> */}
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
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
