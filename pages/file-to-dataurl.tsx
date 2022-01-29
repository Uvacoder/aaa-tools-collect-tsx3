import type { NextPage } from 'next'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Flex, Box, Center, Textarea, Spinner } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const FileToDataUrl: NextPage = () => {
  const [output, setOutput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setIsLoading(true)

    const reader = new FileReader()
    reader.onload = () => {
      setOutput(reader.result as string)
      setIsLoading(false)
    }

    reader.readAsDataURL(file)
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxFiles: 1,
  })

  return (
    <Flex>
      <Box
        {...getRootProps()}
        borderRadius="md"
        bg="gray.300"
        width="md"
        height="xs"
        cursor="pointer"
      >
        <input {...getInputProps()} />
        <Center h="100%">
          {isDragActive ? (
            <>Drop file here ...</>
          ) : (
            <>Drag and drop file here, or click to select file</>
          )}
        </Center>
      </Box>
      <Flex direction="column" width="10" align="center">
        <ArrowForwardIcon />
        {isLoading && <Spinner />}
      </Flex>

      <Textarea value={output} width="md" height="xs" />
    </Flex>
  )
}

export default FileToDataUrl
