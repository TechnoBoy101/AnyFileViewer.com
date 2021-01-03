<!DOCTYPE html>
<html>
<head>
	<title>GIF Viewer</title>
	<script type="text/javascript" src="">
		
	</script>
</head>
<body>
	<input type="Text" id="input" placeholder="Url: ">
	<button onclick="display()">Submit</button>

	<button onclick="document.getElementById('iframe').style.display = 'none'; document.getElementById('iframe').src = ''; document.getElementById('input').value = ''">Clear</button>
	<br><br>
	<iframe style="display: none; border: none;" id="iframe" src="" height="600;" width="100%">Loading...</iframe>

	<br>
	Or..
	<br><br><br>

	<input type="file" id="gif" accept="image/gif"><button onclick="document.getElementById('iframe').style.display = 'none'; document.getElementById('iframe').src = ''; document.getElementById('input').value = ''">Clear</button><br><br><br>

	<button onclick="document.getElementById('iframe').style.display = 'block';">Upload</button>
</body>
</html>
