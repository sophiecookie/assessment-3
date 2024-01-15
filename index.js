console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('The form has been successfully submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector('#new_image');

image.addEventListener('mouseover', function() {
	alert("You are amazing!");
});