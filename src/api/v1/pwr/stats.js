const stats = (req, res) => {
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

module.exports = stats
