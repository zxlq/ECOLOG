import React, { Component } from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";
import { useN04TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n04";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import UserCredits from "./App";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
//import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
//import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';


import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  root: {
    maxWidth: 643,
    margin: "auto",
    borderRadius: 12,
    padding: 12,
    height: 600
  },
  media: {
    borderRadius: 6
  },
  button: {
    margin: theme.spacing(1),
  },
  title: {
    flexGrow: 1
  },

});


class SpendCreditsCard extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      ecocredits: 25, 
      render: false, 
      cart: 0 
    };
    this.spending = this.spending.bind(this);
    this.Contribute = this.Contribute.bind(this);
    this.home = this.home.bind(this);
    this.Badbalance = this.BadBalance.bind(this);
  
    
  }
  spending() {
    let num1 = this.state.ecocredits;
    let num2 = this.state.cart;
    let num3 = num1 - num2;
    this.setState({ ecocredits: num3 });
    this.setState({ render: false});
    this.setState({ cart: 0 });
  }
  Contribute(){
    let x=this.state.cart;
    let y=5;
    let z=x+y;
    this.setState({ render: true });
    this.setState({ cart: z });
  }
  home(){
    let curCart=this.state.cart;
    let newCart=curCart-5;
    this.setState({cart: newCart});
  }
  BadBalance(){
    this.setState({ render: false });
    this.setState({ cart: 0 });
  }
  render() {
    const { classes } = this.props;
    const ss=this.state.render;
    const xx=this.state.ecocredits;
    const zz=this.state.cart;

    if(xx===0&&zz===5){
      return(
        <div>Not enough credits
        <button onClick={() =>this.BadBalance()}>Home</button>
        </div>
      )
    }
    if(zz>xx){
      return(
        <div>Not enough credits
        <button onClick={() =>this.home()}>Home</button>
        </div>
      )
    }

    if(ss===true){
      return(
        <div className="App">
       
         <Typography
              component="h6"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
      <div>Spend some eco-credits ({this.state.ecocredits}) <br></br></div>
      
      <div>What would like lik to spend eco-credits on?</div>
      
      <table><tr>
        <td>
          Plant a Tree? 
        </td>
        <td>
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </td>
    </tr></table>
    <div>
    Solar Panels?
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>
    
    <div>
    Eco Friendly windows?
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>
    
    <div>
    Ev Car Chargers? 
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>

    <div>
    LED Lights? 
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>
    
        

          <p>You are spending <b>{this.state.cart}</b> eco-credits and will have <b>{this.state.ecocredits - this.state.cart}</b> remaining.<br></br>
          <button onClick={() =>this.spending()}> <b>Spend</b> </button>
          </p> 
          </Typography>
          </div>
          
      )
    }
    return (
      <div className="App">
       
    <Typography
              component="h6"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
      <div>Spend some eco-credits, you have a balance of: ({this.state.ecocredits}) <br></br></div>
      
      <div>What would like lik to spend eco-credits on?</div>
      
      
      <table>
        <tr>
        <td>
          Plant a Tree? 
        
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </td>
    </tr>
    </table>
   
    <div>
    Solar Panels?
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>
    
    <div>
    Eco Friendly windows?
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>
    
    <div>
    Ev Car Chargers? 
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>

    <div>
    LED Lights? 
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      startIcon={<SaveIcon />}
      onClick={() =>this.Contribute()}
    >
      Contribute
    </Button>
    </div>
    </Typography>
        </div>
    );
  }



};

export default withStyles(styles, { withTheme: true })(SpendCreditsCard);

