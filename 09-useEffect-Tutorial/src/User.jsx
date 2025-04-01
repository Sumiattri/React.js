import React from "react";

function User({ id, name, username, phone, email, address, company, website }) {
  return (
    <>
      <div
        style={{
          padding: "1rem",
          margin: "1rem",
          backgroundColor: "#292929",
          color: "white",
        }}
      >
        <p>id: {id}</p>
        <p>name : {name}</p>
        <p>username: {username}</p>
        <p>phone : {phone}</p>
        <p>email : {email}</p>
        <p>city : {address.city}</p>
        <p>company : {company.bs}</p>
        <p>website : {website}</p>
      </div>
    </>
  );
}

export default User;
