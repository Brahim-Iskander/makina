import Card from '@mui/material/Card';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RecyclingIcon from '@mui/icons-material/Recycling';
import Typography from '@mui/material/Typography';
import './style.css'
import { motion,useInView} from "framer-motion";
export default function featur() {
  const MotionCard = motion(Card);
    return (
        <div style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MotionCard
  sx={{ maxWidth: 345, margin: '20px', borderRadius: '10px' }}
  className='card'
  animate={{ x: 0 }}
  initial={{ x: '-100vw' }}
  transition={{ delay: 1, duration: 1 }}
>
  <CardMedia
    sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    title="green iguana"
  >
    <Inventory2Icon sx={{ fontSize: '80px', color: '#33c8ff' }} />
  </CardMedia>

  <CardContent
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowWrap: 'break-word', // ✅ fix here too
    }}
  >
    <Typography gutterBottom variant="h5" component="div" className='title'>
      Qualité
    </Typography>
    <Typography
      variant="body2"
      sx={{ color: 'text.secondary', maxWidth: '80%' }}
      className='content'
    >
      La qualité de nos produits est certifiée par des contrôles stricts et continus pour maintenir
      les règles de production, d’hygiène et de sécurité.
    </Typography>
  </CardContent>
</MotionCard>


<MotionCard
  sx={{ maxWidth: 345, margin: '20px', borderRadius: '10px' }}
  className='card'
  animate={{ x: 0 }}
  initial={{ x: '-100vw' }}
  transition={{ delay: 2, duration: 1 }}
>
      <CardMedia
        sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        title="green iguana"
      ><RecyclingIcon sx={{fontSize:'80px',color:'#33c8ff'}}/></CardMedia>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent: 'center',overflow: 'break-word'}}>
        <Typography gutterBottom variant="h5" component="div" className='title'>
          Environnement
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',maxWidth:'80%' }}className='content'>
        Nous maintenons une attention constante et l'application des directives dans les domaines de l’énergie, de l’environnement et de la sécurité.
        </Typography>
      </CardContent>
      
    </MotionCard>


    <MotionCard
  sx={{ maxWidth: 345, margin: '20px', borderRadius: '10px' }}
  className='card'
  animate={{ x: 0 }}
  initial={{ x: '-100vw' }}
  transition={{ delay: 3, duration: 1 }}
>
      <CardMedia
        sx={{ height: 140, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        title="green iguana"
      ><LocalShippingIcon sx={{fontSize:'80px',color:'#33c8ff'}}/></CardMedia>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,justifyContent: 'center',overflow: 'break-word'}}>
        <Typography gutterBottom variant="h5" component="div" className='title'>
          Livraison rapide
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary',maxWidth:'80%' }}className='content'>
        Nous garantissons une livraison rapide et efficace, respectant les délais avec fiabilité et qualité.
        </Typography>
      </CardContent>
      
    </MotionCard>
        </div>
    );
    
};
