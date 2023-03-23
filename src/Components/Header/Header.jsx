import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Img, List, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { createRef, useRef, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../../assets/Logo.png'
import Footer from '../Footer/Footer';
import './Header.scss';

function Header() {

    let navRef = createRef();

    window.addEventListener('scroll', () => {
        if(window.scrollY > 100) {
            navRef.current.classList.add('fixed')
        } else {
            navRef.current.classList.remove('fixed')
        }
    })

    return (
        <>
            <Box as='header' p={['1rem', '1rem', '1rem 0']} boxShadow='md' ref={navRef}>
                <Box className="container">
                    <Flex as='nav' className="navbar" justify={'space-between'} align='center'>
                        <Box className="navbar__logo" w='50px' h='50px'>
                            <NavLink to='/'>
                                <Img src={Logo} />
                            </NavLink>
                        </Box>
                        <Box display={['none', 'none', 'flex', 'flex']} gap='1rem'>
                            <List className="links__item">
                                <NavLink to='/' className={(isActive) => isActive.isActive ? 'nav__active' : 'nav__item'}>
                                    Bosh sahifa
                                    <div className="underline"></div>
                                </NavLink>
                            </List>
                            <List className="links__item">
                                <NavLink to='/about' className={(isActive) => isActive.isActive ? 'nav__active' : 'nav__item'}>
                                    Biz haqimizda
                                    <div className="underline"></div>
                                </NavLink>
                            </List>
                            <List className="links__item">
                                <NavLink to='/contact' className={(isActive) => isActive.isActive ? 'nav__active' : 'nav__item'}>
                                    Biz bilan bog'lanish
                                    <div className="underline"></div>
                                </NavLink>
                            </List>
                        </Box>
                        <Box display={['inline-block', 'inline-block', 'none']}>
                            <Menu >
                                <MenuButton
                                    as={IconButton}
                                    aria-label='Options'
                                    icon={<HamburgerIcon />}
                                    variant='outline'
                                />
                                <MenuList>
                                    <MenuItem>
                                        <NavLink to='/' className={(isActive) => isActive.isActive ? 'nav__active' : 'nav__item'}>
                                            Bosh sahifa
                                            <div className="underline"></div>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem >
                                        <NavLink to='/about' className={(isActive) => isActive.isActive ? 'nav__active' : 'nav__item'}>
                                            Biz Hakimizda
                                            <div className="underline"></div>
                                        </NavLink>
                                    </MenuItem>
                                    <MenuItem >
                                        <NavLink to='/contact' className={(isActive) => isActive.isActive ? 'nav__active' : 'nav__item'}>
                                            Biz bilan bog'lanish
                                            <div className="underline"></div>
                                        </NavLink>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Outlet />
            <Footer />
        </>
    )
}

export default Header