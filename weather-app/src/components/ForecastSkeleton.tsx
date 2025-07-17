import { Box, Skeleton } from "@chakra-ui/react"

function ForecastSkeleton() {
    const skeletons=[1,2,3,4,5,6,7]
  return (
    <Box display={'flex'} overflow={'hidden'}>
        {skeletons.map(skeleton=>
            <Box key={skeleton} height={'180px'}>
                <Skeleton mx={3} rounded={10} width={'200px'} height={'100%'} bgColor={'gray.300'} />
            </Box>
        )}
    </Box>
  )
}

export default ForecastSkeleton