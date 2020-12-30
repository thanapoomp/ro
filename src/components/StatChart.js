import React from 'react'
import Paper from '@material-ui/core/Paper';
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux'

function StatChart() {

    // const [state, setState] = React.useState({
    //   options: {
    //     chart: {
    //       id: "basic-bar",
    //     },
    //     xaxis: {
    //       categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    //     },
    //   },
    //   series: [
    //     {
    //       name: "series-1",
    //       data: [30, 40, 45, 50, 49, 60, 70, 91],
    //     },
    //   ],
    // });
    const attributeReducer = useSelector(({attribute})=> attribute)
    const [chartOption, setChartOption] = React.useState({})
    const [chartSeries, setChartSeries] = React.useState([])

    React.useEffect(() => {

      //set chart option
      setChartOption({
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [...attributeReducer.attributeList],
        },
      });

      //todo: set chart series
      setChartSeries([
        {
          name: "series-1",
          data: [...attributeReducer.attributeValue],
        },
      ]);

    }, [attributeReducer])

    return (
        <Paper elevation={3}>
            <Chart
              options={chartOption}
              series={chartSeries}
              yaxis={{
                min:1,
                max:10
              }}
              type="radar"
              width="100%"
            />
        </Paper>
    )
}

export default StatChart
