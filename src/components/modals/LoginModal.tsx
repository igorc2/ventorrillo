'use client'

import axios from 'axios'
import { signIn } from 'next-auth/react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from 'react-hook-form'


import { Modal } from './Modal'
import { Heading } from '../heading'
import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import useLoginModal from '@/hooks/useLoginModal'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/navigation'
import { RegisterModal } from './RegisterModal'
import useRegisterModal from '@/hooks/useRegisterModal'


export const LoginModal= () => {
  const loginModal = useLoginModal()
  const registerModal = useRegisterModal()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const toast = useToast()

  const { 
    register,
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    setIsLoading(true);

    console.log('data :>> ', data);

    signIn('credentials', {
      ...data,
      redirect: false,
    })
    .then((callback) => {
      if (callback?.ok) {
        toast({
          title: 'Success',
          description: 'Logged in successfully',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        router.refresh()
        loginModal.onClose()
      } else {
        toast({
          title: 'Error',
          description: callback?.error,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      }
    })

  }

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal])

  const bodyContent = (
    <Flex gap={4} direction={'column'}>
      <Heading
        title="Welcome back to Ventorrillo"
        subtitle="Log in to your account!"
      />
      <FormControl isInvalid={!!errors.email} >
        <FormLabel>Email address</FormLabel>
        <Input
          type="email" 
          id="email"
          disabled={isLoading}
          {...register('email', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {/* <p>{errors.email && errors.email.message}</p> */}
        </FormErrorMessage>
      </FormControl>
      <FormControl isRequired mb={3}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'This is required',
              minLength: { value: 4, message: 'Minimum length should be 4' },
            })}  
          />
          <InputRightElement h={'full'}>
            <Button
              variant={'ghost'}
              onClick={() =>
                setShowPassword((showPassword) => !showPassword)
              }>
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Flex>
  )

  const footerContent = (
    <Flex direction={'column'} w='full' mt='5' gap='5'>
      <hr />
      <Center>
        <Button
          variant='outline'
          leftIcon={<FcGoogle />}
          w='full'
          onClick={() => signIn('google')} 
        >
          Continue with Google
        </Button>
      </Center>
      <Center>
        <Button 
          variant='outline'
          w='full'
          leftIcon={<AiFillGithub />}
          onClick={() => signIn('github')} 
        >
          Continue with Github
        </Button>
      </Center>
      <div
      >
        <Text textAlign='center' fontSize='sm'>First time using Ventorrillo?
          <Text
            cursor={'pointer'}
            as='span'
            color='blue.600'
            onClick={onToggle}
          > Create an account </Text>
        </Text>
      </div>
    </Flex>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
