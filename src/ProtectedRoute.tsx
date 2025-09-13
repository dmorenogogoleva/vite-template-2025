import { Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { checkAuth } from "./api/api-client.ts";
import { LoadingIcon } from "@rescui/icons";

export const ProtectedRoute = ({ children }: any) => {
  const [logged, setLogged] = useState<null | boolean>(null);

  useEffect(() => {
    checkAuth()
      .then((res: any) => {
        setLogged(res.status);
      })
      .catch(() => {
        setLogged(false);
      });
  }, []);

  if (logged === null) {
    return <LoadingIcon />
  }

  if (!logged) {
    return <Navigate to="/" />;
  }

  return children;
};