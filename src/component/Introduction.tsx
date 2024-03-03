import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import DogWaterImage from "../assets/images/dog-water.jpg";

const Introduction = () => {
  return (
    <Stack
      width={{ xs: "70%", sm: "60%", xl: "40%" }}
      height='auto'
      borderRadius='5px'
      padding='2rem'
      marginY='auto'
      gap='2rem'
      flexDirection={{ xs: "column", lg: "row" }}
      sx={{ backgroundColor: "rgba(255,255,255,0.3)", position: "relative" }}
    >
      <Stack
        width={{ xs: "10rem", sm: "12rem", lg: "20em", xl: "10rem" }}
        borderRadius='50%'
        overflow='hidden'
        position={{ xs: "initial", xl: "absolute" }}
        top={-115}
        left={20}
        margin='auto'
      >
        <img
          src={DogWaterImage}
          alt="Chien dans l'eau"
          width={"100%"}
          height={"100%"}
        />
      </Stack>
      <Stack>
        <Typography
          textAlign='center'
          fontWeight='500'
          sx={{ fontSize: "1.3rem" }}
        >
          Hôtel pour toutous
        </Typography>
        <Typography
          sx={{
            textWrap: "pretty",
            paddingTop: "2rem",
          }}
        >
          Vous partez en vacances, en week-end ou êtes hospitalisé et vous avez
          besoin de faire garder votre toutou ?<br />
          <br />
          Confiez-le moi au Noranda Hotel !
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Introduction;
