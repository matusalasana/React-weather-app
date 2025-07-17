import { Box, Skeleton } from "@chakra-ui/react"

function CurrentSkeleton() {
  return (
    <Box>
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Skeleton bgColor={'gray.300'} mt={5} rounded={10} width={'350px'} height={'230px'} />
        </Box>
        <Box my={5} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Box width={'350px'} display={'flex'} justifyContent={'space-evenly'} >
                <Skeleton bgColor={'gray.300'} width={'60px'} height={'15px'}/>
                <Skeleton bgColor={'gray.300'} width={'50px'} height={'15px'}/>
                <Skeleton bgColor={'gray.300'} width={'65px'} height={'15px'}/>
            </Box>
            <Box my={5} width={'350px'} display={'flex'} justifyContent={'space-evenly'} >
                <Skeleton bgColor={'gray.300'} width={'30px'} height={'15px'}/>
                <Skeleton bgColor={'gray.300'} width={'40px'} height={'15px'}/>
                <Skeleton bgColor={'gray.300'} width={'30px'} height={'15px'}/>
            </Box>
        </Box>
    </Box>
  )
}

export default CurrentSkeleton