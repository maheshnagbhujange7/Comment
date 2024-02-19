import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import { getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
  deleteComment,
  updateComment,
  
} from "../api";

const Comments = ({currentUserId}) =>{
const [backendComments, setBackendComments]=useState([]);
const [activeComment, setActiveComment]=useState(null);
const rootComments=backendComments.filter(
(backendComment) =>backendComment.parentId ===null
);
const getReplies = commentId =>{
return backendComments.filter(backendComment => backendComment.parentId ===commentId)
.sort((a,b) => new Date(a.creatAt).getTime() -new Date(b.creatAt).getTime());
};

const addComment = (text, parentId) =>{
console.log('addComment', text ,parentId);
createCommentApi(text, parentId).then(comment => {
  setBackendComments([comment, ...backendComments]);
  setActiveComment(null)
})
};
const deleteComment =(commentId) => {
  if(window.confirm('Are u sure that to remove comment?')) {
    deleteCommentApi(commentId).then(()=>
    {
      const updateBackendComments = backendComments.filter(
      (backendComment) => backendComment.id !==commentId
      );
      setBackendComments(updateBackendComments);
      setActiveComment(null); 
    });
  }
};
const updateCommentApi=(text, commentId) =>{
updateCommentApi(text, commentId).then(() =>
{
const updatedBackendComments = backendComments.map((backendComment) =>
  {
    if(backendComment.id === commentId){
     return{...backendComment, body: text};
    }
    return backendComment;
  });
  // setBackendComments(updateBackendComments)
});

};


useEffect(() =>{
getCommentsApi().then((data) =>{
  setBackendComments(data);
});
},[]);

return(
  <div className="comments">
    <h3 className="comments-title">Comments</h3>
    <div className="commen-form-title">Write comment</div>
    <CommentForm submitLabel="Write"handleSubmit={addComment}/>
    <div className="comments-container">
   {rootComments.map((rootComment) =>(
  <Comment key={rootComment.id} comment={rootComment}
   replies={getReplies(rootComment.id)}
   currentUserId={currentUserId}
   deleteComment={deleteComment}
   updateComment={updateComment}
   addComment={addComment}
   />
))};
    </div>
  </div>
 );
};

export default Comments;
