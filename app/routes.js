//var NotifyClient = require('notifications-node-client').NotifyClient;
//const notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const express = require('express')
const router = express.Router()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

var addresses = [
    'Addenbrooke House, Ironmasters Way, Town Centre, Telford, Shropshire, TF3 4NT',
    'Cafe Go, Addenbrooke House, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Eighth Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Fifth Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'First Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Floor 1, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Floor 2, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Floor 3, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Floor 5, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Ground Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Ground Floor, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Plaza One, Ironmasters Way, Town Centre, Telford, Shropshire, TF3 4NT',
    'Plaza Two, Ironmasters Way, Town Centre, Telford, Shropshire, TF3 4NT',
    'Reynolds House, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Seventh Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Sixth Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Third Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Unit 5, Northern Quarter, Lawn Central, Telford Town Centre, Telford, Shropshire, TF3 4NT',
    'Unit 6, Northern Quarter, Lawn Central, Telford Town Centre, Telford, Shropshire, TF3 4NT'
];






// Add your routes here - above the module.exports line


// Run this code when a form is submitted to 'select-file-format'
router.post('/select-file-format', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var selectformat = req.session.data['selectformat']

  // Check whether the variable matches a condition
  if (selectformat == "xml"){
    // Send user to next page
    res.redirect('/bulkreport/upload-bulk-file?filetype=xml')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/upload-bulk-file?filetype=Excel')
  }

})


router.post('/confirm-delete-upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var confirmdeleteupload = req.session.data['confirm-delete-upload']
  var filetype = req.session.data['filetype']
  var errortype = req.session.data['errortype']
  var property = req.session.data['property']





  if(errortype == 'data')

	  {


		  		  // Check whether the variable matches a condition
				  if (confirmdeleteupload == "no"){
					// Send user to next page
					res.redirect('/bulkreport/bulk-submission-report-list?dataissues=1')
				  } else {
					// Send user to ineligible page
					res.redirect('/bulkreport/bulk-submission-report-list?dataissues=3&removerowissue1=0')
				  }


	  }

		else
			{

				  if (confirmdeleteupload == "no"){
					// Send user to next page
					res.redirect('/bulkreport/uploaded-file-status?filetype='+filetype+'&property='+property+'&deletefile=0')




				  } else {
					// Send user to ineligible page
					res.redirect('/bulkreport/delete-submission-confirmation?filetype='+filetype+'&property='+property)
				  }



			}







})




router.post('/upload_another_submission', function (req, res) {
 // console.log(req.body.todo + " is added to top of the list.");

	var property = req.session.data['property']
  res.redirect('/bulkreport/select-file-format?property='+property);
});

// when Add to Bottom button is clicked
router.post('/return_dashboard', function (req, res) {
  console.log(req.body.todo + " is added to bottom of the list.");
	var property = req.session.data['property']

	if (property=="ct")
		{

			res.redirect('/bahomepage#council-tax');

		}
	else

		{
			res.redirect('bahomepage#non-domestic-rates');

		}

});


router.post('/bulk-submission-report-list', function (req, res, nex) {


  // Make a variable and give it the value from 'submit buttons'
  var bulkconfirm = req.session.data['bulkconfirm']

   console.log('parmaeters'+req.method);


  // Check whether the variable matches a condition
  if (bulkconfirm == "1"){
    // Send user to next page

    res.redirect('/bulkreport/confirm-remove-failed-report')
  } else if(bulkconfirm == "0") {

    // Send user to ineligible page
    res.redirect('/bulkreport/confirm-delete-upload?errortype=data')
  }

	else{
    console.log("email = " + req.body.emailAddress);



  //  setTimeout(next,30000);

// commented temporarily on 9th March 2022 to disable notify email feature

   // notify.sendEmail(


      // this long string is the template ID, copy it from the template
      // page in GOV.UK Notify. It's not a secret so it's fine to put it
      // in your code.

     // '1a0f7c6e-6fd1-4bbd-bfa6-3115e946e618',

      // `emailAddress` here needs to match the name of the form field in
      // your HTML page


      //req.body.emailAddress


   // )
   // .then(function () {


      // This is the URL the users will be redirected to once the email
      // has been sent


      	res.redirect('/bulkreport/bulk-submission-confirmation');


   // })
  //  .catch(function (err) {
   //   res.status(500).send('Notify experienced an error:<br/><br/>' + err.message + '<br/><br/><pre>' + (err.stack || '').replace(/\\n/g, '<br/>') + '</pre>' + '<br/><br/><pre>' + JSON.stringify(err) + '</pre>')
   // })

// commented temporarily on 9th March 2022 to disable notify email feature

	}

})




