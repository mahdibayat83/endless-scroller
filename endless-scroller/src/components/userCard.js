import React from "react";

export default function UserCard({ name, email, picture }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        borderBottom: "1px solid #ddd",
      }}
    >
      <img src={picture} alt={name} style={{ borderRadius: "50%" }} />
      <div>
        <h4>{name}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
}
