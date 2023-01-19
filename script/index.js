
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
const getData = async  () => {
  const response = await fetch("http://localhost:3080/api/v1/blogs")
  const result = await response.json();
  console.log(result)
 let blogArr =result.data.blog;
 console.log("blogArr:-",blogArr);
 const reverseArr=blogArr.reverse()
 const firstBlogs = reverseArr.slice(0, 4);
 console.log("blogArr:-",blogArr);
 const newArr = firstBlogs.map(myFunction);
 document.getElementById("blog-card").innerHTML = newArr;
    
}
getData();




function myFunction(blog) {
  console.log("my",blog.description);
  
  const blogCard = `
  <div class="card">
   <img src=${blog.blog_image} alt="4" style="width:80px ;height:80px">

 
  <h2>${blog.title} </h2>
  <p>${blog.description}</p>
  <button onclick = "deleteData('${blog.blog_image}','${blog.title}', '${blog.description}')" class="see-more">Read more</button>
  <div class="signs">
    <div class="comment"><img src="/img/comment.png" alt="commen" style="width:20px ">0</div>
    <div class="like"><img src="/img/like.png" alt="lk" style="width: 20px">0</div>
  </div>
</div>`
  return blogCard;

}

