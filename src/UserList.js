import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>Name: {users.name}</h1>
      <h1>UserName: {users.username}</h1>
      <h2>Email: {users.email}</h2>
      <h3>Street: {users.address.street}</h3>
      <h3>Suite: {users.address.suite}</h3>
      <h3>City: {users.address.city}</h3>
      <h3>Zipcode: {users.address.zipcode}</h3>
      <h1>GEO.Lat: {users.address.geo.lat}</h1>
      <h1>GEO.Lng: {users.address.geo.lng}</h1>
      <h3>Phone: {users.phone}</h3>
      <h3>Website: {users.website}</h3>
      <h3>Company: {users.company.name}</h3>
      <h3>CatchPhrase: {users.company.catchPhrase}</h3>
      <h3>Bs: {users.company.bs}</h3>
    </div>
  );
};

export default UserList;
