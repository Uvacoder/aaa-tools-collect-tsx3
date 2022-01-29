import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { DefaultLayout } from '../layout/DefaultLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="system" />
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </ChakraProvider>
  )
}

export default MyApp
