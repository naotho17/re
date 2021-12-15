import { Header } from "../atoms/Header";
import { UserList } from "../molecules/UserList";

export const Users = () => {
  return (
    <>
      <Header />
      <h1>ユーザ一覧ページです</h1>

      {/* ユーザーの配列を並べていく */}
      <UserList />
    </>
  );
};
