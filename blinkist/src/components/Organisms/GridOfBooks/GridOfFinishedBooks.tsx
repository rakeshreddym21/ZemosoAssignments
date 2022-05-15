import { Grid } from "@mui/material";
import React, { useState,useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

import CurrentCard from "../../Molecules/BookCard/CurrentCard";
import FinishedReading from "./FinishedReading";

const useStyles = makeStyles({
  grid: {
    marginTop: "25px",
    paddingRight: "464px",
  },
});
interface Props {
  searchTerm: string;
}
const GridOfFinishedBooks: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [FinishedReading, setFinishedReading] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/finishedreading").then((res) => {
      setFinishedReading(res.data);
    });
  }, []);
  
  return (
    <>
      <Grid container className={classes.grid}>
        <Grid container columnSpacing="140px" rowSpacing="40px">
          {FinishedReading.filter((book: { name: string }) =>
            book.name.toLowerCase().includes(props.searchTerm.toLowerCase())
          ).map(
            (book: {
              id: number;
              src: string;
              name: string;
              author: string;
              duration: string;
              noOfReads: string;
            }) => (
              <Grid key={book.id} item xs={12} sm={6} md={4}>
                <CurrentCard
                  key={book.id}
                  image={require(`${book.src}`)}
                  bookName={book.name}
                  author={book.author}
                  readTime={book.duration}
                  reads={book.noOfReads}
                  buttonName={"Read again"}
                  id={book.id}
                  incCount={() => setCount(count + 1)}
                />
              </Grid>
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default GridOfFinishedBooks;
