'use client'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { DashboardCard } from './DashboardCard'
import { NumberInfoCard } from './NumberInfoCard'
import {
  IoWalletOutline
} from 'react-icons/io5';
import { MdOutlineSavings } from 'react-icons/md'

import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'
import LineChart from './LineChart'
import { SavingProgressInfo } from './SavingProgressInfo'
import { formattedToday } from '@/helpers/dates';
import { TransactionItem } from './TransactionItem';


const savingPlans = [
  {
    id: 1,
    total: 4000,
    current: 1950.20,
    title: 'Bali Vacation',
    dueDate: '2023-08-02',
    color: 'green',
  },
  {
    id: 2,
    total: 2700,
    current: 502.88,
    title: 'New bike',
    dueDate: '2023-05-31',
    color: 'orange',
  },
  {
    id: 3,
    total: 2400,
    current: 2014.60,
    title: 'Playstation',
    dueDate: '2023-06-05',
    color: 'cyan',
  }
]

const transactions = [
  {
    id: 1,
    date: '2023-02-08',
    value: 18.20,
    description: 'Supermarket'
  },
  {
    id: 2,
    date: '2023-02-07',
    value: 34,
    description: 'Restaurant'
  },
  {
    id: 3,
    date: '2023-02-07',
    value: 280,
    description: 'Dentist'
  },
  {
    id: 4,
    date: '2023-01-06',
    value: 28.30,
    description: 'Pharmacy'
  },
  {
    id: 5,
    date: '2023-01-06',
    value: 15,
    description: 'Japanese magazine'
  },
  {
    id: 6,
    date: '2023-01-06',
    value: 120,
    description: 'Hotel'
  },
]

export default function Dashboard() {

  return (
    <>
      <Text fontSize='3xl'>Welcome, Justina</Text>
      <Text fontSize='l'  color='gray.500'>{formattedToday()}</Text>

      <Grid
        paddingTop={8}
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(5, 1fr)'
        gap={8}
      >
        <GridItem colSpan={3}>
          <DashboardCard  title="Overview" >
          <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            gap={8}
            mt="4"
          >
            <GridItem>
              <NumberInfoCard
                title='Your Balance'
                isPrimary
                subTitle='15% compared with last month'
                value={12240}
                icon={IoWalletOutline}
              />
            </GridItem>
            <GridItem>
              <NumberInfoCard
                title='Savings'
                subTitle='15% compared with last month'
                value={1230.31}
                icon={MdOutlineSavings}
              />
            </GridItem>
            <GridItem>
              <NumberInfoCard
                title='Expenses'
                subTitle='15% compared with last month'
                value={854}
                icon={FiTrendingDown}
              />
            </GridItem>
            <GridItem>
              <NumberInfoCard
                title='Income'
                subTitle='15% compared with last month'
                value={3250.18}
                icon={FiTrendingUp}
              />
            </GridItem>
          </Grid>
          </DashboardCard>
        </GridItem>
        <GridItem colSpan={2}>
          <DashboardCard  title="Saving Plan" >
            <Flex flexDirection={'column'} gap={8}>
              {savingPlans.map((savingPlan) => (
                <SavingProgressInfo
                  key={savingPlan.id}
                  total={savingPlan.total}
                  current={savingPlan.current}
                  title={savingPlan.title}
                  dueDate={savingPlan.dueDate}
                  color={savingPlan.color}
                />
              ))
              }
            </Flex>

          </DashboardCard>
        </GridItem>
        <GridItem colSpan={3}>
          <DashboardCard  title="Analytics" >
            <Box h={'350px'}>
              <LineChart />
            </Box>
          </DashboardCard>
        </GridItem>
        <GridItem colSpan={2}>
          <DashboardCard  title="Recent transactions" >
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                date={transaction.date}
                value={transaction.value}
                description={transaction.description}
              />
            ))}
          </DashboardCard>
        </GridItem>
      </Grid>
    </>
  )
}

