"use client";
import { useFetch } from "@/context/FetchContext";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function GlobalLoading({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const [isLoading, setLoading] = useState(false);
  const fetchCtx = useFetch();

  const fetchCount = fetchCtx.fetchedAsyncCount;
  useEffect(() => {
    if (fetchCount > 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [fetchCount]);
  return (
    <div
      className={`global-loading fixed top-${
        isAuthenticated ? "16" : "0"
      } w-full`}
    >
      {isLoading && <LinearProgress color="success" />}
    </div>
  );
}
