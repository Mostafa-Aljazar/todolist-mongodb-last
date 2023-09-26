import TodoItem from "./TodoItem";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
    // const res = await fetch("./api/topics", {
      cache:"no-store"  
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Todos = async () => {
  const items = await getTopics();

  // console.log(items)
  return (
    <div>
      {
        items?.topics &&
        items?.topics.map((item) => {
        return (<TodoItem key={item?._id} item={item} />)
      })}
    </div>
  );
};

export default Todos;
