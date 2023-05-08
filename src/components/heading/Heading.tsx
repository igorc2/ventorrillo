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
      <Center><Text fontSize='2xl' fontWeight='bold' color="blue.700" mb='4'>{title}</Text></Center>
      <Center><Text fontSize='md' color="blue.600">{subtitle}</Text></Center>
    </Box>
   )
}
 