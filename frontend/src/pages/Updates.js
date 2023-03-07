// import { AuthContext } from "../context/auth.context"
// import { useParams } from 'react-router-dom';
// import io from "socket.io-client";


// const Updates = () => {
//   const [update, setUpdate] = useState(null);
//   const { user } = AuthContext();
//   const { childId } = useParams();

//   useEffect(() => {
//     const socket = io('http://localhost:3000');
//     socket.on('update', (data) => {
//       setUpdate(data);
//     });
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Parent Updates</h1>
//       <p>{update}</p>
//     </div>
//   );
// };

// export default Updates;

// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const socket = io('http://localhost:4000'); // replace with your server's URL

// function Updates() {
//   const [updates, setUpdates] = useState([]);

//   useEffect(() => {
//     // set up the socket listener for updates
//     socket.on('update', (data) => {
//       setUpdates((prevUpdates) => [...prevUpdates, data]);
//     });

//     // clean up the socket listener on unmount
//     return () => {
//       socket.off('update');
//     };
//   }, []);

//   return (
//     <div>
//       <h2>Updates from Child's Account</h2>
//       <ul>
//         {updates.map((update) => (
//           <li key={update.id}>{update.message}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Updates;
