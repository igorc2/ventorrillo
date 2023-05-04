'use client'

import { Box, Center, Container, Text } from "@chakra-ui/react"

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

export const Heading: React.FC<HeadingProps> = ({ 
  title, 
  subtitle,
  center
}) => {
  return ( 
    <Box>
      <Center><Text fontSize='2xl' color="blue.700">{title}</Text></Center>
      <Center><Text fontSize='lg' color="blue.400">{subtitle}</Text></Center>
    </Box>
   )
}
 