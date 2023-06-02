import { createContext } from "react";

export const FetchContext = createContext({
  responseValue: null,
  fetchedTime: 0,
  status: false,
});
