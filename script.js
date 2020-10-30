var user=document.body.querySelector(".name")
var transfer=document.body.querySelector(".press")
var letter=document.body.querySelector(".letter")
var list=[]

document.body.querySelector(".press").addEventListener("click",function(){
  if(user.value=="coolStudent123"){
    document.body.innerHTML=""
    var name=document.createElement("input")
    name.placeholder="note"    
    document.body.appendChild(name)
    var impor=document.createElement("input")
    impor.placeholder="Importance"    
    document.body.appendChild(impor)
    var press= document.createElement("button")
    press.innerHTML="Submit"
    document.body.appendChild(press)
    var message = document.createElement("div")
    message.id="letter"
    document.body.appendChild(message)
    
    
   
    
    press.addEventListener("click",function(){
    message.innerHTML="hello"
    if(name.value.length> 1 &&Number(impor.value)>0){
      message.innerHTML=""
      list.push({
        note:name.value,
        importance:impor.value,
      })
      blank()
      
    }
     else if(name.value.length<=1){
       message.innerHTML="not enough character count"
       
     }
     else{message.innerHTML="not a valid number"}
    })
    
    }
  else{letter.innerHTML="wrong Username"}
})
function blank(){
  document.body.querySelector("#letter")
   for(var i=0;i < list.length;i++){  
      var item= document.createElement("div")
      item.innerHTML="note: "+list[i].note +" Importance: " +list[i].importance
    document.body.querySelector("#letter").appendChild(item)
    }
}