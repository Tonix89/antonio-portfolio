import { Box, Typography } from '@mui/material';
import { useLocation } from 'react-router';

export default function Footer() {
  const year = new Date().getFullYear();
  const params = useLocation();
  return (
    <Box
      maxWidth="xl"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      {params.pathname === '/' ? (
        <>
          <Typography variant="body1" sx={{ color: 'secondary.main' }}>
            All Rights Reserved.
          </Typography>
          <Typography variant="body1" sx={{ color: 'secondary.main' }}>
            Antonio Arabejo &copy; {year}.
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="body1">All Rights Reserved.</Typography>
          <Typography variant="body1">
            Antonio Arabejo &copy; {year}.
          </Typography>
        </>
      )}
    </Box>
  );
}
