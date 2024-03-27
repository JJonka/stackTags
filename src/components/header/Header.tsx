import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Header.module.scss";
import { ReactSVG } from "react-svg";

interface IProps {
  children: string | (string & JSX.Element);
}

const Header = ({ children }: IProps) => {
  return (
    <Box
      sx={{ display: "flex", position: "sticky", backgroundColor: "#2196f3" }}
    >
      <Typography
        variant="h5"
        color="white"
        component="div"
        className={styles.typography}
      >
        <ReactSVG src="/assets/logo.svg" className={styles.logo}></ReactSVG>
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
