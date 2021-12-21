import { useEffect } from "react";
import styled from "styled-components";
import { useGetUserdata } from "../../hooks/useGetUserdata";

export const UserList = () => {
  const { getUsers, users } = useGetUserdata();
  useEffect(() => getUsers(), []);

  // ここで取ってきた配列を処理していく
  return (
    <>
      {console.log(users)}
      <h1>ユーザ一覧</h1>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Sh2>{user.name}</Sh2>
              <Sp>{user.email}</Sp>
            </li>
          );
        })}
      </ul>
    </>
  );
};
const Sh2 = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Sp = styled.p`
  color: green;
`;
