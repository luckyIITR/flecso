import React, { useEffect, useRef, useState } from "react";
import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import TopLeft from "./Components/TopLeft";
import TopRight from "./Components/TopRight";
import ChartComp from "./Components/ChartComp";
import BottomRight from "./Components/BottomRight";
import BottomLeft from "./Components/BottomLeft";

const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  const ref = useRef(null);
  const [width, setWidth] = useState();
  const getListSize = () => {
    const newWidth = ref.current.offsetWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getListSize);
    setWidth(ref.current.offsetWidth);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TopLeft />
          </Grid>
          <Grid item xs={6}>
            <TopRight />
          </Grid>
          <Grid item xs={12} ref={ref}>
            <ChartComp width={width} />
          </Grid>
          <Grid item xs={6}>
            <BottomLeft />
          </Grid>
          <Grid item xs={6}>
            <BottomRight />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
