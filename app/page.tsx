"use client";

import { useEffect, useState } from "react";
import { GetTodos } from "../components/GetTodos";

interface Todo {
  userId: number;
  title: string;
}

function Home() {
  // const data: Todo[] = await GetTodos();
  // console.log("Data -> ", data);
  const [data, setData] = useState<Todo[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const values = await res.json();
      setData(values);
    }

    getData();
  }, []);

  return (
    <div>
      {data?.length === 0 ? (
        <div>Loading...</div>
      ) : (
        data.map((todo, i) => (
          <div key={i} style={{ padding: "10px 20px" }}>
            {i + 1}: {todo.title}
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
