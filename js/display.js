

async function dataDisplay()
{
 let Table=`<table width="90%" border="1" bgcolor="#DADADA">
              <tr bgcolor="orange">
                <th> Car Name </th>
                <th> Brand Name </th>
                <th> Price </th>
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
                </tr>  
            `

   })
 Table+="</table>"
 document.getElementById("data-diplay").innerHTML=Table;

}

dataDisplay();