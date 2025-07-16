import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"

interface Props{
  onClickGenerate:(city:string)=>void
}

function LocationInput({onClickGenerate}:Props) {
  const city=useRef<HTMLInputElement>(null)
  const [err,setErr]=useState('')
  return (
    <Box m={5} display={'grid'} placeItems={'center'}>
        <Input onChange={()=>setErr('')} ref={city} type="text" id="city" placeholder="enter a city"/>
        <Text color={'red'} fontSize={'sm'}>{err}</Text>
        <Button my={3} rounded={15} onClick={() => (onClickGenerate(city.current?.value || ""),(city.current?.value=="" && setErr('Please enter a city.')))}>Generate</Button>
    </Box>

  )
}

export default LocationInput