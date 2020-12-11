import { useState, useRef, useEffect } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { tracks } from "../app/utils";

import { Track } from "./Track";
import { Search } from "./Search";

export const Player = () => {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(tracks);

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
    setCurrentSong(null);
    setIsPlaying(false);
    setSongs(newList);
  };

  useEffect(() => {
    isPlaying ? audioEl.current.play() : audioEl.current.pause();
  }, [isPlaying, currentSong]);

  const tracksList = songs.map((track, index) => (
    <div className="tracks" key={index}>
      <Track
        index={index}
        title={track.title}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleTrack={toggleTrack}
        deleteTrack={deleteTrack}
        timingTrack={formatTiming(timeCurrent)}
        totalTime={formatTiming(timeDuration)}
      />
    </div>
  ));

  return (
    <div className="wrapper-player">
      <audio
        src={songs.length && currentSong !== null ? songs[currentSong].src : ""}
        ref={audioEl}
        onTimeUpdate={currentTimeTrack}
        onCanPlay={durationTrack}
      />
      <Typography variant="h2" gutterBottom>
        tracker
      </Typography>
      <Search songs={songs} toggleTrack={toggleTrack} isPlaying={isPlaying} />
      <div className="wrapper-tracks">
        <List>{tracksList}</List>
      </div>
    </div>
  );
};
