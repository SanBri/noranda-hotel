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
        sx={{
          boxSizing: "border-box",
          overflow: "hidden",
          background: "linear-gradient(#ea6927, #F9F918 50%, #00FFFF 50%)",
          minHeight: "100vh",
        }}
      >
        <Stack
          padding={{ xs: "0.5rem", xl: "2rem" }}
          boxSizing={"border-box"}
          justifyContent='center'
          alignItems='center'
        >
          <Title />
          <Introduction />
        </Stack>
        <Stack
          justifyContent='center'
          gap={{ xs: "0rem", lg: "2rem" }}
          alignItems='center'
          sx={{
            boxSizing: "border-box",
          }}
        >
          <Stack
            flexDirection={{ xs: "column", lg: "row" }}
            // justifyContent='center'
            gap={{ xs: "0rem", lg: "2rem" }}
            alignItems='center'
          >
            <About />
            <Stack
              width={{ xs: "100%", sm: "22rem", md: "25rem" }}
              height='auto'
              borderRadius='5px'
              alignItems='center'
              gap='1rem'
              padding={{ xs: "0", sm: "1.5rem" }}
              sx={{
                backgroundColor: { xs: "initial", sm: "rgba(255,255,255,0.3)" },
                position: "relative",
              }}
            >
              <Map />
              <Typography textAlign='center'>
                À <b>Lescure d'Albigeois</b>, à moins de 15 minutes de la{" "}
                <b>Cathédrale Ste Cécile</b> et du <b>musée Toulouse Lautrec</b>
                .
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
