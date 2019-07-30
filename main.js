var menu = {fries: 3, burger: 2};

var input = document.querySelector('input');
var button = document.querySelector('button');
// var inventoryBtn = document.querySelector('btn');

// inventoryBtn.addEventListener('click', function(){
//     for(var item in menu){
//         document.open();
//         document.write("<h1>" + item + menu[item] + "</h1>");
//         document.close();
//     }
//     console.log(menu);
    
// });



button.addEventListener('click', function(){
    var customerOrder = input.value;
    customerOrder = customerOrder.split(',');
    console.log(customerOrder);

    for(var i = 0; i < customerOrder.length; i++){
         var customerItem = customerOrder[i].split(':');

        for(var item in menu) {
   
            if(item === customerItem[0]){

                if (menu[item] >= customerItem[1]){
                    console.log("You ordered " + customerItem[1] + " "+ customerItem[0]);
                    menu[item] -= customerItem[1];
                    console.log("We now have " + menu[item]);
                } 
                else {
                    console.log("Sorry we only have " + menu[item]);
            }       
        }        
            else {
                console.log("Not on menu");
            }
        }
    } 
    loadDoc();
})

function loadDoc(){

    var funnel = new XMLHttpRequest();
     
    funnel.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
             console.log("the ready state is " + funnel.readyState);
                 console.log(this.responseText);  
                 console.log(responseText);     
        } else {
            console.log(this.readyState, this.status);
    }
}
funnel.open("GET","http://localhost:8080/hi/hello");
funnel.send();



}



// server();