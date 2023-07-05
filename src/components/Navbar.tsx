import React, { ReactNode } from 'react';
import NextLink from 'next/link'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
  useColorMode,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { SunIcon } from '@chakra-ui/icons';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginModal from '@/hooks/useLoginModal';
import { signOut } from 'next-auth/react'
import { SafeUser } from '@/types';
import { MdOutlineSavings } from 'react-icons/md';

interface LinkItemProps {
  name: string
  icon: IconType
  url: string
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, url: '/' },
  { name: 'Transactions', icon: FiTrendingUp, url: '/transactions' },
  { name: 'Savings', icon: MdOutlineSavings, url: '/savings' },
  { name: 'Favourites', icon: FiStar, url: '/' },
  { name: 'Settings', icon: FiSettings, url: '/' },
];

interface NavbarProps {
  currentUser?: SafeUser | null
  children?: ReactNode
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  currentUser,
}) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav currentUser={currentUser} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="8">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Button as={"a"} href={"/"} variant={"link"}>
            Logo
          </Button>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} url={link.url} icon={link.icon} onClick={onClose}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
  url: string
}
const NavItem = ({ url, icon, children, ...rest }: NavItemProps) => {
  return (
    <NextLink href={url} style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </NextLink>
  );
};

interface MobileNavProps extends FlexProps {
  onOpen: () => void
  currentUser?: SafeUser | null
}
const MobileNav: React.FC<MobileNavProps> = ({ onOpen, currentUser, ...rest }) => {


  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()

  const { toggleColorMode } = useColorMode()
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="toggle light/dark mode"
          icon={<SunIcon />}
          onClick={toggleColorMode}
        />
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={currentUser?.image}
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{currentUser?.name || 'Visitor'}</Text>
                  {currentUser ? (
                    <Text fontSize="xs" color="gray.600">
                      Admin
                    </Text>
                  ): null }
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              {currentUser ? (
                <>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing coiso</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={loginModal.onOpen}>Login</MenuItem>
                  <MenuItem onClick={registerModal.onOpen}>Sign up</MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};