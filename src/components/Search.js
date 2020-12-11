import { useState } from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: 30,
  },
  bigButtons: {
    color: "#4caf50",
    fontSize: 60,
    marginRight: -15,
  },
});

export const Search = (props) => {
  const classes = useStyles();

  const [trackTitle, setTrackTitle] = useState("");
  const [searchTerms, setSearchTerms] = useState(false);

  const letters = /^[a-zA-Z\s]*$/;

  const handleChange = (e) => {
    if (e.target.value.match(letters)) {
      setTrackTitle(e.target.value);
    }
  };

  const playTrack = (e) => {
    e.preventDefault();
    if (trackTitle.length >= 3) {
      setSearchTerms(false);
    } else {
      setSearchTerms(true);
    }
    const regexp = new RegExp(trackTitle, "i");
    props.songs.forEach((track, index) => {
      if (trackTitle === "") {
        props.setIsPlaying(!props.isPlaying);
      } else if (regexp.test(track.title) && trackTitle.length > 2) {
        props.toggleTrack(index);
        props.setIsPlaying(true);
        setSearchTerms(false);
      }
    });
    setTrackTitle("");
  };

  return (
    <div className="wrapper-serch_field">
      <form onSubmit={playTrack}>
        <FormControl variant="outlined" className="input">
          <OutlinedInput
            autoFocus
            className={classes.root}
            placeholder={
              searchTerms ? "at least three letters" : "Enter tracker name"
            }
            id="search track"
            type="text"
            value={trackTitle}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <PlayCircleFilledIcon
                  fontSize="large"
                  className={classes.bigButtons}
                />
              </InputAdornment>
            }
          />
        </FormControl>
      </form>
    </div>
  );
};
