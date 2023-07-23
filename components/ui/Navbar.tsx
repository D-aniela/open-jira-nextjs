import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { FC, useContext } from 'react'
import { MenuOutlined } from '@mui/icons-material'
import { UIContext } from '@/context/ui'

export const Navbar: FC = () => {
  const { openSideMenu } = useContext(UIContext)
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuOutlined />
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
