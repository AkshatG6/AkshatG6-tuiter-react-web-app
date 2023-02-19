import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
  return (`
      <div class="row">
          <ul class="list-group list-group-flush p-0">
          ${posts.map(post => {
    return PostItem(post);
  }).join("")}
          </ul>  
      </div>
`);
}

export default PostList;