import { Container, Link, Text } from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'

import React from "react"
import { ContactForm } from "../components/ContactForm"

export const AboutPage = () => {
    return (
        <>
            <Container
            maxW='1100px' 
            display='flex'
            justifyContent='flex-start'
            flexDir='column'
            width={{sm:"70%",md:"100%"}}
            margin={{base:"0 0 0 0"}}
            >
                <Text fontFamily="'Poppins', sans-serif" fontWeight="800" color='#b5e853' fontSize={{sm:'6xl',md:'9xl'}}  fontStyle='italic'>Oklathon
                </Text>

                <Text fontSize={{sm:'2xl',md:'4xl'}} as='b' align='left' width='100%' >About Us
                </Text>

                <Text align='left' fontSize='lg' margin='5px 0px 20px  0px' >Oklathon is an open-source software hackathon organized by Techlahoma, a nonprofit dedicated to advancing the tech community in Oklahoma. Techlahoma creates opportunities for developers to collaborate, network, and contribute to open-source projects. Oklathon provides a platform for participants of all skill levels to work on innovative software solutions, learn new technologies, and gain hands-on experience with tools like GitHub. Through its events and initiatives, 
                <Link href='https://www.techlahoma.org/' isExternal>Techlahoma     
                    <ExternalLinkIcon mx='2px' />
                </Link> 
                fosters a thriving tech ecosystem in the region. </Text>

                <Text fontSize={{sm:'2xl',md:'4xl'}} as='b' align='left' >Next Events</Text> 

                <Text align='left' marginBottom='20px'>
                <b>Date:</b> October 19, 2024 <br></br>
                <b>Time:</b> 9-4 with lunch and networking from 12-1<br></br> 
                <b>Location:</b> IMMY, Norman  <br></br>
                <b>Sponsor by 
                        <Link href='https://filebase.com/' isExternal> <b>Filebase!</b>     
                        <ExternalLinkIcon mx='2px' />
                        </Link>  
                </b>  
                </Text>
                <ContactForm/>
            </Container>           
        </>

    )
    
}