import "../css/Home.css";
import AddTaskButton from "../components/AddTaskButton";
import Checkbox from "@/components/CheckBox";
function Home() {
  return (
    <>
      <div className="home-page flex-col h-screen bg-[rgb(39,39,42)] text-2xl sm:text-lx md:text-2xl lg:text-3xl xl:text-4xl">
        <div className="home-page gap-5 flex w-64 h-32 ">
        <h1>TO DO LIST</h1>
          <AddTaskButton />,
        </div>
          <Checkbox content="" />
          <Checkbox content="" />
          <Checkbox content="" />
          <Checkbox content="" />
          <Checkbox content="" />
          <Checkbox content="" />
      </div>
    </>
  );
}

export default Home;
