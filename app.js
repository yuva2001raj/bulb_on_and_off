function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("off"))
    {
        img.src="./assets/on.jpg";
    }
    else{
        img.src="./assets/off.jpg";
    }
}