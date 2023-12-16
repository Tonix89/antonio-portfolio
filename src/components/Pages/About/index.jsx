import { Box, Container, Typography } from '@mui/material';

export default function AboutMePage() {
  const date = new Date().toISOString();
  const year = parseInt(date.split('-')[0]);
  const month = parseInt(date.split('-')[1]);
  const day = parseInt(date.split('-')[2]);
  let age;

  if (month < 5 && day < 9) {
    age = year - 1990;
  } else {
    age = year - 1989;
  }

  return (
    <Box sx={{ py: 2 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          minHeight: '81.6vh',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: 'primary.main',
            mb: 2,
            fontFamily: 'Helvetica Neue',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textIndent: '20px',
            mb: 2,
            fontFamily: 'Helvetica Neue',
            fontWeight: 'bold',
          }}
        >
          I'm {age} years old and from the Philippines. I live in Norway with my
          wife and two kids. I am currently working in a warehouse here in Oslo.
          I have a bachelor's degree in marine transportation from the
          Philippines and a bachelor's degree in leadership and theology here in
          Norway. I also finished my two-year Front-End web development course
          at Noroff in December 2023.{' '}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            marginLeft: 0,
            borderRadius: '5px',
            alignSelf: 'start',
            width: { xs: '100%', sm: '500px' },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              p: 1,
              fontFamily: 'Helvetica Neue',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            Work Experience
          </Typography>
        </Box>
        <ul sx={{ mb: 2 }}>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Quarter Master
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Mess Boy
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Warehouse Employee
            </Typography>
          </li>
        </ul>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            marginLeft: 0,
            borderRadius: '5px',
            alignSelf: 'start',
            width: { xs: '100%', sm: '500px' },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              p: 1,
              fontFamily: 'Helvetica Neue',
              fontWeight: 'bold',
              fontStyle: 'italic',
            }}
          >
            Programming Experience
          </Typography>
        </Box>
        <ul sx={{ mb: 2 }}>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Designing web app front-end using CSS.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Designing web app front-end using Bootstrap.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Customizing Bootstrap with SaSS.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Using git commands.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Using wordpress and google sheet as CMS.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Creating web app front-end functionality using Javascript.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Using Javascript framework React.
            </Typography>
          </li>
          <li>
            <Typography
              variant="body1"
              sx={{ fontFamily: 'Helvetica Neue', fontWeight: 'bold' }}
            >
              Using React JS CSS framework Material UI.
            </Typography>
          </li>
        </ul>
      </Container>
    </Box>
  );
}
