import { formatDate } from '@/helpers/dates'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import * as React from 'react'

interface TransactionItemProps {
  date: string,
  value: number,
  description: string,
}

export function TransactionItem (props: TransactionItemProps): React.ReactElement {
  const { date, value, description } = props
  return (
    <Flex alignItems={'center'}>
      <Box marginBottom={4} >
        <Text fontSize={'xl'}>{description}</Text>
        <Text fontSize='xs'> {formatDate(date)}</Text>
      </Box>
      <Spacer />
      <Box>
        <Text fontSize='xl'>${value.toFixed(2)}</Text>  
      </Box> 
    </Flex>
  )
} 