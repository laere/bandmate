import axios from "axios";

export const registerUser = async (userData, history) => {
  try {
    const res = await axios.post("/api/users/register", userData);
    history.push("/login");
  } catch (e) {
    console.log(e);
  }
};
