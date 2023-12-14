import { Typography, Box, Container } from '@mui/material';

export default function ProjectPage() {
  return (
    <Box sx={{ height: 'inherit' }}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography>This is project page</Typography>
      </Container>
    </Box>
  );
}
