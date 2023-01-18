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
 const id  = location.pathname.split('/')[2] 
 console.log("id:", id,)

 const formBlog= document.querySelector(".edit-form");

 formBlog.addEventListener("submit", (e) => {
   e.preventDefault();
   const blogInfo = {};
   console.log('hollo');
   const arr=[]
   blogInfo["title"] = formBlog.title.value;
  //  blogInfo.image = formBlog.image.value;
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