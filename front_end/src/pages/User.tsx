import React, { useState } from "react";
import Image from "next/image";
import Rents from "@/components/SupplierComp/Rents";
import History from "@/components/SupplierComp/History";
import { Bookmark } from "@/components/UserComp/Bookmark";
import {
  Button,
  Typography,
  Box,
  ButtonGroup,
  Grid,
  Container,
} from "@mui/material";

const supplierIcon = require("../assets/images/SupplierProfile.png");

const render = [
  {
    title: "Rents",
    text: "Rents хэсэг дарагдсан байна",
    component: <Rents />,
  },
  {
    title: "History",
    text: "R.History хэсэг дарагдсан байна",
    component: <History />,
  },
  {
    title: "Bookmark",
    text: "Bookmark хэсэг дарагдсан байна",
    component: <Bookmark />,
  },
];

const Supplier = () => {
  const [selectedRender, setSelectedRender] = useState("");

  const handleClicked = (text) => {
    setSelectedRender(text);
  };

  return (
    <Grid
      container
      sx={{
        marginTop: { sm: "100px" },
        flexGrow: 1,
        paddingLeft: { md: "200px", sm: "0" },
        paddingRight: { md: "400px", sm: "0" },
      }}
    >
      <Grid
        item
        className="profile-1"
        md={6}
        xs={12}
        sx={{
          paddingTop: { md: "100px", sm: "0" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Image src={supplierIcon} alt="SupplierProfile" width={130} />
        <Typography sx={{ paddingTop: { xs: "20px" } }} variant="h4">
          Name
        </Typography>
        <Typography sx={{ paddingTop: { xs: "20px" } }} variant="h6">
          E-Mail
        </Typography>
        <Typography sx={{ paddingTop: { xs: "20px" } }} variant="h6">
          Phone
        </Typography>
        <Typography sx={{ paddingTop: { xs: "20px" } }} variant="h6">
          Location
        </Typography>
        <Box
          sx={{
            background:
              "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
            width: "200px",
            height: "45px",
            marginTop: "150px",
            borderRadius: "5px",
          }}
        >
          <Button
            sx={{ width: "200px", height: "45px" }}
            style={{ backgroundColor: "transparent" }}
            variant="contained"
          >
            <Typography>Edit</Typography>
          </Button>
        </Box>
      </Grid>
      <Grid
        item
        className="profile-2"
        md={6}
        xs={12}
        sx={{
          marginTop: { xs: "50px", md: "0" },
        }}
      >
        <ButtonGroup sx={{ display: "flex" }}>
          {render.map((el, id) => (
            <Button
              key={id}
              sx={{
                color: "#06b6d4",
                border: "solid #06b6d4 2px",
                borderBottom: "none",
                borderRadius: "10px",
                outline: "none",
                width: { md: "25%", xs: "100%" },
                ":hover": {
                  border: "solid #06b6d4 2px",
                  borderBottom: "none",
                },
              }}
              onClick={() => {
                handleClicked(el);
              }}
            >
              {el.title}
            </Button>
          ))}
        </ButtonGroup>
        <Box
          sx={{
            color: "#06b6d4",
            paddingTop: "15px",
            width: { md: "75%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "solid #06b6d4",
            borderRadius: "10px",
            minHeight: { md: "700px", sm: "500px" },
          }}
        >
          <Typography>{selectedRender.component}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Supplier;
