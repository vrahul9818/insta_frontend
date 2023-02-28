import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";



const Upload = ()=>{
  const formdata = new FormData();

    const [name ,setname] = useState(" ");
    const [address ,setaddress] = useState(" ");
    const [description ,setdescription] = useState(" ");
    const [imagefile,setimagefile] = useState(null);
    const [likes,setlikes] = useState();
    const [date,setdate] = useState(" ");
//     const uploadpost =()=>{
//         console.log(address)
//         fetch("http://localhost:8081/uploads", {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json'          //->headers sending is important BUT if we are using form data then no header
//   },
//   body: JSON.stringify({
//     name: name,
//     address:address,
//     description:description,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
//     }
const uploadpost =()=>{
    
           const formdata = new FormData();
           const postName = name ? name : "defaultName";
           formdata.append("name", postName);

           const postaddress = address ? address : "defaultaddress";
           formdata.append("address", postaddress);

           formdata.append("description", description);
           if (imagefile) {
            formdata.append("imagefile", imagefile);
          } else {
            formdata.append("imagefile", new Blob(), "default-image.jpg");
          }
          const postlikes = likes ? likes : "0";
           formdata.append("likes",postlikes)
           formdata.append("date",date)
            fetch("https://rahul-insta-back.onrender.com/uploads", {
      method: "POST",
      body: formdata
    }).then((response) => response.json()).then((data) => {console.log(data);}).catch((error) => {console.error("Error:", error)}); }
    return(
        <div style = {styles.container}>
     <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
    <label htmlFor="address">address:</label>
        <input type="text" id="address" name="address" value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
    <label htmlFor="description">description:</label>
    <textarea id="description" name="description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
    <label htmlFor="likes">likes:</label>
        <input type="number" id="likes" name="likes" value={likes} onChange={(e)=>{setlikes(e.target.value)}}/>
      <input type="date" name="date" value={date} onChange={(e)=>{setdate(e.target.value)}}/>
  
    <input type="file" id="imagefile" name="imagefile"  onChange={(e)=>{setimagefile(e.target.files[0])}}/>

  {/* value should not be used */}
  <Link to="/posts"><button onClick={uploadpost}>submit</button></Link>
 </div>)

}
const styles = {
    container :{
        width:"50%",
        height :"300px",
        display :"flex",
        flexFlow :"column wrap",
        justifyContent : "spac-even"
    }
 }
export default Upload