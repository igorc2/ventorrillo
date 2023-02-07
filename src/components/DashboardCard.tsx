import { Box, Text } from '@chakra-ui/react'

interface IDashboardCardProps {
  title: string,
  children: React.ReactNode
}

export function DashboardCard(props: IDashboardCardProps) {
  const { title, children } = props

  return (
    <Box bg='whiteAlpha.900' borderRadius={16} padding={4} h={'100%'}>
      <Text fontSize='xl'>{title}</Text>
      {children}
    </Box>
  )
}