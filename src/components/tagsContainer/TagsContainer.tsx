import { useEffect } from "react";
import { useAppDispatch } from "../../app/stateStore";
import Pagination from "../pagination/Pagination";
import { getTags } from "../tagsTable/TableStateSlice";

import TagsTable from "../tagsTable/TagsTable";

import Box from "@mui/material/Box";

const TagContainer = () => {
  const dispatch = useAppDispatch();

  const getData = async () =>
    dispatch(
      getTags({ page: "1", pagesize: "10", sort: "name", order: "asc" })
    );

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <TagsTable></TagsTable>
    </Box>
  );
};

export default TagContainer;
