import React from "react";
import Grid from "@material-ui/core/Grid";
import StatDisplay from "./components/StatDisplay";
import CharactorSelect from "./components/CharactorSelect";
import CharactorName from "./components/CharactorName";
import StatChart from "./components/StatChart";

function App() {
  return (
    <Grid
      style={{padding:10}}
      spacing={2}
      container
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      {/* Start Charactor Section */}
      <Grid item xs={12} md={4} lg={4}>
        <CharactorSelect></CharactorSelect>
        <CharactorName></CharactorName>
      </Grid>
      {/* End Charactor Section */}

      {/* Start Chart Section */}
      <Grid item xs={8} md={4} lg={4}>
        <StatChart></StatChart>
      </Grid>
      {/* End Chart Section */}

      {/* Start Stat Section */}
      <Grid item xs={4} md={4} lg={4}>
        <StatDisplay></StatDisplay>
      </Grid>
      {/* End Stat Section */}
    </Grid>
  );
}

export default App;
