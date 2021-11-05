import { Typography } from "@material-ui/core"

export const BookList = (props) => (

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