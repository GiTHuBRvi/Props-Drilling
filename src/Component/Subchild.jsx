import React from 'react'

const Subchild = ({post}) => {
  return (
    <div style={{border:"2px solid black", margin:"20px"}}>
        data of subchild
        <ul >
       {post.map((post) => (
          <li key={post.id} style={{marginBottom:"10px",display:"flex",justifyContent:"space-evenly",wordSpacing:"10px"
          }}>
          <p> Id : <strong>{post.id}</strong></p> 
           <p> Name : <strong>{post.name}</strong></p>
          <p> Title : <strong>{post.title}</strong></p>

  
          </li>
        ))}
      </ul>


    </div>
  )
}

export default Subchild