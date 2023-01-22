import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {List} from "antd";
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = ({ id , field1, field2, description, last_entry_id, feeds})=>{
    var data = [];
    feeds && feeds.map( ele=>{
      return(<>
        {data.push(ele.field1)}
      </>)
    })
        return (
          <Box sx={{ minWidth: 295 }}>
            <Card variant="outlined">
      
            <CardContent>
            <Typography variant="h5" component="div">
              Title : {!description ? '....' : description}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
             Id :  {!id ? '...' : id}
            </Typography>
            
           
            


            <List
              size="small"
              header={<div>Last 10 entries of Temp</div>}
              
              bordered
              dataSource={data} 
              renderItem={(item) => <List.Item>{item}  &#8451;</List.Item>}
            />

          </CardContent>
          <CardActions>
            <Button size="small"> Last Entry Id : {!last_entry_id ? "..." : last_entry_id}</Button>
          </CardActions>
      
            </Card>
          </Box>
        );
      
}

export default card;
 