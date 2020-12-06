import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";


import A_LogCreditsCard from "./A_LogCreditsCard";


//Call a card with content to LOG credits
class CardContent2 extends Component {
  render() {
    return (

  <Grid container spacing={1}>
            {/* media card ecologi LOGO */}

          

            <Grid item xs={12} md={12} lg={12}>
              <Paper>
              <A_LogCreditsCard />
              </Paper>
            </Grid>

            </Grid>

       
        
)
    }
  }
export default CardContent2