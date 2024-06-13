import AllJobs from "@/components/AllJobs";
import Categories from "@/components/Categories";
import JobLocations from "@/components/JobLocations";
import NavBar from "@/components/NavBar";
import NewsAndBlog from "@/components/NewsAndBlog";

export default function Home() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="sm:px-12 md:px-18 lg:px-24 xl:px-30 2xl:px-44 ">
        <Categories />
        <AllJobs />
        <JobLocations />
        <NewsAndBlog />
      </div>
    </div>
  );
}
