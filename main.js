function appendImage(id, times){
    var paragraph= document.getElementById(id);
    for(var i=0; i< times; i++){
        paragraph.innerHTML += "<img src='project-1/star.png'>";
    }
}
    appendImage(star,6);

   
        // function openTab(event, tabName){
        //     var i, tabcontent, tablink;
        //     tabcontent= document.getElementByClassName("tabcontent");
        //     for(i=0; i<tabcontent.length; i++){
        //         tabcontent[i].style.display="none";
        //     }
        //     tablink= documnent.getElementByClassName("tablink");
        //     for(i=0; i<tablink.length; i++){
        //         tablink[i].className= tablink[i].classNAme.replace("active","");
        //     }
        //     documnent.getElementById(tabName).style.display="block";
        //     event.currentTarget.className += "active";
        // }
   