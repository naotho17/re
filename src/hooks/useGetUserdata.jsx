// axiosを使ってユーザー情報をとってくるhooks

import axios from "axios";
import { useCallback, useState } from "react";

export const useGetUserdata = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((error) => console.log(error));
  }, [setUsers]);

  return { getUsers, users };
};
