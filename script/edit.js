
// const formBlog= document.querySelector(".edit-form");

//   formBlog.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const blogInfo = {};
//     const arr=[]
//     blogInfo["title"] = formBlog.title.value;
//     // blogInfo.image = formBlog.image.value;
//     blogInfo.description = formBlog.description.value;
//     let storedData = localStorage.getItem("article");
//     console.log(storedData);
//     let strdata=JSON.parse(storedData)
//     console.log(strdata,"strdat:-",storedData)
//     if (strdata){
//         strdata.push(blogInfo)
//         localStorage.setItem("article",  JSON.stringify(strdata));

        
//     }
//     else{
//         arr.push(blogInfo)
//         console.log(arr)
//         localStorage.setItem("article",  JSON.stringify(arr));
//     }
    
    
//   console.log(blogInfo);

    
//   });


let storedData = localStorage.getItem("blog");
console.log(storedData);
let strdata=JSON.parse(storedData)
const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  let blogTitle = urlParams.get("title")
  if(blogTitle !== null)
{
    let title;
let edit = strdata.find(each => each.title === blogTitle);
title.value = edit.title;
description.value = edit.description
console.log('new:-',edit);
}    console.log('blogtitle:-',blogTitle)

