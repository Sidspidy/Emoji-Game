import "./EmojiGame.css";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import EmojiCard from "../EmojiCard/EmojiCard";
import WinOrLoseCard from "../WinOrLoseCard/WinOrLoseCard";

const EmojiGame = ({ emojisList }) => {
  const [clickedEmojis, setClickedEmojis] = useState([]);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [topScore, setTopScore] = useState(0);

  const getShuffledEmojisList = () => {
    return emojisList.sort(() => Math.random() - 0.5);
  };

  const onClickEmoji = (id) => {
    if (clickedEmojis.includes(id)) {
      finishGameAndSetTopScore(clickedEmojis.length);
    } else {
      if (emojisList.length - 1 === clickedEmojis.length) {
        finishGameAndSetTopScore(emojisList.length);
      }
      setClickedEmojis([...clickedEmojis, id]);
    }
  };

  const finishGameAndSetTopScore = (newScore) => {
    if (newScore > topScore) {
      setTopScore(newScore);
    }
    setIsGameEnd(true);
  };

  const restartGame = () => {
    setClickedEmojis([]);
    setIsGameEnd(false);
  };

  const renderWinOrLose = () => {
    const isWon = emojisList.length === clickedEmojis.length;
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={restartGame}
        score={clickedEmojis.length}
      />
    );
  };

  const renderEmojiList = () => {
    const shuffledEmojiList = getShuffledEmojisList();
    return (
      <ul className="emoji-list">
        {shuffledEmojiList.map((emojiItem) => (
          <EmojiCard
            key={emojiItem.id}
            emoji={emojiItem}
            onClickEmoji={onClickEmoji}
          />
        ))}
      </ul>
    );
  };

  const currentScore = clickedEmojis.length;
  return (
    <div className="app-container">
      <NavBar
        currentScore={currentScore}
        topScore={topScore}
        isGameEnd={isGameEnd}
      />
      <div className="emoji-body-container">
        {isGameEnd ? renderWinOrLose() : renderEmojiList()}
      </div>
    </div>
  );
};

export default EmojiGame;
