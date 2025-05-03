import "../css/Home.css";
import { CheckboxDemo } from "../components/CheckBox";
import { Button } from "../components/ui/button";
function Home() {
  return (
    <>
      <div className="home-page flex content-center h-screen bg-[rgb(39,39,42)]">
        <h1 className="text-white">TO DO LIST</h1>
        <Button className="text-white" variant="outline">
          Click
        </Button>
        <CheckboxDemo />
      </div>
    </>
  );
}

export default Home;
