var mybtn=document.getElementsByClassName("cbutton");
    var myOutput=document.getElementById("output");

    var myCal="";

    console.log(mybtn);
    for(var i=0; i<mybtn.length; i++){
        mybtn[i].addEventListener("click",function(){
            var myValue=this.innerHTML;
            
            if(myValue=="="){
                myCal = eval(myCal);
            }else if(myValue=="C"){
                myCal = 0;
            }else{
                myCal += myValue; 
            }
             
            myOutput.innerHTML = myCal;          
        });
    }