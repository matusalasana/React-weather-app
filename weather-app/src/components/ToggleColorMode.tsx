"use client"

import { Button } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

const ToggleColorMode = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Button variant="outline" onClick={toggleColorMode}>
      Toggle Mode
    </Button>
  )
}

export default ToggleColorMode
