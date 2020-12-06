import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import SpendCreditsCard from "./SpendCreditsCard.js";

//Call a card with content to spend credits
class CardContentHandler3 extends Component {
  render() {
    return (
      <Grid container spacing={1}>
        {/* media card ecologi LOGO */}

        <Grid item xs={12} md={12} lg={12}>
          <Paper>
            <SpendCreditsCard />
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
export default CardContentHandler3;
