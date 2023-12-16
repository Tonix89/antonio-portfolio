import { Typography, Box, Container, Avatar } from '@mui/material';
import Profile from '../../../Images/profile.png';
import Javascript from '../../../Images/javascript.png';
import Bootstrap from '../../../Images/bootstrap.png';
import Sass from '../../../Images/sass.png';
import Xd from '../../../Images/xd.png';
import Wordpress from '../../../Images/wordpress.png';
import MUI from '../../../Images/mui.png';
import React from '../../../Images/react.png';
import Github from '../../../Images/github.png';
import TypewriterEffect from '../../Effects/Typewriter';

export default function HomePage() {
  const texts = [
    "Hi, I'm a Front-End Web Developer.",
    'Hei, Jeg er Front-End Web Utvikler.',
    'Uy, Front-End Web Developer diay ko.',
  ];

  return (
    <Box sx={{ backgroundColor: 'primary.main', py: 3 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          minHeight: '81.6vh',
        }}
      >
        <Box
          maxWidth="lg"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Avatar
            variant="rounded"
            alt="My profile"
            src={Profile}
            sx={{ width: { xs: 150, md: 250 }, height: { xs: 150, md: 250 } }}
          />
          <TypewriterEffect texts={texts} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifySelf: 'start',
            gap: 2,
          }}
        >
          <Typography variant="h5">Experienced :</Typography>
          <Box sx={{ display: 'flex', gap: { xs: 1, sm: 3 } }}>
            <Avatar
              variant="rounded"
              alt="Adobe XD Logo"
              src={Xd}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="Javascript Logo"
              src={Javascript}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="Bootstrap Logo"
              src={Bootstrap}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="SASS Logo"
              src={Sass}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="Wordpress Logo"
              src={Wordpress}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="React Logo"
              src={React}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="Material UI Logo"
              src={MUI}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
            <Avatar
              variant="rounded"
              alt="Github Logo"
              src={Github}
              sx={{ width: { xs: 30, sm: 48 }, height: { xs: 30, sm: 48 } }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
