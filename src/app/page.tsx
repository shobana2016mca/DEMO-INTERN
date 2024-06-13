import AllJobs from "@/components/AllJobs";
import Categories from "@/components/Categories";
import NavBar from "@/components/NavBar";
import NewsAndBlog from "@/components/NewsAndBlog";

export default function Home() {
  return (
    <div className="h-screen ">
      <NavBar />
      <div className="container">
        <Categories />
        <AllJobs />
        <NewsAndBlog />
      </div>
    </div>
  );
}
