import React, { useEffect } from "react";
import axios from "axios";
import jsSHA from "jssha";
import api from './api/api'
import { getAuthorizationHeader } from "./api/headerFunc";

const Class = () => {
  const getData_URL = `/v2/Tourism/ScenicSpot?%24top=10&%24format=JSON`

  useEffect(() => {
    listAdmins()
  }, [])

  const listAdmins = async () => {
    try {
      const res = await api.get(getData_URL);
      console.log('admin', res.data)

    } catch (err) {
      console.log(err)
      const errorCode = err.response.status;
      const errMsg = err.response.data.data.error_code;
      // ErrorMsg(errorCode, errMsg);
    }
    finally {
      // setAuthLoading(false)
    }
  };

  return <div></div>;
};

export default Class;
