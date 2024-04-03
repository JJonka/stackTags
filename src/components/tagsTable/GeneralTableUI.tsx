import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import TablePagination from "@mui/material/TablePagination";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

interface ITag {
  count: number;
  name: string;
}

interface IHandlers {
  handleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  handleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  sortHandler: (sortBy: string) => void;
}

interface IProps {
  sortCells: string[];
  headCells: string[];
  currentArray: ITag[];
  loading: boolean;
  error: string | null;
  page: number;
  rowsPerPage: number;
  orderBy: string;
  orderDirection: "asc" | "desc";
  total: number;
  handlers: IHandlers;
}

const GeneralTableUI = ({
  sortCells,
  headCells,
  currentArray,
  loading,
  error,
  page,
  rowsPerPage,
  orderBy,
  orderDirection,
  total,
  handlers,
}: IProps) => (
  <TableContainer
    component={Paper}
    sx={{
      width: 800,
      minHeight: "150px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {error == null ? (
      loading ? (
        <CircularProgress sx={{ padding: "20px" }} />
      ) : (
        <>
          <TablePagination
            component="div"
            count={total ?? 100}
            page={page}
            onPageChange={handlers.handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handlers.handleChangeRowsPerPage}
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
            <Table sx={{ maxWidth: 1000 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "400px" }}>
                    <TableSortLabel
                      active={orderBy === headCells[0]}
                      direction={
                        orderBy === headCells[0] ? orderDirection : "asc"
                      }
                      onClick={() => handlers.sortHandler(sortCells[0])}
                    >
                      {headCells[0].toUpperCase()}
                    </TableSortLabel>
                  </TableCell>
                  <TableCell align="left" sx={{ width: "400px" }}>
                    <TableSortLabel
                      active={orderBy === "popular"}
                      direction={orderBy === "popular" ? orderDirection : "asc"}
                      onClick={() => handlers.sortHandler(sortCells[1])}
                    >
                      {headCells[1].toUpperCase()}
                    </TableSortLabel>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentArray &&
                  currentArray.map((element) => (
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
          </Box>
        </>
      )
    ) : (
      <Alert severity="error">Error occured.</Alert>
    )}
  </TableContainer>
);

export default GeneralTableUI;
