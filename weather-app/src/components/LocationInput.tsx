import { Box, Button, Input, InputGroup, Text } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { LuSearch } from "react-icons/lu"

interface Props{
  onSearch:(city:string)=>void
}

function LocationInput({onSearch}:Props) {
  const city=useRef<HTMLInputElement>(null)
  const [err,setErr]=useState('')
  return (
    
    <Box m={5} display={'grid'} placeItems={'center'}>
      <InputGroup startElement={<LuSearch/>}>
        <Input rounded={15} onChange={()=>setErr('')} ref={city} type="text" id="city" placeholder="Enter a city name"/>
      </InputGroup>
        <Text color={'red'} fontSize={'sm'}>{err}</Text>
        <Button onClick={()=>((city.current?.value=="" && setErr("Enter a city"),onSearch(city.current?.value || "")))}>Search</Button>
    </Box>

  )
}

export default LocationInput