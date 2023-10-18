import React from 'react';
// const Div=()=>{
//     return(
//         <div>
//             <h1>id</h1>
//         <h2>name</h2>
//         <h2>city</h2>
//         </div>
//     );
// }
const Div = ({ id, name, city }) => {
    return (
      <div>
        <h2>ID: {id}</h2>
        <h2>Name: {name}</h2>
        <h2>City: {city}</h2>
      </div>
    );
  }
  
export default Div