function Item({ name, ispacked }) {
  // if (ispacked) {
  //   return <li className="item">{name} ✔</li>;
  // } else {
  //   return <li className="item">{name}</li>;
  // }
  return <li className="item">{ispacked ? name + "✔" : name + "❌"}</li>;
}
export default function Props() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item ispacked={true} name="Space suit" />
        <Item ispacked={true} name="Helmet with a golden leaf" />
        <Item ispacked={false} name="Photo of Tam " />
      </ul>
    </section>
  );
}
