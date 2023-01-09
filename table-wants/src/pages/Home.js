import React from 'react'
import NavBar from "../components/NavBar";
import Card from '../components/Card';
import {
  Box,
  Heading,
} from '@chakra-ui/react'
import { motion } from 'framer-motion';

const Home= ()=>{

  return(
    <Box>
      <NavBar></NavBar>
      <Box mt={'3rem'}>
        <Box >
          <Heading as={'h1'} size={'3xl'}>Discover The Best  </Heading>
          <Heading as={'h1'} size={'3xl'}>Cafes And Resturant</Heading>
          <Heading as={'h1'} size={'3xl'}>To Chill And Enjoy</Heading>
        </Box>
      </Box>
      <Box mt={'5rem'}>
        <Card></Card>

      </Box>
    </Box>
  
  );
}

export default Home