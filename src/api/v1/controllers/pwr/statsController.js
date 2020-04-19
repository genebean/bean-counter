exports.stats_get = function(req, res) {
  console.log('Stub data returned from /api/v1/pwr/stats')
  res.json({
    'devices': 2,
    'countries': [
      'Germany',
      'United States of America'
    ],
    'breakdown': [
      {
        'country': 'Gernamny',
        'devices': 1
      },
      {
        'country': 'United States of America',
        'devices': 1
      }
    ]
  })
}

exports.stats_post = function(req, res) {
  console.log(`Data posted to /api/v1/pwr/stats : ${JSON.stringify(req.body)}`)
  res.send('Should handle the submission of stats')
}
