import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <NavLink to={'/projects'}>Go to projects</NavLink>
    </>
  );
}
