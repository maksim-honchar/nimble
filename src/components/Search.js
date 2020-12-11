import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 30,
  },
  bigButtons: {
    color: "#4caf50",
  },
});

export const Search = (props) => {
  const classes = useStyles();

  const [trackTitle, setTrackTitle] = useState("");

  const handleChange = (e) => {
    setTrackTitle(e.target.value);
  };

  const playTrack = (e) => {
    e.preventDefault();
    props.songs.forEach((track, index) => {
      if (trackTitle === "") {
        props.setIsPlaying(!props.isPlaying);
      } else if (track.title === trackTitle) {
        props.toggleTrack(index);
        props.setIsPlaying(true);
      }
    });
    setTrackTitle("");
  };

  return (
    <form onSubmit={playTrack}>
      <FormControl variant="outlined" className="input">
        <OutlinedInput
          autoFocus
          className={classes.root}
          placeholder="Enter tracker name"
          id="search track"
          type="text"
          value={trackTitle}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="button play"
                onClick={playTrack}
                edge="end"
              >
                {props.isPlaying ? (
                  <PauseCircleFilledIcon
                    fontSize="large"
                    className={classes.bigButtons}
                  />
                ) : (
                  <PlayCircleFilledIcon
                    fontSize="large"
                    className={classes.bigButtons}
                  />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};
