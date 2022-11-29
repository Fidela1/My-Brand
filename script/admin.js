let myBlogs = localStorage.getItem("blog");
console.log("my blogs",myBlogs);
let blogArr =JSON.parse(myBlogs).reverse();
console.log("blogArr:-",blogArr);
const newArr = blogArr.map(myFunction);

document.getElementById("blog-row").innerHTML = newArr;
function deleteArticle(event){
  const blogDelete = event.target.id;
  blogArr = blogArr.filter(each => !blogDelete.includes(each.title))
 localStorage.setItem("blog",JSON.stringify(blogArr));
 window.location.reload();
}

function editArticle(event){
const blogEdit = event.target.id;
console.log(blogEdit);
let edit = blogArr.find(each => blogEdit.includes(each.title));
window.location.href = "article.html?title="+edit.title;
}
function myFunction(blog){
    console.log("my",blog);
  const articles = `
  <tr>
  <td> <img src="/img/${blog.image.substring(12, 17)}" alt="4" style="width:80px ;height:80px"></td>
  <td> ${blog.title}</td>
  <td> ${blog.description}</td>
  <td><button onclick="deleteArticle(event) " id="delete-blog ${blog.title}" > delete</button>
  <button onclick = "editArticle(event)" id = "edit-blog ${blog.title}">edit</button></td>
  </tr>
`
                return articles;
}

