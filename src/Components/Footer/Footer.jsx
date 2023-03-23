import React from 'react';
import { Container, Box, Flex, } from '@chakra-ui/react';
import {Image, List, ListItem, ListIcon, Icon} from '@chakra-ui/react'
import FooterLogo from '../../assets/footerLogo.png'
import { FaTelegram, FaInstagram, FaFacebookF }  from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <Box p='1.5rem 0' bg='#EFEEEE' m='.5rem 0 0 0'>
                <Container maxW='1100px'>
                    <Flex justify='space-between' align='center'>
                        <Box className='footer__logo'>
                            <Image src={FooterLogo} />
                        </Box>
                        <List>
                            <NavLink to='https://t.me/korrupsiyasizkelajakofficial' target='_blank'>
                            <ListItem mb='1rem' display='flex' alignItems='center' gap='.5rem'>
                                <FaTelegram />
                                Telegram
                            </ListItem>
                            </NavLink>
                            <NavLink to='https://www.instagram.com/korrupsiyasiz/' target='_blank'>
                            <ListItem mb='1rem' display='flex' alignItems='center' gap='.5rem'>
                                <FaInstagram />
                                Instagram
                            </ListItem>
                            </NavLink>
                            <NavLink  to='https://www.facebook.com/groups/2489398171365369/?mibextid=6NoCDW' target='_blank'>
                            <ListItem mb='1rem' display='flex' alignItems='center' gap='.5rem'>
                                <FaFacebookF />
                                Facebook
                            </ListItem>
                            </NavLink>
                        </List>
                    </Flex>
                </Container>
            </Box>
        </>
    )
}

export default Footer