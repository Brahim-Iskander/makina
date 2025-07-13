import './style.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Machine from './Machine/Machine.jsx';
import Typography from '@mui/material/Typography';
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function Machines() {
  const [machines, setMachines] = useState([]);
  useEffect(() => {
    axios.get('https://makina-1.onrender.com/inputs')
      .then((response) => {
        setMachines(response.data);
        console.log('Machines fetched successfully:', response.data);
      })
      .catch((error) => {
        console.log('Error fetching machines:', error);
      });
  }, []);
  


  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: '600', textAlign: 'center', marginTop: '100px', marginBottom: '100px' }}>
          Machines
        </Typography>
        <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center' ,marginTop:'100px',marginBottom:'100px',flexWrap: 'wrap', gap: 4}} >
          {machines.map((machine, index) => (
            <Machine
              key={machine._id}
              img={machine.img}
              title={machine.title}
              description={machine.description}
            />
          ))}
          



        </Box>
      </Container>
    </React.Fragment>
  );
}
