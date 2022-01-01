window.onload = function() {
    //get all dropdown buttons
    let dropdowns = document.getElementsByClassName("dropbtn");
    Array.from(dropdowns).forEach(dropbtn => {
        
        //get dropdown content for each button
        let droptarget = dropbtn.nextElementSibling;
        if(typeof(droptarget) === 'undefined'){
            console.error("Droptarget '"+dropbtn.getAttribute("drop-target")+"' not found!'");
            return;
        }
        
        //show the dropdown content when the button is clicked
        dropbtn.onclick = () => {  
            droptarget.style.display = "block";
            //and focus the first link
            droptarget.getElementsByTagName('a')[0].focus();
        };

        //hide dropdowncontent if link looses focus and 
        //the next focussed element is not inside the dropdown content
        droptarget.addEventListener("focusout", () => {
            window.setTimeout( () => {
                if(!droptarget.contains(document.activeElement))
                    droptarget.style.display = "none";
            }, 5);
        });
    });
};