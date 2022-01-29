import type { NextPage } from 'next'
import {
  Box,
  Text,
  Flex,
  Textarea,
  Button,
  Image,
  Spinner,
  Center,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'

const PreviewDataUrl: NextPage = () => {
  const [input, setInput] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value
    setInput(inputValue)
  }

  const [src, setSrc] = useState<string | undefined>(undefined)

  const handlePreview = () => {
    if (!input) return
    setSrc(input)
  }

  return (
    <Box>
      <Flex>
        <Textarea
          width="md"
          height="lg"
          onChange={handleInputChange}
          value={input}
        />
        <Button onClick={handlePreview}>
          <ArrowForwardIcon />
        </Button>
        <Box width="md">
          {src && (
            <Image
              src={src}
              alt="data url preview"
              fallback={
                <Center>
                  <Spinner />
                </Center>
              }
            />
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default PreviewDataUrl
