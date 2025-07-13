import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 340,borderRadius:'10px', margin: '5px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardActionArea>
        <CardMedia sx={{ 
    objectFit: 'contain', // instead of backgroundSize
    objectPosition: 'center', // instead of backgroundPosition
  }}
          component="img"
          height="140"
          width="140"
          image={props.img}
          alt="green iguana"
          margin="20px"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: '600' }}>
          {props.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.primary',maxWidth: '90%' }}>
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
