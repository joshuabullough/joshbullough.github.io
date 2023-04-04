///wait for doc to load
$(document).ready((e)=>{
    let output;
    const date = new Date().getDate();
    const age = prompt("Enter your age:")
    if (age >= 65) {
        output = "Free Friday Coffee Night for Seniors!" 
        document.getElementById('verify').style.color = 'maroon';
        document.getElementById('verify').style.fontVariantCaps = 'small-caps';
    } else if(age >= 65 && date == 5){
        output = "Come in for tonight for Free Coffee for Seniors!" 
        document.getElementById('verify').style.color = 'maroon';
        document.getElementById('verify').style.fontVariantCaps = 'small-caps';
    }
    else {
        output = "Enjoy Music and Make Memories!"
    }
    document.getElementById("verify").innerText = output;
});