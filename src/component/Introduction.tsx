import {
  faFilePen,
  faMobileScreenButton,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

import DogWaterImage from "../assets/images/dog-water.jpg";
import LogoItem from "./LogoItem";

const Introduction = () => {
  return (
    <Stack
      width={{ xs: "70%", xl: "53%" }}
      margin={{ xs: "1rem auto 0", sm: "1rem auto 0", xl: "5rem auto 0" }}
      height='auto'
      borderRadius='5px'
      padding='0.5rem 2rem'
      gap='2rem'
      sx={{ backgroundColor: "rgba(255,255,255,0.3)", position: "relative" }}
    >
      <Stack
        flexDirection={{ xs: "column", lg: "row" }}
        gap={{ xs: "0.1rem", lg: "2rem" }}
      >
        <Stack
          width={{ xs: "10rem", sm: "9rem", lg: "12rem", xl: "10rem" }}
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
            sx={{
              textAlign: "justify",
              textWrap: "pretty",
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1rem" },
            }}
          >
            Vous allez visiter la région, vous partez en vacances ou en week-end
            ?
            <br />
            <br />
            Venez confier votre "bébé" à une fan des premiers jours de Mabrouk,
            Junior et de leur maitre JPH.
          </Typography>
          <Typography
            sx={{
              textAlign: "justify",
              textWrap: "pretty",
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1rem" },
            }}
          >
            Dans un environnement calme et reposant, l'<b>ABC</b> est au
            rendez-vous :
            <br />- De l'<b>A</b>ttention,
            <br />- de la <b>B</b>ienveillance,
            <br />- et des <b>C</b>âlins
          </Typography>

          <Typography
            sx={{
              textWrap: "pretty",
              paddingTop: "2rem",
              fontSize: { xs: "0.8rem", xl: "1rem" },
            }}
          >
            Chez moi votre toutou passe directement de son coussin dans le
            salon, au jardin sécurisé.
          </Typography>
        </Stack>
      </Stack>
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        gap='2rem'
        justifyContent={"center"}
      >
        <LogoItem icon={faFilePen} title='Questionnaire de pré-admission' />
        <LogoItem
          icon={faMobileScreenButton}
          title='Envoi régulier de photos afin de vous rassurer'
        />
        <LogoItem
          icon={faTriangleExclamation}
          title='Pour un service de qualité, les places sont limitées'
        />
      </Stack>
    </Stack>
  );
};

export default Introduction;
