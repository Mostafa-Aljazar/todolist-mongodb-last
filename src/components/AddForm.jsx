'use client'
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddForm = () => {
  const [title, setTiltle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();

    if(title=='' || description==""){
      return
    }

    try {
      const req = await fetch(`http://localhost:3000/api/topics`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (req.ok) {
        router.refresh()
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error.message());
    }
  };
  
  return (
    <form className="add" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTiltle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit"> Add Topic</button>
    </form>
  );
};

export default AddForm;
