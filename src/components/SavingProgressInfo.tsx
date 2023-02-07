import { format } from 'date-fns'
import { Box, Flex, Heading, Progress, Spacer, Text } from "@chakra-ui/react"

interface ISavingProgressInfo {
  total: number
  current: number
  title: string
  dueDate: string
  color? : string
}

export function SavingProgressInfo(props: ISavingProgressInfo) {
  const { total, current, title, dueDate, color = 'gray.700' } = props
  const progress = Math.floor(current / total * 100)
  const date = format(new Date(dueDate), "EEE, do MMMM yyyy")
  return (
    <>
      <Flex>
        <Box p='2'>
          <Heading size='sm' as='h5'>{title}</Heading>
        </Box>
        <Spacer />
        <Box p='2'>
          <Text fontSize='md' color='gray.500'>target: {date}</Text>
        </Box>
      </Flex>
      <Flex>
        <Box p='2'>
          <Text fontSize='2xl' color='gray.800' as='span'>${current.toFixed(2)}</Text>
          <Text fontSize='md' color='gray.500' as='span'>/${total.toFixed(2)}</Text>
        </Box>
        <Spacer />
        <Box p='2'>
          <Text fontSize='2xl' colorScheme='teal'>{progress}%</Text>
        </Box>
      </Flex>
      <Progress
        value={progress}
        color={color}
      ></Progress>
    </>
  )

}
