function display() {
			// body...
			let url = document.getElementById('input').value;
			document.getElementById('iframe').src=url;
			document.getElementById('iframe').style.display="block";
		}
		window.addEventListener('load', function() 
		{
			  document.querySelector('input[type="file"]').addEventListener('change', function() {
			      if (this.files && this.files[0]) {
			          var img = document.querySelector('iframe');  // $('img')[0]
			          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
			          img.onload = imageIsLoaded;
			      }
			  });
			});
