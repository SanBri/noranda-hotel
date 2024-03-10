import { Stack, ThemeProvider, Typography } from "@mui/material";

import { customTheme } from "./utils/customTheme";

import Title from "./component/Title";
import Introduction from "./component/Introduction";
import About from "./component/About";
import Map from "./component/Map";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Stack
        overflow='hidden'
        padding={{ xs: "0.5rem", xl: "2rem" }}
        boxSizing={"border-box"}
        alignItems='center'
        sx={{ background: "linear-gradient(#ea6927, #F9F918)" }}
      >
        <Title />
        <Introduction />
      </Stack>
      <Stack
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent='center'
        gap={{ xs: "0rem", lg: "2rem" }}
        alignItems='center'
        sx={{
          boxSizing: "border-box",
          background:
            "linear-gradient(#F9F918, #F9F918 15%, #00FFFF 85%, #00FFFF)",
        }}
      >
        <About />
        <Stack
          width={{ xs: "auto", sm: "25rem" }}
          height='auto'
          borderRadius='5px'
          alignItems='center'
          gap='1rem'
          padding='1.5rem'
          sx={{
            backgroundColor: { xs: "initial", sm: "rgba(255,255,255,0.3)" },
            position: "relative",
          }}
        >
          <Map />
          <Typography textAlign='center'>
            À 45 minutes de <b>Castres</b>.
            <br />À 1h de <b>Toulouse</b>, <b>Montauban</b> et <b>Rodez</b>
          </Typography>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
