import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loader() {
  return (
    <Box sx={{ width: '100%' }}>
      <LinearProgress
        sx={{ position: 'absolute', top: 0, left: 0, width: '100%' }}
      />
    </Box>
  );
}
