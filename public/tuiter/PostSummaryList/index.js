import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
  return (`
      <div class="row">
          <ul class="list-group list-group-flush p-0" id="postsummary">
          ${posts.map(post => {
    return PostSummaryItem(post);
  }).join("")}
          </ul>  
      </div>
`);
}

// const navigationContainer = document.getElementById('post-container');
//     navigationContainer.innerHTML = PostSummaryList();

export default PostSummaryList;