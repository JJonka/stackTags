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
      sx={{
        display: "flex",
        position: "sticky",
        backgroundColor: "dodgerblue",
        width: "100vw",
      }}
    >
      <Typography
        variant="h5"
        color="white"
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
        <ReactSVG src={"/assets/logo.svg"} className={styles.logo}></ReactSVG>
        {children}
      </Typography>
    </Box>
  );
};

export default Header;
