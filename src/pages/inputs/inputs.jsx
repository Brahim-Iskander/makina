import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import './style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Inputs() {
  const navi= useNavigate();
    const [infos, setInfos] = useState({
        title: '',
        description: '',
        img: ''
    });
    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const user = localStorage.getItem('active');
                if (user !="true") {
                    console.log('User not authenticated');
                    navi('/login');
                }
                else{
                  navi('/inputs');


                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('https://makina-1.onrender.com/inputs', infos);
          
          console.log('Success frontend:', response.data);
        } catch (error) {
          console.log('Error sending data:');
        }
        setInfos({
            title: '',
            description: '',
            img: ''
        });
      };
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField value={infos.title} label="title" variant="outlined" onChange={(e)=>setInfos({...infos,title:e.target.value})}/>
      <TextField value={infos.description} label="description" variant="outlined" onChange={(e) => setInfos({ ...infos, description: e.target.value })}/>
      <TextField value={infos.img} label="img url" variant="outlined" onChange={(e) => setInfos({ ...infos, img: e.target.value })} />
      <Button variant="contained" onClick={handleSubmit}>send</Button>

    </Box>
  );
}
