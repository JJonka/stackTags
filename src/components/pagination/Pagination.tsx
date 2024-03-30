import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { getTags } from "../tagsTable/TableStateSlice";
import { useAppDispatch } from "../../app/stateStore";
import { useEffect, useState } from "react";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [total, setTotal] = useState<number>();
  const dispatch = useAppDispatch();

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
        page: `${newPage}`,
        pagesize: "10",
        sort: "name",
        order: "asc",
      })
    );

    setPage(newPage);
  };

  const handleChangeRowsPerPage = async (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      getTags({
        page: "1",
        pagesize: event.target.value,
        sort: "name",
        order: "asc",
      })
    );
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={total ?? 100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default Pagination;
