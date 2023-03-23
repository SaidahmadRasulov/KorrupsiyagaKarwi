import { Box,  CardFooter,  Center,  Container, Flex, Text } from '@chakra-ui/react';
import { Card, CardHeader, Image, CardBody} from '@chakra-ui/react';
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { WorkerContext } from '../../Context/Context'

function CAbout() {

    const [workers, setWorkers] = useContext(WorkerContext);

    console.log(workers)
  return (
    <Box padding='2rem 0'>
        <Container maxW='1100px'>
            <Box className='about__title' textAlign='center' mb='2rem'>
                <Text fontSize='2rem'>Ходимлар</Text>   
            </Box>
            <Flex gap='3rem' flexWrap='wrap' justify='center' align='center'>
                {workers.map((worker) => (  
                    <Card key={worker.id} w={['90%', '40%', '30%']} boxShadow='md' mb={['2rem', '2rem', '0', '0']} _hover={{transform:'translateY(-15px)'}}>
                    <NavLink to={`/about/${worker.id}`}>
                        <CardHeader p='0' h='300px'>
                            <Image src={worker.image} objectFit='cover' w='100%' h='100%' />
                        </CardHeader>
                        <CardBody p='.2rem' mb='1rem'>  
                          <Text textAlign='center' fontSize='1.4rem'>{worker.name}</Text>
                        </CardBody>
                        <CardFooter display='block' p='.5rem 0' w='100%' bg='blue.400' borderRadius='0 0 10px 10px'>
                            <Center textAlign='center' color='white' fontSize='1.2rem'>{worker.job}</Center>
                        </CardFooter>
                    </NavLink>
                    </Card>
                ))}
            </Flex>
        </Container>
    </Box>
  )
}

export default CAbout