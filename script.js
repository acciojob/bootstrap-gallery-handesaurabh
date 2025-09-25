function openLightbox(lightboxId) {
			document.getElementById(lightboxId).style.display = 'block';
			document.body.style.overflow = 'hidden';
		}
		
		function closeLightbox(lightboxId) {
			document.getElementById(lightboxId).style.display = 'none';
			document.body.style.overflow = 'auto';
		}
		
		document.addEventListener('DOMContentLoaded', function() {
			const images = document.querySelectorAll('.card-img-top');
			images.forEach(function(img, index) {
				img.addEventListener('click', function() {
					openLightbox('lightbox' + (index + 1));
				});
			});
			
			const lightboxes = document.querySelectorAll('.lightbox');
			lightboxes.forEach(function(lightbox) {
				lightbox.addEventListener('click', function(e) {
					if (e.target === this) {
						closeLightbox(this.id);
					}
				});
			});
			
			document.addEventListener('keydown', function(event) {
				if (event.key === 'Escape') {
					lightboxes.forEach(function(lightbox) {
						if (lightbox.style.display === 'block') {
							closeLightbox(lightbox.id);
						}
					});
				}
			});
		});