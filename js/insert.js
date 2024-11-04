document.getElementById("btnSave").addEventListener("click", carSave);

async function carSave(){
    let cname=document.getElementById("cn").value;
    let bname=document.getElementById("bn").value;
    let cprice=document.getElementById("cp").value;

    let api="http://localhost:3000/Cars";

    const res=await fetch(api,{
    method: "POST",
    body:JSON.stringify({
        "carname": cname,
        "brandname":bname,
        "price":cprice,
     }),
     headers: {
        "Content-Type": "application/json",
      }    
});
console.log(res); 
alert("Data Save")
}