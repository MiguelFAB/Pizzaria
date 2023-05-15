menuListArray = ["Pizza Vegetariana",
                 "Pizza Mussarela",
                 "Pizza de Calabresa",
                 "Pizza Portuguesa",
                 "Pizza de Quatro queijos"
                    ];

function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i=0; i<menuListArray.length;i++){
        htmldata=htmldata + menuListArray[i] + '<br>'
    };
    document.getElementById('displayMenu').innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtag='<img id="im1" src="image/pizzaImg.png"/>';
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata="";
for(var i=0; i<menuListArray.length;i++){
    htmldata=htmldata + menuListArray[i] + '<br>'
};
document.getElementById('displayMenu').innerHTML = htmldata;

}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();

}