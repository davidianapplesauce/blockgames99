import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import products from "../../products.json"
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
};

function MediaCard(props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={classes.image} title={classes.title} />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {/* Torn Tales */}
          </Typography>
          <Typography component="p">
            {/* Lead your party of 3 heroes on their quest to repair the torn pages of folklore. Evil has destroyed the tales you love. Hack monsters and slash enemies throughout the Torn Tales in this real time squad based RPG. */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          <Link to={"/Checkout"}>Checkout></Link>
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
