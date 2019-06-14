document.head.innerHTML +=
`
<title>${studio_name}</title>
<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto" rel="stylesheet">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style type="text/css">
	.jumbotron {
		margin-bottom: 0;
		background-color: #333333;
		color: white;
	}

	.section-title, .games  {
		font-family: 'Roboto', sans-serif;
	}

	p {
		font-family: 'Open Sans', sans-serif;
	}

	hr {
		width: 70%;
		border-top: solid 3px;
	}

	#games-section {
		background-color: #ffffff;
	}

	#about-section {
		background-color: #000000;
		color: #e8e6e4;
		font-weight: 300;
	}
	.section {
		margin-top: 10px;
		padding-bottom: 30px;
	}

	img {
		width: 20em!important;
		height: 20em!important;
	}
</style>
`

document.body.innerHTML +=
`
<div class="jumbotron">
	<div class="container">
		<div class="row">
			<div class="col-md-8">
				<h1 class="section-title">${studio_name}</h1>
				<hr align="left">
				<p id="description">${studio_members}</p>
			</div>
			<div class="col-md-4">
				<img class="img-responsive center-block" src="logos/logo.png">
			</div>
		</div>
	</div>
</div>
<div class="container-fluid">
	<div class="row section" id="games-section">
		<h2 class="text-center section-title">Games</h2>
		<div class="col-sm-6">
			<h3 class="text-center games">${dodger_name}</h3>
			<a href="Dodger/index.html" target="_blank">
				<img class="img-responsive center-block img-thumbnail" src="logos/dodger-icon.png">
			</a>
			<br>
			<p class='text-center'>${dodger_info}</p>
		</div>
		<div class="col-sm-6">
			<h3 class="text-center games">${platformer_name}</h3>
			<a href="Platformer/index.html" target="_blank">
				<img class="img-responsive center-block img-thumbnail" src="logos/platformer-icon.png">
			</a>
			<br>
			<p class='text-center'>${platformer_info}</p>
		</div>
	</div>
	<div class="row section" id="about-section">
		<h2 class="text-center section-title">About Our Games</h2>
		<div class="col-md-6 col-md-offset-3">
			<p class="text-justify"> ${about_us} </p>
		</div>
	</div>
</div>
`

