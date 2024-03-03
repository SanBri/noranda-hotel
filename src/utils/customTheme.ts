import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  palette: {
    primary: { main: "#ea6927" },
    secondary: { main: "#F9F918" },
  },
  typography: {
    allVariants: {
      fontFamily: "Poppins",
    },
  },
});
