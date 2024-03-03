import * as React from 'react'
import style from './style.module.css'
import { Button, Drawer, Divider, ListItem, List, ListItemText, ListItemButton, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import wwLogo from '@public/images/aa-logo-sharp.svg'
import Image from 'next/image'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'

const SOCIAL_MEDIA_ICONS = [
  { icon: <FacebookIcon />, label: 'Facebook' },
  { icon: <InstagramIcon />, label: 'Instagram' },
  { icon: <XIcon />, label: 'X' },
  { icon: <PhoneIphoneIcon />, label: 'Phone' },
]

const NavigationList = ({ items }) => (
  <List>
    {items.map(({ label, onClick }) => (
      <React.Fragment key={label}>
        <ListItemButton onClick={onClick}>
          <ListItemText primary={label} />
        </ListItemButton>
        <Divider />
      </React.Fragment>
    ))}
  </List>
)

const MyIconButton = ({ icon, onClick }) => <IconButton onClick={onClick}>{icon}</IconButton>

export default function Navigation() {
  const [state, setState] = React.useState({ right: false })
  const anchor = 'right'
  const theme = useTheme()

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <div className="flex justify-between items-center py-7 bg-transparent w-full absolute z-[2] container left-0 right-0">
      <Image src={wwLogo} width={120} alt="Whiskey Wisdom Logo" />
      <IconButton onClick={toggleDrawer(anchor, true)} className={style.menuButton}>
        <MenuIcon color={theme.palette.primary.main} />
      </IconButton>
      <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '350px',
            paddingY: '32px',
            background: theme.palette.primary.light,
          },
        }}
      >
        <NavigationList
          items={[
            { label: 'Home', onClick: () => {} },
            { label: 'About', onClick: () => {} },
            { label: 'Beers', onClick: () => {} },
            { label: 'Contact', onClick: () => {} },
          ]}
        />
        <div className="bottom-0 absolute p-8">
          <ListItem disablePadding>
            {SOCIAL_MEDIA_ICONS.map(({ icon, label }) => (
              <MyIconButton key={label} icon={icon} onClick={() => {}} />
            ))}
          </ListItem>
        </div>
      </Drawer>
    </div>
  )
}
