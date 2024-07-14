import Student from "./Student";

function Students() {
  const std = [
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
      {std.map((stu, index) => (
        <Student key={index} stu={stu} />
      ))}
    </div>
  );
}

export default Students;
