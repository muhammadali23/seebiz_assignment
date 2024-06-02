function User_render({ user }) {
  return (
    <div>
      <h1>
        He is {user.name} and he is {user.age} old.
      </h1>
    </div>
  );
}

export default User_render;
