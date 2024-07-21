// target the menu btn
const menu_btn = document.querySelector(".menu-btn")

// add a click event listener to it
menu_btn.addEventListener("click", show_nav) 

function show_nav(){
    // target the nav 
    document.querySelector("nav").classList.toggle("slide")

    // change the bg of the menu button
    menu_btn.classList.toggle("change-bg")
}

// logic to slide theme ball
document.querySelector(".theme-btn").addEventListener("click", slide_theme_ball)

function slide_theme_ball(){
     document.querySelector(".theme-ball").classList.toggle("theme-slide")
     document.querySelector('body').classList.toggle("dark-theme-body")
     document.querySelector('header').classList.toggle("dark-theme-header")
     document.querySelector('form').classList.toggle("dark-theme-form")
     document.querySelector('footer').classList.toggle("dark-theme-footer")
     document.querySelector('.from-unit').classList.toggle("dark-theme-select")
     document.querySelector('.to-unit').classList.toggle("dark-theme-select")
     document.querySelector('.user-input').classList.toggle("dark-theme-input")
     document.querySelector('.result').classList.toggle("dark-theme-input")
}


// conversion logic starts here
// target the form
const convert_form = document.querySelector("form")

// add submit event listener to the form
convert_form.addEventListener("submit", converter)

function converter(event){
       event.preventDefault() // preventing the form from reloading the page
       
       let from_unit = document.querySelector(".from-unit").value
       let to_unit = document.querySelector(".to-unit").value
       let user_input = Number(document.querySelector(".user-input").value)
       let result_display = document.querySelector(".result")
       let result = 0

       if(from_unit === "cm" && to_unit === "cm"){
             
             result = user_input * 1
             result_display.value = result
       }

       else if(from_unit === "cm" && to_unit === "m"){
              result  = user_input / 100
              result_display.value = result

       }

          else if(from_unit === "m" && to_unit === "m"){
              result  = user_input * 1
              result_display.value = result

       }
          else if(from_unit === "m" && to_unit === "cm"){
              result  = user_input * 100
              result_display.value = result

       }

       else{
             result_display.value = "invalid input!"
       }


}
