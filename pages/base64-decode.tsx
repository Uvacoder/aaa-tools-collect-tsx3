import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Textarea, Button } from '@chakra-ui/react'
import { decode } from 'js-base64'
import type { NextPage } from 'next'
import React, { useState } from 'react'

const UrlDecode: NextPage = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }

  const handleDecode = () => {
    if (!input) return
    const out = decode(input)
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
