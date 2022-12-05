import { useSelector } from "react-redux";

function Home() {
  const obj = useSelector((state) => state.obj.obj);
  return (
    <div>
      <div>home</div>
      <h1>{obj.counter}</h1>
    </div>
  );
}
export default Home;
