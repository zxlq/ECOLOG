//import * as React from 'react';
//import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Title";
import React, { useEffect, useState } from "react";
//import Home from './Dashboard';
import axios from "axios";


const useStyles = makeStyles({
  depositContext: {
    flex: 1
  }
});

export default function TotalEcoCreditsSold() {
  const classes = useStyles();

  let TotalEcoCreditsSold = "";

  const Home = () => {
    const [Data, setData] = useState({
      total: ""
    });

    useEffect(() => {
      axios
        .get("https://public.offset.earth/users/fortusgroup/TotalEcoCreditsSold")
        .then((res) => {
          console.log("Response from main API: ", res);
          console.log("Home Data: ", res.data);
          let companyData = res.data;
          setData({ total: companyData.total });
          //console.log("Colors Data: ", res.data.data);
          // setColorsData(res.data.data)
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    console.log(Data.total);
    TotalEcoCreditsSold = Data.total;
  };
  //load home
  Home();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(date + "/" + month + "/" + year);
  }, []);

  return (
    <React.Fragment>
      <img
        src="EcoToken.svg"
        alt="Logo"
        width="250"
        height="150"
        align="center"
      ></img>
      <Typography component="p" variant="h3" >
        19,999{TotalEcoCreditsSold}
      </Typography>
      <Title>Eco Credits Purchased by Maynooth University</Title>

      <Typography
        color="textSecondary"
        className={classes.depositContext}
      >Updated:</Typography>
      <Typography
        color="textSecondary"
        className={classes.depositContext}
      >{currentDate}</Typography>
     
    </React.Fragment>
  );
}
