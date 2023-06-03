import React from "react";
//import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from "@mui/material/styles";
import {
  Typography,
  Button,
  Card,
  CardContent,
  Box,
  Grid,
} from "@mui/material";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  backgroundColor: theme.palette.primary.lighter,
  [theme.breakpoints.up("md")]: {
    height: "100%",
    display: "flex",
    textAlign: "left",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

// ----------------------------------------------------------------------

export default function AppWelcome() {
  return (
    <Grid>
      <Box>
        <RootStyle>
          <CardContent
            sx={{
              p: { md: 0 },
              pl: { md: 5 },
              color: "grey.800",
            }}
          >
            <Typography gutterBottom variant="h4">
              AICTE Approved Institutes for the Academic Year: 2021-2022
              <br />
            </Typography>

            <Button variant="contained" to="#">
              Go Now
            </Button>
          </CardContent>
        </RootStyle>
      </Box>
    </Grid>
  );
}
