import {
  Typography,
  Box,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  IconButton,
  Link,
  Avatar,
  Dialog,
} from '@mui/material';
import Auction from '../../../Images/auction.png';
import Astore from '../../../Images/astore.png';
import Holidaze from '../../../Images/holidaze.png';
import Web from '../../../Images/web.png';
import Github from '../../../Images/github.png';
import { useState } from 'react';

const projects = [
  {
    id: 0,
    title: 'Subasta',
    description: `Subasta is an online auction house. "Subasta" is a Cebuano dialect from Philippines which means "Auction". This web app is part of my school exam as a student in Noroff.`,
    image: Auction,
    repo: 'https://github.com/Tonix89/Subasta',
    live_site: 'https://mellifluous-biscotti-a836e6.netlify.app/',
  },
  {
    id: 1,
    title: 'Astore',
    description:
      'Astore is an online store website. This project is built using React frameworks. The products in this project are fetched by an API link provided by Noroff.',
    image: Astore,
    repo: 'https://github.com/Tonix89/astore',
    live_site: 'https://stunning-syrniki-4ec358.netlify.app/',
  },
  {
    id: 2,
    title: 'Holidaze',
    description:
      'Holidaze is a venue booking website. Users who register as a venue managers can create a venue. Other registered users can book this venue on their chosen dates. This project uses API links provided by Noroff.',
    image: Holidaze,
    repo: 'https://github.com/Tonix89/project-exam-2-holidaze',
    live_site: 'https://holidazetonix.netlify.app/',
  },
];

export default function ProjectPage() {
  const [modal, setModal] = useState(false);
  const [modalImg, setModalImg] = useState();

  const handleModal = (img) => {
    setModalImg(img);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <>
      <Box sx={{ py: 2 }}>
        <Container maxWidth="lg" sx={{ minHeight: '81.6vh' }}>
          <Grid container rowSpacing={2} columnSpacing={2}>
            {projects.map((project) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <Card
                    sx={{
                      maxWidth: '100%',
                      height: '550px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box>
                      <CardActionArea
                        onClick={() => handleModal(project.image)}
                      >
                        <CardMedia
                          sx={{ height: 280 }}
                          image={project.image}
                          title={project.title}
                        />
                      </CardActionArea>
                      <CardContent>
                        <Typography
                          variant="h5"
                          sx={{ color: 'primary.main', textAlign: 'center' }}
                        >
                          {project.title}
                        </Typography>
                        <Typography variant="body1" sx={{ textIndent: '20px' }}>
                          {project.description}
                        </Typography>
                      </CardContent>
                    </Box>
                    <CardActions
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconButton>
                        <Link
                          href={project.repo}
                          sx={{ color: 'secondary.main' }}
                        >
                          <Avatar
                            variant="rounded"
                            alt={project.title}
                            src={Github}
                            sx={{
                              width: { xs: 30, sm: 48 },
                              height: { xs: 30, sm: 48 },
                            }}
                          />
                        </Link>
                      </IconButton>
                      <IconButton>
                        <Link
                          href={project.live_site}
                          sx={{ color: 'secondary.main' }}
                        >
                          <Avatar
                            variant="rounded"
                            alt="Website Logo"
                            src={Web}
                            sx={{
                              width: { xs: 30, sm: 48 },
                              height: { xs: 30, sm: 48 },
                            }}
                          />
                        </Link>
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
      <Dialog open={modal} onClose={handleClose}>
        <Box component="img" src={modalImg} />
      </Dialog>
    </>
  );
}
