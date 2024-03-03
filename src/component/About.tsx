import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import AcacedLogo from "../assets/images/acaced-logo.png";
import DogWaterImage from "../assets/images/dog-water.jpg";
import ForbiddenIcon from "../assets/images/forbidden-icon.svg";
import WarningLogo from "../assets/images/warning-icon.svg";

const About = () => {
  return (
    <Stack
      flexDirection={{ xs: "column", lg: "row" }}
      gap='2rem'
      padding={{ xs: "1rem 2rem 2rem", xl: "1rem 2rem" }}
    >
      <Stack
        width='25rem'
        height='auto'
        borderRadius='5px'
        padding='1.5rem'
        sx={{ backgroundColor: "rgba(255,255,255,0.3)", position: "relative" }}
      >
        <Stack margin='auto'>
          <img
            src={AcacedLogo}
            alt='Logo Acaced'
            width={"100%"}
            height={"100%"}
          />
        </Stack>
        <Typography
          sx={{
            textWrap: "pretty",
            textAlign: "center",
          }}
        >
          En possession de l'ACACED obligatoire, je suis également expérimentée.
          <br />
          <br />
          L'<b>ABC</b>* attend votre toutou ! <br />
          Partez sereinement, je gère !
        </Typography>
        <Typography fontSize={"0.7rem"} textAlign='end'>
          <br />* <b>A</b>ttention, <b>B</b>ienveillance et <b>C</b>âlins !
        </Typography>
      </Stack>

      <Stack
        width='25rem'
        height='auto'
        borderRadius='5px'
        padding='1.5rem'
        sx={{ backgroundColor: "rgba(255,255,255,0.3)", position: "relative" }}
      >
        <Stack
          width={{ xs: "10rem", sm: "12rem", lg: "20em", xl: "10rem" }}
          borderRadius='50%'
          overflow='hidden'
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
        <Stack gap='1rem'>
          <Stack alignItems='center' gap='0.5rem'>
            <img src={WarningLogo} width='25rem' />
            <Typography sx={{ textWrap: "pretty" }}>
              Attention, Les places sont limitées
            </Typography>
          </Stack>
          <Stack alignItems='center' gap='0.5rem'>
            <img src={ForbiddenIcon} width='25rem' />
            <Typography>Interdiction aux chiens de catégorie 1 et 2</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default About;
