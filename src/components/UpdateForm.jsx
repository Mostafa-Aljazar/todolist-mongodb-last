"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UpdateForm = ({ params, topic }) => {
  // console.log(params.id);
  // console.log("topic:",topic)

  const [newTitle, setNewTitle] = useState(topic.title);
  const [newDescription, setNewDescription] = useState(topic.description);
  // console.log("topic:",newTitle)

  const router = useRouter()
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (newTitle == "" || newDescription == "") {
      return;
    }

    // const req = await fetch(`http://localhost:3000/api/topics/${params.id}`, {
    const req = await fetch(`https://todolist-mongodb-last-kiij.vercel.app/api/topics/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newTitle,
        description: newDescription,
      }),
    });

    if (req.ok) {
      router.refresh()
      router.push("/");
    }
  };

  return (
    <form className="add" onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
      />
      <textarea
        type="text"
        placeholder="description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button type="submit"> Update Topic</button>
    </form>
  );
};

export default UpdateForm;
