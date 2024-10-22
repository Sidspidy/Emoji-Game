import "./EmojiCard.css";

function EmojiCard(props) {
  const { emoji, onClickEmoji } = props;
  const { emojiName, emojiUrl, id } = emoji;

  const onclickEmojiItem = () => {
    onClickEmoji(id);
  };
  return (
    <li className="emoji-item" onClick={onclickEmojiItem}>
      <img key={id} src={emojiUrl} alt={emojiName} className="emoji-image" />
    </li>
  );
}

export default EmojiCard;
