import { useSelector } from "react-redux";
import SearchBar from "../searchBar/searchBar";
function Home() {
  const obj = useSelector((state) => state.obj.obj);
  return (
    <div>
      <div>home</div>
      <h1>{obj.counter}</h1>
      <SearchBar></SearchBar>
    </div>
  );
}
export default Home;
