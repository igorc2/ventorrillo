'use client'
import { Box, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

import { FiArrowRightCircle } from 'react-icons/fi'

interface INumberInfoCardProps {
  title: string,
  value: number,
  subTitle: string,
  icon: IconType,
}

function currencyFormat(num: number) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function NumberInfoCard(props: INumberInfoCardProps) {
  const { title, value, subTitle, icon } = props

  return (
    <>
      <Grid bg='whiteAlpha.900' borderRadius='lg' borderWidth='1px' padding="4" templateRows='1fr auto 1fr' templateColumns='auto 1fr auto'>
        <GridItem alignSelf={'center'} >
          {icon && (
            <Icon
            boxSize={8}
              mr="4"
              color="blue.400"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
        </GridItem>
        <GridItem>
          <Text fontSize='xl'>{title}</Text>
          <Text fontSize='md'>{subTitle}</Text>
        </GridItem>
        <GridItem colSpan={3} mt="2" mb="2">
          <hr/>
        </GridItem>
        <GridItem colSpan={2} >
          <Text fontSize='3xl'>{currencyFormat(value)}</Text>
        </GridItem>
        <GridItem alignSelf={'center'}>
          <Icon
            fontSize="24"
            _groupHover={{
              color: 'white',
            }}
            as={FiArrowRightCircle}
          />
        </GridItem>
      </Grid>
    </>
  )
}



