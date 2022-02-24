//var NotifyClient = require('notifications-node-client').NotifyClient,
    //notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const express = require('express')
const router = express.Router()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

var searchAddresses = [
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




  // Check whether the variable matches a condition
  if (confirmdeleteupload == "no"){
    // Send user to next page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=1')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/uploaded-file-status?deletefile=2')
  }

})


router.post('/bulk-submission-report-list', function (req, res) {


  // Make a variable and give it the value from 'submit buttons'
  var bulkconfirm = req.session.data['bulkconfirm']

   console.log('routing'+bulkconfirm);


  // Check whether the variable matches a condition
  if (bulkconfirm == "1"){
    // Send user to next page

    res.redirect('/bulkreport/confirm-remove-failed-report')
  } else if(bulkconfirm == "0") {

    // Send user to ineligible page
    res.redirect('/bulkreport/confirm-delete-upload')
  }

	else{

		res.redirect('/bulkreport/bulk-submission-confirmation')

	}

})






router.post('/faileduploadxml', function (req, res) {


  // Make a variable and give it the value from 'submit buttons'
  var deletefile = req.session.data['deletefile']

   console.log('routing'+deletefile);


  // Check whether the variable matches a condition
  if (deletefile == "1"){
    // Send user to next page

    res.redirect('/bulkreport/uploaded-file-status?deletefile=1')
  }



})




// Run this code when a form is submitted to 'confirm-remove-failed-report'
router.post('/confirm-remove-failed-report', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var confirmremove = req.session.data['confirmremove']
console.log("COnfirm rempve = "+ confirmremove)
  // Check whether the variable matches a condition
  if (confirmremove == "yes"){
    // Send user to next page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=3')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=1')
  }

})

//confirmremoverowissue

// Run this code when a form is submitted to 'confirm-remove-delete-error-row'
router.post('/confirm-remove-delete-error-row', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var confirmremoverowissue = req.session.data['confirmremoverowissue']
console.log("Confirm rempve = "+ confirmremoverowissue)
  // Check whether the variable matches a condition
  if (confirmremoverowissue == "yes"){
    // Send user to next page
    console.log("in yes")
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=1&removerowissue=1')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/bulk-submission-report-list?dataissues=1&removerowissue=0')
  }

})


// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/email-address-page', function (req, res) {

  notify.sendEmail(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.emailAddress
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/confirmation-page');

});

module.exports = router
