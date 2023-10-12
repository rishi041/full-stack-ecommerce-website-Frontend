import axios from "axios";
import { API_URL } from "./config";

export async function getUsers() {
  let productsListResponse = [];
  try {
    const url = "/api/v1/users";
    // const url = "http://localhost:4000/api/v1/products";
    console.log("get products: Calling " + url);
    await axios
      .get(API_URL + url, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        productsListResponse = response;
      });
  } catch (ex) {
    console.log("Error in get messages ", ex.message);
  }
  return productsListResponse;
}

export async function addNewUserToDB(data) {
  let uploadResponse = {};
  try {
    const url = "/api/v1/users";
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
