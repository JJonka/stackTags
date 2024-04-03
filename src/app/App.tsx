import Box from "@mui/material/Box";
import Header from "../components/header/Header";
import { useAppDispatch } from "./stateStore";
import { getTags } from "../components/tagsTable/TableStateSlice";
import TagsTable from "../components/tagsTable/TagsTable";

const App = () => {
  const dispatch = useAppDispatch();

  dispatch(
    getTags({
      page: "1",
      pagesize: `10`,
      sort: "name",
      order: "asc",
    })
  );

  return (
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
      <Header
        fontColor="white"
        bgrColor="dodgerblue"
        iconSrc="/assets/logo.svg"
      >
        STACKTAG INSIGHT - a Stack Overflow's tags browser
      </Header>
      <TagsTable></TagsTable>
    </Box>
  );
};

export default App;
