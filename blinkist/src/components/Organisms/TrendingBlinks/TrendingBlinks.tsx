import { Grid, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { ExplorePageCard } from "../../Molecules/BookCard/BookCard.stories";
// import TrendingBlinksData from "./TrendingBlinksdata";
// import JustAddedData from "./JustAddeddata";
// import FeaturedAudioBlinksData from "./FeaturedAudioBlinksdata";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
// import imgae_1 from "./1.png"
// import { Image } from "@mui/icons-material";
const useStyles = makeStyles({
  grid: {
    marginTop: "80px",
    paddingRight: "464px",
  },
  heading: {
    height: "30px",
    left: "0px",
    top: "0px",
    fontFamily: "Raleway",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#03314B",
  },
  searchField: {
    marginLeft: "20px",
    marginBottom: "0px",
  },
});

type Book = {
  name: string;
};
type WholeBook = {
  // id: React.Key | null | undefined;
  id: number;
  type: string;
  src: string;
  name: string;
  author: string;
  duration: string;
  noOfReads: string;
};
const TrendingBlinks: React.FunctionComponent = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [JustAddedData, setJustAddedData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/justadded").then((res) => {
      setJustAddedData(res.data);
    });
  }, []);
  const [TrendingBlinksData, setTrendingBlinksData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/trendingblinks").then((res) => {
      setTrendingBlinksData(res.data);
    });
  }, []);
  const [FeaturedAudioBlinksData, setFeaturedAudioBlinksData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/featuredaudioblinks").then((res) => {
      setFeaturedAudioBlinksData(res.data);
    });
  }, []);
  const type1 = "Trending Blinks";
  const type2 = "Just Added";
  const type3 = "Featured Audio Blinks";

  return (
    <>
      <div id="searchbar" style={{ marginTop: "58px" }}>
        <TextField
          id="search"
          label="Search by title or author"
          onChange={(event) => setSearchTerm(event.target.value)}
          style={{ width: "658px" }}
          className={classes.searchField}
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon style={{ color: "#3A4649" }} />
              </InputAdornment>
            ),
          }}
        >
          {" "}
        </TextField>
      </div>

      <Grid container className={classes.grid}>
        <Grid item style={{ marginBottom: "25px" }}>
          <Typography className={classes.heading} fontWeight={700}>
            Trending Blinks
          </Typography>
        </Grid>
        <Grid container columnSpacing="140px" rowSpacing="40px">
          {TrendingBlinksData.filter((book: Book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((book: WholeBook) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <Link to="/bookdetail" style={{ textDecoration: "none" }}>
                <ExplorePageCard
                  id={book.id}
                  type={type1}
                  key={book.id}
                  image={require(`${book.src}`)}
                  bookName={book.name}
                  author={book.author}
                  readTime={book.duration}
                  reads={book.noOfReads}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.grid}>
        <Grid item style={{ marginBottom: "25px" }}>
          <Typography className={classes.heading} fontWeight={700}>
            Just Added
          </Typography>
        </Grid>
        <Grid container columnSpacing="140px" rowSpacing="40px">
          {JustAddedData.filter((book: Book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((book: WholeBook) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <Link to="/bookdetail" style={{ textDecoration: "none" }}>
                <ExplorePageCard
                  id={book.id}
                  type={type2}
                  key={book.id}
                  image={require(`${book.src}`)}
                  bookName={book.name}
                  author={book.author}
                  readTime={book.duration}
                  reads={book.noOfReads}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid container className={classes.grid}>
        <Grid item style={{ marginBottom: "25px" }}>
          <Typography className={classes.heading} fontWeight={700}>
            Featured Audio blinks
          </Typography>
        </Grid>
        <Grid container columnSpacing="140px" rowSpacing="40px">
          {FeaturedAudioBlinksData.filter((book: Book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
          ).map((book: WholeBook) => (
            <Grid key={book.id} item xs={12} sm={6} md={4}>
              <Link to="/bookdetail" style={{ textDecoration: "none" }}>
                <ExplorePageCard
                  id={book.id}
                  type={type3}
                  key={book.id}
                  image={require(`${book.src}`)}
                  bookName={book.name}
                  author={book.author}
                  readTime={book.duration}
                  reads={book.noOfReads}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default TrendingBlinks;
