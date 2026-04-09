import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
};

// 🔥 Fake API delay
const fakeApi = (data: any) =>
  new Promise<any>((resolve) =>
    setTimeout(() => resolve(data), 1200)
  );

// LOGIN
export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: { email: string }) => {
    return await fakeApi({
      name: "Marry Doe",
      email: data.email,
    });
  }
);

// REGISTER
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: { name: string; email: string }) => {
    return await fakeApi(data);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;