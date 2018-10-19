module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {

        lastUpdated: 'Last Updated', // string | boolean

        // navbar: false,
        nav: 
        [
            // NavMenu - DropdownMenu
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/' },
                    { text: 'Japanese', link: '/'}
                ]
            },
            // NavMenu - DefaultLink
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide' },
            { text: 'GitHub', link: 'https://github.com/choijaewoong' }
        ],

        // sidebar: false,
        sidebar: {
            '/': [
                ['/', 'Home'],
                ['/guide', 'Guide'],
                {
                    title: 'Detail',
                    collapsable: false,
                    children: [
                        ['/detail/detail', 'Detail_1'],
                        ['/detail/detail_2', 'Detail_2'],
                        ['/detail/detail_3', 'Detail_3'],
                    ]
                }
            ]
        },
    },
    markdown: {
        lineNumbers: true
    }
}