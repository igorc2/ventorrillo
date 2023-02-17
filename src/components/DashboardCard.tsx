import { Box, Heading, Text } from '@chakra-ui/react'

interface IDashboardCardProps {
  title: string,
  children: React.ReactNode
}

export function DashboardCard(props: IDashboardCardProps) {
  const { title, children } = props

  return (
    <Box boxShadow='md' bg='whiteAlpha.900' borderRadius={16} padding={8} h={'100%'}>
      <Heading fontSize='2xl' paddingBottom={4}>{title}</Heading>
      <hr />
      <Box paddingTop={4}>
        {children}
      </Box>
    </Box>
  )
}