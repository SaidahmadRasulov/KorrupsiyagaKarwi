import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Card, CardBody, Container, Flex, Image, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { WorkerContext } from '../Context/Context';

function SimpleAbout() {

  const navigate = useNavigate();

  const { id } = useParams();
  const [users, setUsers] = useContext(WorkerContext)

  const back = () => navigate(-1)

  return (
    <>
      <Container maxW='1100px' p={['1rem']}>
      <Box mb='2rem'>
        <Button onClick={() => back()} fontSize='1.5rem' colorScheme='blackAlpha'>
          <ArrowBackIcon /> 
        </Button>
      </Box>
      <Box w={['95%', '90%', '80%']} m='2rem auto' boxShadow='md'>
        {
          users.map((user) => {
            if (user.id == id) {
              return (
                <Flex key={id} justify='space-between' direction={['column', 'row']} h={['100%', '300px', '100%']}>
                  <Box className='person__image' w={['100%', '50%']} h='100%'>
                    <Image src={user.image} w='100%' h='100%' objectFit='cover' />
                  </Box>
                  <Card w={['100%', '55%', '50%']}>
                    <CardBody>
                      <Text fontSize={['1.5rem','1.3rem' ,'1.8rem']}>{user.name}</Text>
                      <Text fontSize={['1rem','1rem', '1.2rem']}>{user.job}</Text>
                    </CardBody>
                  </Card>
                </Flex>
              )
            }
          })
        }
      </Box>
      </Container>
    </>
  )
}

export default SimpleAbout