module.exports = {
  name: 'successfulbot',
  archiveOpts: {
    title: 'The Most Successful Bot I\'ve Met',
    homeLink: 'https://smidgeo.com/bots/successfulbot',
    rootPath: '/mnt/storage/archives/web-sites/smidgeo.com/bots/successfulbot',
    maxEntriesPerPage: 50,
    fileAbstractionType: 'LocalGit',
    footerHTML: `<footer>
    <div>
      <a href="https://smidgeo.com/bots/successfulbot/rss/index.rss">The Most Successful RSS I've Subscribed To</a>
    </div>
    <div>
      <a href="https://tinyletter.com/bots">Learn how 2 succeed just by reading your email!</a>
    </div>
    <div>
      <a href="mailto:bots@fastmail.com">bots@fastmail.com</a>
    </div>
    <div>
      <a href="https://smidgeo.com/bots">The second-most successful bots I've met</a>
    </div>
    </footer>
    `,
    generateRSS: true,
    archiveBaseURL: 'https://smidgeo.com/bots/successfulbot',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/bots/successfulbot/rss/index.rss',
      site_url: 'https://smidgeo.com/bots/successfulbot/'
    }
  },
  secret: require('./secrets').successfulbot
};
