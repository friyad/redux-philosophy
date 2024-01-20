import { Middleware } from "@reduxjs/toolkit";

export const Logger: Middleware = (store) => (next) => (action) => {
  console.log(store.getState());
  next(action);
};
