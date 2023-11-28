import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";
function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(BooksContext);
  const renderdBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button className="button" onClick={incrementCount}>
        Click!
      </button>
      {renderdBooks}
    </div>
  );
}
export default BookList;