router.post('/bulk-submission-confirmation', function (req, res) {


  // Make a variable and give it the value from 'submit buttons'
  var bulksubmissionconfirm = req.session.data['bulksubmissionconfirm']


  // Check whether the variable matches a condition
  if (bulksubmissionconfirm == "1"){
    // Send user to next page

    res.redirect('/bulkevidence/bulk-view-outstanding-reports1')
  } else if(bulksubmissionconfirm == "0") {

    // Send user to ineligible page
    res.redirect('/bahomepage')
  }

	else{

		res.redirect('/bulkreport/bulk-submission-confirmation')

	}

})



router.post('/failed-upload-file', function (req, res) {


  // Make a variable and give it the value from 'submit buttons'
  var deletefile = req.session.data['deletefile']

  var filetype = req.session.data['filetype']

  var property = req.session.data['property']


   console.log('routing'+deletefile);


  // Check whether the variable matches a condition
//  if (deletefile == "1"){
    // Send user to next page

    res.redirect('/bulkreport/confirm-delete-upload??errortype=file&deletefile='+deletefile+'&filetype='+filetype+'&property='+property)
  //}



})




// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/confirm-remove-failed-report', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var confirmremove = req.session.data['confirmremove']
  var correctedissues = req.session.data['correctedissues']


console.log("COnfirm rempve = "+ confirmremove)
  // Check whether the variable matches a condition
  if (confirmremove == "yes"){
    // Send user to next page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=3&correctedissues=0')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=1&correctedissues='+correctedissues+'&action=0')
  }

})


// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/signin', function (req, res) {


    // Send user to ineligible page
    var email_username = req.session.data['username-login-email']

    req.session.data = {}
    console.log(email_username)
    res.redirect('/bahomepage?user='+email_username)


})



//Owner/Occupier details


// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/reference-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var address_same_check = req.session.data['address_same_check']

  // Check whether the variable matches a condition
  if (address_same_check == "no"){
    // Send user to next page
    res.redirect('/address-postcode-lookup?requestreason=occupier')
  } else {
    // Send user to ineligible page
    res.redirect('/reference-details')
  }

})


//reason-new-property

//Owner/Occupier details


// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/billing-reference', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reason_new = req.session.data['new-property-reason']
  var requestreason= req.session.data['requestreason']

  console.log("reason"+reason_new)

  // Check whether the variable matches a condition
  if ((reason_new == "01") || (reason_new == "04")){
    // Send user to next page
    res.redirect('/request-details?requestreason=new')
  } else {
    // Send user to ineligible page
    res.redirect('/property-playback?requestreason='+requestreason)
  }

})




// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/reference-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var address_same_check = req.session.data['address_same_check']

  // Check whether the variable matches a condition
  if (address_same_check == "no"){
    // Send user to next page
    res.redirect('/address-postcode-lookup?requestreason=change')
  } else {
    // Send user to ineligible page
    res.redirect('/reference-details')
  }

})









//postcode lookup property-postcode

//address-postcode-lookup?requestreason=new


router.post('/address-postcode-lookup', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var property_postcode = req.session.data['property-postcode']
  var requestreason = req.session.data['requestreason']
console.log("requestreason = " +requestreason )
  // Check whether the variable matches a condition
  if (property_postcode != "NA"){
    // Send user to next page
    res.redirect('/address-list?requestreason='+requestreason)
  } else {
    // Send user to ineligible page
    res.redirect('/address-no-results?requestreason='+requestreason)
  }

})


router.post('/address-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressupdate = req.session.data['addressupdate']
  var requestreason = req.session.data['requestreason']
console.log("requestreason = " +requestreason )
  // Check whether the variable matches a condition

    // Send user to next page
    res.redirect('/address-verify?requestreason='+requestreason)


})



router.post('/address-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var requestreason = req.session.data['requestreason']

  var reason_new = req.session.data['new-property-reason']



console.log("newpropertyreason = " +reason_new )
  /// Check whether the variable matches a condition

  if (requestreason == "new"){
    // Send user to next page
    if ((reason_new == "01") || (reason_new == "04")){
    res.redirect('/property-details?requestreason='+requestreason)
    }
    else {
      res.redirect('/billing-reference?requestreason='+requestreason)
    }

  } else {
    // Send user to ineligible page
    res.redirect('/reference-details?requestreason='+requestreason)
  }


})



router.post('/address-enter', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var requestreason = req.session.data['requestreason']

  var reason_new = req.session.data['new-property-reason']


console.log("requestreason = " +reason_new )
  // Check whether the variable matches a condition





    // Send user to ineligible page


    if ((reason_new == "01") || (reason_new == "04")){
      res.redirect('/address-verify?requestreason='+requestreason)
    }
    else {
      res.redirect('/billing-reference?requestreason='+requestreason)
    }




})


