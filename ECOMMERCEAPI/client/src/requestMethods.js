import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYThjNjNjY2FlOTQ4ZjY2NzljNmMyNCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzkwMzcyMTEsImV4cCI6MTYzOTI5NjQxMX0.taj_u8w7mXJy4ToIaqNwitzYXAbi6TeMHwUerf8NZIg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
