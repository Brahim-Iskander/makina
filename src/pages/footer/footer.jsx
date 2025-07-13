import './style.css';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid';
export default function footer() {
    return(
        
        <div style={{width:'100vw',height:'350px',backgroundColor:'rgb(51, 201, 255)',position:'relative'}}>
             <Box sx={{ flexGrow: 1 ,marginTop:'50px',marginBottom:'50px',paddingLeft:'50px',paddingRight:'50px'}}>
      <Grid container spacing={2} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>   
        <Grid size={5} style={{marginLeft:'50px',textAlign:'left',overFlow:'hidden'}}> 

        <Grid container spacing={2}>
            <Grid size={12}>
            <Typography variant="h3" component="h2" style={{fontWeight:'bold',marginTop:'20px'}}>
                Mackina Pack
            </Typography>
            </Grid>
            <Grid size={12}>
            <Typography variant="body1" component="p" >
                Mackina Pack est une entreprise spécialisée dans la fabrication et la distribution de produits d'emballage de haute qualité. Notre mission est de fournir des solutions d'emballage innovantes et durables pour répondre aux besoins de nos clients.
            </Typography>
            </Grid>
            <Grid size={12}>
            <Stack direction="row" spacing={1}>
                <IconButton color="primary" aria-label="facebook page" href="https://www.facebook.com/Hrewen" target="_blank">
                    <FacebookOutlinedIcon style={{fontSize:"40px"}}/>
                </IconButton>
            </Stack>
    
            </Grid>



        </Grid>
            
        </Grid>
        <Grid size={6}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><LocationOnIcon/>Adresse: Avenue de la république Bennane 5025 -Monastir</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <PhoneIcon/><h4>Email:</h4><a href='tel:212145121' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>+21621214512</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <EmailIcon/><h4>Email:</h4><a href='mailto:mackinapack@outlook.com' style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>Mackinapack@outlook.com</a>
            </div>
          
        </Grid>
        
      </Grid>
    </Box>

        
        <div style={{position:'absolute',bottom:'0'}}>
        <hr style={{width:'80%',color:'black',background:'black',marginLeft:'auto',marginRight:'auto'}}/>
        <div className="footer">
            
            <div className="footer-content">
                <div >
                <p style={{marginTop:"0"}}>© 2025 Mackina Pack. All rights reserved.</p>
                </div>
                <div className="footer-text">
                    <a href="http://localhost:5173/"> privacy Policy</a>
                    <a href="http://localhost:5173/">Terms of Service</a>
                    
                   
                </div>
            </div>
        </div>
        </div>
        </div>


    )
    
};
