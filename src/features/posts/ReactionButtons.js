import { useAddReactionMutation } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation();

  const onReactionClicked = (name) => {
    const newValue = post.reactions[name] + 1;

    addReaction({
      postId: post.id,
      reactions: { ...post.reacions, [name]: newValue },
    });
  };

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() => onReactionClicked(name)}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};
export default ReactionButtons;