router.post('/reason-new-property', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

//  var requestreason = req.session.data['requestreason']
//console.log("requestreason = " +requestreason )
  // Check whether the variable matches a condition


    // Send user to ineligible page
    res.redirect('/address-postcode-lookup?requestreason=new')



})





router.post('/property-details', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

//  var requestreason = req.session.data['requestreason']
//console.log("requestreason = " +requestreason )
  // Check whether the variable matches a condition


    // Send user to ineligible page
    var requestreason = req.session.data['requestreason']
    res.redirect('/billing-reference?requestreason='+requestreason)



})

router.post('/reason-for-removal', function (req, res) {


    res.redirect('/billing-reference')



})


router.post('/reason-for-amending', function (req, res) {


    res.redirect('/billing-reference')



})






router.post('/confirm-remove-delete-error-row', function (req, res) {


  // Make a variable and give it the value from 'submit buttons'
  var deleterow = req.session.data['confirmremoverowissue']
  var removebref = req.session.data['removebref']
    var row1 = req.session.data['removerowissue1']
    var row2 = req.session.data['removerowissue2']
  var correctedissues = req.session.data['correctedissues']

  console.log('in 2 row delete'+row1+'-row2'+row2)



  // Check whether the variable matches a condition
  if (deleterow == "yes"){
    // Send user to next page
    if(removebref=="06002874005006")
    {

      if (row2 == "1")
       {

              dataissues="0"

        }
        else if(correctedissues == "2"){
                dataissues="0"
          }
          else
            {
                dataissues="1"

            }
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues='+dataissues+'&correctedissues='+correctedissues+'&removerowissue1=1&removerowissue2='+row2+'&bref='+removebref)
    }
    else if(removebref=="06002874005326"){

      if (row1 == "1")
       {

              dataissues="0"

        }
        else if(correctedissues == "2"){
                dataissues="0"
          }
          else
            {
                dataissues="1"

            }

  		res.redirect('/bulkreport/bulk-submission-report-list?dataissues='+dataissues+'&correctedissues='+correctedissues+'&removerowissue1='+row1+'&removerowissue2=1&bref='+removebref)

  	}

  } else if(deleterow == "no") {

    // Send user to ineligible page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues='+dataissues+'&correctedissues='+correctedissues+'&removerowissue1='+row1+'&removerowissue2='+row2+'&bref='+removebref)
  }

	else{

		res.redirect('/bulkreport/bulk-submission-confirmation')

	}

})





// Run this code when a form is submitted to 'confirm-remove-delete-error-row'
router.post('/email-address-page', function (req, res) {
  //notify.sendEmail(


    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It's not a secret so it's fine to put it
    // in your code.

    //'a07a78a1-73ce-47b2-9ccc-3152506a0c73',

    // `emailAddress` here needs to match the name of the form field in

    // your HTML page


    //req.body.emailAddress
  //)
//  .then(function () {
    // This is the URL the users will be redirected to once the email
    // has been sent



    res.redirect('/email-address-page?useradded=1');


//  })
//  .catch(function (err) {
  //  res.status(500).send('Notify experienced an error:<br/><br/>' + err.message + '<br/><br/><pre>' + (err.stack || '').replace(/\\n/g, '<br/>') + '</pre>' + '<br/><br/><pre>' + JSON.stringify(err) + '</pre>')
//  })

});


router.get('/address-list', function (req, res) {
  res.render('address-list', {
    addresses: [

      'Cafe Go, Addenbrooke House, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      'Eighth Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      'Fifth Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      'First Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      'Floor 1, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      'Floor 2, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      'Floor 3, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT'//,
    //  'Floor 5, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Ground Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Ground Floor, Plaza Two, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Plaza One, Ironmasters Way, Town Centre, Telford, Shropshire, TF3 4NT',
      //'Plaza Two, Ironmasters Way, Town Centre, Telford, Shropshire, TF3 4NT',
      //'Reynolds House, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Seventh Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Sixth Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Third Floor, Plaza One, Ironmasters Way, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Unit 5, Northern Quarter, Lawn Central, Telford Town Centre, Telford, Shropshire, TF3 4NT',
      //'Unit 6, Northern Quarter, Lawn Central, Telford Town Centre, Telford, Shropshire, TF3 4NT'
    ] })


})


//post bulk evidence


