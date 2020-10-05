import React from "react";

export function Profile({ user }: any) {
  return (
    <div>
      <h2>Профиль</h2>
      <p>Добро пожаловать, {user.name}</p>
    </div>
  );
}
