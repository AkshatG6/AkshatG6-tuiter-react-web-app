import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
           <ul class="list-group rounded-4 wd-13">
              <li class="list-group-item border-0 fw-bold fs-5">Who to follows</li>
              ${who.map(
      item => {
        return WhoToFollowListItem(item);
      }).join("")}
           </ul>
`);
}

// const navigationContainer = document.getElementById('who-container');
//     navigationContainer.innerHTML = WhoToFollowList();

export default WhoToFollowList;