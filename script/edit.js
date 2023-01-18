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




 const formBlog= document.querySelector(".edit-form");

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

   if(!blogTitle){
    arr.reverse(blogTitle)
    console.log(arr)
    localStorage.setItem("blog",  JSON.stringify(arr));
  }
    



 console.log(blogInfo);

 window.location.href = "/admin.html";
 });