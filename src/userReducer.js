import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    updateuser: (state, action) => {
      const { id, name, email } = action.payload;
      const updatingUser = state.find((user) => user.id == id);
      if (updatingUser) {
        updatingUser.name = name;
        updatingUser.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatingUser = state.find((user) => user.id == id);

      if (updatingUser) {
        return state.filter((f) => f.id != id);
      }
    },
  },
});

export const { addUser, updateuser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
