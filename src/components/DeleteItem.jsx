"use client";

import React from 'react'

import { useRouter } from "next/navigation";
import { FaTrash, FaEdit } from 'react-icons/fa';

const DeleteItem = ({ id }) => {
  const router = useRouter();

  const handelDelete = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
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
