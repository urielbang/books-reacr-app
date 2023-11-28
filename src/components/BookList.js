import { useContext } from "react";
import BookShow from "./BookShow";
import BooksContext from "../context/books";
function BookList() {
  const { books } = useContext(BooksContext);

  const renderdBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderdBooks}</div>;
}
export default BookList;
