/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Monica I`,
    author: `Monica Iyer`,
    firstName: `Monica`,
    lastName: `Iyer`,
    description: `Monica's personal site`,
    occupation: `Data Scientist`,
    keywords: [`Monica`, `Iyer`, `Personal`, `Blog`, `Resume`, `Projects`, `Work`],
    siteUrl:
      process.env.URL || process.env.DEPLOY_URL || `http://localhost:8000`,
    unemployed: true,
    designations: [
      `ETList`,
      `Janeite`,
      `Decision Intelligence Enthusiast`,
      `Masterchef`,
      `Voice Artist`
    ],
    readingList: [
      {
        title: `The Lovely Bones`,
        author: `Alice Sebold`,
        link: `https://www.goodreads.com/book/show/12232938-the-lovely-bones`,
      },
      {
        title: `Weapons of Math Destruction`,
          author: `Cathy O'Neil`,
        link: `https://www.amazon.com/Weapons-Math-Destruction-Increases-Inequality/dp/0553418815`,
      },
      {
        title: `Cleopatra: A Life`,
          author: `Stacy Schiff`,
        link: `https://www.goodreads.com/book/show/7968243-cleopatra`,
      },
      {
        title: `Eleanor and Park`,
          author: `Rainbow Rowell`,
        link: `https://www.goodreads.com/book/show/15745753-eleanor-park`,
      },
      {
        title: `Skulduggery Pleasant Series`,
        author: `Derek Landy`,
        link: `https://www.howtoread.me/skulduggery-pleasant-books-in-order/`,
      },
      {
        title: `Far from the Madding Crowd`,
        author: `Thomas Hardy`,
        link: `https://www.goodreads.com/book/show/31463.Far_From_the_Madding_Crowd`,
      },
    ],
    showsList: [
      {
        title: `Orange is the New Black`,
        author: `Jenji Kohan`,
        link: `https://www.imdb.com/title/tt2372162/`,
      },
      {
        title: `Avatar: The Last Airbender`,
        author: `Micheal DiMartino, Bryan Konietzko`,
        link: `https://www.imdb.com/title/tt0417299/`,
      },
      {
        title: `Love, Death & Robots`,
        author: `Tim Miller`,
        link: `https://www.imdb.com/title/tt9561862/`,
      },
      {
        title: `The Keepers`,
        author: `Ryan White`,
        link: `https://www.imdb.com/title/tt6792200/`,
      },
      {
        title: `Making a Murderer`,
        author: `Laura Ricciardi & Moira Demos`,
        link: `https://www.imdb.com/title/tt5189670/`,
      },
    ],
    gamesList: [
      {
        title: 'God of War PS4',
        author: 'Santa Monica Studio',
        link: 'https://godofwar.playstation.com/',
      },
      {
        title: 'Dead by Daylight', 
        author: 'Behaviour Interactive', 
        link: 'https://deadbydaylight.com/en',
      },
      {
        title: 'Unravel Two',
        author: 'Electronic Arts',
        link:'https://www.ea.com/games/unravel/unravel-two',
      },
      {
        title: 'Detroit: Become Human',
        author: 'Quantic Dream',
        link:'https://www.playstation.com/en-ca/games/detroit-become-human-ps4/',
      },
      {
        title: 'Horizon Zero Dawn',
        author: 'Geurilla Games',
        link:'https://www.playstation.com/en-ca/games/horizon-zero-dawn-ps4/',
      },
      {
        title: 'Injustice 2',
        author: 'NetherRealm Studios',
        link: 'https://www.injustice.com/',
      },
    ],
    findsList: [
      {
        title: 'Public Secrets',
        link: 'https://postsecret.com/',
      },
      {
        title: 'Bad Hacks',
        link: 'https://terriblehack.website/',
      },
      {
        title: 'Doge',
        link: 'https://chrome.google.com/webstore/detail/doge/hgbjmjjpoakdcllgikgchblebfclefii',
      },
      {
        title: 'Avatar: The Last Airbender API',
        link: 'https://avatar-the-last-airbender-api.herokuapp.com/'
      },
      {
        title: 'Web Comics',
        link: 'https://xkcd.com/',
      },
    ],

  },
  plugins: [
    `gatsby-plugin-preload-link-crossorigin`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monica Iyer's personal site`,
        short_name: `Monica.I`,
        description: `This is my personal site.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `${__dirname}/static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Raleway:300,400"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `tomato`,
        showSpinner: true,
      },
    },
  ],
}
