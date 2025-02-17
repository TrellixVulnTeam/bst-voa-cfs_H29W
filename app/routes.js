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

//var dateFilter = require('nunjucks-date-filter');






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
					res.redirect('/bulkreport/delete-submission-confirmation?filetype=xml&property='+property)
				  }


	  }

		else
			{

				  if (confirmdeleteupload == "no"){
					// Send user to next page
					res.redirect('/bulkreport/uploaded-file-status?filetype='+filetype+'&property='+property+'&deletefile=0')




				  } else {
					// Send user to ineligible page
					res.redirect('/bulkreport/delete-submission-confirmation?filetype=xml&property='+property)
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
  var correctedissues = req.session.data['correctedissues']




  // Check whether the variable matches a condition
  if (bulkconfirm == "1"){
    // Send user to next page

    res.redirect('/bulkreport/confirm-remove-failed-report?correctedissues='+correctedissues)
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




router.post('/user-permissions-request-add', function (req, res) {


  // Make a variable and give it the value from 'submit buttons'
  var requestadduser = req.session.data['requestadduser']


  // Check whether the variable matches a condition
  if (requestadduser == "1"){
    // Send user to next page

    res.redirect('/user-admin/request-add-user-details')
  } else if(requestadduser == "0") {

    // Send user to ineligible page
    res.redirect('/bahomepage#user-management')
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
  var removerowissue2 = req.session.data['removerowissue2']



console.log("COnfirm rempve = "+ confirmremove)
  // Check whether the variable matches a condition
  if (confirmremove == "yes"){
    // Send user to next page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=3&correctedissues='+correctedissues+'&removerowissue2=1')
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

              var dataissues="0"

        }
        else if(correctedissues == "2"){
               var dataissues="0"
          }
          else
            {
                var dataissues="1"

            }
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues='+dataissues+'&correctedissues='+correctedissues+'&removerowissue1=1&removerowissue2='+row2+'&bref='+removebref)
    }
    else if(removebref=="06002874005326"){

      if (row1 == "1")
       {

              var dataissues="0"

        }
        else if(correctedissues == "2"){
                dataissues="0"
          }
          else
            {
                var dataissues="1"

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


    res.redirect('/requests-for-information/ba-report-details?filename2=1&action=0&deletefile=2&property='+property+'#supporting-documents')


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
      res.redirect('/requests-for-information/ba-report-details?deletedfilename='+confirmfilename+'&deletefile=1&action=delete&filename1=1#supporting-documents')
    }
    else {
      res.redirect('/requests-for-information/ba-report-details?deletedfilename=0&deletefile=0&action=0#supporting-documents')
    }




})


//webform prototype





router.post('/webform/ct/request-sub-reason', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

var reason = req.session.data['reason']
var property = req.session.data['property']

  var reason_remove = req.session.data['reason-remove']

  var reason_amend = req.session.data['reason-amend']

   var reason_new = req.session.data['reason-new']


console.log("reason code = " +reason_remove )
  // Check whether the variable matches a condition





    // Send user to ineligible page


    if ((reason == "remove")||(reason == "amend")) {
      res.redirect('/webform/ct/billing-auth-ref-no?reason='+reason+'&property='+property)
      }
      else {
        //res.redirect('/webform/ct/address-postcode-lookup?reason='+reason+'&property='+property+'&propertyreason=new')
        res.redirect('/webform/ct/billing-auth-ref-no?reason='+reason+'&property='+property+'&propertyreason=new')
      }








})// Run this code when a form is submitted to 'confirm-remove-failed-report'




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


router.post('/webform/ct/billing-auth-ref-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reason = req.session.data['reason']
  var property = req.session.data['property']
  var propertyreason = req.session.data['propertyreason']



  if (property)
  {
    console.log("property123= " + property)

    property="ct"

  }

  // Check whether the variable matches a condition
  if (reason == "add"){
    // Send user to next page

    res.redirect('/webform/ct/address-postcode-lookup?reason='+reason+'&property='+property+'&propertyreason='+propertyreason)

  } else {
    // Send user to ineligible page
    res.redirect('/webform/ct/property-playback?reason='+reason+'&property='+property+'&propertyreason='+propertyreason)

  }

})






// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/webform/ct/owner-occupier-details', function (req, res) {



    var reason = req.session.data['reason']

    var property = req.session.data['property']


    // Make a variable and give it the value from 'how-many-balls'
    var address_same_check = req.session.data['address_same_check']

    // Check whether the variable matches a condition
    if (address_same_check == "No"){
      // Send user to next page
      res.redirect('/webform/ct/address-postcode-lookup?propertyreason=occupier')
    } else {

      // Send user to ineligible page
      res.redirect('/webform/ct/property-request-details?reason='+reason+'&property='+property)
    }

})


