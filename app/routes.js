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


// Run this code when a form is submitted to 'selectformat'
router.post('/selectformat', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var selectformat = req.session.data['selectformat']

  // Check whether the variable matches a condition
  if (selectformat == "xml"){
    // Send user to next page
    res.redirect('/bulkreport/xmlupload')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/xlsupload')
  }

})


router.post('/confirmdelete', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var confirmdelete = req.session.data['confirmdelete']
  
  
  

  // Check whether the variable matches a condition
  if (confirmdelete == "no"){
    // Send user to next page
    res.redirect('/bulkreport/bulkreportissues')
  } else {
    // Send user to ineligible page
    res.redirect('/bulkreport/confirm-remove-current-file')
  }

})


router.post('/bulkreportissues', function (req, res) {
	

  // Make a variable and give it the value from 'submit buttons'
  var bulkconfirm = req.session.data['bulkconfirm']
  
   console.log('routing'+bulkconfirm);
  

  // Check whether the variable matches a condition
  if (bulkconfirm == "1"){
    // Send user to next page
	
    res.redirect('/bulkreport/confirmremovefailedreport')
  } else if(bulkconfirm == "0") {
	  
    // Send user to ineligible page
    res.redirect('/bulkreport/confirmdelete')
  }
	
	else{
		
		res.redirect('/bulkreport/bulksubmissionconfirmation')
		
	}

})


removefile=1



router.post('/faileduploadxml', function (req, res) {
	

  // Make a variable and give it the value from 'submit buttons'
  var deletefile = req.session.data['deletefile']
  
   console.log('routing'+deletefile);
  

  // Check whether the variable matches a condition
  if (deletefile == "1"){
    // Send user to next page
	
    res.redirect('/bulkreport/uploadliststatus?deletefile=1')
  } 
	
	

})


module.exports = router
