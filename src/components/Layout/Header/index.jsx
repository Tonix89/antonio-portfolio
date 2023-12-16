import { useState } from 'react';
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  Link,
  IconButton,
  Divider,
  Drawer,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [mobile, setMobile] = useState(false);
  const handleDrawerToggle = () => {
    setMobile((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', height: '50vh' }}
    >
      <Box>
        <Link href="/">
          <Typography variant="h4" sx={{ m: 2 }}>
            Antonio Arabejo
          </Typography>
        </Link>
      </Box>
      <Divider sx={{ borderColor: 'secondary.main' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          m: 2,
          height: '36vh',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Link
            component={NavLink}
            to="/"
            underline="none"
            sx={{
              '&.active': {
                textDecoration: 'underline',
                color: 'secondary.main',
              },
            }}
          >
            <Typography variant="h6">Home</Typography>
          </Link>
          <Link
            component={NavLink}
            to="/projects"
            underline="none"
            sx={{
              '&.active': {
                textDecoration: 'underline',
                color: 'secondary.main',
              },
            }}
          >
            <Typography variant="h6">Project</Typography>
          </Link>
          <Link
            component={NavLink}
            to="/about"
            underline="none"
            sx={{
              '&.active': {
                textDecoration: 'underline',
                color: 'secondary.main',
              },
            }}
          >
            <Typography variant="h6">About Me</Typography>
          </Link>
        </Box>
        <Box sx={{ display: 'flex', gap: { md: 3 } }}>
          <IconButton>
            <Link
              href="https://www.facebook.com/tonixzz"
              target="_blank"
              sx={{ color: 'secondary.main' }}
            >
              <FacebookIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link
              href="https://www.linkedin.com/in/antonio-arabejo-a22524152"
              target="_blank"
              sx={{ color: 'secondary.main' }}
            >
              <LinkedInIcon />
            </Link>
          </IconButton>
          <IconButton>
            <Link
              href="https://github.com/Tonix89"
              target="_blank"
              sx={{ color: 'secondary.main' }}
            >
              <GitHubIcon />
            </Link>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        component="nav"
        position="relative"
        sx={{ backgroundColor: 'primary.dark' }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box
            sx={{
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ width: '24px', p: '8px' }}></Box>
            <Box>
              <Link href="/" underline="none">
                <Typography variant="h4">Antonio Arabejo</Typography>
              </Link>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            maxWidth="lg"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: { sm: 1, md: 3 },
                width: { md: '245px' },
              }}
            >
              <Link
                component={NavLink}
                to="/"
                underline="none"
                sx={{
                  '&.active': {
                    textDecoration: 'underline',
                    color: 'secondary.main',
                  },
                }}
              >
                <Typography variant="h6">Home</Typography>
              </Link>
              <Link
                component={NavLink}
                to="/projects"
                underline="none"
                sx={{
                  '&.active': {
                    textDecoration: 'underline',
                    color: 'secondary.main',
                  },
                }}
              >
                <Typography variant="h6">Project</Typography>
              </Link>
              <Link
                component={NavLink}
                to="/about"
                underline="none"
                sx={{
                  '&.active': {
                    textDecoration: 'underline',
                    color: 'secondary.main',
                  },
                }}
              >
                <Typography variant="h6">About Me</Typography>
              </Link>
            </Box>
            <Box>
              <Link href="/" underline="none">
                <Typography variant="h4">Antonio Arabejo</Typography>
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: { md: 3 },
                width: { md: '245px' },
                justifyContent: 'flex-end',
              }}
            >
              <IconButton>
                <Link
                  href="https://www.facebook.com/tonixzz"
                  target="_blank"
                  sx={{ color: 'secondary.main' }}
                >
                  <FacebookIcon />
                </Link>
              </IconButton>
              <IconButton>
                <Link
                  href="https://www.linkedin.com/in/antonio-arabejo-a22524152"
                  target="_blank"
                  sx={{ color: 'secondary.main' }}
                >
                  <LinkedInIcon />
                </Link>
              </IconButton>
              <IconButton>
                <Link
                  href="https://github.com/Tonix89"
                  target="_blank"
                  sx={{ color: 'secondary.main' }}
                >
                  <GitHubIcon />
                </Link>
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="top"
          open={mobile}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              backgroundColor: 'primary.main',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}
