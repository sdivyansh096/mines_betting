import React, { useEffect, useState } from "react";
import diamondEffect from "../Assests/Sound/gold.wav";
import goldIcon from "../Assests/green.png";
import bombicon from "../Assests/bomb.png";
import "./Square.css";

function Square({ mine, setGameOver, gameOver, setScore }) {
  const [image, setImage] = useState(null);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (gameOver === true) {
      if (mine) {
        setImage(bombicon);
      } else {
        setImage(goldIcon);
      }
    }
  }, [gameOver, mine]);

  function mouseEnterhandle() {
    // if (!image) {
    //   const sound = new Audio(hoverEffect);
    //   sound.play();
    // }
  }

  function clickHandler() {
    if (gameOver || clicked) return;

    setClicked(true);

    if (!mine) {
      setScore((prevValue) => {
        return prevValue * 1.15;
      });
      setImage(goldIcon);
      const sound = new Audio(diamondEffect);
      sound.play();
    } else {
      setScore(0);
      alert("You Lose the Game");
      setGameOver(true);
    }
  }

  return (
    <div>
      <div
        className="square-item"
        onMouseEnter={mouseEnterhandle}
        onClick={clickHandler}
      >
        {image ? <img height={90} width={90} src={image} alt="" /> : ""}
      </div>
    </div>
  );
}

export default Square;
