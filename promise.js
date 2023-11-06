function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const updatedLastActivityTime = new Date().toISOString();
        resolve(updatedLastActivityTime);
      }, 1000);
    });
  }
  
  const posts = [];
  
  function createPost(post) {
    return new Promise((resolve) => {
      setTimeout(() => {
        posts.push(post);
        resolve();
      }, 1000);
    });
  }
  
  function deletePost(index) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (index >= 0 && index < posts.length) {
          posts.splice(index, 1);
          resolve();
        } else {
          reject(new Error("Invalid post index"));
        }
      }, 1000);
    });
  }
  
  function getUserPostsAndActivity() {
    Promise.all([createPost("Post 1"), updateLastUserActivityTime()])
      .then(([_, lastActivityTime]) => {
        console.log("All posts:", posts);
        console.log("Last activity time:", lastActivityTime);
        return deletePost(posts.length - 1);
      })
      .then(() => {
        console.log("Remaining posts:", posts);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  
  getUserPostsAndActivity();
  