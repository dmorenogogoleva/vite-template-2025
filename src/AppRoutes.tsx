import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./screens/login";
import { NotFound } from "./screens/not-found/NotFound.tsx";

import Home from "./Home.tsx";

export const AppRoutes = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </BrowserRouter>
}
