const NavigationSidebar = (active) => {
    return (`
        <div class="list-group">
          <a class="list-group-item">
            <i class="fab fa-twitter"></i>
          </a>
            <a class="list-group-item d-flex align-items-center 
                      ${active === "home" ? "active" : ""}" 
                      href="../homescreen/index.html">
              <i class="fa-solid fa-house col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Home
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "explore" ? "active" : ""}"
                      href="../explore/index.html">
              <i class="fa-solid fa-hashtag col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Explore
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "notifications" ? "active" : ""}" 
               href="#">
              <i class="fa-regular fa-bell col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Notifications
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "messages" ? "active" : ""}" 
                      href="#">
              <i class="fa-regular fa-envelope col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Messages
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "bookmarks" ? "active" : ""}" 
                      href="#">
              <i class="fa-regular fa-bookmark col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Bookmarks
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "lists" ? "active" : ""}" 
                      href="#">
              <i class="fa-solid fa-list col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Lists
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "profile" ? "active" : ""}" 
                      href="#">
              <i class="fa-regular fa-user col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                Profile
              </div>
            </a>
            <a class="list-group-item d-flex align-items-center
                      ${active === "more" ? "active" : ""}" 
                      href="#">
              <i class="fa-solid fa-ellipsis col-12 col-xl-2 col-xxl-2"></i>
              <div class="col-10 d-none d-xl-block d-xxl-block">
                More
              </div>
            </a>
        </div>
        <button class="btn btn-primary rounded-pill mt-3 fw-bold pt-2 pb-2"
                style="width: 100%"
                type="button">
          Tuit
        </button>
   `);
  }
  export default NavigationSidebar;