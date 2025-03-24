import { AppBar, Box, IconButton, Menu, MenuItem, Paper, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import logoImage from "../assets/images/Ekasoft4kMalli.png"
import M05 from "../assets/images/M05.jpg"

function MenuAppBar() {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(() => {return false})
    const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(() => {return null})
    const theme = useTheme()
    const isSmallDisplay = useMediaQuery(theme.breakpoints.down("sm"))


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
                    }}
                >
                    {/* Ekasoft logo image */}
                    <Paper
                        sx={{
                            zIndex:1500,
                            overflow: "clip",
                            display: "flex",
                            justifyContent:"space-around",
                            bgcolor:"inherit",
                            width: 1,
                            m: 0,
                            borderBottom: 1,
                            borderColor: "gray"
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
                    </Paper>

                    {/* menu Box */}
                    <Box
                        sx={{
                            zIndex:1000,
                            mt:-1,
                            width: 1,
                            backgroundImage: `url(${M05})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderBottom: 0.2,
                            borderColor: "gray",
                        }}
                    >
                        {isSmallDisplay ? (
                            <>
                                {/* Button to open navigation menu */}
                                <IconButton
                                    onClick={openMenu}
                                    sx={{
                                        pt: 1.5,
                                        pb: 0.5
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
                                    anchorOrigin={{
                                        vertical: "bottom",
                                        horizontal: "center",
                                    }}
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "center",
                                    }}
                                    sx={{
                                        flexDirection: "row",
                                        justifyContent:"space-around"
                                    }}
                                >
                                    <MenuItem>good</MenuItem>
                                    <MenuItem>stuff</MenuItem>
                                </Menu>
                            </>                            
                        ) : (
                            <>
                                <Box>
                                    big screen content
                                </Box>
                            </>
                        )}
                    </Box>
                </AppBar>
            </Box>
        </>
    )
}

export default MenuAppBar