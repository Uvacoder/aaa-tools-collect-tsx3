import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

export interface LinkProps extends React.ComponentProps<typeof ChakraLink> {
  href: string
}

export const Link: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}
