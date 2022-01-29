import type { NextPage } from 'next'
import { Box, Text, Flex, Textarea, Button, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'

const UrlEncode: NextPage = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value
    setInput(inputValue)
  }

  const handleEncode = () => {
    if (!input) return
    const out = encodeURI(input)
    setOutput(out)
  }
  return (
    <Box>
      <Text fontSize="4xl">URL Encode</Text>
      <Flex>
        <Textarea height="lg" onChange={handleInputChange} value={input} />
        <Button onClick={handleEncode}>
          <ArrowForwardIcon />
        </Button>
        <Textarea height="lg" value={output} />
      </Flex>
    </Box>
  )
}

export default UrlEncode
