function mydel(myid)
{
  let api=`http://localhost:3000/Cars/${myid}`

  fetch(api, { method: 'DELETE' }).then((res)=>{
    alert("Record Deleted");
  })
  
}





async function Display()
{


 let Table=`<table width="90%" border="1" bgcolor="#DADADA">
              <tr bgcolor="orange">
                <th> Car name </th>
                <th> Brand Name </th>
                <th> Price </th>
                <th> Delete </th>
               </tr> 
           `

  let api="http://localhost:3000/Cars";

  let myObj= await fetch(api);
  let myData= await myObj.json();

   myData.map((key)=>{ 
        
       Table+=` <tr>
                  <td> ${key.carname} </td>
                  <td> ${key.brandname} </td>
                  <td> ${key.price} </td>
                  <td>
                  <a href="#" onclick="mydel('${key.id}')">
                  <i class="fa-solid fa-trash-arrow-up" id="dicon"></i>
                  </a>
                  </td>
                </tr>  
            `
        
   })
 Table+="</table>"
 document.getElementById("d1").innerHTML=Table;
}

Display();