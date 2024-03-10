import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import Logo from "../assets/images/logo.png";

const Title = () => {
  return (
    <>
      <Stack
        width='100%'
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent='center'
        alignItems='center'
      >
        <Stack
          width={{ xs: "8rem", xl: "12rem" }}
          sx={{ transform: "rotate(-10deg)" }}
        >
          <img
            className='heart-animation'
            src={Logo}
            alt='Logo Noranda Hôtel'
          />
        </Stack>
        <Typography
          fontFamily={"Pacifico"}
          sx={{
            paddingTop: { xs: 0, lg: "3rem", xl: "6rem" },
            fontSize: { xs: "2rem", xl: "3.2rem" },
          }}
        >
          Le Noranda
        </Typography>
      </Stack>
    </>
  );
};

export default Title;
