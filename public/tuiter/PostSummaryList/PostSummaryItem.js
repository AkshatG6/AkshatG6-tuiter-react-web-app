const PostSummaryItem = post => {
    return (`
            <li class="list-group-item">
              <div class="row">
                <div class="col-9">
                  ${post.topic ? `<div class="text-dark">
                    ${post.topic}
                  </div>` : ""}
                  
                  <div class="d-flex">
                    <div class="fw-semibold">
                      ${post.userName}
                    </div>
                    ${post.time ? `<div class="ms-1">
                      <i class="fa-solid fa-check-circle"></i>
                    </div>
                    <div class="text-dark ms-2">
                      - ${post.time}
                    </div>` : ""}
                    
                  </div>
                  <div class="fw-semibold">
                    ${post.title}
                  </div>
                  ${post.tweets ? `<div class="text-dark">
                    ${post.tweets}
                  </div>` : ""}
                  
                </div>
                <div class="col-3 d-flex justify-content-end">
                  <img class="rounded-4" src="../img/${post.image}" width="auto" height="100px">
                </div>
              </div>
            </li>
  `)
  };
  
  export default PostSummaryItem;