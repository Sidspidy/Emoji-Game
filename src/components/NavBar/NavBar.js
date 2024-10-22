import "./NavBar.css";

const NavBar = ({ currentScore, topScore, isGameEnd }) => {
  const renderScores = () => {
    if (isGameEnd) return null;
    return (
      <div className="Score-container">
        <p className="score-label">
          Score : <span className="score-value">{currentScore}</span>
        </p>
        <p className="score-label">
          Total Score : <span className="score-value">{topScore}</span>
        </p>
      </div>
    );
  };

  return (
    <div className="navbar-container">
      <div className="logo-title-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="logo"
        />
        <p className="logo-title">Emoji Game</p>
      </div>
      {renderScores()}
    </div>
  );
};

export default NavBar;
