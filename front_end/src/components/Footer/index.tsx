import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box sx={{position:"static" ,bottom:0, background: 'linear-gradient(to right, #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)',color:"white",paddingLeft:"10%",paddingRight:"10%",paddingTop:"30px",paddingBottom:"30px",marginTop:"50px",width:"100"}}>
          <Typography variant='h3' sx={{textAlign:{xs:"center",sm:"start"}}}>
            E.RENT
          </Typography>
          <Box sx={{display:"flex",flexDirection:{xs:"column",sm:"row"},paddingTop:"20px",textAlign:{xs:"center",sm:"start"}}}>
            <Box sx={{}}>
                <Typography variant="h4">Mail</Typography>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"10px"}} color="inherit">e.rent@gmail.com</Link>
            </Box>
            <Box sx={{marginLeft:{sm:"15%"},display:"flex",flexDirection:"column",textAlign:{xs:"center",sm:"start"}}}>
                <Typography variant="h4">Social</Typography>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"10px"}} color="inherit">Facebook</Link>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"5px"}} color="inherit">Instagram</Link>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"5px"}} color="inherit">Twitter</Link>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"5px"}} color="inherit">YouTube</Link>
            </Box>
            <Box sx={{marginLeft:{sm:"15%"},textAlign:{xs:"center",sm:"start"}}}>
                <Typography variant="h4" >Contacts</Typography>
                <Typography sx={{paddingTop:"10px"}}>+976 98364566</Typography>
                <Typography sx={{paddingTop:"5px"}}>+976 98364566</Typography>
                <Typography sx={{paddingTop:"5px"}}>+976 98364566</Typography>
            </Box>
            <Box sx={{marginLeft:{sm:"15%"},display:"flex",flexDirection:"column"}}>
                <Typography variant="h4">Help</Typography>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"10px"}} color="inherit">Түгээмэл асуулт & хариулт</Link>
                <Link href="#" sx={{textDecoration:"none",paddingTop:"5px"}} color="inherit">Нууцлалын бодлого</Link>
            </Box>
          </Box>
      </Box>
  );
}