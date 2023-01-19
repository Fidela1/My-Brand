let myBlog = localStorage.getItem("singleBlog");
console.log("my blogs",myBlog);
const blogObj =JSON.parse(myBlog);
console.log(blogObj,":---",blogObj.image)
document.getElementById('blog-title').innerHTML = blogObj.title;
document.getElementById('blog-desc').innerHTML = blogObj.desc;
document.getElementById('blog-image').innerHTML = `<img src="${blogObj.image}" alt="4" style="width:70%">`;
