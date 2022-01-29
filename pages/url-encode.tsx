import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Textarea, Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useState } from 'react'

const UrlEncode: NextPage = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }

  const handleEncode = () => {
    if (!input) return
    const out = encodeURI(input)
    setOutput(out)
  }
  return (
    <Box>
      <Flex>
        <Textarea value={input} onChange={handleInputChange} height="lg" />
        <Button onClick={handleEncode}>
          <ArrowForwardIcon />
        </Button>
        <Textarea height="lg" value={output} />
      </Flex>
    </Box>
  )
}

export default UrlEncode
