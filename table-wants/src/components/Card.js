import React from 'react'
import {
    Box,
    Heading,
    Image,
    Button
  } from '@chakra-ui/react'
const Card=()=>{
  return (
    <Box h={'30rem'} w={'26rem'} border={'1px'} borderColor={'#29292B'} bg={'#29292B'} borderRadius={'2.5rem'} boxShadow='2xl' padding={'1rem'}>
        <Box h={'18rem'}w={'24rem'}  borderRadius={'25px'}>
            <Image src='https://english.onlinekhabar.com/wp-content/uploads/2021/09/karma-1024x682.jpg' h={'18rem'}w={'24rem'} borderRadius={'25px'}></Image>
        </Box>
        <Heading size={'md'} mt={'1rem'}>Sundown By Karma</Heading>
        <Button mt={'2rem'} bg={'whatsapp.500'} w={'15rem'} h={'4rem'} borderRadius={'25px'}> Book Now</Button>
    </Box>
  )
}

export default Card