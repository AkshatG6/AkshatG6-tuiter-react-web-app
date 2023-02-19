import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
    <div class="row pt-2">
        <div class="col-11 position-relative d-flex align-items-center">
            <span class="position-absolute ps-3">
                <i class="fa-solid fa-magnifying-glass"></i>
            </span>
            <input class="me-2 ps-5 border-0 text-white rounded-pill w-100 h-100" id="search-input"
                placeholder="Search Tuiter"
                type="text"/>
        </div>
        <div class="col-1 d-flex justify-content-end align-items-center fs-4"
            onclick="window.location.href='../explore-setting.html'">
        <div>
            <i class="fa-solid fa-gear text-primary"></i>
        </div>
        </div>
  </div>
  <div class="row">
    <ul class="d-flex justify-content-between fw-semibold nav nav-tabs mt-2 mb-2 border-0">
      <li class="nav-item">
        <a class="nav-link border-0 rounded-0 active" href="#">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link border-0 rounded-0" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link border-0 rounded-0" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link border-0 rounded-0" href="#">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link border-0 rounded-0" href="#">Entertainment</a>
      </li>
    </ul>
  </div>
  <div class="row">
        <div class="position-relative p-0">
        <img src="../../images/starship.jpg" width="100%" height="auto">
        <h3 class="position-absolute bottom-0 ps-3">SpaceX's StarShip</h3>
        </div>
  </div>

  ${PostSummaryList()}

    
    `);
}
export default ExploreComponent;
