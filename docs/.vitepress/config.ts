
export default {
    title: 'BettterMemory',
    base: '/Website/',
    themeConfig: {
        logo: '../face.png',

        nav: [
            {text: '文档', link: 'application/usage/docs.md'},
            {text: '新闻', link: 'news/list.md'},
            {
                text: '获取应用',
                items: [
                    {
                        // 该部分的标题
                        text: '全部应用',
                        items: [
                            {text: 'BetterMemory Word', link: 'https://word.bettermemory.cn/'},
                            {text: 'BetterMemory Note', link: 'https://note.bettermemory.cn/'}
                        ]
                    }
                ]
            },
        ],


        socialLinks: [
            {icon: 'github', link: 'https://github.com/BetterMemory/Website'},
            {icon: 'twitter', link: 'https://twitter.com/VKoooooon'},
            {icon: 'discord', link: 'https://discord.gg/hQNMJsT8'},
            // 可以通过将 SVG 作为字符串传递来添加自定义图标：
        ],

        sidebar: [
            {
                text: '信息',
                collapsed: true,
                items: [
                    {text: '关于我', link: '/about/author.md'},
                    {text: '关于 BetterMemory Word', link: '/about/applications/bm_word.md'},
                    {text: '关于 BetterMemory Note', link: '/about/applications/bm_note.md'},
                ]
            },
            {
                text: '应用程序',
                collapsed: true,
                items: [
                    {text: '获取应用', link: '/application/get.md'},
                    {text: '开始使用', link: '/application/usage/start.md'}
                ]
            },
            {
                text: '新闻',
                collapsed: true,
                items: [
                    {text: '最新', link: '/news/today.md'},
                    {text: '历史', link: '/news/list.md'},

                    {
                        text: '归档',
                        collapsed: true,
                        items: [
                            {text: '20240104', link: '/news/2024-01-04/news.md'},
                        ]
                    },

                ]
            },


        ]


    }
}
