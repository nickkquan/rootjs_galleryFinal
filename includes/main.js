/* your javascript goes here */

$(document).ready(initiateApp);

var pictures = [
	'images/landscape-1.jpg',
	'images/landscape-10.jpg',
	'images/landscape-11.jpg',
	'images/landscape-13.jpg',
	'images/landscape-15.jpg',
	'images/landscape-17.jpg',
	'images/landscape-18.jpg',
	'images/landscape-19.jpg',
	'images/landscape-2.jpg',
	'images/landscape-3.jpg',
	'images/landscape-8.jpg',
	'images/landscape-9.jpg',
	'images/pexels-photo-132037.jpeg',
	'images/pretty.jpg'
];

function initiateApp(){

	$('#gallery').sortable({
		update: function() {
			var updatedImages = [];

			var selectedImages = $('#gallery figure');

			selectedImages.each( function (){

				var apple = $(this).text();
				updatedImages.push(apple);


				});

			console.log(updatedImages);




			// for (var image = 0; image < selectedImages.length; image++){
			// 	var fullLink = $(selectedImages[image]).text();
			// 	updatedImages.push('images/' + fullLink);
			// }
			// pictures = updatedImages;
		}
	});

	/*advanced: add jquery sortable call here to make the gallery able to be sorted
		//on change, rebuild the images array into the new order
	*/
	makeGallery(pictures);
	addModalCloseHandler();


}
function makeGallery(imageArray){

	for (var figureCreation = 0; figureCreation < pictures.length; figureCreation++) {

		var imageToAdd = $("<figure>", {
			"class": "imageGallery col-xs-12 col-sm-6 col-md-4",
			"style": 'background-image:' + 'url' + '("' + pictures[figureCreation] + '")'
		});

		var figureCaptionToAdd = $("<figcaption>", {
			 text: pictures[figureCreation].slice(7)
        });

		imageToAdd.on('click', displayImage);

		figureCaptionToAdd.appendTo(imageToAdd);

		imageToAdd.appendTo('#gallery');
	}

	//use loops and jquery dom creation to make the html structure inside the #gallery section

	//create a loop to go through the pictures
		//create the elements needed for each picture, store the elements in variable

		//attach a click handler to the figure you create.  call the "displayImage" function.  

		//append the element to the #gallery section

}

function addModalCloseHandler(){

	$('img').click(function(){
		$('#galleryModal').modal("hide");
	}); // Am I targeting the correct element here?

	//add a click handler to the img element in the image modal.  When the element is clicked, close the modal
	//for more info, check here: https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp	
}

function displayImage(){

	var imageSource = $(this).attr('style');

	//find the url of the image by grabbing the background-image source, store it in a variable
	//grab the direct url of the image by getting rid of the other pieces you don't need

	var imageName = imageSource.slice(imageSource.lastIndexOf('/') + 1, imageSource.lastIndexOf(')')-1);


	//grab the name from the file url, ie the part without the path.  so "images/pexels-photo-132037.jpeg" would become
		// pexels-photo-132037
		//take a look at the lastIndexOf method

	$('.modal-title').text(imageName);

	$('img').attr('src', imageSource.slice(imageSource.lastIndexOf('url') + 5, imageSource.lastIndexOf(')') - 1));

	$("#galleryModal").modal()

	//change the modal-title text to the name you found above
	//change the src of the image in the modal to the url of the image that was clicked on

	//show the modal with JS.  Check for more info here: 
	//https://www.w3schools.com/bootstrap/bootstrap_ref_js_modal.asp
}





