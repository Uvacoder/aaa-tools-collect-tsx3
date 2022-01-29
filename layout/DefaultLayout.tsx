import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import NextLink from 'next/link'
import {
  Text,
  Box,
  Flex,
  PropsOf,
  chakra,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { Link } from '../components/Link'

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Toolbox</title>
        <meta name="description" content="Toolbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingLeft="4" paddingTop="2">
        <Text fontSize="3xl" marginBlock="2" fontWeight="extrabold">
          Toolbox
        </Text>
        <Flex justifyContent="stretch">
          <Navigation />
          <Box flex="1">{children}</Box>
        </Flex>
      </Box>
    </>
  )
}

const Navigation = () => {
  const pages = [
    { name: 'Pretty JSON', path: '/pretty-json' },
    { name: 'URL Encode', path: '/url-encode' },
    { name: 'URL Decode', path: '/url-decode' },
    { name: 'Preview DataURL', path: '/preview-dataurl' },
    { name: 'File to DataURL', path: '/file-to-dataurl' },
  ]
  return (
    <Stack as="ul" spacing="4" marginRight="2">
      {pages.map((page, idx) => {
        return (
          <SidebarLink key={idx} as="li" href={page.path}>
            {page.name}
          </SidebarLink>
        )
      })}
    </Stack>
  )
}

const StyledLink = React.forwardRef(function StyledLink(
  props: PropsOf<typeof chakra.a> & { isActive?: boolean },
  ref: React.Ref<any>
) {
  const { isActive, ...rest } = props

  return (
    <chakra.a
      aria-current={isActive ? 'page' : undefined}
      width="100%"
      px="3"
      py="1"
      rounded="md"
      ref={ref}
      fontSize="sm"
      fontWeight="500"
      color={useColorModeValue('gray.700', 'whiteAlpha.900')}
      transition="all 0.2s"
      _activeLink={{
        bg: useColorModeValue('cyan.50', 'cyan.900'),
        color: useColorModeValue('cyans.700', 'cyan.200'),
        fontWeight: '600',
      }}
      {...rest}
    />
  )
})

type SidebarLinkProps = PropsOf<typeof chakra.div> & {
  href?: string
  icon?: React.ReactElement
}

const SidebarLink = (props: SidebarLinkProps) => {
  const { href, icon, children, ...rest } = props

  const { pathname } = useRouter()
  const isActive = pathname === href

  return (
    <chakra.div
      userSelect="none"
      display="flex"
      alignItems="center"
      lineHeight="1.5rem"
      {...rest}
    >
      <NextLink href={href!} passHref>
        <StyledLink isActive={isActive}>{children}</StyledLink>
      </NextLink>
    </chakra.div>
  )
}

export default SidebarLink
