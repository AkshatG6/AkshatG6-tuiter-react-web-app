const postItem = post => {
    return (`
    <li class="list-group-item bg-black">
      <div class="row">
          <div class="col-1 d-flex justify-content-center">
            <img src="../../images/${post.avatar}" width="48px" height="48px" class="rounded-circle">
          </div>
      
          <div class="col-11">
              <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                  <div>
                     ${post.username}
                  </div>
                  <i class="fa-solid fa-check-circle text-white ms-2 me-2"></i>
                  <div class="text-dark">@${post.handle}</div>
                  <div class="ms-2 text-dark">- ${post.time}</div>
                </div>
      
                <i class="fa-solid fa-ellipsis fs-5"></i>
              </div>
              <div class="text-white">
                ${post.content}
              </div>
              
              <div class="rounded-4 border border-1 border-dark overflow-hidden mt-3">
                  <img src="../../images/${post.image}" width="100%" height="auto">
                  ${!!post.imageTitle || !!post.imageContent || !!post.imageUrl
        ? `
                    <div class="border-top border-1 border-dark text-dark p-3">
                    ${!!post.imageTitle ? `<div class="text-white">
                        ${post.imageTitle}
                      </div>` : ""}
                    ${!!post.imageContent ? `<div>
                        ${post.imageContent}
                      </div>` : ""}
                    ${!!post.imageUrl
            ? `<a class="text-decoration-none text-dark" href="https://www.${post.imageUrl}">
                        <i class="fa-solid fa-link"></i>
                        ${post.imageUrl}
                      </a>` : ""}
                    </div>
                  ` : ""}
              </div>
              
              <div class="row mt-3 text-dark nav nav-tabs border-0">
                <a class="col-3 nav-link border-0 rounded-0 text-dark" href="#">
                 <i class="fa-regular fa-comment me-2"></i>
                  ${post.reply}
                </a>
                <a class="col-3 nav-link border-0 rounded-0 text-dark" href="#">
                  <i class="fa-solid fa-retweet me-2"></i>
                  ${post.retuit}
                </a>
                <a class="col-3 nav-link border-0 rounded-0 text-dark" href="#">
                  <i class="fa-regular fa-heart me-2"></i>
                  ${post.like}
                </a>
                <a class="col-3 nav-link border-0 rounded-0 text-dark" href="#">
                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </a>
              </div>
          </div>
          </div>
    </li>
  `)
  };
  
  export default postItem;