module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        
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
                ['/', 'First'],
                ['/', 'Second'],
                ['/', 'Third'],
                {
                    title: 'Group 2',
                    collapsable: false,
                    children: [
                        ['/', 'First'],
                        ['/', 'Second'],
                        ['/', 'Third'],
                    ]
                }
            ]
        }
    }
}