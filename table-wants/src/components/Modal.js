import React from 'react'
import {
  HStack,
  Heading,
  Input,
  Button,
  FormControl,
  keyframes,
  Box
} from '@chakra-ui/react'
import image from '../public/logo.png'
import {CloseIcon} from '@chakra-ui/icons'
import { motion } from 'framer-motion';

const Modal=({open,onClose})=>{
  
  if(!open){
    return null
  }
  const animationKeyframes = keyframes`
  0% { transform: scale(0.5);}
  100% { transform: scale(1);top:'0%'; }
`;
const animation = `${animationKeyframes} 0.14s ease-in`;
  return (
    <Box
    mt={'0.4rem'}
    as={motion.div}
     left={'4%'}  zIndex={'1'} pos={'absolute'} bgColor={'whitesmoke'} display={'flex'} w={'60vw'} h={'8vh'} padding={'2rem'}  borderRadius={'5rem'}  animation={animation}>
        <HStack>
                <img width={'50rem'} src={image} alt="logo"/>
                <Heading color={'black'} alignSelf={'center'} as={'h2'} size='md' >TableWants</Heading>
        </HStack>
        <HStack ml={'10rem'}>
          <FormControl>
          <Input placeholder='Search' borderTop={'none'} borderRight={'none'} borderLeft={'none'} w={'35rem'} color={'black'}></Input>
          <Button  bgColor={'white'} color={'black'}>Search</Button>
          </FormControl>
        </HStack>
        <HStack ml={'5rem'}>
        <CloseIcon onClick={()=>{onClose(false)}} _hover={{cursor:'pointer'}} color={'black'}></CloseIcon>
        </HStack>
        
    </Box>
    
  )
}

export default Modal