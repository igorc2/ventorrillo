'use client'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { DashboardCard } from './DashboardCard'
import { NumberInfoCard } from './NumberInfoCard'
import {
  IoWalletOutline
} from 'react-icons/io5';
import { MdOutlineSavings } from 'react-icons/md'

import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi'
import LineChart from './LineChart'
import { SavingProgressInfo } from './SavingProgressInfo'

export default function Dashboard() {
  const result = format(new Date(2014, 6, 2), "EEE, do MMMM yyyy")
  return (
    <>
      <Text fontSize='3xl'>Welcome, Justina</Text>
      <Text fontSize='l'  color='gray.500'>{result}</Text>

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
            <SavingProgressInfo
              total={4000}
              current={1950.20}
              title='Bali Vacation'
              dueDate='2023-08-02'
            ></SavingProgressInfo>
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
            oi
          </DashboardCard>
        </GridItem>
      </Grid>
    </>
  )
}

