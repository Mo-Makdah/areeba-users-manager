import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { UserItem } from "../../components/UserItem";
import { getUsers } from "../../api/getUsers";

import styles from "./index.module.css";

export const UsersListPage = () => {
  const [users, setUsers] = useState<User[]>();
  const [fetchError, setFetchError] = useState("");

  const fetchUsers = async () => {
    const { data, errorMessage } = await getUsers();

    if (data) {
      setUsers(data);
    } else {
      setFetchError(errorMessage);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {fetchError ? (
        <div>{fetchError}</div>
      ) : users ? (
        <div className={styles.container}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
