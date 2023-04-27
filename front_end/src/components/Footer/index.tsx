import * as React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {
  Facebook,
  Twitter,
  Instagram,
  YouTube,
  Copyright,
  Face,
} from "@mui/icons-material";
import { Divider, Grid } from "@mui/material";

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
    <Grid
      sx={{
        background:
          "linear-gradient(to right, #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
        paddingTop: "40px",
        paddingBottom: "10px",
        marginTop: "40px",
        position: "absolute",
        width: "100%",
        bottom: "0",
      }}
    >
      <Grid
        container
        sx={{
          paddingLeft: { lg: "15%", md: "0" },
          paddingBottom: "20px",
        }}
      >
        <Grid
          item
          lg={3}
          xs={12}
          sx={{
            textAlign: {
              xs: "center",
              lg: "start",
              paddingTop: { xs: "20px", lg: "0px" },
            },
          }}
        >
          <Typography color="white" variant="h2">
            E.RENT
          </Typography>
          <Grid>
            <Link href="#" sx={{ paddingLeft: { md: "20px" }, color: "white" }}>
              <Facebook />
            </Link>
            <Link href="#" sx={{ paddingLeft: { md: "20px" }, color: "white" }}>
              <Instagram />
            </Link>
            <Link href="#" sx={{ paddingLeft: { md: "20px" }, color: "white" }}>
              <YouTube />
            </Link>
            <Link href="#" sx={{ paddingLeft: { md: "20px" }, color: "white" }}>
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: { xs: "center", lg: "start" },
            paddingTop: { xs: "40px", lg: "0px" },
          }}
        >
          <Typography color="white" variant="h4">
            Information
          </Typography>
          <Link href="#" sx={{ textDecoration: "none" }}>
            <Typography color="white" variant="h6">
              Terms & Conditions
            </Typography>
          </Link>
          <Link href="#" sx={{ textDecoration: "none" }}>
            <Typography color="white" variant="h6">
              Help & Support
            </Typography>
          </Link>
          <Link href="#" sx={{ textDecoration: "none" }}>
            <Typography color="white" variant="h6">
              About
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          lg={3}
          xs={12}
          sx={{
            textAlign: { xs: "center", lg: "start" },
            paddingTop: { xs: "40px", lg: "0px" },
          }}
        >
          <Typography color="white" variant="h4">
            Contact Us
          </Typography>
          <Typography color="white" variant="h6">
            +976 90909090
          </Typography>
          <Typography color="white" variant="h6">
            +976 80808080
          </Typography>
        </Grid>
        <Grid
          lg={3}
          xs={12}
          sx={{
            textAlign: { xs: "center", lg: "start" },
            paddingTop: { xs: "40px", lg: "0px" },
          }}
        >
          <Typography color="white" variant="h4">
            Mail
          </Typography>
          <Typography
            color="white"
            variant="h6"
            sx={{ paddingTop: { md: "5px" } }}
          >
            e.rent@gmail.com
          </Typography>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ textAlign: "center", paddingTop: "10px" }}>
        <Typography color="white" variant="h6">
          2023
          <Copyright sx={{ height: "20px", marginBottom: "4px" }} /> erent.mn
        </Typography>
      </Grid>
    </Grid>
  );
}

{
  /* <Box
sx={{
  position: "static",
  bottom: 0,
  background:
    "linear-gradient(to right, #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
  color: "white",
  paddingLeft: "10%",
  paddingRight: "10%",
  paddingTop: "30px",
  paddingBottom: "30px",
  marginTop: "50px",
  width: "100",
}}
>
<Typography
  variant="h3"
  sx={{ textAlign: { xs: "center", sm: "start" } }}
>
  E.RENT
</Typography>
<Box
  sx={{
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    paddingTop: "20px",
    textAlign: { xs: "center", sm: "start" },
  }}
>
  <Box sx={{}}>
    <Typography variant="h4">Mail</Typography>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      e.rent@gmail.com
    </Link>
  </Box>
  <Box
    sx={{
      marginLeft: { sm: "15%" },
      display: "flex",
      flexDirection: "column",
      textAlign: { xs: "center", sm: "start" },
    }}
  >
    <Typography variant="h4" sx={{ marginTop: { xs: "20px" } }}>
      Social
    </Typography>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      <Facebook />
      Facebook
    </Link>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      <Instagram />
      Instagram
    </Link>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      <Twitter />
      Twitter
    </Link>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      <YouTube />
      YouTube
    </Link>
  </Box>
  <Box
    sx={{
      marginLeft: { sm: "15%" },
      textAlign: { xs: "center", sm: "start" },
    }}
  >
    <Typography variant="h4" sx={{ marginTop: { xs: "20px" } }}>
      Contacts
    </Typography>
    <Typography sx={{ paddingTop: "5px" }}>+976 98364566</Typography>
    <Typography sx={{ paddingTop: "5px" }}>+976 98364566</Typography>
    <Typography sx={{ paddingTop: "5px" }}>+976 98364566</Typography>
  </Box>
  <Box
    sx={{
      marginLeft: { sm: "15%" },
      display: "flex",
      flexDirection: "column",
    }}
  >
    <Typography variant="h4" sx={{ marginTop: { xs: "20px" } }}>
      Help
    </Typography>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      Түгээмэл асуулт & хариулт
    </Link>
    <Link
      href="#"
      sx={{ textDecoration: "none", paddingTop: "5px" }}
      color="inherit"
    >
      Нууцлалын бодлого
    </Link>
  </Box>
</Box>
</Box> */
}
