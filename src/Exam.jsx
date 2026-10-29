import { useState, useEffect } from "react";
import "./App.css";
import PostCard from "./PostCard.jsx";
import { getPosts } from "./Services.jsx";

function Exam() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <PostCard key={index} {...post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exam;
