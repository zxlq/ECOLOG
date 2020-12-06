import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import LogCreditsCard from "./LogCreditsCard";


//Call a card with content to LOG credits
class CardContentHandler2 extends Component {
  render() {
    return (

  <Grid container spacing={1}>
            {/* media card ecologi LOGO */}

          

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
              <LogCreditsCard />
              </Paper>
            </Grid>

            </Grid>

       
        
)
    }
  }
export default CardContentHandler2