router.post('/webform/ct/no-planning-reference', function (req, res) {


    //res.redirect('/webform/ct/owner-occupier-details?propertyreason=occupier')
    var reason = req.session.data['reason']
    var property = req.session.data['property']

      res.redirect('location-details?reason='+reason+'&property='+property)

})







//postcode lookup property-postcode

//address-postcode-lookup?requestreason=new


router.post('/webform/ct/address-postcode-lookup', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var property_postcode = req.session.data['property-postcode']
  var propertyreason = req.session.data['propertyreason']
  var property = req.session.data['property']
  var reason = req.session.data['reason']
console.log("propertyreason = " +propertyreason )
  // Check whether the variable matches a condition
  if ((property_postcode == "NA")||(property_postcode == "SW1 OOO")){
    // Send user to next page

        res.redirect('/webform/ct/address-no-results?propertyreason='+propertyreason+'&reason='+reason+'&property='+property)


  } else {
    // Send user to ineligible page
    res.redirect('/webform/ct/address-list?propertyreason='+propertyreason+'&reason='+reason+'&property='+property)
  }

})


router.post('/webform/ct/address-no-results', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var property_postcode = req.session.data['property-postcode']
  var propertyreason = req.session.data['propertyreason']
  var property = req.session.data['property']
  var reason = req.session.data['reason']

    res.redirect('/webform/ct/address-enter?action=new&propertyreason='+propertyreason+'&reason='+reason+'&property='+property)


})





router.post('/webform/ct/address-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressupdate = req.session.data['addressupdate']
  var propertyreason = req.session.data['propertyreason']
  var address = req.session.data['address']
console.log("address = " +address )
  // Check whether the variable matches a condition
  if (propertyreason == "new"){
    // Send user to next page
  delete req.session.data['new-property-address-line-1']
  delete req.session.data['new-property-address-line-2']
  delete req.session.data['new-property-address-line-3']
  delete req.session.data['new-property-address-town-city']
  delete req.session.data['new-property-address-postcode']
}
else {
  delete req.session.data['occupier-property-address-line-1']
  delete req.session.data['occupier-property-address-line-2']
  delete req.session.data['occupier-property-address-line-3']
  delete req.session.data['occupier-property-address-town-city']
  delete req.session.data['occupier-property-address-postcode']

}

    // Send user to next page


    res.redirect('/webform/ct/address-verify?propertyreason='+propertyreason)


})



router.post('/webform/ct/address-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var propertyreason = req.session.data['propertyreason']

  var reason_new = req.session.data['new-property-reason']

  var property = req.session.data['property']

    var reason = req.session.data['reason']



console.log("newpropertyreason = " +reason_new )
  /// Check whether the variable matches a condition

  if (propertyreason == "new"){
    // Send user to next page

      res.redirect('planning-reference-details?reason='+propertyreason+'&property='+property)


  } else {
    res.redirect('/webform/ct/property-request-details?propertyreason='+propertyreason+'&reason='+reason+'&property='+property)

  }


})



router.post('/webform/ct/address-enter', function (req, res) {

  var propertyreason = req.session.data['propertyreason']

  var reason_new = req.session.data['new-property-reason']

  var property = req.session.data['property']

    var reason = req.session.data['reason']



console.log("newpropertyreason = " +reason_new )
  /// Check whether the variable matches a condition

  if (propertyreason == "new"){
    // Send user to next page

      res.redirect('planning-reference-details?reason='+propertyreason+'&property='+property)


  } else {
    res.redirect('/webform/ct/property-request-details?propertyreason='+propertyreason+'&reason='+propertyreason+'&property='+property)

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



router.post('/webform/ct/property-playback', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var propertyreason = req.session.data['propertyreason']

  if(req.session.data['sub_reason_option'])
  {
      var sub_reason = req.session.data['sub_reason_option'].substring(0,4)
  }


  var reason = req.session.data['reason']

  var property = req.session.data['property']





console.log("newpropertyreason = " +sub_reason )
  /// Check whether the variable matches a condition

  if ((sub_reason == "CR04")||(sub_reason == "CR06"))

  {
    // Send user to next page
    delete req.session.data['radio_council_tax_band']

      res.redirect('planning-reference-details?reason='+reason+'&property='+property)


  } else {
    // Send user to ineligible page
    res.redirect('council-tax-band?reason='+reason+'&property='+property)
  }


})

router.post('/webform/ct/property-request-details', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']


res.redirect('check-answers?reason='+reason+'&property='+property)




})

router.post('/webform/ct/location-details', function (req, res) {



    var reason = req.session.data['reason']

    var property = req.session.data['property']

    var propertyreason = req.session.data['propertyreason']

    if(req.session.data['sub_reason_option'])
    {
        var sub_reason = req.session.data['sub_reason_option'].substring(0,4)
    }

    var reason = req.session.data['reason']

    var property = req.session.data['property']


  res.redirect('owner-occupier-details?propertyreason=occupier&reason='+reason+'&property='+property)







})

router.post('/webform/ct/check-answers', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']

  req.session.data = {}
res.redirect('webform-submission-confirmation?reason='+reason+'&property='+property)




})

