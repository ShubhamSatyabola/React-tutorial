import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css'

import {books} from './books.js'

import Book from './Book'
 //first project





const BookList = () => {

  
  return (
    <>
      <h1 className='title'>Amazon Best Selling</h1>
      <section className="booklist">
        {/* <EventExamples/> */}
        {books.map((book, index) => {
          // const {img, title, author, id} = book
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)