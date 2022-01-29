import { Box, Table, Tbody, Tr, Td } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Now: NextPage = () => {
  const now = new Date()

  return (
    <Box>
      <Table variant="simple" width="lg">
        <Tbody>
          <Tr>
            <Td>Unix time (milliseconds)</Td>
            <Td>{now.getTime()}</Td>
          </Tr>
          <Tr>
            <Td>ISO String</Td>
            <Td>{now.toISOString()}</Td>
          </Tr>
          <Tr>
            <Td>Locale String</Td>
            <Td>{now.toLocaleString()}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default Now
