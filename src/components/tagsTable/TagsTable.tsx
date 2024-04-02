import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TableSortLabel from "@mui/material/TableSortLabel";
import { useAppDispatch, useTypedSelector } from "../../app/stateStore";
import { getTags } from "./TableStateSlice";
import { useEffect, useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, Box } from "@mui/material";

interface ITag {
  count: number;
  name: string;
}

const TagsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState<number>(0);
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<"name" | "popular">("name");

  const dispatch = useAppDispatch();

  const data: ITag[] = useTypedSelector((state) => state.getTags.currentArray);
  const loading: boolean = useTypedSelector((state) => state.getTags.loading);
  const error: string | null = useTypedSelector((state) => state.getTags.error);

  const getTotalCount = async () => {
    const response = await fetch(
      "https://api.stackexchange.com/2.3/tags?order=asc&sort=name&site=stackoverflow&filter=!-)HENEnrsQdO"
    );
    const data = await response.json();
    const totalCount: number = data["total"];
    setTotal(totalCount);
  };

  useEffect(() => {
    getTotalCount();
  });

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(
      getTags({
        page: `${newPage + 1}`,
        pagesize: `${rowsPerPage}`,
        sort: orderBy,
        order: orderDirection,
      })
    );
    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      getTags({
        page: `${page + 1}`,
        pagesize: event.target.value,
        sort: orderBy,
        order: orderDirection,
      })
    );
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortHandler = (sortBy: "name" | "popular") => {
    dispatch(
      getTags({
        page: `${page + 1}`,
        pagesize: `${rowsPerPage}`,
        sort: sortBy,
        order: orderDirection === "asc" ? "desc" : "asc",
      })
    );
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    setOrderBy(sortBy);
  };

  return (
    <TableContainer component={Paper} sx={{ width: 800 }}>
      <TablePagination
        component="div"
        count={total ?? 100}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        {error == null ? (
          loading ? (
            <CircularProgress />
          ) : (
            <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "400px" }}>
                    <TableSortLabel
                      active={orderBy === "name"}
                      direction={orderBy === "name" ? orderDirection : "asc"}
                      onClick={() => sortHandler("name")}
                    >
                      TAG NAME
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "400px" }}>
                    <TableSortLabel
                      active={orderBy === "popular"}
                      direction={orderBy === "popular" ? orderDirection : "asc"}
                      onClick={() => sortHandler("popular")}
                    >
                      COUNT
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.map((element) => (
                    <TableRow
                      key={element.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ width: "400px" }}
                      >
                        {element.name}
                      </TableCell>
                      <TableCell align="left" sx={{ width: "400px" }}>
                        {element.count}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          )
        ) : (
          <Alert>{error}</Alert>
        )}
      </Box>
    </TableContainer>
  );
};

export default TagsTable;
