import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuth } from "./api/api-client.ts";

// todo: remove?
export const RouteForbidAuth: React.FC = () => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    checkAuth().then((res: any) => {
      setLogged(res.status)
    }).catch(() => {
      setLogged(false)
    })
  }, [])

  return <Navigate to={logged ? '/list' : '/'} replace />;
};
