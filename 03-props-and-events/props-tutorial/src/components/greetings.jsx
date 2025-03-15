function Greetings({ firstName, lastName, age, user, User }) {
  //   console.log(props); // gives a object in console whose property is {firstName: "Aryan", lastName:"Rao"}(but only if props is defined in parameter section of Greetings)
  //   const firstName = props.firstName;
  //   const lastName = props.lastName;

  //despite of the above two lines you also use destructing of props since its a object, like below
  //const { firstName, lastName } = props;
  // and despite of destructuring it here you can also destructure it directly in paraameter section like its done above
  return (
    <h1>
      Hello {firstName} {lastName} {age} {user} {User.hobby}
    </h1>
  );
}

export default Greetings;
