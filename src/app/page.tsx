import Categories from "@/components/Categories";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="h-screen ">
      <NavBar />
      <div className="container">
        <Categories />
      </div>
    </div>
  );
}
