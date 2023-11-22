import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [books, setBooks] = useState([]);

  function createBook(title) {}

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
