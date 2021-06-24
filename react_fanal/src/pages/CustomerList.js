import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  Button,
  Card,
  Container,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Grid
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Search as SearchIcon } from 'react-feather';
import { useState, useEffect } from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const OrdList = () => {
  const classes = useStyles();
  const [ordList, setOrdList] = useState();
  const [keyword, setKeyword] = useState();
  let newOrd = {};
  const search = () => {
    fetch('http://localhost/php/searchOrderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keyword })
    })
      .then((res) => res.json())
      .then((data) => {
        setOrdList(data);
      })
      .catch((err) => {
        setOrdList(err);
      });
  };

  const insert = () => {
    fetch('http://localhost/php/insertOrderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrd)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        search();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteOrderdetail = (e) => {
    fetch('http://localhost/php/deleteOrderdetail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ seq: e.currentTarget.value })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert(data.msg);
        search();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let list = (<></>);
  if (ordList) {
    const arr = ordList.orderdetail;
    if (arr) {
      list = (arr.map((orderdetail) => (
        <TableRow key={orderdetail.seq}>
          <TableCell>{orderdetail.seq}</TableCell>
          <TableCell>{orderdetail.OrderId}</TableCell>
          <TableCell>{orderdetail.ProdId}</TableCell>
          <TableCell>{orderdetail.Qty}</TableCell>
          <TableCell>{orderdetail.Discount}</TableCell>
          <TableCell>
            <Button
              variant="danger"
              value={orderdetail.seq}
              onClick={deleteOrderdetail}
            >
              Delete
            </Button>
          </TableCell>
          <TableCell>
            <Button
              variant="danger"
              value={orderdetail.ProdId}
            >
              Update
            </Button>
          </TableCell>
        </TableRow>
      ))
      );
    }
  }

  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  const AddnewOrd = (e) => {
    newOrd = {
      ...newOrd,
      [e.target.name]: e.target.value
    };
    console.log(newOrd);
  };

  useEffect(() => {
    search();
  }, []);
  return (
    <>
      <Helmet>
        <title>Orderdetail | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Box>
            <Box>
              <Box>
                <Card>
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item>
                        <TextField
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <SvgIcon
                                  fontSize="small"
                                  color="action"
                                >
                                  <SearchIcon />
                                </SvgIcon>
                              </InputAdornment>
                            )
                          }}
                          variant="outlined"
                          onChange={changeKeyword}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="danger"
                          onClick={search}
                        >
                          Search orderdetail
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
            <Box sx={{ mt: 3 }}>
              <Box>
                <Card>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item>
                        <TableRow>
                          <TableCell>seq</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="seq"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>OrderId</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="OrderId"
                          onChange={AddnewOrd}
                          value={newOrd.ProdName}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>ProdId</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="ProdId"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>Qty</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="Qty"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <TableRow>
                          <TableCell>Discount</TableCell>
                        </TableRow>
                        <TextField
                          variant="outlined"
                          name="Discount"
                          onChange={AddnewOrd}
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="danger"
                          onClick={insert}
                        >
                          Add Orderdetail
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Box>
          <Box sx={{ pt: 3 }}>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Seq</TableCell>
                    <TableCell>OrderId</TableCell>
                    <TableCell>ProdId</TableCell>
                    <TableCell>Qty</TableCell>
                    <TableCell>Discount</TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {list}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default OrdList;
