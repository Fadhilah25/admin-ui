import React, { use, useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Services";
import PostCard from "./PostCard";
import postsData from "../postsData";

function Exercise() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("[Component] Gagal menampilkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-8xl mx-auto">
          {postsData.map((post) => (
            <PostCard 
              key={post.id} 
              id={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Exercise;
