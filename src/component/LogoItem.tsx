import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

interface Props {
  icon: IconDefinition;
  title: string;
}

const LogoItem = ({ icon, title }: Props) => {
  return (
    <Stack gap={{ xs: "0.5rem", sm: "1rem" }}>
      <FontAwesomeIcon icon={icon} size='xl' color='#1B323D' />
      <Typography
        sx={{
          textWrap: "pretty",
          fontSize: { xs: "0.8rem", xl: "1.2rem" },
          textAlign: "center",
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default LogoItem;
