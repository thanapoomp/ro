/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import * as attributeRedux from '../reducers/attribute.reducer'

function StatAttribute(props) {
  const dispatch = useDispatch();

  const attributeReducer = useSelector(({attribute}) => attribute)
  const [name, setName] = React.useState("");
  const [attributeValue, setAttributeValue] = React.useState(1);

  React.useEffect(() => {
      //set name
      setName(attributeReducer.attributeList[props.index])

      //set value
      setAttributeValue(attributeReducer.attributeValue[props.index])
  }, [props.index])

  React.useEffect(() => {
      //update redux value

      let objToUpdate = [...attributeReducer.attributeValue]
      
      objToUpdate[props.index] = attributeValue;

      dispatch(attributeRedux.actions.changeAttrValue(objToUpdate))

  }, [attributeValue])

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <Paper style={{ padding: 5, margin: 5 }}>
      <Typography id="discrete-slider" gutterBottom>
        {name}
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        value={attributeValue}
        onChange={(event, value) => {
          setAttributeValue(value);
        }}
      />
    </Paper>
  );
}

export default StatAttribute;
