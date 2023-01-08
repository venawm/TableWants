import React, { useState } from 'react'
import Modal from './Modal'
import {Heading,
    HStack,
    Link,
    Button,
    chakra,
    
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import image from '../public/logo.png'
const NavBar =()=> {
    const[openModal,setOpenModal]= useState(false)


    return ( 
        <div>
            <Modal open={openModal} onClose={setOpenModal}></Modal>
        <chakra.div display={'flex'} paddingTop={'1rem'} paddingBottom={'1rem'}>
            <HStack>
                <img width={'50rem'} src={image} alt="logo"/>
                <Heading alignSelf={'center'} as={'h2'} size='md' >TableWants</Heading>
            </HStack>
            <HStack fontWeight={'bold'} ml={'15rem'} spacing={'6rem'}>
                <Link>Home</Link><Link>Cafes Nearby</Link><Link>About Us</Link><Link>Contact</Link>
                <Search2Icon onClick={()=>{setOpenModal(true)}} _hover={{ cursor: "pointer"}}></Search2Icon>
            </HStack>
            <HStack ml={'20rem'}>
                <Button _hover={'none'} bg={'#38E54D'}>Login/Signup</Button>
                <Button _hover={'none'} bg={'#38E54D'}>Guest Login</Button>
            </HStack>
            
            
        </chakra.div>
          
        </div>
     );
}

export  default NavBar;