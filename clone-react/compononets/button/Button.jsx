import './Button.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function ButtonH ({ isActive }) {

  return (
    <Stack className='buttonHeader' spacing={3} direction="row">
      <Button variant="contained">Aprende React</Button>
      <Button
        variant="outlined"
        style={{
          color: isActive ? 'white' : '',
          borderRadius: '30px',
          textTransform: 'none',
          fontSize: '15px',
        }}
        className={isActive ? 'btnDark' : ''}
      >
        Referencia de la API
      </Button>
    </Stack>
  );
}

export default ButtonH;
