import { useEffect, useState } from "react";
import { verifyToken } from "../../services/userAuthentication";
import { useNavigate } from "react-router-dom";

const VerifyToken = () => {
  const navigate = useNavigate();
  useEffect(() => {
    async function data() {
      await verifyToken().then((res) => {
        if (res.data.message === "Success") {
          navigate("/");
        } else {
          alert("Error");
        }
      });
    }

    data();
  }, []);
  return <div>Loading...</div>;
};

export default VerifyToken;
