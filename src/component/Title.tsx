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
          width={{ xs: "8rem", sm: "10rem", xl: "12rem" }}
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
            paddingTop: { xs: 0, sm: "7rem" },
            fontSize: { xs: "2rem", sm: "2.6rem", xl: "3.2rem" },
          }}
        >
          Le Noranda
        </Typography>
      </Stack>
    </>
  );
};

export default Title;
