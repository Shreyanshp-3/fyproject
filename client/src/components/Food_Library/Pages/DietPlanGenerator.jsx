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
          <Heading mb={4} fontSize='3.5rem'>Diet Planner </Heading>
          <br />
          <Text fontSize='xl'>
            People from all around the world are getting more concerned in their health and way of life in today's modern environment. However, avoiding junk food and exercising alone are insufficient; we also need to eat a balanced diet. We can live a healthy life with a balanced diet based on our height, weight, and age. Your diet can help you achieve and maintain a healthy weight, lower your chance of developing chronic diseases (including cancer and heart disease), and improve your general health when combined with physical activity. Nevertheless, there is a little SOTA project on food/diet recommendation system.
          </Text>

          <a href="https://diet-recommendation-system.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <Button size='md' colorScheme='purple' mt='24px'
            >
              Go to Diet Planner
            </Button>
          </a>
        </Box>
      </GridItem>


      {/* the side heading of the tabel */}


    </Grid>
  )
}

export default ExerciseLibrary

