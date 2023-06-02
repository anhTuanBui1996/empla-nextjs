import { cookies } from "next/dist/client/components/headers";
import { createContext } from "react";

let sessionId = cookies().get("ASP.NET_SessionId");

export const AuthContext = createContext({
  sessionId: sessionId,
  accountInfo: null,
  isFetched: false,
});
