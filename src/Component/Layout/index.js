import React, { useEffect, useState } from "react";
import Nav from './Nav'
import api from "../../api/api";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {

  const navigate = useNavigate();

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
