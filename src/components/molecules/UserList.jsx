import { useEffect } from "react";
import styled from "styled-components";
import { useGetUserdata } from "../../hooks/useGetUserdata";

export const UserList = () => {
  const { getUsers, users, setUsers } = useGetUserdata();
  useEffect(() => getUsers(), []);

  console.log(users);

  return (
    <Sdl>
      <dt>name:</dt>
      <dd>naotho</dd>
      <dt>username:</dt>
      <dd>naotho17</dd>
      <dt>email:</dt>
      <dd>123@gmail.com</dd>
      <dt>address:</dt>
      <dd>tokyo 1-10-100</dd>
    </Sdl>
  );
};

const Sdl = styled.dl`
  margin-top: 10px;
  dt {
    float: left;
  }
`;
