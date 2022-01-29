import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Textarea,
  FormControl,
  FormLabel,
  Switch,
  Spacer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { format } from 'sql-formatter'

const SqlFormat: NextPage = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [uppercase, setUppercase] = useState(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value
    setInput(inputValue)
  }

  const handleChangeUppercase = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUppercase(e.target.checked)
  }

  useEffect(() => {
    const o = format(input, { uppercase })
    setOutput(o)
  }, [input, uppercase])

  return (
    <Box>
      <Flex>
        <Spacer />
        <FormControl display="flex" alignItems="center" width="auto">
          <FormLabel htmlFor="uppercase-switch" mb="0">
            Uppercase
          </FormLabel>
          <Switch
            id="uppercase-switch"
            isChecked={uppercase}
            onChange={handleChangeUppercase}
          />
        </FormControl>
      </Flex>

      <Flex>
        <Textarea height="lg" onChange={handleInputChange} value={input} />
        <ArrowForwardIcon />
        <Textarea height="lg" value={output} />
      </Flex>
    </Box>
  )
}

export default SqlFormat
