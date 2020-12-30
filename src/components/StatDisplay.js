import React from "react";
import Paper from "@material-ui/core/Paper";
import StatAttribute from "../components/StatAttribute";
import { useSelector } from "react-redux";

function StatDisplay() {
  const attributeReducer = useSelector(({ attribute }) => attribute);
  return (
    <Paper elevation={3}>
      {attributeReducer.attributeList.map((item, index) => (
        <StatAttribute key={index} index={index}></StatAttribute>
      ))}
    </Paper>
  );
}

export default StatDisplay;
