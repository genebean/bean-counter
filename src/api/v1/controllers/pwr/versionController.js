const { Octokit } = require('@octokit/rest');
const { throttling } = require('@octokit/plugin-throttling');

const ghToken = process.env.GH_TOKEN || ''
if (ghToken === '') {
  console.warn('No token for GitHub was found, using unauthenticated access.')
}

const MyOctokit = Octokit.plugin(throttling)

const octokit = new MyOctokit({
  auth: ghToken,
  userAgent: 'genebean/bean-counter',
  timeZone: 'America/New_York',
  throttle: {
    onRateLimit: (retryAfter, options) => {
      console.warn(`Request quota exhausted for request ${options.method} ${options.url}`)

      if (options.request.retryCount === 0) { // only retries once
        console.log(`Retrying after ${retryAfter} seconds!`)
        return true
      }

      return false
    },
    onAbuseLimit: (retryAfter, options) => {
      // does not retry, only logs a warning
      console.warn(`Abuse detected for request ${options.method} ${options.url}`)
    }
  }
})

exports.version_get = function (req, res) {
  octokit.repos
    .getLatestRelease({
      owner: 'genebean',
      repo: 'PiWeatherRock'
    })
    .then(({ data }) => { //, headers, status }) => {
      res.json({
        version: data.tag_name,
        published: data.published_at,
        release_name: data.name,
        release_description: data.body,
        release_url: data.html_url
      })
    })
}
