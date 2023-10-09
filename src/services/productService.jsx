import axios from "axios";
import { API_URL } from "./config";

export async function getProducts() {
  let productsListResponse = [];
  try {
    const url = "/api/v1/products";
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
