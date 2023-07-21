import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { FC } from 'react'
import { MenuOutlined } from '@mui/icons-material'

export const Navbar: FC = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlined />
        </IconButton>
				<Typography variant='h6'>
					OpenJira
				</Typography>
      </Toolbar>
    </AppBar>
  )
}
