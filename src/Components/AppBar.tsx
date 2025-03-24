import { AppBar, Box, IconButton, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logoImage from "../assets/images/Ekasoft4kMalli.png"

function MenuAppBar() {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(() => {return false})
    const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(() => {return null})


    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorEl(event.currentTarget)
        setMenuIsOpen(true)
    }

    const closeMenu = () => {
        setMenuIsOpen(false)
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar
                    sx={{
                        display: "flex",
                        position: "absolute",
                        justifyContent: "space-between",
                        flexDirection: "column",
                        bgcolor: "black",
                        overflow: "clip",
                    }}
                >
                    {/* Ekasoft logo image */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent:"space-around",
                            width: 1,
                            m:0,
                        }}
                    >
                        <Box
                            component="img"
                            src={logoImage}
                            alt='Ekasoft banner'
                            sx={{
                                border: 0,
                                height: {lg: 200, md: 150, xs:100},
                                mx:0,
                                my: {lg: -3.5, md: -2.5, xs: -1.5},
                            }}
                        />
                    </Box>

                    {/* menu Box */}
                    <Box>
                        {/* Button to open navigation menu */}
                        <IconButton
                            onClick={openMenu}
                            sx={{
                                ml: 1,
                                mr: "auto"
                            }}
                        >
                            <MenuIcon 
                            sx={{color: "whitesmoke"}}
                            />
                        </IconButton>

                        {/* navigation menu */}
                        <Menu
                            open={menuIsOpen}
                            onClose={closeMenu}
                            anchorEl={menuAnchorEl}
                        >
                            <MenuItem>good</MenuItem>
                            <MenuItem>stuff</MenuItem>
                        </Menu>
                    </Box>
                </AppBar>
            </Box>
        </>
    )
}

export default MenuAppBar