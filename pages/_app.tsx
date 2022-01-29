import type { AppProps } from 'next/app'

import { ChakraProvider } from '@chakra-ui/react'
import { DefaultLayout } from '../layout/DefaultLayout'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp
