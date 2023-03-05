var count=0;
document.querySelector("#dec").addEventListener("click",function(){
    count-=1;
    document.querySelector("#content").innerHTML = count;
});
document.querySelector("#inc").addEventListener("click",function(){
    count+=1;
    document.querySelector("#content").innerHTML = count;
});
