myFunction = function (){

    function myWorkingFunction() {
        var btn = document.createElement("button");

        document.body.appendChild(btn);
        var buttonText = document.createTextNode("Hi there and greetings!");

        btn.appendChild(buttonText);

    }

    myWorkingFunction();

}

myOtherFunction = function(){ // to dziala jak sie wezmie body  onload albo wsadzi script w pliku html z head do body

    function inside(){
    alert ("Dzia�am!");
    var dif = document.createElement("div");
    document.body.appendChild(dif);
        dif.id ="dif";
        var p1 = document.createElement("p");
        var difAlert = document.createTextNode("Jestem nowym divem papapapa");
        document.getElementById("dif").appendChild(p1);
        p1.appendChild(difAlert);




       var p2 = document.createElement("p");
        document.getElementById("dif").appendChild(p2);
        var difAlert2 = document.createTextNode("Jestem jeszcze nowszym divem");
        p2.appendChild(difAlert2);
    }
    inside();

}

//myOtherFunction();



/*myThirdFunction = function(){
function addElement () {
    // create a new div element
    // and give it some content
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent); //add the text node to the newly created div.

}*/

/*
addElement();
};
myThirdFunction();*/

