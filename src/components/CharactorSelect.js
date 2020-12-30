import React from "react";
import Paper from "@material-ui/core/Paper";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "pure-react-carousel/dist/react-carousel.es.css";

function CharactorSelect() {
  const useStyle = makeStyles((theme) => ({
    image: {
      marginTop: 10,
      marginBottom: 10,
      width: 200,
      height: "auto",
    },
  }));

  const [charactorList] = React.useState([
      'c_red','c_darkblue','c_white','c_brown','c_darkgreen','c_yellow'
  ])

  const [totalCharactors, setTotalCharactors] = React.useState(0)

  const classes = useStyle();

  React.useEffect(() => {
      setTotalCharactors(charactorList.length)
  }, [charactorList])

  return (
    <Paper elevation={3}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={totalCharactors}
        infinite
      >
        <Slider>
          {charactorList.map((item,index) => (
            <Slide key={item} index={index}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <img
                  className={classes.image}
                  alt=""
                  src={`${process.env.PUBLIC_URL}/${item}.png`}
                />
              </Grid>
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </Paper>
  );
}

export default CharactorSelect;
