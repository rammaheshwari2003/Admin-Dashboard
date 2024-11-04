document.getElementById("c-b-name").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let cname=document.getElementById("c-b-name").value;
  let bname=document.getElementById("c-b-name").value;
 let Table=`<table width="90%" border="1" bgcolor="#DADADA">
              <tr bgcolor="orange">
                <th> Car name </th>
                <th> Brand Name </th>
                <th> Price </th>
               </tr> 
           `

  let api="http://localhost:3000/Cars";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{
     let str=key.carname;
     let str1=key.brandname;
     let myval=str.includes(cname);
     let myval1=str1.includes(bname);
     
             
     if (myval==true || myval1==true)
     {
       Table+=` <tr>
                  <td> ${key.carname} </td>
                  <td> ${key.brandname} </td>
                  <td> ${key.price} </td>
                </tr>  
            `
     }       
   })
 Table+="</table>"
 document.getElementById("s1").innerHTML=Table;
}

