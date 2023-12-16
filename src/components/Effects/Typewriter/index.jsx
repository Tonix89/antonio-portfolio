import Typewriter from 'typewriter-effect';
import { Typography } from '@mui/material';

export default function TypewriterEffect(props) {
  const texts = props.texts;

  return (
    <Typography variant="h4">
      <Typewriter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
        }}
      />
    </Typography>
  );
}
