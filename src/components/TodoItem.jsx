import React from "react";
import DeleteItem from "./deleteItem";
import { FaTrash, FaEdit } from "react-icons/fa";
import Link from "next/link";

const TodoItem = ({ item }) => {
  return (
    <div className="todoItem">
      <span className="detailes">
        <span className="title">{item.title}</span>
        <p className="description">{item.description}</p>
      </span>

      <span className="icons">
        <span>
          <DeleteItem id={item._id} />
        </span>

        <Link href={`/editTopic/${item._id}`}>
          <FaEdit />
        </Link>
      </span>
    </div>
  );
};

export default TodoItem;
