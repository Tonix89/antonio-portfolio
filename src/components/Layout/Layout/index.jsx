import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router';

export default function Layout() {
  const params = useLocation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Outlet />
      {params.pathname === '/' ? (
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'primary.main',
            pb: 2,
            justifyContent: 'center',
          }}
        >
          <Footer />
        </Box>
      ) : (
        <Container sx={{ pb: 2 }}>
          <Footer />
        </Container>
      )}
    </Box>
  );
}
