// axiosを使って情報をとってくるhooks

import axios from "axios";
import { useCallback, useState } from "react";

export const useGetUserdata = () => {
  const { users, setUsers } = useState([]);

  const getUsers = useCallback(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(alert("失敗！"));
  }, []);
  return { getUsers, users };
};
