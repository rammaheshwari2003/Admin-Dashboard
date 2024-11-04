
async function editSave(id){

    let carname= document.getElementById("cname").value ;
    let brandname=document.getElementById("bname").value ;
    let price=document.getElementById("cprice").value ;
  
    let api=`http://localhost:3000/Cars/${id}`;
  
    fetch(api, {
      method: "PATCH",
      headers: {
          "Content-Type" : "application/json"
        },
      body: JSON.stringify(
        {
          carname: carname,
          brandname: brandname,
          price: price,
        }
      )
    })
    .then(json => {
      alert("Data updated!!!");
    });
  }
  
  async function editDisplay(myid)
  {
    let api=`http://localhost:3000/Cars/${myid}`
  
    let Obj= await fetch(api);
    let Data=await Obj.json();
    
    myForm=`
            Edit Car Name: <input type="text" id="cname" value="${Data.carname}">
            <br>
             Edit Brand Name: <input type="text" id="bname" value="${Data.brandname}">
            <br>
             Edit Price: <input type="text" id="cprice" value="${Data.price}">
            <br>
            <button onclick="editSave('${Data.id}')"> Edit Save </button>
    `
    document.getElementById("edit-2").innerHTML=myForm;
  }
  
  
  
  
  async function dataDisplay()
  {
   let Table=`<table width="90%" border="1" bgcolor="#DADADA">
                <tr bgcolor="orange">
                  <th> Car name </th>
                  <th> Brand Name </th>
                  <th> Price </th>
                  <th> Edit </th>
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
                     
                     <a href="#" onclick="editDisplay('${key.id}')">
                     <i class="fa-solid fa-pen-to-square" id=ed></i>
                     </a>
                     </td>
                  </tr>  
              `
  
     })
   Table+="</table>"
   document.getElementById("edit-1").innerHTML=Table;
  
  }
  
  dataDisplay();
  