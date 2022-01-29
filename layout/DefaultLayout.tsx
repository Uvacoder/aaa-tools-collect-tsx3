import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Text, Box, Flex, List, ListItem } from '@chakra-ui/react'
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
  const router = useRouter()
  const pages = [
    { name: 'Pretty JSON', path: '/pretty-json' },
    { name: 'URL Encode', path: '/url-encode' },
    { name: 'URL Decode', path: '/url-decode' },
    { name: 'Preview DataURL', path: '/preview-dataurl' },
    { name: 'File to DataURL', path: '/file-to-dataurl' },
  ]
  return (
    <List spacing="4">
      {pages.map((page, idx) => {
        const current = router.pathname === page.path
        return (
          <ListItem key={idx}>
            <Link
              href={page.path}
              bg={current ? 'Highlight' : undefined}
              borderRadius="md"
              padding="2"
            >
              {page.name}
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}
