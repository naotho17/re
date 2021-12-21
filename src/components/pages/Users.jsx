import { Header } from "../atoms/Header";
import { UserList } from "../molecules/UserList";

export const Users = () => {
  return (
    <>
      <Header />
      {/* ユーザーの配列を並べていく */}
      <UserList />
    </>
  );
};
