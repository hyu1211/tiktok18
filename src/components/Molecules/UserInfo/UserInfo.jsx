// src/components/Molecules/UserInfo/UserInfo.jsx
import React from "react";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Typography } from "@/components/Atoms/Typography/Typography";
import styles from "./UserInfo.module.css";

export const UserInfo = ({ user, style }) => {
  if (!user) {
    return null;
  }

  return (
    <div className={styles.userInfo} style={style}>
      <Avatar src={user.avatarUrl} alt={user.name} size={40} />
      <Typography variant="h2" className={styles.userName}>
        {user.name}
      </Typography>
    </div>
  );
};
