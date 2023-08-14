const toggleSwitch = document.querySelector('input[type = "checkbox"]');

// Here we dont use click event instead we use onChange event when we switch the toggle button
// coz onchnage event occurs when the checkbox option is clicked 


const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const Image1 = document.getElementById('image1')
const Image2 = document.getElementById('image2')
const Image3 = document.getElementById('image3')
const textBox= document.getElementById('text-box')


// Keyboard shorcut : to replace similar occurences of a word in vs code we select the word + ctrl + d
// than make changes in one go 

// Dark or light Images 

function ImageMode(color){


    Image1.src = `img/undraw_proud_coder_${color}.svg`;
    Image2.src = `img/undraw_feeling_proud_${color}.svg`;
    Image3.src = `img/undraw_conceptual_idea_${color}.svg`;
    

}


// Dark Mode Styles

function darkMode(){


    nav.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)'  
    console.log(toggleIcon.children); // it will show the html collection elements which is in the form of array
    
    // Instead of using two methods add and remove of the classlist we will call a single method called 
    // replace , this will help in optimizing the two lines of codes in one line 
  
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') 
    // toggleIcon.children[1].classList.add('fa-moon')

    ImageMode('dark');

    

}

// Light Mode Styles

function lightMode(){


    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/ 50%)'  
    console.log(toggleIcon.children); // it will show the html collection elements which is in the form of array
    

    toggleIcon.children[0].textContent = 'Light Mode'


    // toggleIcon.children[1].classList.remove('fa-moon') 
    // toggleIcon.children[1].classList.add('fa-sun')
    
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    
    ImageMode('light');


}




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
        darkMode();
    }else
    {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();

    }

}


// Event Listener 
toggleSwitch.addEventListener('change', switchTheme);


