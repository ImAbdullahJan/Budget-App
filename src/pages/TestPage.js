import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

import {
  withStyles,
  Box,
  Typography,
  Button as MuiButton
} from "@material-ui/core";

import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CircularProgress from "@material-ui/core/CircularProgress";

const drawerWidth = 450;

const styles = theme => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    top: "25%",
    bottom: 0,
    height: "75%"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});

const useInfiniteScroll = (query, pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    let cancel;
    axios({
      method: "get",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber, limit: 1 },
      cancelToken: new axios.CancelToken(c => {
        cancel = c;
      })
    })
      .then(res => {
        setBooks(prevBooks => {
          return [
            ...new Set([...prevBooks, ...res.data.docs.map(b => b.title)])
          ];
        });
        setLoading(false);
        setHasMore(res.data.docs.length > 0);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return [loading, error, books, hasMore];
};

function TestPage({ classes }) {
  const [open, setOpen] = React.useState(false);

  const [searchText, setSearchText] = useState("test");
  const [pageNumber, setPageNumber] = useState(1);

  const [loading, error, books, hasMore] = useInfiniteScroll(
    searchText,
    pageNumber
  );

  const observer = useRef();

  const lastElementRef = useCallback(
    node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber(prevPage => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <h1>Test Page</h1>

      <MuiButton
        variant='contained'
        color='primary'
        onClick={() => setOpen(true)}
      >
        Open Left
      </MuiButton>

      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => setOpen(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>

        <Divider />
        {[...Array(30).keys()].map(item => (
          <Typography key={item} variant='body1' component='div'>
            <Box fontWeight='normal'>Some Text</Box>
          </Typography>
        ))}
      </Drawer>

      <Autocomplete
        id='combo-box-demo'
        options={books}
        getOptionLabel={option => option}
        renderOption={option => {
          {
            if (books[books.length - 1] === option) {
              return (
                <Typography ref={lastElementRef}>
                  {option}{" "}
                  {loading ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                </Typography>
              );
            } else {
              return <Typography>{option}</Typography>;
            }
          }
        }}
        style={{ width: 300 }}
        renderInput={params => {
          return (
            <TextField
              {...params}
              label='Combo box'
              variant='outlined'
              fullWidth
            />
          );
        }}
      />

      {/* <Box width={500} p={3} style={{ maxHeight: "400px", overflow: "auto" }}>
        <Box bgcolor='#ffffff' mt={5}>
          <InputSearch
            value={searchText}
            onChangeValue={value => setSearchText(value)}
          />
        </Box>

        {books.map((book, index) => {
          if (books.length === index + 1) {
            return (
              <Typography variant='body1' component='div' key={index}>
                <Box fontWeight='normal' mt={5} ref={lastElementRef}>
                  {book}
                </Box>
              </Typography>
            );
          }
          return (
            <Typography variant='body1' component='div' key={index}>
              <Box fontWeight='normal' mt={5}>
                {book}
              </Box>
            </Typography>
          );
        })}

        {loading && (
          <Typography variant='body1' component='div'>
            <Box fontWeight='normal' mt={5}>
              Loading...
            </Box>
          </Typography>
        )}

        {error && (
          <Typography variant='body1' component='div'>
            <Box fontWeight='normal' mt={5}>
              Error
            </Box>
          </Typography>
        )}
      </Box> */}
    </>
  );
}

export default withStyles(styles)(TestPage);
