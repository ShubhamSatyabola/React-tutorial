import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'
 //first project

const books = [
  {
    author: "Chris Ferrie",
    title: "8 Little Planets",
    img: "https://images-na.ssl-images-amazon.com/images/I/91JFjdT4WCL._AC_UL600_SR600,400_.jpg",
    id:1
  },
  {
  author: "Rebecca Yarros",
  title: "Iron Flame (The Empyrean, 2) ",
  img: "https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL600_SR600,400_.jpg",
  id:2
}
];


//iterating data approach 1
// const BookList = () => {
//   return (
//     <section className="booklist">
//      { books.map((book)=>{
//       const {img, title, author, id} = book
//         return <Book img={img} title={title} author={author} key={id} />
//       })}
//     </section>
//   );
// }

// optimizing approach 1
// const BookList = () => {
//   return (
//     <section className="booklist">
//      { books.map((book)=>{
//       // const {img, title, author, id} = book
//         return <Book book={book} key={book.id} />
//       })}
//     </section>
//   );
// }

// optimizing approach 2 using spread operator
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        // const {img, title, author, id} = book
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

//----> Using props to make things dynamic

//--->approach 1

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title} />
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// --> approach 2 to use props by destructuring the prop object
const Book = ({ img, author, title, children}) => {
  // const { img, author, title } = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)