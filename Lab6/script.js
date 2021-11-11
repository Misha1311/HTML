document.querySelector(".modalbutton").addEventListener("click", function(e){
    console.log(e);
    document.getElementById("myModal").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function(e){
    console.log(e);
    document.getElementById("myModal").style.display = "none";
});

document.querySelector(".closeButton").addEventListener("click", function(e){
    console.log(e);
    document.getElementById("myModal").style.display = "none";
});