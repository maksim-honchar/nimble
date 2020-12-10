import React, { useEffect, useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

export const Track = (props) => {
  return (
    <ListItem>
      <ListItemText primary={props.title} />
      <span style={{ marginRight: 50 }}>
        {props.index === props.currentSong
          ? `${props.timingTrack} / ${props.totalTime}`
          : null}
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
          style={{ color: "red" }}
        >
          <HighlightOffIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
