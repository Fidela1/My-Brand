let myBlogs = localStorage.getItem("blog");
console.log("my blogs",myBlogs);
let blogArr =JSON.parse(myBlogs).reverse();
console.log("blogArr:-",blogArr);
const newArr = blogArr.map(myFunction);

 try{
   let data = localStorage.getItem("authData");
    let newData = JSON.parse(data);
    console.log("newData",newData)
 if(!newData.token){
    location.href = "login.html";
 }
  }catch(error){
    console.log("err", error)
    location.href = "login.html";
  }
   
const logout = async  () => {
    localStorage.removeItem('authData')
    location.href = "login.html";
}

function editArticle(event){
const blogEdit = event.target.id;
console.log(blogEdit);
let edit = blogArr.find(each => blogEdit.includes(each.title));
window.location.href = "edit.html?title="+edit.title;
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

