import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
 //first project
const author = "Chris Ferrie";
const title = "8 Little Planets";
const img = "https://images-na.ssl-images-amazon.com/images/I/91JFjdT4WCL._AC_UL600_SR600,400_.jpg";
const BookList = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
}

//approach1 which includes nesting of multiple component

// const Book = () => {
//   return <article className='book'>
//     <Image/>
//     <Title/>
//     <Author/>
//   </article>
// }

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/91JFjdT4WCL._AC_UL600_SR600,400_.jpg"
//     alt="8 Little Planets"
//   />
// );
// const Title = () => <h2>8 Little Planets</h2>;

// const Author = () => {
//   return <h4>Chris Ferrie</h4>;
// }

// approach 2
// const Book = () => {
//   return (
//     <article className="book">
//       <img
//         src="https://images-na.ssl-images-amazon.com/images/I/91JFjdT4WCL._AC_UL600_SR600,400_.jpg"
//         alt="8 Little Planets"
//       />
//       <h2>8 Little Planets</h2>
//       <h4>Chris Ferrie</h4>
//     </article>
//   );
// };

//----> Using props to make things dynamic

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)