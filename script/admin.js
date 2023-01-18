
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

const getData = async  () => {
    const response = await fetch("http://localhost:3080/api/v1/blogs")
    const result = await response.json();

    console.log(result)
}
getData();

const getComments = async  () => {
    const response = await fetch("http://localhost:3080/api/v1/blogs/63c68e9b3438f935d640ac80/comments")
    const result = await response.json();

    console.log(result)
}
getComments();