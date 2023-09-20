import UpdateForm from '@/components/UpdateForm'
import React from 'react'

const getTopic = async (id)=>{

  const res =await fetch(`http://localhost:3000/api/topics/${id}`,{
    cache:"no-store"
  });
  return await res.json();

}
const page =async ({ params }) => {
  // console.log("ID-->",params.id)

  const Item = await getTopic(params.id)

  return (
    <div>
    <UpdateForm params={ params } topic={Item.topic}/>
    </div>
  )
}

export default page
