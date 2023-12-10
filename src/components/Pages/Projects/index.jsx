import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ProjectPage() {
  return (
    <>
      <NavLink to={'/'}>
        <Button>Go to home</Button>
      </NavLink>
    </>
  );
}
