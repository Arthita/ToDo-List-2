let item=document.querySelector(".add-item")
let items=[]

const deleteItem=(i)=>{
    items.splice(i,1)
    displayItems()
}

const displayItems=()=>{
    let line=""
    for(let i=0;i<items.length;i++){
        if(items[i]!==""){
        line+=`<button  onclick="deleteItem(${i})" class="btn">${items[i]}</button><br>`
        }
    }
    document.querySelector(".ul").innerHTML=line 
}
document.querySelector("#newBtn").addEventListener("click",()=>{
    let val=item.value 
    items.push(val)
    item.value=""
    displayItems() 
})