router.post('/webform/ct/council-tax-band', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var propertyreason = req.session.data['propertyreason']

  if(req.session.data['sub_reason_option'])
  {
      var sub_reason = req.session.data['sub_reason_option'].substring(0,4)
  }

  var reason = req.session.data['reason']

  var property = req.session.data['property']





console.log("newpropertyreason = " +sub_reason )
  /// Check whether the variable matches a condition

  if ((sub_reason == "CR01")||(sub_reason == "CR09")||(sub_reason == "CR12")||(sub_reason == "CR14"))

  {
    // Send user to next page

    delete req.session.data['planning_reference_number_available']
    delete req.session.data['planning_reference_number']
    delete req.session.data['no_planning_reference_reason']

      //res.redirect('owner-occupier-details?propertyreason=occupier&reason='+reason+'&property='+property)

      res.redirect('location-details?propertyreason=occupier&reason='+reason+'&property='+property)

  } else {
    // Send user to ineligible page
    res.redirect('planning-reference-details?reason='+reason+'&property='+property)
  }


})


function populateData(postdata, variablename, staticvalue) {


  if(postdata==null)
  {
      var variablename = staticvalue

  }
  else {
      var variablename = postdata
  }

return populateData


}



//For NDR properties



router.post('/webform/ndr/request-sub-reason', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

var reason = req.session.data['reason']
var property = req.session.data['property']

  var reason_remove = req.session.data['reason-remove']

  var reason_amend = req.session.data['reason-amend']

   var reason_new = req.session.data['reason-new']


console.log("reason code = " +reason_remove )
  // Check whether the variable matches a condition





    // Send user to ineligible page


    if ((reason == "remove")||(reason == "amend")) {
      res.redirect('/webform/ndr/billing-auth-ref-no?reason='+reason+'&property='+property)
      }
      else {
        //res.redirect('/webform/ct/address-postcode-lookup?reason='+reason+'&property='+property+'&propertyreason=new')
        res.redirect('/webform/ndr/billing-auth-ref-no?reason='+reason+'&property='+property+'&propertyreason=new')
      }


})// Run this code when a form is submitted to 'confirm-remove-failed-report'



router.post('/webform/ndr/billing-auth-ref-no', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reason = req.session.data['reason']
  var property = req.session.data['property']
  var propertyreason = req.session.data['propertyreason']





  // Check whether the variable matches a condition
  if (reason == "new"){
    // Send user to next page


    res.redirect('/webform/ndr/address-postcode-lookup?reason='+reason+'&property='+property+'&propertyreason='+propertyreason)

  } else {
    // Send user to ineligible page
    res.redirect('/webform/ndr/property-playback?reason='+reason+'&property='+property+'&propertyreason='+propertyreason)

  }

})



router.post('/webform/ndr/property-playback', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var propertyreason = req.session.data['propertyreason']

  if(req.session.data['sub_reason_option'])
  {
      var sub_reason = req.session.data['sub_reason_option'].substring(0,4)
  }


  var reason = req.session.data['reason']

  var property = req.session.data['property']





console.log("newpropertyreason = " +sub_reason )
  /// Check whether the variable matches a condition

  if ((sub_reason == "CR04")||(sub_reason == "CR06"))

  {
    // Send user to next page
    delete req.session.data['radio_council_tax_band']

      res.redirect('planning-reference-details?reason='+reason+'&property='+property)


  } else {
    // Send user to ineligible page
    res.redirect('property-description?reason='+reason+'&property='+property)
  }


})




