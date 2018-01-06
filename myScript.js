var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

var input=document.getElementsByClassName('input');
function check(){
    for( var i=0; i<input.length-1;i++){
        if(input[i].value==''){
            alert('Please refill the required area');
            for(var j=0;j<input.length-1;j++){
                input[j].value='';
            }
            return;
        }
    }
    alert('Thank you for your feedback!');
}
