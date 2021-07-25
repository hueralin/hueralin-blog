module.exports = {
    // Title of your website
    title: 'hueralin’s Blog',

    // Description of your website
    description: 'Welcome to hueralin’s Blog',

    head: [
        // 添加百度统计
        [
            "script",
            {},
            `var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?e3bf87314e0f142f281b7c4a2f198ad7";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();`
        ]
    ],

    // Language of your website
    locales: {
        '/': {
            lang: 'zh-CN',
        },
    },

    // Theme to use
    theme: 'meteorlxy',

    // Theme config
    themeConfig: {
        // Language of this theme. See the [Theme Language] section below.
        lang: 'zh-CN',

        // Personal infomation (delete the fields if you don't have / don't want to display)
        personalInfo: {
            // Nickname
            nickname: 'hueralin',

            // Introduction of yourself (HTML supported)
            description: 'Hello world',

            // Email
            // email: 'meteor.lxy@foxmail.com',

            // Your location
            location: 'Beijing, China',

            // Your organization
            // organization: 'Xi\'an Jiao Tong University',

            // Your avatar image
            // Set to external link
            avatar: '/img/huer.jpg',
            // Or put into `.vuepress/public` directory. E.g. `.vuepress/public/img/avatar.jpg`
            // avatar: '/img/avatar.jpg',

            // Accounts of SNS
            sns: {
                // Github account and link
                github: {
                    account: 'hueralin',
                    link: 'https://github.com/hueralin',
                }
            },
        },

        // Header Config (Optional)
        header: {
            // The background of the header. You can choose to use an image, or to use random pattern (geopattern)
            background: {
                // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
                // url: '/assets/img/bg.jpg',

                // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
                useGeo: true,
            },

            // show title in the header or not
            showTitle: true,
        },

        // Footer Config (Optional)
        footer: {
            // Show 'Powered by VuePress' or not (enable it to support VuePress)
            poweredBy: true,

            // Show the theme that you are using (enable it to support this theme) (please do not disable it, haha)
            poweredByTheme: true,

            // Add your custom footer (HTML supported)
            custom: 'Copyright 2021 <a href="http://beian.miit.gov.cn"  target="_blank">鲁ICP备20001354号-1</a>',
        },

        // Info Card Config (Optional)
        // infoCard: {
        //     // The background of the info card's header. You can choose to use an image, or to use random pattern (geopattern)
        //     headerBackground: {
        //         // URL of the background image. If you set the URL, the random pattern will not be generated, and the `useGeo` will be ignored.
        //         url: '/assets/img/bg.jpg',

        //         // Use random pattern. If you set it to `false`, and you don't set the image URL, the background will be blank.
        //         useGeo: true,
        //     },
        // },

        // Show the last updated time of your posts
        lastUpdated: false,

        // The content of your navbar links
        nav: [
            { text: 'Home', link: '/', exact: true },
            { text: 'Posts', link: '/posts/', exact: false },
        ],

        // Enable smooth scrolling or not
        smoothScroll: true,

        // Configs for vuepress-plugin-zooming
        zooming: {
            // @see https://vuepress.github.io/en/plugins/zooming
        },

        // Comments config. See the [Posts Comments] section below.
        comments: {
            platform: 'github',
            owner: 'hueralin',
            repo: 'hueralin-blog',
            clientId: '3dc41f970fe5c2d6e274',
            clientSecret: 'ddbe31233e4df8a45acf6f80ecfa731cbeaaf498',
            // 开发环境下不自动创建 Issue
            autoCreateIssue: process.env.NODE_ENV !== 'development'
        },

        // Pagination config (Optional)
        pagination: {
            perPage: 5,
        },

        // Default Pages (Optional, the default value of all pages is `true`)
        defaultPages: {
            // Allow theme to add Home page (url: /)
            home: true,
            // Allow theme to add Posts page (url: /posts/)
            posts: true,
        },
    },
}