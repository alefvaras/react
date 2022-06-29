
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import '../styles/Footer.css'

import s from '../styles/Footer.module.css'
export default function BasicButtons() {

    const containerStyle={display:'flex',justifyContent:'center '};
  return (
    <Stack spacing={2} direction="row" style={containerStyle}>
    {/* <Stack spacing={2} direction="row" style={{display:'flex',justifyContent:'center '}}> */}
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      {/* <button className={[s.custom_btn, s.custom_btn2]}>Explore2</button> */}

      <button className={`${s.custom_btn} ${s.custom_btn2}`}>Explore2</button>
    </Stack>
  );
}