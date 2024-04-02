import Box from "@mui/material/Box";
import Header from "../components/header/Header";
import TagsTable from "../components/tagsTable/TagsTable";

const App = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      gap: "15px",
    }}
  >
    <Header fontColor="white" bgrColor="dodgerblue" iconSrc="/assets/logo.svg">
      STACKOVERFLOW'S TAGS LIST
    </Header>
    <TagsTable></TagsTable>
  </Box>
);

export default App;
