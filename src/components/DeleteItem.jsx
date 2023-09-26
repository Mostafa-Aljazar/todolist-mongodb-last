"use client";

import React from 'react'

import { useRouter } from "next/navigation";
import { FaTrash } from 'react-icons/fa';

const DeleteItem = ({ id }) => {
  const router = useRouter();

  const handelDelete = async (e) => {
    e.preventDefault();
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      // const res = await fetch(`./api/topics?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={handelDelete} >
    <FaTrash />
  </button>
  );
};

export default DeleteItem;
