import React from "react";
// import Subchild from "./Subchild";
const Child = ({ posts }) => {
  return (
    <div style={{border:"2px solid black",background:"lightblue"}}>
      <h2 style={{display:"flex",justifyContent:"center"}}>Fetched Data :</h2>
      <ul >
       {posts.map((post) => (
          <li key={post.id} style={{marginBottom:"10px",display:"flex",justifyContent:"space-evenly",wordSpacing:"10px"
          }}>
          <p> Id : <strong>{post.id}</strong></p> 
           <p> Name : <strong>{post.name}</strong></p>
          <p> Title : <strong>{post.title}</strong></p>

  
          </li>
        ))}
      </ul>
{/* <Subchild post={posts}/> */}


      {/* <Subchild data={posts}/> */}
    </div>
  );
};

export default Child;
