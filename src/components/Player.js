import { useState, useRef, useEffect } from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

import { Track } from "./Track";
import { Search } from "./Search";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const Player = () => {
  const audioEl = useRef(null);
  const classes = useStyles();

  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState([
    { title: "No name tracker  #1", src: "./music/01.mp3" },
    { title: "No name tracker  #2", src: "./music/02.mp3" },
    { title: "No name tracker  #3", src: "./music/03.mp3" },
  ]);

  const [currentSong, setCurrentSong] = useState(null);
  const [timeDuration, setTimeDuration] = useState(0);
  const [timeCurrent, setTimeCurrent] = useState(0);

  const durationTrack = (e) => setTimeDuration(e.target.duration);
  const currentTimeTrack = (e) => setTimeCurrent(e.target.currentTime);

  const formatTiming = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const toggleTrack = (number) => {
    if (number === currentSong) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(number);
      setIsPlaying(true);
    }
  };

  const deleteTrack = (trackTitle) => {
    const newList = songs.filter((track) => track.title !== trackTitle);
    setSongs(newList);
  };

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  }, [isPlaying, currentSong]);

  const tracksList = songs.map((track, index) => (
    <Track
      key={index}
      index={index}
      title={track.title}
      currentSong={currentSong}
      isPlaying={isPlaying}
      toggleTrack={toggleTrack}
      deleteTrack={deleteTrack}
      timingTrack={formatTiming(timeCurrent)}
      totalTime={formatTiming(timeDuration)}
    />
  ));

  return (
    <div>
      <audio
        controls
        src={songs.length && currentSong !== null ? songs[currentSong].src : ""} // При удалении последнего трека нужен null
        ref={audioEl}
        onTimeUpdate={currentTimeTrack}
        onCanPlay={durationTrack}
      />
      <Search />
      <List className={classes.root}>{tracksList}</List>
    </div>
  );
};
