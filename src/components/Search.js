import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";

export const Search = (props) => {
  const [trackTitle, setTrackTitle] = useState("");

  const handleChange = (e) => {
    setTrackTitle(e.target.value);
  };

  const playTrack = (e) => {
    e.preventDefault();
    props.songs.forEach((track, index) => {
      if (track.title === trackTitle) {
        props.toggleTrack(index);
      }
      return track;
    });
  };

  return (
    <form onSubmit={playTrack}>
      <FormControl variant="outlined">
        <OutlinedInput
          style={{ width: 500, borderRadius: 30 }}
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
                {props.isPlaying === true ? (
                  <PauseCircleOutlineIcon fontSize="large" />
                ) : (
                  <PlayCircleOutlineIcon fontSize="large" />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};
