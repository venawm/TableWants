import React from 'react'
import NavBar from "../components/NavBar";
import {
  Box,
  Heading,
  keyframes
} from '@chakra-ui/react'
import { motion } from 'framer-motion';

const Home= ()=>{

  return(
    <Box>
      <NavBar></NavBar>
      <Box mt={'3rem'}>
        <Box >
          <Heading as={'h1'} size={'3xl'}>Discover The Best Cafes </Heading>
          <Heading as={'h1'} size={'3xl'}>And Resturant</Heading>
          <Heading as={'h1'} size={'3xl'}>To Chill And Enjoy</Heading>
        </Box>
      </Box>
    </Box>
  
  );
}

export default Home