router.post('/webform/ndr/property-description', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var propertyreason = req.session.data['propertyreason']

  if(req.session.data['sub_reason_option'])
  {
      var sub_reason = req.session.data['sub_reason_option'].substring(0,2)
  }

  var reason = req.session.data['reason']

  var property = req.session.data['property']





console.log("newpropertyreason = " +sub_reason )
  /// Check whether the variable matches a condition

  if ((sub_reason == "05")||(sub_reason == "08")||(sub_reason == "12"))

  {
    // Send user to next page

    delete req.session.data['planning_reference_number_available']
    delete req.session.data['planning_reference_number']
    delete req.session.data['no_planning_reference_reason']

      res.redirect('location-details?propertyreason=occupier&reason='+reason+'&property='+property)


  } else {
    // Send user to ineligible page
    res.redirect('planning-reference-details?reason='+reason+'&property='+property)
  }


})



// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/webform/ndr/owner-occupier-details', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']


  // Make a variable and give it the value from 'how-many-balls'
  var address_same_check = req.session.data['address_same_check']

  // Check whether the variable matches a condition
  if (address_same_check == "No"){
    // Send user to next page
    res.redirect('/webform/ndr/address-postcode-lookup?propertyreason=occupier')
  } else {
    // Send user to ineligible page
    res.redirect('/webform/ndr/property-request-details?reason='+reason+'&property='+property)
  }

})


router.post('/occupiers-list/upload-occupiers-list', function (req, res) {




    // Send user to ineligible page
    res.redirect('/occupiers-list/upload-occupiers-list?listaction=add')

})




router.post('/webform/ct/no-planning-reference', function (req, res) {


    res.redirect('/webform/ct/owner-occupier-details?propertyreason=occupier')

})


router.post('/webform/ndr/address-postcode-lookup', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var property_postcode = req.session.data['property-postcode']
  var propertyreason = req.session.data['propertyreason']
  var property = req.session.data['property']
  var reason = req.session.data['reason']
console.log("propertyreason = " +propertyreason )
  // Check whether the variable matches a condition
  if ((property_postcode == "NA")||(property_postcode == "SW1 OOO")){
    // Send user to next page

        res.redirect('/webform/ndr/address-no-results?propertyreason='+propertyreason+'&reason='+reason+'&property='+property)


  } else {
    // Send user to ineligible page
    res.redirect('/webform/ndr/address-list?propertyreason='+propertyreason+'&reason='+reason+'&property='+property)
  }

})



router.post('/webform/ndr/address-list', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var addressupdate = req.session.data['addressupdate']
  var propertyreason = req.session.data['propertyreason']
  var address = req.session.data['address']
console.log("address = " +address )
  // Check whether the variable matches a condition

    // Send user to next page

    if (propertyreason == "new"){
      // Send user to next page
    delete req.session.data['new-property-address-line-1']
    delete req.session.data['new-property-address-line-2']
    delete req.session.data['new-property-address-line-3']
    delete req.session.data['new-property-address-town-city']
    delete req.session.data['new-property-address-postcode']
  }
  else {
    delete req.session.data['occupier-property-address-line-1']
    delete req.session.data['occupier-property-address-line-2']
    delete req.session.data['occupier-property-address-line-3']
    delete req.session.data['occupier-property-address-town-city']
    delete req.session.data['occupier-property-address-postcode']

  }



    res.redirect('/webform/ndr/address-verify?propertyreason='+propertyreason)


})



router.post('/webform/ndr/address-verify', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'

  var propertyreason = req.session.data['propertyreason']

  var reason_new = req.session.data['new-property-reason']

  var property = req.session.data['property']

  var reason = req.session.data['reason']



console.log("newpropertyreason = " +reason_new )
  /// Check whether the variable matches a condition

  if (propertyreason == "new"){
    // Send user to next page

      res.redirect('property-description?reason='+propertyreason+'&property='+property)


  } else {
    // Send user to ineligible page
    res.redirect('/webform/ndr/property-request-details?propertyreason='+propertyreason+'&reason='+reason+'&property='+property)
  }


})



router.post('/webform/ndr/address-enter', function (req, res) {

  var propertyreason = req.session.data['propertyreason']

  var reason_new = req.session.data['new-property-reason']

  var property = req.session.data['property']

    var reason = req.session.data['reason']



console.log("newpropertyreason = " +reason_new )
  /// Check whether the variable matches a condition

  if (propertyreason == "new"){
    // Send user to next page

      res.redirect('planning-reference-details?reason='+propertyreason+'&property='+property)


  } else {
    res.redirect('/webform/ndr/property-request-details?propertyreason='+propertyreason+'&reason='+propertyreason+'&property='+property)

  }




})





