 // local storage

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
 const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let blogid = params.id // "some_value"
console.log(blogid)


  const response =  fetch(`http://localhost:3080/api/v1/blogs/${blogid}`) .then((response) => {
    return response.json();
  })
  .then((data) => {
     // blogInfo.image = formBlog.image.value;
    console.log("data:-", data.data.blog.title)
    document.getElementById("title").value = data.data.blog.title;
  document.getElementById("description").value = data.data.blog.description;
  document.getElementById("file-upload").value = data.data.blog.blog_image;
  document.getElementById("curr_image").innerHTML =  `<img  src=${data.data.blog.blog_image} alt="Uploaded Image" accept="image/png, image/jpeg" width="100px" height="80px" ">`;
    return data
    // document.getElementById("data").innerHTML += data;
  });

 

//update blog -----------------------------------------------------------
async function updateBlog(url = "", data = {}) {
  console.log("url:---", url, "data:---",data)
       const response = await fetch(url, {
         method: "PATCH",
         mode: "cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
           "Content-Type": "application/json",
           'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzc5MDFhZTQ1NzI2MDM5YTE1ZjNkMCIsImlhdCI6MTY3NDAyMjk0MywiZXhwIjoxNjgxNzk4OTQzfQ.dRosGUx43UTLvTbiutaSoERICFAiDZakVj-hb1RAK1U'

         },
         redirect: "follow",
         referrerPolicy: "no-referrer",
         body: JSON.stringify(data),
       });
       return response.json();
     }
     const url = "https://api.cloudinary.com/v1_1/demo/image/upload";

  const formBlog= document.querySelector(".edit-form");

  formBlog.addEventListener("submit",async (e) => {
    e.preventDefault();
    const blogInfo = {};
    console.log('hollo');
    const arr=[]
    blogInfo["title"] = formBlog.title.value;
    blogInfo.description = formBlog.description.value;
    blogInfo.image = formBlog.file.value;
    console.log("blogInfo:", document.querySelector(".file-upload").files.length)

    // upload image
    if(document.querySelector(".file-upload").files.length){
    const files = document.querySelector(".file-upload").files;
    console.log("file:-", files)
    const formData = new FormData();
  
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
    
      formData.append("file", file);
      formData.append("upload_preset", "docs_upload_example_us_preset");
  
      console.log("formData:-", formData)
  
      const response = await fetch(url, {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
           // blogInfo.image = formBlog.image.value;
          console.log("data:-", data)
          return data
          // document.getElementById("data").innerHTML += data;
        });
        console.log("res:---", response.url)
        blogInfo.image = response.url;
        
    }}

   updateBlog(`http://localhost:3080/api/v1/blogs/${blogid}`, blogInfo).then((data) => {
          
         if(data.status === "success"){
           console.log("data:---", data)

           location.href = "admin.html";
         }})
       .catch((err) => {
       
       });
  });




