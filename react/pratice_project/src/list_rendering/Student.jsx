/* eslint-disable react/prop-types */

export default function Student({ stu }) {
  return (
    <div>
      <h1>
        My name is {stu.name} and my age is {stu.age}
      </h1>
    </div>
  );
}
