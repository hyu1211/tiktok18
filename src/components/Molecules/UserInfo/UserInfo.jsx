// src/components/Molecules/UserInfo/UserInfo.jsx
import React from "react";
import { Avatar } from "@/components/Atoms/Avatar/Avatar";
import { Typography } from "@/components/Atoms/Typography/Typography";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "12px", // AvatarとTypographyの間のスペース
};

export const UserInfo = ({ user, style }) => {
  // userオブジェクトが存在しない場合の防御処理
  if (!user) {
    return null;
  }

  return (
    <div style={{ ...containerStyle, ...style }}>
      <Avatar src={user.avatarUrl} alt={user.name} size={40} />
      <Typography variant="h2" style={{ fontWeight: "600" }}>
        {user.name}
      </Typography>
    </div>
  );
};
