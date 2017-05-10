var mybtn=document.getElementsByClassName("cbutton");
    var myOutput=document.getElementById("output");
    console.log(mybtn);
    for(var i=0; i<mybtn.length; i++){
        mybtn[i].addEventListener("click",function(){
            var myValue=this.innerHTML;
            myOutput.innerHTML=myValue;
            console.log("clicked");
        });
    }