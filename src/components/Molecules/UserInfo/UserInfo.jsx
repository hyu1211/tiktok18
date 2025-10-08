// src/components/Molecules/UserInfo/UserInfo.jsx
"use client";
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
      <Avatar
        src={user.avatarUrl}
        alt={user.name}
        size={40}
        style={{ border: "2px solid white" }}
      />
      <Typography
        variant="h2"
        style={{
          fontWeight: "600",
          textShadow: "inherit",
        }}
      >
        {user.name}
      </Typography>
    </div>
  );
};
