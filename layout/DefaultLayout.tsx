import { Text, Box, Flex, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import SidebarLink from '../components/SidebarLink'

const pages: { name: string; path: string }[] = [
  { name: 'Pretty JSON', path: '/pretty-json' },
  { name: 'URL Encode', path: '/url-encode' },
  { name: 'URL Decode', path: '/url-decode' },
  { name: 'Preview DataURL', path: '/preview-dataurl' },
  { name: 'File to DataURL', path: '/file-to-dataurl' },
  { name: 'Diff', path: '/diff' },
]

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>Toolbox</title>
        <meta name="description" content="Toolbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box paddingLeft="4" paddingRight="4" paddingTop="2">
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
