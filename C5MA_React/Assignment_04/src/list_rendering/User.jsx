import User_render from "./User_render";

function Students() {
  const user = [
    {
      name: "Muhammad Ali",
      age: 24,
    },
    {
      name: "Muhammad Faizan",
      age: 23,
    },
    {
      name: "Arafat Aslam",
      age: 23,
    },
  ];
  return (
    <div>
      {user.map((user, index) => (
        <User_render key={index} user={user} />
      ))}
    </div>
  );
}

export default Students;
