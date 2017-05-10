var mybtn=document.getElementsByClassName("cbutton");
    var myOutput=document.getElementById("output");

    var myCal="";
    var myCom = false;

    console.log(mybtn);
    for(var i=0; i<mybtn.length; i++){
        mybtn[i].addEventListener("click",function(){
            var myValue=this.innerHTML;
            
            if(myCom){
                myCom=false;
                myCal="";
            }
            
            if(myValue=="="){
                myCal = eval(myCal);
                myCom=true;
            }else if(myValue=="C"){
                myCal = 0;
            }else{
                myCal += myValue; 
            }
             
            myOutput.innerHTML = myCal;          
        });
    }