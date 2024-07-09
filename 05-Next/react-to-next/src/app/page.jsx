"use client"

import { useState,useEffect } from "react";
import Image from "next/image";

// components
import Nav from "./components/Nav";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/hello');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return
  }

  return (
    <main className="container mx-auto">
      <Nav />
      <hr className="my-3" />
      <h3>Home Page</h3>
      <p>First, you will see these terms being used throughout the documentation. Here's a quick reference:</p>
    </main>
  );
    
}
