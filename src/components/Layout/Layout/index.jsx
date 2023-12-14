import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import { Box, Container } from '@mui/material';
import { useLocation } from 'react-router';

export default function Layout() {
  const params = useLocation();

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '90vh',
        }}
      >
        <Outlet />
      </Box>
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
        <Container>
          <Footer />
        </Container>
      )}
    </>
  );
}
