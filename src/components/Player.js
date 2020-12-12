import { useState, useRef, useEffect } from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { tracks } from "../app/utils";

import { Track } from "./Track";
import { Search } from "./Search";
import { NotFound } from "./NotFound";

export const Player = () => {
  const audioEl = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(tracks);
  const [currentSong, setCurrentSong] = useState(null);
  const [timeDuration, setTimeDuration] = useState(0);
  const [timeCurrent, setTimeCurrent] = useState(0);
  const [isFind, setIsFind] = useState(true);

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
        artist={track.artist}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleTrack={toggleTrack}
        deleteTrack={deleteTrack}
        timingTrack={formatTiming(timeCurrent)}
        totalTime={formatTiming(timeDuration)}
      />
    </div>
  ));

  const trackList = (
    <div className="wrapper-tracks">
      <List>{tracksList}</List>
    </div>
  );

  const notFoundPage = <NotFound setIsFind={setIsFind} />;

  return (
    <div className="wrapper-player">
      <audio
        src={songs.length && currentSong !== null ? songs[currentSong].src : ""}
        ref={audioEl}
        onTimeUpdate={currentTimeTrack}
        onCanPlay={durationTrack}
      />
      <div className="title">
        <Typography variant="h3" gutterBottom>
          <strong>tracker</strong>
        </Typography>
      </div>

      <Search
        songs={songs}
        toggleTrack={toggleTrack}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setIsFind={setIsFind}
      />
      {isFind ? trackList : notFoundPage}
    </div>
  );
};
