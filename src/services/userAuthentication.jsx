import axios from "axios";
import { API_URL } from "./config";
import Cookies from "js-cookie";

export async function userAuthentication(data) {
  let uploadResponse = {};
  try {
    const url = "/api/v1/users/login";
    await axios
      .post(API_URL + url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log("Error", ex.message);
  }
  return uploadResponse;
}

export async function verifyToken() {
  const tokenFromCookie = Cookies.get("token");
  let uploadResponse = {};
  try {
    const url = "/api/v1/users/login/profile";
    await axios
      .post(API_URL + url, [], {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenFromCookie}`,
        },
      })
      .then((response) => {
        uploadResponse = response;
      });
  } catch (ex) {
    console.log("Error", ex.message);
  }
  return uploadResponse;
}
