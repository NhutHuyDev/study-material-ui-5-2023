import { AppBar, Box, Toolbar, Typography, InputBase, styled, Badge, Avatar, Menu, MenuItem } from "@mui/material"
import TerminalIcon from '@mui/icons-material/Terminal';
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from '@mui/icons-material/Notifications';

import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled(Box)(({ theme }) => ({
  backgroundColor: 'white',
  
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}))

const NavBarIcons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up("lg")]: {
    display: 'flex'
  }
}))

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: '#999',
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[2][0]}`,
  };
}

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  [theme.breakpoints.up("lg")]: {
    display: 'none'
  }
}))

function Navbar() {
  const [openUserMenu, setOpenUserMenu] = useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' } }}>
          Material UI 5
        </Typography>
        <TerminalIcon fontSize="large" sx={{ display: { xs: 'block', md: 'none' } }} />

        <Search>
          <InputBase placeholder="Search..." style={{color: 'black'}}/>
        </Search>

        <NavBarIcons>
          <Badge badgeContent={5} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar {...stringAvatar('Nguyễn Nhựt Huy')} sx={{ width: 30, height: 30, fontSize: '15px' }} />
        </NavBarIcons>

        <UserBox onClick={() => setOpenUserMenu(true)}>
          <Avatar {...stringAvatar('Nguyễn Nhựt Huy')} sx={{ width: 30, height: 30, fontSize: '15px' }} />
          <Typography variant="span">
            Huy
          </Typography>
        </UserBox>
      </StyledToolbar>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={openUserMenu}
        onClose={() => setOpenUserMenu(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}  
        sx= {{
          top: '40px'
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar