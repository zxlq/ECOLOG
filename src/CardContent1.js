import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Trees from "./DashboardCards/Trees";

import EcoCard from "./DashboardCards/EcoCard";
import SocialCardDemo from "./DashboardCards/SocialCardDemo";

//This displays the DASHBOARD CARDS and is called from app.js in the main div around line 234
class CardContent1 extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        {/* media card ecologi LOGO */}

        <Grid item xs={12} md={12} lg={3}>
          <Paper>
            <EcoCard />
          </Paper>
        </Grid>

        <Grid item xs={12} md={12} lg={3}>
          <Paper>
            <SocialCardDemo />
          </Paper>
        </Grid>

        <Grid item xs={12} md={12} lg={3}>
          <Paper>
            <Trees />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default CardContent1;
