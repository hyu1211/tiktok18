// src/components/1_atoms/Avatar.jsx
import React from 'react';

export const Avatar = ({ src, alt, size = 48, style }) => {
  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: '50%',
    objectFit: 'cover', // 画像が引き伸ばされないように
    backgroundColor: '#eee', // 画像読み込み前の背景色
    ...style,
  };

  return (
    <img
      src={src}
      alt={alt}
      style={avatarStyle}
    />
  );
};