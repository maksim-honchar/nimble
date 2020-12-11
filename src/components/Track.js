import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "#4caf50",
  },
  timing: {
    color: "#4caf50",
    marginRight: 50,
  },
  deleteButton: {
    color: "#e57373",
  },
});

export const Track = (props) => {
  const classes = useStyles();
  return (
    <ListItem
      divider
      selected={props.index === props.currentSong ? true : false}
    >
      <ListItemText
        primary={props.title}
        secondary={props.artist}
        className={props.index === props.currentSong ? classes.root : null}
      />
      <span
        className={props.index === props.currentSong ? classes.timing : null}
      >
        {props.index === props.currentSong ? props.timingTrack : null}
      </span>
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="play"
          onClick={() => props.toggleTrack(props.index)}
        >
          {props.index === props.currentSong && props.isPlaying ? (
            <PauseCircleOutlineIcon />
          ) : (
            <PlayCircleOutlineIcon />
          )}
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => props.deleteTrack(props.title)}
          className={classes.deleteButton}
        >
          <HighlightOffIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
