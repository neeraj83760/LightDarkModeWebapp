const toggleSwitch = document.querySelector('input[type = "checkbox"]');

// Here we dont use click event instead we use onChange event when we switch the toggle button
// coz onchnage event occurs when the checkbox option is clicked 


// Switch theme Dynamically 

function switchTheme(event){

    console.log(event); // open the browser console toggle the button and check the 'target: input'
    // it will be checked . To check the same we cal also write the below line of code 
    
    console.log(event.target.checked); // it will directly give the value true 



    /* We need to set the dark-theme attribute at the highest level of the html 
   Document.documentElement article explains it well means how it can be 
   acheivable : https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement

   Definition : Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
*/

    if(event.target.checked){

        document.documentElement.setAttribute('data-theme', 'dark')
    }else
    {
        document.documentElement.setAttribute('data-theme', 'light');

    }

}


// Event Listener 
toggleSwitch.addEventListener('change', switchTheme);


