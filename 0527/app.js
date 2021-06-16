import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import{ makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-roboto';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border:0,
    marginBottom:15,
    borderRadius:15,
    color: 'white',
    padding: '5PX 30px'
  }
})

const theme = createMuiTheme({
  typography:{
    h2:{
      fontSize: 36,
      marginBottom:15,
    }
  },
})


function ButtonStyled(){
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return(
  <FormControlLabel 
    control={<Checkbox 
      checked={checked}
      icon={<SaveIcon />}
      checkedIcon={<SaveIcon />}
      onChange={(e) => setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
      />} 
      label="testing checkbox"
  />
    

  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
    <div className="App">
      <header className="App-header">
        <AppBar color="secondary">
          <ToolBar>
            <IconButton>
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6">
              MUI Themeing
            </Typography>
            <Button>
              Login
            </Button>
          </ToolBar>
        </AppBar>
        <Typography variant="h2" component="div">
          welcome to MUI
        </Typography>
        <Typography variant="subtitle1">
          Learn how to use Material Ui
        </Typography>
        <ButtonStyled/>   
        <TextField 
          variant="outlined"
          color="secondary"
          type="email"
          label="the time"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
        <Button 
        startIcon={<SaveIcon />}
        >
          save
        </Button>
        <Button 
        startIcon={<DeleteIcon />}
        >
          discard
        </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
