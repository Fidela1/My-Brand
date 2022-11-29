


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


document.getElementById('readUrl').addEventListener('change', function(){
    if (this.files[0] ) {
      var picture = new FileReader();
      picture.readAsDataURL(this.files[0]);
      picture.addEventListener('load', function(event) {
        document.getElementById('uploadedImage').setAttribute('src', event.target.result);
        document.getElementById('uploadedImage').style.display = 'block';
      });
    }
  });


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




  const formBlog= document.querySelector(".article-form");

  formBlog.addEventListener("submit", (e) => {
    e.preventDefault();
    const blogInfo = {};
    console.log('hollo');
    const arr=[]
    blogInfo["title"] = formBlog.title.value;
    blogInfo.image = formBlog.image.value;
    blogInfo.description = formBlog.description.value;
    
    console.log(strdata,"strdat:-",storedData)
    if (strdata){
        strdata.push(blogInfo)
        localStorage.setItem("blog",  JSON.stringify(strdata));

        
    }
    
      
     else{
        arr.push(blogInfo)
        console.log(arr)
        localStorage.setItem("blog",  JSON.stringify(arr));
      }


    
    
  console.log(blogInfo);

  window.location.href = "/admin.html";
  });
