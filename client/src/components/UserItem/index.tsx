import { User } from "../../types/user";

import styles from "./index.module.css";

type Props = {
  user: User;
};

export const UserItem = ({ user }: Props) => {
  const { firstName, lastName, createdAt, username } = user;
  const fullName = `${firstName} ${lastName}`;
  const formattedCreatedAt = new Date(createdAt).toLocaleDateString();
  return (
    <div className={styles.container}>
      <div>
        <p>
          {fullName} - {formattedCreatedAt}
        </p>
        <p>{username}</p>
      </div>
      <button className={styles.deleteButton}>Delete</button>
    </div>
  );
};
