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



const BookList = () => {
  const getBook = (id) => {
    const book = books.find(book=>book.id===id)
    console.log(book)
  }
  
  
  return (
    <section className="booklist">
      {/* <EventExamples/> */}
      {books.map((book) => {
        // const {img, title, author, id} = book
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};




// --> approach 2 to use props by destructuring the prop object
const Book = ({ img, author, title, getBook, id}) => {
  const getSingleBook = () => {
    getBook(id)
  }
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={()=>getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)