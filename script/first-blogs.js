let myBlog = localStorage.getItem("singleBlog");
console.log("my blogs",myBlog);
const blogObj =JSON.parse(myBlog);
console.log(blogObj,":---",blogObj.image)
document.getElementById('blog-title').innerHTML = blogObj.title;
document.getElementById('blog-desc').innerHTML = blogObj.desc;
document.getElementById('blog-image').innerHTML = `<img src="${blogObj.image}" alt="4" style="width:70%">`;

// const params = new Proxy(new URLSearchParams(window.location.search), {
//     get: (searchParams, prop) => searchParams.get(prop),
//   });
//   // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
//   let blogid = params.id // "some_value"
//   console.log(blogid)
  
  
//     const response =  fetch(`http://localhost:3080/api/v1/blogs/${blogid}/comments`) .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//        // blogInfo.image = formBlog.image.value;
//       console.log("data:-", data.data.blog.title)
//       document.getElementById("blog-title").value = data.data.blog.title;
//     document.getElementById("blog-desc").value = data.data.blog.description;
// // document.getElementById('blog-image').value = `<img  src=${data.data.blog.blog_image} alt="Uploaded Image" accept="image/png, image/jpeg" width="100px" height="80px" ">`;

//       return data
//       // document.getElementById("data").innerHTML += data;
//     });
  

//     async function createComment(url = "", data = {}) {
//         console.log("url:---", url, "data:---",data)
//              const response = await fetch(url, {
//                method: "POST",
//                mode: "cors",
//                cache: "no-cache",
//                credentials: "same-origin",
//                redirect: "follow",
//                referrerPolicy: "no-referrer",
//                body: JSON.stringify(data),
//              });
//              return response.json();
//            }

//            const formComment= document.querySelector(".comment-form");

//            formComment.addEventListener("submit",async (e) => {
//              e.preventDefault();
//              const commentInfo = {};
//              console.log('hollo');
//              const arr=[]
//              commentInfo["name"] = formComment.name.value;
//              commentInfo.comment = formComment.comment.value;
//              console.log(commentInfo);
      
//          createComment(`http://localhost:3080/api/v1/blogs/${blogid}/comments`, commentInfo).then((data) => {
                
//                if(data.status === "success"){
//                  console.log("data:---", data)
      
//                 //  location.href = "first-blog.html";
//                }})
//              .catch((err) => {
             
//              });
      
      
      
        
      
//         // window.location.href = "/admin.html";
//         });

       
      
      