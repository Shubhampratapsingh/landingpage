$(document).ready(function () {
	var name = ['Pediatric BMT', 'Adult BMT ']
	for (var i = 0; i <= 3; i++) {
		$('#cardBody').append(`<div class="col-sm-12 col-lg-6 col-md-6" id="card-list">
        <div class="card">
        <h4 class="${name[i]}">${name[i]}</h4>
  <img src="https://res.cloudinary.com/dswbxefk3/image/upload/v1624072997/webpage%20project/Bitmap_Copy_bzvjuo.png" alt="doctor-image">
  <p class="title">Dr. Vijay Agarwal</p>
  <p class="position">MD, MRCP, PhD,CCT
  Lead & Sr. Consultant - Medical Oncology & Haematology</p>
  <p class="description">Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004. </p>
  <button class="know-more">Know More</button>
</div>
     </div>`);
	}

	var title = [{
			"para": 'Failure to thrive – not gaining weight and height as per the age norms',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072995/webpage%20project/Group_2_opa1y9.png"
		},
		{
			"para": 'Infections warranting multiple hospitalizations',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072995/webpage%20project/Group_ggtjaw.png"
		},
		{
			"para": 'Requirement of intravenous antibiotics to clear infections',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072994/webpage%20project/Group_1_kczuez.png"
		},
		{
			"para": '2 or more episodes of pneumonia',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072994/webpage%20project/Group_2_hmulra.png"
		},
		{
			"para": 'Family history of death of children at young age due to immune deficiency',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072994/webpage%20project/Group_3_v71wy1.png"
		},
		{
			"para": 'Repeated episodes of diarrhea',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072994/webpage%20project/Group_4_gmjlwb.png"
		},
		{
			"para": '2 or more episodes of sinus infections within a year',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072994/webpage%20project/Group_5_yfv4yx.png"
		},
		{
			"para": '2 or more episodes of ear discharge',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072995/webpage%20project/Group_2_2_yngtsy.png"
		},
		{
			"para": 'Repeated skin infections',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072995/webpage%20project/Group_2_2_yngtsy.png"
		},
		{
			"para": 'Repeated skin infections',
			"icon": "https://res.cloudinary.com/dswbxefk3/image/upload/v1624072995/webpage%20project/Group_2_2_yngtsy.png"
		}
	];

	$.each(title, function (i, item) {
		$('#warningBody').append(`<div class="col-sm-4 col-xs-4 col-lg-3 col-md-3" id="warning-list">
        <div class="card">
    <div class="card-body">
    <img src="${title[i].icon}">
    <p>${title[i].para}</p>
    </div>
  </div>
     </div>`);
	});

	for (var i = 0; i <= 2; i++) {
		$('#testimonial').append(`<div class="col-sm-6 col-lg-4 col-md-4" id="testimonial-list">
        <div class="card">
        
        <table class="table table-borderless">
        <tbody>
          <tr>
            <td><img src="https://res.cloudinary.com/dswbxefk3/image/upload/v1624072996/webpage%20project/Bitmap_rkawyy.png"></td>
        <td><p class="name">John Doe<br><span>Software Engineer</span></p></td>
            <td><img src="https://res.cloudinary.com/dswbxefk3/image/upload/v1624104823/webpage%20project/sdkdphsdghod0pa1rrtj.png"></td>
          </tr>
          <tr>
            <td colspan="3"><p class="review">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p></td>
            
            
          </tr>
          
        </tbody>
      </table>
</div>
     </div>`);
	}

});
