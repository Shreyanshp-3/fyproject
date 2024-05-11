import { Box, Button, Card, CardBody, Grid, GridItem, Heading, Image, Stack, Input, Text } from '@chakra-ui/react'
import { React, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
// import { Box, Text, Button,  } from "@chakra-ui/react";



const ExerciseLibrary = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false
    })
  }, [])
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="white">
      <GridItem
        data-aos="fade-right"
        className='hidden'
        as="main"
        colSpan={{ base: 6, lg: 6, xl: 6 }}
        p={{ base: "0rem", md: "3rem", xl: "3rem" }}
      >
        <Box maxW='64rem'>
          <Heading mb={4} fontSize='3.5rem'>Exercise Libraries</Heading>
          <br />
          <Text fontSize='xl'>
            This page includes all the features and Libraries of different types of Exercise present.There are mainly divided according to body part or the equipment avaliable for health lifestyle.Depending on them the characteristic. Get All the detailed Information about the Exercies Given Below and Choose the perfect way to go with the diet.The articles below discuss Types of different exercises, Diabetes and provide valuable tips for Benifits of Daily Exercise healthily. </Text>

          <a href="https://myfitness-nczj.onrender.com" target="_blank" rel="noopener noreferrer">
            <Button size='md' colorScheme='purple' mt='24px'
            >
              Go to Exercise
            </Button>
          </a>
        </Box>
      </GridItem>
     

      {/* the side heading of the tabel */}


    </Grid>
  )
}

export default ExerciseLibrary

