import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './style.css'
import { Height } from '@mui/icons-material';
export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1}} className="full">
      <AppBar position="static" style={{ backgroundColor: 'transparent' }}>
        <Toolbar className="testt">
        <div className="divgauc">
          <img className="logo" src="makinapack.png" style={{height:'80px',width:'80px'}}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mackina Pack
          </Typography>
          </div>
          <div className="divgauc">
          <Button color="white" href="#info">Who we are?</Button>
          <Button color="black" href="#machine" > Machines</Button>
          <Button color="black" href="#contact">contact</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'600' }}>
            <a href="tel:+21621214512" target="_blank" rel="noopener noreferrer" style={{color:'white',fontWeight:'600'}}>Appeler +21621214512</a>
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}