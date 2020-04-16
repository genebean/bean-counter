const stats = (req, res) => {
  res.json({
    "devices": 0,
    "countries": [
      "string"
    ],
    "breakdown": [
      {
        "country": "string",
        "devices": 0
      }
    ]
  })
}

module.exports = stats
