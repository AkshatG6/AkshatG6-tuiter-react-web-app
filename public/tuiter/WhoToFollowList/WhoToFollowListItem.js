const WhoToFollowListItem = who => {
    return (`
           <li class="list-group-item border-0">
            <div class="row d-flex align-items-center">
              <div class="col-2">
                <img class="rounded-circle" src="${who.avatarIcon}" width="40px">
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center">
                  <div>
                    ${who.userName}
                  </div>
                  <i class="fa-solid fa-check-circle ms-2"></i>
                </div>
                <div>
                  @${who.handle}
                </div>
              </div>
              <div class="col-4 d-flex justify-content-end">
                <button class="btn btn-primary border-0 rounded-pill ps-3 pe-3 pt-1 pb-1 fw-semibold" type="button">
                  Follow
                </button>
              </div>
            </div>
          </li>
    `);
  }

  export default WhoToFollowListItem;