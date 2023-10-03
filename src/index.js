import React from 'react';
import ReactDOM from 'react-dom/client';
// raect fragment , jsx 
// function Greeting(){
//     return (
//       <React.Fragment>
//         <div>
//           <h2>My First Component</h2>
//           <ul>
//             <li>
//               <a href="#">hello world</a>
//             </li>
//           </ul>
//         </div>
//         <h1>only one return is possible</h1>
//       </React.Fragment>
//     );
// }

// <-------->react nesting of components<-------->
function Greeting() {
  return (
    <div>
        <Person />
        <Message/>
    </div>
      );
}
// two componenets person and message
const Person = () => <h2>john doe</h2> 
const Message = () => {
    return <p>this is my message</p>
}

// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h2", {}, "hello world")
//   );
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting/>)