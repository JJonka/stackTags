import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.scss";
import { ReactSVG } from "react-svg";

interface IProps {
  children: string | (string & JSX.Element);
  fontColor: string;
  bgrColor: string;
  iconSrc: string;
}

const Header = ({ children, fontColor, bgrColor, iconSrc }: IProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        position: "sticky",
        backgroundColor: bgrColor,
        width: "100vw",
      }}
    >
      <Typography
        variant="h5"
        color={fontColor}
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          padding: "10px",
          marginLeft: "20px",
        }}
      >
        <ReactSVG src={iconSrc} className={styles.logo}></ReactSVG>
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
