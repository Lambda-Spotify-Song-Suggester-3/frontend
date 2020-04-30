import React from "react";
import PlayStyles from "./PlayStyles.jsx";

import { useSelector, useDispatch } from "react-redux";
import { favoriteSongAction } from "../../redux/actions/songAction";

const Play = (props) => {
  const dispatch = useDispatch();

  const saveMusic = () => {
    dispatch(favoriteSongAction(props.track.track_id));
    console.log(props.track.track_id);
  };

  return (
    <PlayStyles>
      <h2>{props.track.track_name}</h2>
      <h2>Artist - {props.track.artist_name}</h2>
      <div>
        <button>Similar Songs?</button>
        <button onClick={() => saveMusic()}>Save Song</button>
      </div>
    </PlayStyles>
  );
};

export default Play;
