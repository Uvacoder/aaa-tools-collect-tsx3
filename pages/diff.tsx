import {
  Textarea,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Spacer,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import React, { useState } from 'react'
import ReactDiffViewer from 'react-diff-viewer'

const Diff: NextPage = () => {
  const [textA, setTextA] = useState('')
  const [textB, setTextB] = useState('')

  const handleChangeTextA = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextA(e.target.value)
  }
  const handleChangeTextB = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextB(e.target.value)
  }

  const [split, setSplit] = useState(true)
  const handleChangeSplit = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSplit(e.target.checked)
  }

  return (
    <>
      <Flex marginBottom="4">
        <Textarea value={textA} onChange={handleChangeTextA} height="sm" />
        <Textarea value={textB} onChange={handleChangeTextB} height="sm" />
      </Flex>

      <Flex>
        <Text fontSize="xl">Diff</Text>
        <Spacer />
        <FormControl display="flex" alignItems="center" width="auto">
          <FormLabel htmlFor="split-view-switch" mb="0">
            Split view
          </FormLabel>
          <Switch
            id="split-view-switch"
            isChecked={split}
            onChange={handleChangeSplit}
          />
        </FormControl>
      </Flex>

      <ReactDiffViewer oldValue={textA} newValue={textB} splitView={split} />
    </>
  )
}

export default Diff
