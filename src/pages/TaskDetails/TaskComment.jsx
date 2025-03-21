import { useEffect, useState } from "react";
import styles from "./coment.module.css";
import { getComments, postComments } from "../../fetchData";
import answerImg from "../../images/answer.png";

export default function TaskComment({ task }) {
  const [comments, setComments] = useState([]);
  const [mainInput, setMainInput] = useState("");

  // Fetch comments on mount
  useEffect(() => {
    getComments({ task, getComments: setComments });
  }, [task]);

  const handleAddComment = async () => {
    if (mainInput.trim() === "") return;
    await postComments(task, mainInput, null);
    setMainInput(""); 
    getComments({ task, getComments: setComments });
  };

  const handleAddReply = async (id, replyText) => {
    if (!replyText.trim()) return;
    await postComments(task, replyText, id);
    getComments({ task, getComments: setComments }); 
  };

  const toggleReplyInput = (id) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, showReplyInput: !comment.showReplyInput } : comment
      )
    );
  };

  const handleReplyChange = (id, value) => {
    setComments((prev) =>
      prev.map((comment) =>
        comment.id === id ? { ...comment, replyInput: value } : comment
      )
    );
  };

  return (
    <div className={styles.taskCommentContainer}>
      <div className={styles.writeComment}>
        <textarea
          id="commentTextarea"
          value={mainInput}
          onChange={(e) => setMainInput(e.target.value)}
          placeholder="დაწერე კომენტარი"
          rows={6}
        />
        <button onClick={handleAddComment}>დაკომენტარე</button>
      </div>

      <div className={styles.commentBody}>
        <div className={styles.commentCount}>
          <span>კომენტარი</span> 
          <button>{comments.length}</button>
        </div>

        {comments.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.parentComment}>
              <div className={styles.commentImg}>
                <img src={comment.author_avatar} alt="Avatar" />
              </div>
              <div className={styles.commentInfo}>
                <p>{comment.author_nickname}</p>
                <p>{comment.text}</p>
                <button onClick={() => toggleReplyInput(comment.id)}>
                  <img src={answerImg} alt="Reply" />
                  <span>პასუხი</span>
                </button>
              </div>
            </div>

            {comment.showReplyInput && (
              <div className={`${styles.childComment} ${styles.writeComment}`}>
                <textarea
                  value={comment.replyInput || ""}
                  onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                  placeholder="პასუხი"
                  rows={2}
                />
                <button onClick={() => handleAddReply(comment.id, comment.replyInput)}>პასუხი</button>
              </div>
            )}

            {/* Display Replies */}
            {comment.sub_comments?  comment.sub_comments.map((reply) => (
              <div key={reply.id} className={styles.childComment}>
                <div className={styles.commentImg}>
                  <img src={reply.author_avatar} alt="Avatar" />
                </div>
                <div className={styles.commentInfo}>
                  <p>{reply.author_nickname}</p>
                  <p>{reply.text}</p>
                </div>
              </div>
            )) : ""}
          </div>
        ))}
      </div>
    </div>
  );
}
