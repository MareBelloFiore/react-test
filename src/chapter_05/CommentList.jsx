import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: "문형섭",
    comment: "안녕하세요. 반갑습니다!"
  },
  {
    name: "유재석",
    comment: "첫 컴포넌트 입니다."
  },
  {
    name: "박명수",
    comment: "리액트 열심히 배울게요!"
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <Comment name={comment.name} comment={comment.comment} />
        );
      })}
    </div>
  )
}

export default CommentList
