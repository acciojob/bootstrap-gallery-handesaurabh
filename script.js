const images = [
			{ src: 'https://storage.googleapis.com/acciojob-open-file-collections/image1.jpg', alt: 'Image1' },
			{ src: 'https://storage.googleapis.com/acciojob-open-file-collections/image2.jpg', alt: 'Image2' },
			{ src: 'https://storage.googleapis.com/acciojob-open-file-collections/image3.jpg', alt: 'Image3' },
			{ src: 'https://storage.googleapis.com/acciojob-open-file-collections/image4.jpg', alt: 'Image4' },
			{ src: 'https://storage.googleapis.com/acciojob-open-file-collections/image5.jpg', alt: 'Image5' },
			{ src: 'https://storage.googleapis.com/acciojob-open-file-collections/image6.jpg', alt: 'Image6' }
		];
		
		function showImage(src, alt) {
			// Find the index of the clicked image
			const imageIndex = images.findIndex(img => img.src === src);
			
			// Set the carousel to show the clicked image
			const carousel = new bootstrap.Carousel(document.getElementById('imageCarousel'));
			carousel.to(imageIndex);
			
			// Show the modal
			const modal = new bootstrap.Modal(document.getElementById('imageModal'));
			modal.show();
		}
		
		// Add click event listeners to all images
		document.addEventListener('DOMContentLoaded', function() {
			const imageElements = document.querySelectorAll('.card-img-top');
			imageElements.forEach(function(img, index) {
				img.addEventListener('click', function() {
					showImage(this.src, this.alt);
				});
			});
		});