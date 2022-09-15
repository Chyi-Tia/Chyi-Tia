//Link JS Items to HTML
//Loading Elements into Items
const toDoItem = document.getElementById("toDoItem");
const btnSave = document.getElementById("btnSave");
const itemDisplay = document.getElementById("itemDisplay");
const trashIcon = `<i class="zmdi zmdi-delete"></i>`
let itemArray = [];
getItems().split(',').map(item =>{
    if(item.trim().length){
        itemArray.push(item.trim());
    }
})
displayItems(getItems());

//Remove Text Area "Text" into another string
btnSave.onclick = function(){
    const toDoText = toDoItem.value;
    storeItem(toDoText);
}
//Store toDoText string
//item = the list 
function storeItem(item){
    let items = getItems();
        if(itemArray){
       //Adding Items
            itemArray.push(item)
            saveToDos(itemArray.join())
         }  
            else{
        //If there is only 1 Item, That is the list
                    items = item;
                }
    //Basically the return into saveToDos
}
//Saving Items into local storage and displaying Items
function saveToDos(){
    Lockr.set('Items', itemArray.join());
    displayItems(itemArray);
    clearEntry();
}
//Text Area Empty OK
function clearEntry(){
    toDoItem.value = "";
}
//Get all the items from the list into a string
function getItems(){
    const todos = Lockr.get('Items');
    return todos;
}

function displayItems(){
    if(itemArray){
        //All items are an Array
        console.log("display: " , itemArray);
        //Using Onsen Listing
        let  out = '<ul class = "list">';
        //For each Array(Item) list it using the Style
        for(var x=0; x < itemArray.length; x++){
            out += '<li class="list-item list-item--longdivider"</li><div class="list-item__center list-item--longdivider__center"></div>'
            //Seperate each item
            out += itemArray[x] + "</div>";
            out += `<div class="list-item__right" onclick="deleteItem('${itemArray[x]}');">${trashIcon}</div>`  
        }
        //Closing out list
        out += "</ul>"
        //Display Items
        itemDisplay.innerHTML = out;
    }
}
 
    function deleteItem(itemToDelete){
        //Getting items
        console.log(itemToDelete);
        itemArray = itemArray.filter(item => item.trim() != itemToDelete.trim());

        displayItems(itemArray.join());
        
        console.log(itemArray);
    }
    saveToDos(itemArray.join());