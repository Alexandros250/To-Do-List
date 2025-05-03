import Button from "../components/ButtonAddTask";
import "../css/Home.css";
import CheckBox from "../components/CheckBox";
function Home() {
  return (
    <>
      <div className="home-page">
        <h1 className="text-white">TO DO LIST</h1>
        <Button />
      </div>
      <CheckBox />
    </>
  );
}

export default Home;
