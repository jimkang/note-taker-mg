module.exports = {
  name: 'godtributes',
  archiveOpts: {
    title: 'GODTRIBUTES',
    homeLink: 'https://smidgeo.com/bots/godtributes',
    rootPath: '/mnt/storage/archives/web-sites/smidgeo.com/bots/godtributes',
    maxEntriesPerPage: 50,
    fileAbstractionType: 'LocalGit',
    headExtraHTML:
      '<meta property="og:image" content="https://smidgeo.com/bots/godtributes/images/icon.png">',
    footerHTML: `<footer>
    <div>
      Banner by <a href="https://twitter.com/metroidbaby">@metroidbaby</a>.
      Powered by <a href="http://developer.wordnik.com/">Wordnik</a>.
    </div>
    <div>
      <a href="https://smidgeo.com/bots/godtributes/rss/index.rss">RSS FOR THE RSS GOD</a>
    </div>
    <div>
      <a href="https://tinyletter.com/bots">DAILY EMAIL TRIBUTES FOR THE DAILY EMAIL TRIBUTE GOD</a>
    </div>
    <div>
      <a href="mailto:bots@fastmail.com">bots@fastmail.com</a>
    </div>
    <div>
      <a href="https://smidgeo.com/bots">BOTS FOR THE BOT GOD</a>
    </div>
    </footer>
    `,
    generateRSS: true,
    archiveBaseURL: 'https://smidgeo.com/bots/godtributes',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/bots/godtributes/rss/index.rss',
      site_url: 'https://smidgeo.com/bots/godtributes/'
    }
  },
  secret: require('./secrets').godtributes
};
