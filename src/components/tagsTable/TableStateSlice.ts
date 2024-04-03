import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface ITag {
  total: number;
  count: number;
  name: string;
}

interface InitialStateType {
  currentArray: ITag[] | [];
  loading: boolean;
  error: string | null;
}

const initialState: InitialStateType = {
  currentArray: [],
  loading: false,
  error: null,
};

interface IProps {
  page: string;
  pagesize: string;
  sort: string;
  order: "asc" | "desc";
}

export const getTags = createAsyncThunk(
  "getTagsSlice/getTags",
  async ({ page, pagesize, sort, order }: IProps) => {
    const response = await fetch(
      `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pagesize}&order=${order}&sort=${sort}&site=stackoverflow`
    );
    const data = await response.json();
    const items: ITag[] = data["items"];
    return items;
  }
);

const GetTagsSlice = createSlice({
  name: "getTagsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTags.fulfilled, (state, action) => {
        state.currentArray = action.payload as ITag[];
        state.loading = false;
      })
      .addCase(getTags.rejected, (state, action) => {
        (state.loading = false),
          (state.error = action.error.message ?? "Error");
      });
  },
});

export const GetTagsReducer = GetTagsSlice.reducer;
