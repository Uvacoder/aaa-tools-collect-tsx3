import React from 'react'
import NextLink from 'next/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react'

export interface LinkProps extends ChakraLinkProps {
  href: string
}

export const Link: React.FC<LinkProps> = ({ href, children, ...rest }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...rest}>{children}</ChakraLink>
    </NextLink>
  )
}
