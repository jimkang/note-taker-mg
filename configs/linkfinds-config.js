module.exports = {
  name: 'linkfinds',
  archiveOpts: {
    title: 'Link Finding Things',
    homeLink: 'https://smidgeo.com/bots/linkfinds',
    rootPath: '/mnt/storage/archives/web-sites/smidgeo.com/bots/linkfinds',
    maxEntriesPerPage: 50,
    fileAbstractionType: 'LocalGit',
    footerHTML: `<footer>
    <div>
      <a href="https://smidgeo.com/bots/linkfinds/rss/index.rss">Get Link's finds in your RSS reader</a>
    </div>
    <div>
      <a href="https://tinyletter.com/bots">Get email finds</a>
    </div>
    <div>
      <a href="mailto:bots@fastmail.com">bots@fastmail.com</a>
    </div>
    <div>
      <a href="https://smidgeo.com/bots">More bots</a>
    </div>
    </footer>
    `,
    generateRSS: true,
    archiveBaseURL: 'https://smidgeo.com/bots/linkfinds',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/bots/linkfinds/rss/index.rss',
      site_url: 'https://smidgeo.com/bots/linkfinds/'
    }
  },
  secret: require('./secrets').linkfinds
};
