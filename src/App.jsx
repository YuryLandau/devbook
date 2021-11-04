import { Typography } from "@material-ui/core";

function App() {

  const books = [
    { name: 'Refactoring'},
    { name: 'Domain-driven design'}
  ]

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
