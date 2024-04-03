import { SerializedError } from "@reduxjs/toolkit";
import { useAppDispatch, useTypedSelector } from "../../app/stateStore";
import { getTags } from "./TableStateSlice";
import { useEffect, useState } from "react";

interface ITag {
  count: number;
  name: string;
}

const useTagsTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [orderDirection, setOrderDirection] = useState<"asc" | "desc">("asc");
  const [orderBy, setOrderBy] = useState<string>("name");
  const [total, setTotal] = useState<number>(0);
  const dispatch = useAppDispatch();

  const headCells: string[] = ["name", "count"];
  const sortCells: string[] = ["name", "popular"];

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

  const currentArray: ITag[] = useTypedSelector(
    (state) => state.getTags.currentArray
  );
  const loading: boolean = useTypedSelector((state) => state.getTags.loading);
  const error: SerializedError | null = useTypedSelector(
    (state) => state.getTags.error
  );

  console.log(error);
  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
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

  const sortHandler = (sortBy: string) => {
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

  return {
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
    handlers: {
      handleChangePage,
      handleChangeRowsPerPage,
      sortHandler,
    },
  };
};

export default useTagsTable;
