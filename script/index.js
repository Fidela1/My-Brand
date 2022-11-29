
const deleteData = (image, title, desc ) => {

  console.log("---here")
  let singleBlog = {};
  

  singleBlog.image = image;
  singleBlog.title = title;
  singleBlog.desc= desc;
  localStorage.setItem("singleBlog",  JSON.stringify(singleBlog));
  console.log("---:", singleBlog)
  window.location.href ="/first-blog.html"

}
let myBlogs = localStorage.getItem("blog");
console.log("my blogs",myBlogs);
const blogArr =JSON.parse(myBlogs).reverse();
const firstBlogs = blogArr.slice(0, 4);
console.log("blogArr:-",blogArr);
const newArr = firstBlogs.map(myFunction);

document.getElementById("blog-card").innerHTML = newArr;

function myFunction(blog) {
  console.log("my",blog.description);
  
  const blogCard = `
  <div class="card">
  <img src="/img/${blog.image.substring(12, 17)}" alt="4" style="width:100%">
 
  <h2>${blog.title} </h2>
  <p>${blog.description}</p>
  <button onclick = "deleteData('${blog.image.substring(12, 17)}','${blog.title}', '${blog.description}')" class="see-more">Read more</button>
  <div class="signs">
    <div class="comment"><img src="/img/comment.png" alt="commen" style="width:20px ">0</div>
    <div class="like"><img src="/img/like.png" alt="lk" style="width: 20px">0</div>
  </div>
</div>`
  return blogCard;

}
