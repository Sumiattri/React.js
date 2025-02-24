import User from "./User";

function Users({ usersProp, increaseAge, deleteUser }) {
  console.log("Users Rendered");

  return (
    <>
      {/* {usersProp.map((user) => (
        <User userDetails={user} />
      ))} */}

      {/* inspite of passsing complete object as a prop, we can spread every element of object and then pass all of them as a prop */}

      {usersProp.map((user) => (
        <User
          {...user}
          key={user.id}
          increaseAge={increaseAge}
          deleteUser={deleteUser}
        />
      ))}
    </>
  );
}

export default Users;
