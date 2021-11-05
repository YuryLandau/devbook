import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { api } from './services/api.js'

function App() {

  const [books, setBooks] = useState([])
  // const books = [
  //   { name: 'Refactoring'},
  //   { name: 'Domain-driven design'}
  // ]

  useEffect(() => {
    const fetchApi = async () => {
      const response = await api.get('books')

      console.log(response)
      setBooks(response.data)
    }

    fetchApi()
  }, [])

  const RenderBookList = (props) => (

    props.books.map(book => (
      <div className="book-item">
        <Typography
          variant="h5"
          component="h5"
          data-test="heading" className="tittles">
            {book.name}
        </Typography>
      </div>
    )
  ))

  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        data-test="heading">DevBook</Typography>
      <div data-test="book-list">

      <RenderBookList books={books} />

      </div>
    </>
  );
}

export default App;
