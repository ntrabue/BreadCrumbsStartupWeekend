import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useAppReducer } from "./State";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  pinned: {
    color: red[500]
  }
}));

const ListItem = item => {
  const dispatch = useAppReducer();
  const classes = useStyles();
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} aria-label="recipe">
            {item.item.letter}
          </Avatar>
        }
        title={item.item.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        image={item.item.photo}
        title="Paella dish"
        className={classes.media}
        styles={"width: 100%; height: auto"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon
            className={item.item.pinned && classes.pinned}
            onClick={() => dispatch({ type: "toggle", item: item.item })}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ListItem;
