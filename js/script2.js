$('#btnRun').click(function() {

		$.ajax({
			url: "php/getPostCodeInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				postalcode: $('#selPostCode').val()
			},
			success: function(result) {

				console.log(result);
				

				if (result.status.name == "ok") {

					$('#txtCountry').html(result['data'][0]['adminName2']);
					$('#txtCity').html(result['data'][0]['placeName']);
				}
				
				//findNearby ajax
						$('#btnFind').click(function() {

						$.ajax({
						url: "php/findPostCode.php",
						type: 'POST',
						dataType: 'json',
						data: {
							country: $('#findCountry').val(),
							postalcode: $('#findPostCode').val()
						},
						success: function(result1) {

							console.log(result1);

							if (result.status.name == "ok") {

								$('#code1').html(result1['data'][0]['postalCode'] + ", " + result1['data'][0]['placeName']);
								$('#code2').html(result1['data'][1]['postalCode'] + ", " + result1['data'][1]['placeName']);
								$('#code3').html(result1['data'][2]['postalCode'] + ", " + result1['data'][2]['placeName']);
							
							}
						
						},
						error: function(jqXHR, textStatus, errorThrown) {
							console.log(jqXHR);
							console.log(textStatus);
							console.log(errorThrown);
						}
					}); 
				

				});
			


			//end
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});

	
/*Search*/
$('#btnSearch').click(function() {

		$.ajax({
			url: "php/getSearchInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				name:  $('#townSearch').val(),
				country: $('#searchCountry').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCountry').html(result['data'][0]['country']);
					$('#txtTown').html(result['data'][0]['name']);
					$('#txtPopulation').html(result['data'][0]['population']);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				console.log(jqXHR);
				console.log(textStatus);
				console.log(errorThrown);
			}
		}); 
	

	});
	