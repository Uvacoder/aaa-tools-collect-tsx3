import type { NextPage } from 'next'
import { Box, Text, Flex, Textarea, Button, useToast } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import React, { useState } from 'react'
import { decode } from 'punycode'

const UrlDecode: NextPage = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value
    setInput(inputValue)
  }

  const handleDecode = () => {
    if (!input) return
    const out = decodeURI(input)
    setOutput(out)
  }
  return (
    <Box>
      <Flex>
        <Textarea value={input} onChange={handleInputChange} height="lg" />
        <Button onClick={handleDecode}>
          <ArrowForwardIcon />
        </Button>
        <Textarea height="lg" value={output} />
      </Flex>
    </Box>
  )
}

export default UrlDecode
