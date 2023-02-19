import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function homescreen() {
    $('#wd-explore').append(`
         <div class="row mt-2">
            <div class="col-2 col-lg-1 col-xl-2 col-xxl-2 pt-3">
              ${NavigationSidebar("home")}
            </div>
            <div class="col-10 col-lg-7 col-xl-6 col-xxl-6 pt-3 ps-3 pe-3">
              ${PostList()}
            </div>
            <div class="col-4 pt-3 d-none d-lg-block d-xl-block d-xxl-block">
              ${PostSummaryList()}
            </div>
         </div>
     `);
  
    $('#postsummary').addClass('rounded-4')
  }
  
  $(homescreen);