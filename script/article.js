
 tinymce.init({
  selector: 'textarea',
  plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
  toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
});

let authJson = localStorage.getItem("authData")
console.log("json token:---",authJson)
let authObj = JSON.parse(authJson)
console.log("obj token:---",authObj)
let accessToken =authObj.token
console.log("token:---",accessToken)

  
  var title = document.forms['form']['title'];
  var description = document.forms['form']['description'];

  var title_error = document.getElementById('title_error');
  var desc_error = document.getElementById('desc_error');

  title.addEventListener('textInput',title_verify);
  description.addEventListener('textInput',desc_verify);

  function validated(){
  if(title.value.length < 3){
     title.style.border = "1px solid red";
     title_error.style.display = "block";
     title.focus();
     return false;
  }
  if(description.value.length < 2){
     description.style.border = "1px solid red";
    desc_error.style.display = "none";
     description.focus();
     return false;
  }

  }
  function title_verify(){
     if(title.value.length >=2){
         title.style.border = "1px solid silver";
         title_error.style.display = "none";
         return true;

     }
  }
  function desc_verify(){
     if(description.value.length >=1){
         description.style.border = "1px solid silver";
         desc_error.style.display = "none";
         return true;
     }
    }




  // local storage
  let storedData = localStorage.getItem("blog");
  console.log(storedData);
  let strdata=JSON.parse(storedData)
  const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    let blogTitle = urlParams.get("title")
    if(blogTitle !== null)
{
  let edit = strdata.find(each => each.title === blogTitle);
  title.value = edit.title;
  description.value = edit.description
  console.log('new:-',edit);
}    console.log('blogtitle:-',blogTitle)


//create blog -----------------------------------------------------------
async function createBlog(url = "", data = {}) {

  console.log("url:---", url, "data:---",data)
       const response = await fetch(url, {
         method: "POST",
         mode: "cors",
         cache: "no-cache",
         credentials: "same-origin",
         headers: {
           "Content-Type": "application/json",
           'Authorization':`Bearer ${accessToken}`

         },
         redirect: "follow",
         referrerPolicy: "no-referrer",
         body: JSON.stringify(data),
       });
       return response.json();
     }
     const url = "https://api.cloudinary.com/v1_1/demo/image/upload";

  const formBlog= document.querySelector(".article-form");

  formBlog.addEventListener("submit",async (e) => {
    e.preventDefault();
    const blogInfo = {};
    console.log('hollo');
    const arr=[]
    console.log("formBLOG:", tinyMCE.get('description').getContent())
    blogInfo["title"] = formBlog.title.value;
    blogInfo.description =  tinyMCE.get('description').getContent();


    // upload image
    console.log("file")
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
        blogInfo["image"] = response.url;
        
    }

   createBlog("https://my-brand-backend-production.up.railway.app/api/v1/blogs", blogInfo).then((data) => {
          
         if(data.status === "success"){
           console.log("data:---", data)

           location.href = "admin.html";
         }})
       .catch((err) => {
       
       });



  console.log(blogInfo);

  // window.location.href = "/admin.html";
  });

 

