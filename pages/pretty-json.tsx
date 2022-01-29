import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Box, Flex, Textarea, Button, useToast } from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useState } from 'react'

const PrettyJson: NextPage = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const toast = useToast()

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }

  const handlePretty = () => {
    if (!input) return
    try {
      const j = JSON.parse(input)
      const out = JSON.stringify(j, undefined, 2)
      setOutput(out)
    } catch {
      toast({ status: 'error', title: 'Failed to parse JSON' })
    }
  }
  return (
    <Box>
      <Flex>
        <Textarea height="lg" onChange={handleInputChange} value={input} />
        <Button onClick={handlePretty}>
          <ArrowForwardIcon />
        </Button>
        <Textarea height="lg" value={output} />
      </Flex>
    </Box>
  )
}

export default PrettyJson
