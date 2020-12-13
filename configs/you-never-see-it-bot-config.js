module.exports = {
  name: 'you-never-see-it-bot',
  archiveOpts: {
    title: 'You Never See It Bot',
    homeLink: 'https://smidgeo.com/bots/you-never-see-it-bot',
    rootPath:
      '/mnt/storage/archives/web-sites/smidgeo.com/bots/you-never-see-it-bot',
    maxEntriesPerPage: 50,
    fileAbstractionType: 'LocalGit',
    footerHTML: `<footer>
    <div>
    <div>This site is updated via <a href="https://github.com/jimkang/note-taker">note-taker</a> and <a href="https://github.com/jimkang/note-sender">note-sender</a>. note-taker is an adapter for <a href="https://github.com/jimkang/static-web-archive">static-web-archive</a>.
    </div>
    <div>
      <a href="https://smidgeo.com/bots/you-never-see-it-bot/rss/index.rss">RSS feed</a>
    </div>
    <div>
      Send comments to <a href="mailto:bots@fastmail.com">bots@fastmail.com</a> (or ask to subscribe to the bot email that goes out three time a week)
    </div>
    </footer>
    `,
    generateRSS: true,
    archiveBaseURL: 'https://smidgeo.com/bots/you-never-see-it-bot',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/bots/you-never-see-it-bot/rss/index.rss',
      site_url: 'https://smidgeo.com/bots/you-never-see-it-bot/'
    }
  },
  secret: require('./secrets')['you-never-see-it-bot']
};
