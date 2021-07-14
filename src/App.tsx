import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./Store";
import { GetUserInfo } from "./Action/UserActions";
import { makeStyles } from "@material-ui/core/styles";
import Moment from "moment";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles({
  root: {
    marginRight: 20,
  },
  media: {
    height: 440,
    width: 440,
  },
  div: {
    display: "flex",
    padding: 20,
  },
  conatiner: {
    padding: 20,
  },
  button: {
    marginRight: 10,
    padding: 10,
  },
  titel:{
    fontSize:18,
    lineHeight:"24px",
    fontWeight:800,
    color:"#828282"
  },

  body:{
    fontSize:18,
    lineHeight:"24px",
    fontWeight:500,
    paddingLeft:10
  }
});

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeAge, setActiveAge] = useState(false);
  const [nationality, setNationality] = useState("us");
  const userSates = useSelector((state: RootStore) => state.userinfo);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setNationality(event.target.value as string);
  };
  const handleSerchUser = () => dispatch(GetUserInfo(3, nationality));
  const handleAge = () => setActiveAge(true);

  return (
    <div className="App">
      <React.Fragment>
        <Container maxWidth="lg" className={classes.conatiner}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleSerchUser()}
          >
            Search Randome People
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => handleAge()}
          >
            Calculater Age
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => window.location.reload()}
          >
            Clear
          </Button>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Nationality</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={nationality}
              onChange={handleChange}
            >
              <MenuItem value={"fr"}>France</MenuItem>
              <MenuItem value={"dk"}>Denmark</MenuItem>
              <MenuItem value={"us"}>United States</MenuItem>
            </Select>
          </FormControl>
          {userSates.userinfo && (
            <Grid className={classes.div}>
              {userSates.userinfo.results.map((val, Index) => {
                return (
                  <div>
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={val.picture.large}
                          title="Contemplative Reptile"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h5" className={classes.titel}>
                            Name :
                            <span className={classes.body}>
                            {val.name.first + val.name.last}
                            </span>
                          </Typography>
                          <Typography variant="h5" component="h5" className={classes.titel}>
                            Date Of Birth :
                            <span className={classes.body}>{Moment(val.dob && val.dob.date).format(
                              "DD/MM/YYYY"
                            )}</span>
                          </Typography>
                          <Typography variant="h5" component="h5" className={classes.titel} >
                            City :
                          <span className={classes.body}>{val.location.city}</span>
                          </Typography>
                          {activeAge ? (
                            <Typography variant="h5" component="h5" className={classes.titel}>
                              Age:
                              <span className={classes.body} >{val.dob.age}</span>
                            </Typography>
                          ) : null}
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </div>
                );
              })}
            </Grid>
          )}
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