router.post('/webform/ndr/no-planning-reference', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']


  //  res.redirect('/webform/ndr/owner-occupier-details?propertyreason=occupier')

    res.redirect('location-details?reason='+reason+'&property='+property)

})

router.post('/webform/ndr/location-details', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']

  var propertyreason = req.session.data['propertyreason']

  if(req.session.data['sub_reason_option'])
  {
      var sub_reason = req.session.data['sub_reason_option'].substring(0,4)
  }

  var reason = req.session.data['reason']

  var property = req.session.data['property']


res.redirect('owner-occupier-details?propertyreason=occupier&reason='+reason+'&property='+property)






})

router.post('/webform/ndr/property-request-details', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']


res.redirect('check-answers?reason='+reason+'&property='+property)




})



router.post('/webform/ndr/check-answers', function (req, res) {

  var reason = req.session.data['reason']

  var property = req.session.data['property']

  req.session.data = {}
res.redirect('webform-submission-confirmation?reason='+reason+'&property='+property)




})

router.post('/footer/cookies', function (req, res) {

  var measurement = req.session.data['measurement']

  var cookiesettings = req.session.data['cookiesettings']

  var cookiestatus = req.session.data['cookiestatus']



  if((!cookiestatus)||(cookiestatus="no"))
  {

      res.redirect('/footer/cookies?cookiestatus=yes')
  }






})


router.post('/cookieconfirm', function (req, res) {

  var measurement = req.session.data['measurement']

  var cookiesettings = req.session.data['cookiesettings']

  var confirmcookie = req.session.data['confirmcookie']

    var cookiexist = req.session.data['cookiexist']

  var strreferrer = req.get('Referrer')

  console.log(strreferrer)

  var strcookie = strreferrer.indexOf('?cookiexist=')
  var strcookieparameter = strreferrer.indexOf('&cookiexist=')


  var equalexist = strreferrer.indexOf('=')

    var strurl = strreferrer.indexOf('?')

  var truncUrl = strreferrer.slice(0,strurl+1)





 console.log('parameterr value'+strcookieparameter);

/*	console.log('parmaeters'+req.get('Referrer'));

  console.log('substring='+str.indexOf('?cookiexist'))

    console.log('url='+str.slice(0,strcookie))
*/

	// Check whether the variable matches a condition
  if (confirmcookie == "1"){
    // Send user to next page
    if(strcookie>0)
    {
        if(cookiexist==0)
        {
        res.redirect(truncUrl+'cookiexist=yes')

        }
        else {
            res.redirect(truncUrl+'?cookiexist=yes')
        }

    }
/*
    else if(equalexist>0) {
        res.redirect(str+'&cookiexist=yes')
    }*/
    else if(strcookieparameter>0) {
        res.redirect(strreferrer.slice(0,79)+'&cookiexist=yes')
    }
    else if((strcookieparameter<0)&&(strreferrer.indexOf('=')>0)) {
        console.log('in condtition where querystring exists for accept')
        res.redirect(strreferrer.slice(0,strreferrer.length)+'&cookiexist=yes')
    }
    else {
      res.redirect(strreferrer.slice(0,strreferrer.length)+'?cookiexist=yes')
    }

  }
  else if(confirmcookie == "2") {

    // Send user to ineligible page


      if(strcookie>0)
      {



          if(cookiexist==0)
          {
          res.redirect(truncUrl+'cookiexist=no')

          }
          else {
              res.redirect(truncUrl+'?cookiexist=no')
          }




      }
/*
      else if(equalexist>0) {
          res.redirect(str+'&cookiexist=yes')
      }*/
      else if(strcookieparameter>0) {
          res.redirect(strreferrer.slice(0,79)+'&cookiexist=no')
      }
      else if((strcookieparameter<0)&&(strreferrer.indexOf('=')>0)) {
          console.log('in condtition where querystring exists for accept')
          res.redirect(strreferrer.slice(0,strreferrer.length)+'&cookiexist=yes')
      }
      else {
        res.redirect(strreferrer.slice(0,strreferrer.length)+'?cookiexist=no')
      }
  }
  else if(confirmcookie == "3") {

    // Send user to ineligible page



        res.redirect(strreferrer+'&hidecookiemsg=yes')

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