router.post('/bulkevidence/upload-bulk-evidence', function (req, res) {


	 var filetype = req.session.data['filetype']

	 var filecount = req.session.data['filecount']

 var add_evidence = req.session.data['add_evidence']

var cancel_add_evidence = req.session.data['cancel_add_evidence']


var document_description = req.session.data['document_description']

if(add_evidence="add")

{
      	 console.log("desc="+document_description+"---add = "+add_evidence+ " - cancel" + cancel_add_evidence)

      	if(filecount==0)
          {
      		res.redirect('/bulkevidence/upload-bulk-evidence?filetype='+filetype+'&filecount=1&deletefile=0&filerow=0&action=add')
      	}
      	else if(filecount==1)
      		{

      		res.redirect('/bulkevidence/upload-bulk-evidence?filetype='+filetype+'&filecount=2&deletefile=0&filerow=0&action=add')

      		}

      	else if(filecount==2)
      		{

      		res.redirect('/bulkevidence/upload-bulk-evidence?filetype='+filetype+'&filecount=3&deletefile=0&filerow=0&action=add')

      		}

      	else if((filecount==3) && (deletefile==1))
      		{

      		res.redirect('/bulkevidence/upload-bulk-evidence?filetype='+filetype+'&filecount=3&deletefile=0&filerow=0&action=add')

      		}
}
else {

}

})


router.post('/bulkevidence/confirm-remove-file-row', function (req, res) {


	 var confirmremoverowissue = req.session.data['confirmremoverowissue']

	 var filecount = req.session.data['filecount']

	 var filetype = req.session.data['filetype']

	 var filerow = req.session.data['filerow']

  // Make a variable and give it the value from 'how-many-balls'

//  var requestreason = req.session.data['requestreason']
//console.log("requestreason = " +requestreason )
  // Check whether the variable matches a condition


    // Send user to ineligible page

	 console.log("filerow"+filerow)

	//if(filerow==1)
  //  {

		if(confirmremoverowissue=="yes")
		   {

          if(filecount==1)
          {

              res.redirect('/bulkevidence/upload-bulk-evidence?filecount=0&deletefile=1&filerow='+filerow+'&action=remove')

          }
          else if(filecount>1)
          {

            var new_filecount = filecount-1
            res.redirect('/bulkevidence/upload-bulk-evidence?filecount='+new_filecount+'&deletefile=1&filerow='+filerow+'&action=remove')

          }



		   }
		   else
			{
        console.log("in no")
			  res.redirect('/bulkevidence/upload-bulk-evidence?filecount='+filecount+'&deletefile=0&action=0&filerow=0')

			}





//	}
	//else{

	//	res.redirect('/bulkevidence/upload-bulk-evidence?deletefile=0')


//	}



})





router.post('/bulkevidence/failed-upload-evidence-error', function (req, res) {




  var filename = req.session.data['filename']
  var property = req.session.data['property']




  // Check whether the variable matches a condition

    res.redirect('/bulkevidence/confirm-delete-evidence-error?filename='+filename+'&property='+property)


})

router.post('/bulkevidence/delete-evidence-confirmation', function (req, res) {




  var filename = req.session.data['filename']
  var property = req.session.data['property']




  // Check whether the variable matches a condition


    res.redirect('/requests-for-information/ba-report-details?action=0&property='+property+'#supporting_documents')


})






// Run this code when a form is submitted to 'select-file-format'
router.post('/bulkevidence/confirm-delete-evidence-error', function (req, res) {



  // Make a variable and give it the value from 'how-many-balls'
  var confirmdeleteevidence = req.session.data['confirm-delete-evidence']
  var filename = req.session.data['filename']
  var property = req.session.data['property']

  console.log(confirmdeleteevidence+'evidence')


  // Check whether the variable matches a condition
  if (confirmdeleteevidence == "yes"){
    // Send user to next page
    res.redirect('/bulkevidence/delete-evidence-confirmation?filename='+filename+'&property='+property)
  } else if(confirmdeleteevidence == "no"){
    // Send user to ineligible page
    res.redirect('/bulkevidence/failed-upload-evidence-error?filename='+filename+'&property='+property)
  }

})



router.post('/bulkevidence/confirm-delete-evidence', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var deletefile = req.session.data['deletefile']

  var confirmfilename = req.session.data['confirmfilename']

   var confirmdeleteevidence = req.session.data['confirmdeleteevidence']


console.log("confirmfilename = " +confirmfilename )
  // Check whether the variable matches a condition





    // Send user to ineligible page


    if (confirmdeleteevidence == "yes") {
      res.redirect('/requests-for-information/ba-report-details?deletedfilename='+confirmfilename+'&deletefile=1&action=delete#supporting_documents')
    }
    else {
      res.redirect('/requests-for-information/ba-report-details?deletedfilename=0&deletefile=0&action=0#supporting_documents')
    }




})





// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
//router.post('/email-address-page', function (req, res) {
  //notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It's not a secret so it's fine to put it
    // in your code.
  //  'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
  //  req.body.emailAddress
//  )
//  .then(function () {
    // This is the URL the users will be redirected to once the email
    // has been sent
//    res.redirect('/confirmation-page');
//  })
//  .catch(function (err) {
//    res.status(500).send(err.message)
//  })

//});

module.exports = router
