'use client'
import { RegisterModal } from '@/components/modals'
import { LoginModal } from '@/components/modals/LoginModal'
import { Navbar } from '@/components/Navbar'
import theme from '@/theme'
import { SafeUser } from '@/types'
import { ChakraProvider } from '@chakra-ui/react'
import styles from '../styles/component.module.css'


export function Client({
  children,
  currentUser,
}: {
  children: React.ReactNode
  currentUser?: SafeUser | null
}) {

  return (
    <ChakraProvider theme={theme}>
      <Navbar currentUser={currentUser}>
        {children}
      </Navbar>
      <RegisterModal />
      <LoginModal />
    </ChakraProvider>
  )
}
