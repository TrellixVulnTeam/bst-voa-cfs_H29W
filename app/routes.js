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


module.exports = router
