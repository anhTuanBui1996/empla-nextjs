"use client";
import { createContext, useContext } from "react";

export const FetchDefaultContext = createContext({
  responseValue: null,
  fetchedAsyncCount: 0,
  status: [],
});

export function useFetch() {
  return useContext(FetchDefaultContext);
}
