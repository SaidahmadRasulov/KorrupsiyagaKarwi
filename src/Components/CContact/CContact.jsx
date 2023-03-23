import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { Box, Button, Center, Container, Flex, FormControl, List, ListItem, Text } from '@chakra-ui/react';
import { FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom';
import emailjs from '@emailjs/browser'

function CContact() {

    const formRef = useRef();
    const errorRef = useRef();
    console.log(formRef)

    const handleSubmit = () => {
        if (formRef.current[0].value !== '' && formRef.current[1].value !== '' && formRef.current[2].value && formRef.current[2].value !== '') {
            emailjs.sendForm('service_iejnpz7', 'template_hskqdeosss', formRef.current, 'r8o-3Y6FIn6bo3Pbl')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        formRef.current.reset();
        } else {
            errorRef.current.innerHTML = "Hamma ma'lumotlarni kiriting !"
        }
    }

    return (
        <>
            <Box as='section'>
                <Container maxW='1100px' padding='3rem 0'>
                        <Heading fontSize='1.7rem' textAlign={['center']}>
                            Aloqa uchun ushbu ma'lumotlarni toldiring
                        </Heading>
                    <Box className='contact__form' w={['90%','80%','35%']} m='2rem auto 3rem auto' boxShadow='md' padding='1rem' borderRadius='10px'>
                        <form ref={formRef}>
                            <FormControl isRequired mb='1rem'>
                                <FormLabel fontSize='1.2rem'>Ism</FormLabel>
                                <Input type='text' />
                            </FormControl>
                            <FormControl isRequired mb='1rem'>
                                <FormLabel fontSize='1.2rem'>Telefon Raqam</FormLabel>
                                <Input type='number' name='number' placeholder='+998' />
                            </FormControl>
                            <FormControl isRequired mb='1rem'>
                                <FormLabel fontSize='1.2rem'>Email</FormLabel>
                                <Input type='email' name='email' />
                            </FormControl>
                            <FormControl isRequired mb='1rem'>
                                <FormLabel fontSize='1.2rem'>Habar</FormLabel>
                                <Textarea type='text' name='message' />
                            </FormControl>
                            <Text color='red' ref={errorRef} mb='.5rem'></Text>
                            <Button onClick={() => handleSubmit()} colorScheme='whatsapp'>Yuborish</Button>
                        </form>
                    </Box>
                    <Flex justify={ 'space-between'} align={['center', 'center', 'initial']} direction={['column', 'column', 'row']} gap={['3rem', '2rem', '0']}>
                        <Box className='contact__numbers'>
                            <List>
                                <NavLink to='tel:+998909987546' target='_blank'>
                                    <ListItem mb='1rem'>
                                        <Flex align='center' gap='.5rem'>
                                            <PhoneIcon />
                                            +998909987546
                                        </Flex>
                                    </ListItem>
                                </NavLink>
                                <NavLink to='https://korrupsiyasizkelajak.uz/korrupsiyasizkelajak@mail.ru' target='_blank'>
                                    <ListItem >
                                        <Flex align='center' gap='.5rem'>
                                            <EmailIcon />
                                            korrupsiyasizkelajak@mail.com
                                        </Flex>
                                    </ListItem>
                                </NavLink>
                            </List>
                        </Box>
                        <Box className='contact__map' w={['90%', '70%']} m h='400px'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51318.496721273295!2d69.27515107611659!3d41.3280929725002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef50a6a19ad39%3A0xfa357b7c13c9a3f6!2z0JzQuNGA0LfQviDQo9C70YPQs9Cx0LXQuiDRgNCw0LnQvtC9!5e0!3m2!1sru!2s!4v1679558982278!5m2!1sru!2s" loading="lazy" style={{ width: '100%', height: '100%' }} referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default CContact