'use client'

import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
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
import useRegisterModal from '@/hooks/useRegisterModal'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import useLoginModal from '@/hooks/useLoginModal'


export const RegisterModal= () => {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
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
      name: '',
      email: '',
      password: ''
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/register', data)
      .then(() => {
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        registerModal.onClose();
        // loginModal.onOpen();
      })
      .catch((error) => {
        toast({
          title: 'Something went wrong',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const onToggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, [registerModal, loginModal])

  const bodyContent = (
    <Flex gap={4} direction={'column'}>
      <Heading
        title="Welcome to Ventorrillo"
        subtitle="Create an account!"
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
        <FormLabel>Name</FormLabel>
        <Input
          type="name" 
          id="name"
          disabled={isLoading}
          {...register('name', {
            required: 'This is required',
            minLength: { value: 2, message: 'Minimum length should be 2' },
          })}
        />
        <FormErrorMessage>
          {/* <p>{errors.name && errors.name.message}</p> */}
        </FormErrorMessage>
      </FormControl >
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
        <Text textAlign='center' fontSize='sm'>Already have an account?
          <Text
            cursor={'pointer'}
            as='span'
            color='blue.600'
            onClick={onToggle}
          > Log in </Text>
        </Text>
      </div>
    </Flex>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
