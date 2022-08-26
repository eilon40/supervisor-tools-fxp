const categories = [
    {
        name: 'דיון, עזרה וייעוץ',
        id: 10,
        generate: (forum, user, manager) => {
            return `[CENTER][TABLE="width: 900, align: center"]
        [TR]
        [TD][IMG]https://images.weserv.nl/?url=i.imgur.com/9ant8gJ.png[/IMG][/TD]
        [/TR]
        [/TABLE]
        [/CENTER]
        [TABLE="width: 900, align: center"]
        [TR="bgcolor: #76ACE4"]
        [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]מנהל השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
        [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]משתמש השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
        [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]פורום השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
        [/TR]
        [TR]
        [TD="align: center"][URL="${manager.profile}"][B][COLOR=#ff0000]${manager.name}[/COLOR][/B][/URL][/TD]
        [TD="align: center"][URL="${user.profile}"][B][COLOR=#000000]${user.name}[/COLOR][/B][/URL][/TD]
        [TD="align: center"][B][URL="${forum.href}"][COLOR=#daa520]${forum.name}[/COLOR][/URL][/B][/TD]
        [/TR]
        [TR]
        [TD="align: center"][COLOR=#000000][FONT=almoni-dl]${manager.reason}[/FONT][/COLOR][/TD]
        [TD="align: center"][FONT=open sans hebrew]${user.reason}[/FONT][/TD]
        [TD="align: center"][COLOR=#000000][FONT=almoni-dl]${forum.reason}[/FONT][/COLOR][/TD]
        [/TR]
        [/TABLE]`;
        },
    },
    {
        name: 'פנאי ובידור',
        id: 5,
        generate: (forum, user, manager) => {
            return `[CENTER][COLOR=#333333][FONT=&amp][COLOR=#333333][FONT=arial][COLOR=#333333][FONT=almoni-dl][IMG]https://i.imagesup.co/images2/d4f3a31564b7299835f7f963dd3b1c5358e7918b.png[/IMG][/FONT][/COLOR][/FONT][/COLOR][/FONT][/COLOR]


        [COLOR=#333333][FONT=&amp][COLOR=#333333][FONT=arial][COLOR=#333333][FONT=almoni-dl][TABLE="class: cms_table_cms_table_cms_table, width: 600, align: center"]
        [TR="bgcolor: #539FB2"]
        [TD][TABLE="class: cms_table_cms_table_cms_table, width: 600, align: center"]
        [TR]
        [TD="bgcolor: #42AEC9"][IMG]https://i.imagesup.co/images2/c829bc0cee814c1b2e14cded877b60e368ff9f1a.png[/IMG][/TD]
        [/TR]
        [TR="bgcolor: #FFFFFF"]
        [TD][B][URL="${user.profile}"]${user.name}[/URL][/B][SIZE=3]
        [B]${user.reason}[/B][/SIZE][/TD]
        [/TR]
        [TR]
        [TD="bgcolor: #42AEC9"][IMG]https://i.imagesup.co/images2/9824bed3ecfe505d83b789ecb7d59a774d165fd5.png[/IMG][/TD]
        [/TR]
        [TR="bgcolor: #FFFFFF"]
        [TD][B][URL="${manager.profile}"][COLOR=#0066ff]${manager.user}[/COLOR][/URL]
        [/B][B][SIZE=3]${manager.reason}[/SIZE][/B][/TD]
        [/TR]
        [TR]
        [TD="bgcolor: #42AEC9"][IMG]https://i.imagesup.co/images2/b5c0580a977f08fe2bb87ee5b353fc4c77893d00.png[/IMG][/TD]
        [/TR]
        [TR="bgcolor: #FFFFFF"]
        [TD][B][URL="${forum.href}"][COLOR=#daa520]${forum.name}[/COLOR][/URL][/B][SIZE=3]
        [B]${forum.reason}[/B]
        [/SIZE][/TD]
        [/TR]
        [/TABLE]
        [/TD]
        [/TR]
        [/TABLE]
        
        [/FONT][/COLOR][/FONT][/COLOR][/FONT][/COLOR][/CENTER]`;
        },
    },
    {
        name: 'פורום דיבורים',
        id: 21,
        isForum: true,
        generate: (forum = null, user, manager) => {
            return `[CENTER][IMG]https://i.imagesup.co/images2/a20ab23b7ccffedd998870675f32cba8ea73dad9.png[/IMG][FONT=almoni-dl]

        [/FONT][TABLE="align: center"]
        [TR="bgcolor: #17BC12"]
        [TD][TABLE="width: 500, align: center"]
        [TR="bgcolor: #028100"]
        [TD="bgcolor: #028100"][COLOR=#ffffff][FONT=almoni-dl][U][SIZE=4][B] מנהל השבוע [/B][/SIZE][/U][/FONT][/COLOR][/TD]
        [/TR]
        [TR="bgcolor: #F5F5F5"]
        [TD][FONT=rancho][SIZE=7][U][B][URL="${manager.profile}"][COLOR=#04a801]${manager.name}[/COLOR][/URL]
        [/B][/U][/SIZE][/FONT][COLOR=#000000][FONT=almoni-dl]${manager.reason}[/FONT][/COLOR][/TD]
        [/TR]
        [/TABLE]
        [/TD]
        [/TR]
        [/TABLE]
        [FONT=almoni-dl]
        [/FONT][/CENTER]`;
        },
    },
    {
        name: 'פורום מלב אל לב',
        id: 359,
        isForum: true,
        generate: (forum = null, user, manager) => {
            return `[CENTER][IMG]https://i.imagesup.co/images2/873397c93398d1a78b3ccd4de190e344e3e1413d.png[/IMG][/CENTER]



        [TABLE="width: 950, align: center"]
        [TR]
        [TD="align: center"][IMG]https://images.weserv.nl/?url=i.gyazo.com%2F5073985f039171d97ce47888a63e1c9c.png[/IMG]​​[/TD]
        [TD="align: center"][IMG]https://images.weserv.nl/?url=i.gyazo.com%2F29c42e195e3c4b7200f64ad5d4230cb5.png[/IMG]​[/TD]
        [/TR]
        [TR]
        [TD="align: center"][URL="${manager.profile}"][COLOR=#ff0000][B]${manager.name}[/B][/COLOR][/URL]
        [FONT=tahoma]${manager.reason}[/FONT][/TD]
        [TD="align: center"][URL="${user.profile}"][COLOR=#daa520][B]${user.name}[/B][/COLOR][/URL]
        [FONT=tahoma]${user.reason}[/FONT][/TD]
        [/TR]
        [/TABLE]`;
        },
    },
    {
        name: 'פורום היכל התהילה',
        id: 576,
        isForum: true,
        generate: (forum = null, user, manager) => {
            return `[CENTER][IMG]https://i.imagesup.co/images2/eedd355c500e517fb3401df1781aa6578860a21a.png[/IMG]
        [/CENTER]
        [TABLE="width: 900, align: center"]
        [TR="bgcolor: #43c6db"]
        [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]מנהל השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
        [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]משתמש השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
        [TD="align: center"][/TD]
        [/TR]
        [TR]
        [TD="align: center"][URL="${manager.profile}"][COLOR=#3366cc][FONT=almoni-dl][SIZE=3][B]${manager.name}[/B][/SIZE][/FONT][/COLOR][/URL][/TD]
        [TD="align: center"][URL="${user.profile}"][COLOR=#ff8c00][FONT=almoni-dl][SIZE=3][B]${user.name}[/B][/SIZE][/FONT][/COLOR][/URL][/TD]
        [/TR]
        [TR]
        [TD="align: center"][FONT=almoni-dl][SIZE=3]${manager.reason}[/SIZE][/FONT][/TD]
        [TD="align: center"][FONT=almoni-dl][SIZE=3]${user.reason}[/SIZE][/FONT][/TD]
        [/TR]
        [/TABLE]`;
        },
    },
    {
        name: 'לימודים והשכלה',
        id: 252,
        generate: (forum, user, manager) => {
            return `[CENTER][COLOR=#333333][IMG]https://i.imagesup.co/images2/ebe507220b6b664e1a71e1091b4765d3c57d48ac.png[/IMG][/COLOR][/CENTER]
        [COLOR=#333333][CENTER][COLOR=#333333]
        [FONT=arial][TABLE="class: cms_table_cms_table_cms_table_cms_table, align: center"]
        [TR="bgcolor: #0099FF"]
        [TD][COLOR=#ffffff][FONT=tahoma][SIZE=4][B]מנהל השבוע[/B][/SIZE][/FONT][/COLOR][/TD]
        [TD][COLOR=#ffffff][SIZE=4][FONT=tahoma][B]משתמש השבוע[/B][/FONT][/SIZE][/COLOR][/TD]
        [TD][COLOR=#ffffff][SIZE=4][FONT=tahoma][B]פורום השבוע[/B][/FONT][/SIZE][/COLOR][/TD]
        [/TR]
        [TR]
        [TD][URL="${manager.profile}"][COLOR=#40e0d0][B][U]${manager.name}[/U][/B][/COLOR][/URL]
        [SIZE=3]${manager.reason}[/SIZE][/TD]
        [TD][URL="${user.profile}"][B][U]${user.name}[/U][/B][/URL]
        ${user.reason}
        [/TD]
        [TD][SIZE=3][URL="${forum.href}"][B][U]${forum.name}[/U][/B][/URL]
        ${forum.reason}
        [/SIZE][/TD]
        [/TR]
        [/TABLE]
        [/FONT][/COLOR][/CENTER]
        [/COLOR]`;
        },
    },
    {
        name: 'תחביבים',
        id: 564,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://images.weserv.nl/?url=i.imgur.com%2F1MSsftp.png[/IMG][COLOR=#D7DADC][FONT=arial][COLOR=white][FONT=arial][COLOR=#D7DADC]


        [/COLOR][/FONT][/COLOR][/FONT][/COLOR][/CENTER]
        [RIGHT][COLOR=#D7DADC][FONT=arial][COLOR=#181818][COLOR=#181818][FONT=arial][COLOR=#181818][CENTER][COLOR=#D7DADC][COLOR=#181818][COLOR=#D7DADC][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_grid, width: 700, align: center"]
        [TR="bgcolor: #000033"]
        [TD][SIZE=3][FONT=&amp][B][COLOR=#ffffff]מנהל השבוע[/COLOR][/B][/FONT][/SIZE][/TD]
        [TD][SIZE=3][FONT=&amp][B][COLOR=#ffffff]משתמש השבוע
        [/COLOR][/B][/FONT][/SIZE][/TD]
        [TD][SIZE=3][FONT=&amp][B][COLOR=#ffffff]פורום השבוע[/COLOR][/B][/FONT][/SIZE][/TD]
        [/TR]
        [TR="bgcolor: #FFFFFF"]
        [TD][SIZE=3][COLOR=#ee82ee][B][URL="${manager.profile}"]${manager.name}[/URL][/B][/COLOR][COLOR=#ee82ee]
        [/COLOR][COLOR=#000000]${manager.reason}
        [/COLOR][/SIZE][/TD]
        [TD][COLOR=#D7DADC][FONT=arial][COLOR=#181818][COLOR=#181818][FONT=arial][COLOR=#181818][COLOR=#D7DADC][COLOR=#181818][COLOR=#D7DADC][SIZE=3][COLOR=#ee82ee][B][URL="${user.profile}"]${user.name}[/URL][/B][/COLOR][COLOR=#ee82ee]
        [/COLOR][COLOR=#000000]${user.reason}[/COLOR][/SIZE][/COLOR][/COLOR][/COLOR][/COLOR][/FONT][/COLOR][/COLOR][/FONT][/COLOR][COLOR=#000000][/COLOR]
        [/TD]
        [TD][COLOR=#D7DADC][FONT=arial][COLOR=#181818][COLOR=#181818][FONT=arial][COLOR=#181818][COLOR=#D7DADC][COLOR=#181818][COLOR=#D7DADC][SIZE=3][COLOR=#ee82ee][B][URL="${forum.href}"]${forum.name}[/URL][/B][/COLOR][COLOR=#ee82ee]
        [/COLOR][COLOR=#000000]${forum.reason}[/COLOR][/SIZE][/COLOR][/COLOR][/COLOR][/COLOR][/FONT][/COLOR][/COLOR][/FONT][/COLOR]
        [/TD]
        [/TR]
        [/TABLE]
        [/COLOR]
        [/COLOR][/COLOR][/CENTER]
        [/COLOR][/FONT][/COLOR][/COLOR][/FONT][/COLOR]
        [/RIGHT]
            `;
        },
    },
    {
        name: 'מוזיקה',
        id: 454,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://images.weserv.nl/?url=i.imgur.com/wB8oNtJ.png[/IMG]

        [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, width: 800, align: center"]
        [TR="bgcolor: #33CCFF"]
        [TD][FONT=almoni-dl][SIZE=4][COLOR=#ffffff][B]מנהל השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD][FONT=almoni-dl][SIZE=4][COLOR=#ffffff][B]משתמש השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD][FONT=almoni-dl][SIZE=4][COLOR=#ffffff][B]פורום השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
        [/TR]
        [TR]
        [TD][COLOR=#0000ff][FONT=almoni-dl][B]כינוי המנהל:[URL="${manager.profile}"]${manager.name}[/URL]
        
        
        פירוט:
        [/B]${manager.reason}[/FONT][/COLOR][/TD]
        [TD][COLOR=#0000ff][FONT=almoni-dl][B]כינוי המשתמש: [URL="${user.profile}"]${user.name}[/URL]
        
        פירוט:
        [/B]${user.reason}[/FONT][/COLOR][/TD]
        [TD][COLOR=#0000ff][FONT=almoni-dl][B]שם הפורום: [URL="${forum.href}"]${forum.name}[/URL]
        
        פירוט:
        [/B]${forum.reason}[/FONT][/COLOR][/TD]
        [/TR]
        [/TABLE]
        
        [/CENTER]
            `;
        },
    },
    {
        name: 'גרפיקה ואומנות',
        id: 78,
        generate: (forum, user, manager) => {
            return `[CENTER][FONT=open sans hebrew][IMG]https://i.imagesup.co/images2/5eb55f19d310efce600db3b8a9c64bb0441fcc77.png[/IMG]
         [/FONT][/CENTER]
         [TABLE="class: outer_border, width: 900, align: center"]
         [TR="bgcolor: #FFFFFF"]
         [TD][TABLE="width: 890, align: center"]
         [TR="bgcolor: #3c67b3"]
         [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]פורום השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
         [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]מנהל השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
         [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]משתמש השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
         [/TR]
         [TR="bgcolor: #FFFFFF"]
         [TD="bgcolor: #FFFFFF, align: center"][FONT=open sans hebrew][SIZE=5][U][B][URL="${forum.href}"][COLOR=#3c67b3]${forum.name}[/COLOR][/URL][/B][COLOR=#3c67b3]
         [/COLOR][/U][/SIZE][COLOR=#3c67b3][SIZE=4]${forum.reason}[/SIZE][/COLOR][/FONT][/TD]
         [TD="bgcolor: #e9f5f8, align: center"][FONT=open sans hebrew][U][URL="${manager.profile}"][COLOR=#3c67b3][SIZE=5][B]${manager.name}[/B][/SIZE][/COLOR][/URL][COLOR=#3c67b3]
         [/COLOR][/U][COLOR=#3c67b3][SIZE=4]${manager.reason}[/SIZE][/COLOR][/FONT][/TD]
         [TD="bgcolor: #FFFFFF, align: center"][FONT=open sans hebrew][SIZE=5][U][B][URL="${user.profile}"][COLOR=#3c67b3]${user.name}[/COLOR][/URL][COLOR=#3c67b3]
         [/COLOR][/B][/U][/SIZE][COLOR=#3c67b3][SIZE=4]${user.reason}[/SIZE][/COLOR][/FONT][/TD]
         [/TR]
         [/TABLE]
         [/TD]
         [/TR]
         [/TABLE]`;
        },
    },
    {
        name: 'מחשבים ואינטרנט',
        id: 3,
        generate: (forum, user, manager) => {
            return `[CENTER][FONT=&amp][IMG]https://i.imagesup.co/images2/9a16efff9ceb49a223e1d46cffcaba8439363754.png[/IMG]
        [/FONT][COLOR=#333333][FONT=&amp][COLOR=#333333]
        [/COLOR][/FONT][/COLOR][/CENTER]
        [COLOR=#333333][FONT=Arial][COLOR=#333333][FONT=arial][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table, width: 700, align: center"]
        [TR="bgcolor: #3260D8"]
        [TD="align: center"][FONT=&amp][COLOR=#ffffff][SIZE=4][B]מנהל השבוע[/B][/SIZE][/COLOR][/FONT][/TD]
        [TD="align: center"][FONT=&amp][COLOR=#ffffff][SIZE=4][B]משתמש השבוע[/B][/SIZE][/COLOR][/FONT][/TD]
        [TD="align: center"][FONT=&amp][COLOR=#ffffff][SIZE=4][B]פורום השבוע[/B][/SIZE][/COLOR][/FONT][/TD]
        [/TR]
        [TR]
        [TD="align: center"][B][URL="${manager.profile}"][COLOR=#ff0000]${manager.name}[/COLOR][/URL][/B][FONT=&amp][SIZE=2]
        ${manager.reason}
        [/SIZE][/FONT][/TD]
        [TD="align: center"][B][URL="${user.profile}"][COLOR=#daa520]${user.name}[/COLOR][/URL][/B][FONT=&amp][SIZE=2]
        ${user.r}[/SIZE][/FONT][/TD]
        [TD="align: center"][B][URL="${forum.href}"][COLOR=#daa520]${forum.name}[/COLOR][/URL]
        [/B]${forum.reason}[/TD]
        [/TR]
        [/TABLE]
        [/FONT][/COLOR][/FONT][/COLOR][CENTER][COLOR=#333333][FONT=Arial][COLOR=#333333][FONT=arial]
        
        [/FONT][/COLOR][/FONT][/COLOR][/CENTER]`;
        },
    },
    {
        name: 'טכנולוגיה',
        id: 162,
        generate: (forum, user, manager) => {
            return `[CENTER][FONT=open sans hebrew][IMG]https://i.imagesup.co/images2/0ff1af6fa4549bd91e6f1a030f05665364273e0e.png[/IMG][COLOR=#333333]
        [/COLOR][COLOR=#009999] [U][B][SIZE=4]משתמש, מנהל ופורום השבוע בקטגוריית טכנולוגיה:[/SIZE][/B][/U][/COLOR][COLOR=#333333]
        
        [/COLOR][/FONT][COLOR=#333333][FONT=arial][TABLE="class: cms_table, width: 950, align: center"]
        [TR]
        [TD][FONT=open sans hebrew][COLOR=#333333][FONT=arial][FONT=open sans hebrew][IMG]https://i.imagesup.co/images2/14616055bacfe549c84926ba524ef67496efb147.png[/IMG][/FONT][/FONT][/COLOR][/FONT]
        
        
        [FONT=open sans hebrew][SIZE=3][B][COLOR=#FF0000][FONT=Helvetica][B][URL="${manager.profile}"][COLOR=red][B]${manager.user}[/B][/COLOR][/URL]
        [/B][/FONT][/COLOR]
        [/B]${manager.reason}[/SIZE]
        
        
        [/FONT][/TD]
        [TD][FONT=open sans hebrew][COLOR=#333333][FONT=arial][FONT=open sans hebrew][IMG]https://i.imagesup.co/images2/a84d98eb85a917c7c99582e9956dcdfe7cdd3585.png[/IMG][/FONT][/FONT][/COLOR]
        [/FONT][COLOR=#333333][FONT=arial][FONT=open sans hebrew][URL="https://www.fxp.co.il/member.php?u=1015565"][SIZE=3][B][COLOR=#000000]
        [/COLOR][/B][/SIZE][/URL][/FONT][/FONT][/COLOR][COLOR=#333333][FONT=arial][FONT=open sans hebrew][URL="${user.href}"][SIZE=3][B][COLOR=#000000][COLOR=#2BB1E2][FONT=Helvetica][B]${user.name}[/B][/FONT][/COLOR][/COLOR][/B][/SIZE][/URL]
        [/FONT][/FONT][/COLOR]
        [SIZE=3][COLOR=#333333][FONT=arial][FONT=open sans hebrew]${user.reason}[/FONT][/FONT][/COLOR][/SIZE][/TD]
        [TD][FONT=open sans hebrew][COLOR=#333333][FONT=arial][FONT=open sans hebrew][IMG]https://i.imagesup.co/images2/7474106bea1685448c2823eef8c3c22ccdd4dfbd.png[/IMG][/FONT][/FONT][/COLOR][/FONT]
        [FONT=open sans hebrew][COLOR=#daa520][SIZE=3][B]
        [URL="${forum.href}"]${forum.name}
        [/URL][/B][/SIZE][/COLOR]
        [SIZE=3]${forum.reason}
        
        [/SIZE][/FONT][/TD]
        [/TR]
        [/TABLE]
        [/FONT][/COLOR]
        [/CENTER]`;
        },
    },
    {
        name: 'אנדרואיד',
        id: 3821,
        generate: (forum, user, manager) => {
            return `[SIZE=3][CENTER][B][COLOR=#2fa52d][FONT=&amp][IMG]https://i.imagesup.co/images2/8be817bc38ceb40529e2051139833136777d7723.png[/IMG]
        [/FONT][/COLOR][COLOR=#85b329] [SIZE=5][U][FONT=open sans hebrew]מנהל, משתמש ופורום השבוע[/FONT][/U][/SIZE][/COLOR][/B]
        [/CENTER]
        [/SIZE][SIZE=3][COLOR=#333333][CENTER]
        [/CENTER]
        [/COLOR][/SIZE][COLOR=#333333][CENTER][FONT=arial][TABLE="class: cms_table_cms_table, width: 500, align: center"]
        [TR="bgcolor: #85B329"]
        [TD][FONT=open sans hebrew][SIZE=3][COLOR=#ffffff][B]מנהל השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD][COLOR=#333333][FONT=arial][B][COLOR=#ffffff][FONT=open sans hebrew][SIZE=3]משתמש השבוע[/SIZE][/FONT][/COLOR][/B][/FONT][/COLOR][/TD]
        [TD][B][COLOR=#ffffff][FONT=open sans hebrew][SIZE=3]פורום השבוע[/SIZE][/FONT][/COLOR][/B][/TD]
        [/TR]
        [TR]
        [TD][FONT=open sans hebrew][B][COLOR=#ff0000][URL="${manager.profile}"]${manager.name}
        [/URL][/COLOR][/B][COLOR=#ff0000][B]
        [SIZE=4]${manager.reason}
        [/SIZE]
        [/B][/COLOR][/FONT][/TD]
        [TD][FONT=open sans hebrew][B][COLOR=#3e3e3e][URL="${user.profile}"]${user.name}
        [/URL][/COLOR][/B][COLOR=#3e3e3e][B]
        [SIZE=4]${user.reason}
        [/SIZE]
        [/B][/COLOR][/FONT][/TD]
        [TD][FONT=open sans hebrew][SIZE=3][URL="${forum.href}"][COLOR=#008080][B]${forum.name}[/B][/COLOR][/URL]
        [/SIZE][/FONT][COLOR=#333333][FONT=arial][FONT=open sans hebrew][SIZE=3]${forum.reason}[/SIZE][/FONT][/FONT][/COLOR][/TD]
        [/TR]
        [/TABLE]
        [/FONT][/CENTER]
        [/COLOR]`;
        },
    },
    {
        name: 'Apple',
        id: 3822,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://images.weserv.nl/?url=i.imgur.com%2FlT1lr0g.png[/IMG][FONT=&amp]
            [IMG]https://images.weserv.nl/?url=i.imgur.com/P32B9Zv.png[/IMG]
            
            
            [/FONT][/CENTER]
            [TABLE="width: 890, align: center"]
            [TR]
            [TD="bgcolor: #f6f6f6"][TABLE="class: grid, width: 865, align: center"]
            [TR]
            [TD="bgcolor: #75d4d5, align: center"][FONT=open sans hebrew][B][COLOR=#ffffff][SIZE=5][IMG]https://i.imagesup.co/images2/81076c943c1fa1318c861fa7629b10f5f9bd7d11.png[/IMG][/SIZE][/COLOR][/B][/FONT][/TD]
            [TD="bgcolor: #75d4d5, align: center"][FONT=open sans hebrew][B][COLOR=#ffffff][SIZE=5][IMG]https://i.imagesup.co/images2/545a0576f6ceee8f5ea45fd1582ffe23e1c7d036.png[/IMG][/SIZE][/COLOR][/B][/FONT][/TD]
            [TD="bgcolor: #75d4d5, align: center"][FONT=open sans hebrew][SIZE=5][B][COLOR=#ffffff][IMG]https://i.imagesup.co/images2/88dbee3740c6d13cbfbcc99099be6b2f9de0b4ba.png[/IMG][/COLOR][/B][/SIZE][/FONT][/TD]
            [/TR]
            [TR]
            [TD="bgcolor: #FFFFFF, align: center"][FONT=open sans hebrew][SIZE=3][SIZE=4][B][COLOR=#ff0000][URL="${manager.profile}"]${manager.user}[/URL] 
            [/COLOR][/B][/SIZE]
            [COLOR=#008080]${manager.reason}/COLOR][/SIZE][/FONT][/TD]
            [TD="bgcolor: #FFFFFF, align: center"][FONT=open sans hebrew][SIZE=3][SIZE=4][B][URL="${user.profile}"]${user.name}[/URL]
            [/B][/SIZE]
            [COLOR=#008080]${user.reason}[/COLOR][/SIZE][/FONT][/TD]
            [TD="bgcolor: #FFFFFF, align: center"][B][SIZE=4][FONT=open sans hebrew][COLOR=#daa520][URL="${forum.href}"]${forum.name}[/URL][/COLOR]
            [/FONT][/SIZE][/B][FONT=open sans hebrew][SIZE=3]
            [COLOR=#008080]${forum.reason}/COLOR][/SIZE][/FONT][/TD]
            [/TR]
            [/TABLE]
            [/TD]
            [/TR]
            [/TABLE]
            `;
        },
    },
    {
        name: 'תכנות ובניית אתרים',
        id: 255,
        generate: (forum, user, manager) => {
            return `[CENTER][COLOR=#333333][FONT=&amp][COLOR=#333333][IMG]https://i.imagesup.co/images2/b42d0cfa6981100e20ff2115efcd2539888341c6.png[/IMG]


            [/COLOR][/FONT][/COLOR][/CENTER]
            
            [COLOR=#333333][COLOR=#333333][FONT=&amp][COLOR=#333333][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table, width: 800, align: center"]
            [TR="bgcolor: #34B7E2"]
            [TD][SIZE=4][COLOR=#ffffff][B]מנהל השבוע[/B][/COLOR][/SIZE][/TD]
            [TD][SIZE=4][COLOR=#ffffff][B]משתמש השבוע[/B][/COLOR][/SIZE][/TD]
            [TD][SIZE=4][COLOR=#ffffff][B]פורום השבוע[/B][/COLOR][/SIZE][/TD]
            [/TR]
            [TR]
            [TD][COLOR=#ff0000][B]${manager.name}
            
            ${manager.reason}[/B][/COLOR][/TD]
            [TD][B][URL="${user.profile}"][COLOR=#000000]${user.name}[/COLOR][/URL][/B]
            
            ${user.reason}
            [COLOR=red]
            [/COLOR][/TD]
            [TD][URL="${forum.href}"]${forum.name}[/URL]
            
            ${forum.reason}[/TD]
            [/TR]
            [/TABLE]
            
            [/COLOR][/FONT][/COLOR][/COLOR]`;
        },
    },
    {
        name: 'חומרה',
        id: 503,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://i.imagesup.co/images2/d6f1d8fe49240fc949ab3d7faa2766422a2d32e0.png[/IMG][FONT=open sans hebrew]

        [/FONT][/CENTER]
        [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
        [TR="bgcolor: #0690d0"]
        [TD][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
        [TR="bgcolor: #146197"]
        [TD="align: center"][COLOR=#ffffff][SIZE=5][FONT=open sans hebrew][B]מנהל/ת השבוע [IMG]https://i.imagesup.co/images2/b01cb3dcc7f0d044d1607466c06aa4d3abfd318d.png[/IMG][/B][/FONT][/SIZE][/COLOR][/TD]
        [TD="align: center"][SIZE=5][FONT=open sans hebrew][COLOR=#ffffff][B]משתמש/ת השבוע [/B][/COLOR][/FONT][/SIZE][SIZE=5][FONT=open sans hebrew][COLOR=#ffffff][B][IMG]https://i.imagesup.co/images2/b01cb3dcc7f0d044d1607466c06aa4d3abfd318d.png[/IMG][/B][/COLOR][/FONT][/SIZE][/TD]
        [TD="align: center"][SIZE=5][FONT=open sans hebrew][COLOR=#ffffff][B]פורום השבוע [/B][/COLOR][/FONT][/SIZE][SIZE=5][FONT=open sans hebrew][COLOR=#ffffff][B][IMG]https://i.imagesup.co/images2/b01cb3dcc7f0d044d1607466c06aa4d3abfd318d.png[/IMG][/B][/COLOR][/FONT][/SIZE][/TD]
        [/TR]
        [TR="bgcolor: #E2A850"]
        [TD="align: center"][URL="${manager.profile}"][B][SIZE=3][COLOR=#ff0000]${manager.name}[/COLOR][/SIZE][/B][/URL][/TD]
        [TD="align: center"][URL="${user.profile}"][B][SIZE=3]${user.name}[/SIZE][/B][/URL][/TD]
        [TD="align: center"][URL="${forum.href}"][COLOR=#008080][B][SIZE=3]${forum.name}[/SIZE][/B][/COLOR][/URL][/TD]
        [/TR]
        [TR="bgcolor: #FFFFFF"]
        [TD="align: center"]${manager.reason}[/TD]
        [TD="align: center"]${user.reason}[/TD]
        [TD="align: center"]${forum.reason}[/TD]
        [/TR]
        [/TABLE]
        [/TD]
        [/TR]
        [/TABLE]
        [CENTER][SIZE=3][FONT=open sans hebrew][COLOR=#006699][B]
        בברכה,
        הנהלת חומרה. [IMG]https://static.fcdn.co.il/smilies2/flowers.gif[/IMG][/B][/COLOR][/FONT][/SIZE]
        [/CENTER]`;
        },
    },
    {
        name: 'אוהדים בחו"ל',
        id: 9,
        generate: (forum, user, manager) => {
            return `[CENTER][FONT=&amp][FONT=arial][IMG]https://i.imagesup.co/images2/29a03e16abcdab13cb1e779ba6c55a6bdd8a40c4.png[/IMG]


            [/FONT][/FONT][FONT=&amp][FONT=arial][TABLE="class: cms_table_cms_table_cms_table, width: 700, align: center"]
            [TR="bgcolor: #000080"]
            [TD="align: center"][COLOR=#ffffff][FONT=tahoma][SIZE=4][B]מנהל השבוע
            [/B][/SIZE][/FONT][/COLOR][URL="${manager.profile}"][COLOR=#ff0000][FONT=tahoma][SIZE=4][B]${manager.name}[/B][/SIZE][/FONT][/COLOR][/URL][/TD]
            [TD="align: center"][COLOR=#ffffff][SIZE=4][FONT=tahoma][B]משתמש השבוע
            [/B][/FONT][/SIZE][/COLOR][URL="${user.profile}"][COLOR=#ffffff][SIZE=4][FONT=tahoma][B]${user.name}[/B][/FONT][/SIZE][/COLOR][/URL][/TD]
            [TD="align: center"][COLOR=#ffffff][SIZE=4][FONT=tahoma][B]פורום השבוע
            [/B][/FONT][/SIZE][/COLOR][URL="${forum.href}"][COLOR=#daa520][SIZE=4][FONT=tahoma][B]${forum.name}[/B][/FONT][/SIZE][/COLOR][/URL][/TD]
            [/TR]
            [TR]
            [TD="align: center"][FONT=tahoma][SIZE=3][COLOR=#ff0000][B]${manager.reason}[/B][/COLOR][/SIZE]
            
            
            [/FONT][/TD]
            [TD="align: center"][SIZE=3][FONT=tahoma][B]${user.reason}[/B][/FONT]
            [/SIZE][/TD]
            [TD="align: center"][FONT=tahoma][SIZE=3][COLOR=#daa520][B]${forum.reason}[/B][/COLOR][/SIZE][/FONT][/TD]
            [/TR]
            [/TABLE]
            
            [/FONT][/FONT][/CENTER]`;
        },
    },
    {
        name: 'אוהדים בארץ',
        id: 172,
        generate: (forum, user, manager) => {
            return `[CENTER][COLOR=#333333][FONT=arial]
            [IMG]https://images.weserv.nl/?url=i.imgur.com%2FiwIz7lR.png[/IMG]
             
            [/FONT][/COLOR][/CENTER]
            [COLOR=#333333][CENTER][COLOR=#333333][FONT=arial][FONT=arial][TABLE="class: cms_table_cms_table_cms_table_cms_table_outer_border, width: 925, align: center"]
            [TR]
            [TD="bgcolor: #3399FF, align: center"][FONT=almoni-dl][U][COLOR=#ffffff][SIZE=4][B]מנהל השבוע[/B][/SIZE][/COLOR][/U]
            [/FONT][/TD]
            [TD="bgcolor: #3399FF, align: center"][U][COLOR=#ffffff][SIZE=4][B]פורום השבוע[/B][/SIZE][/COLOR][/U][/TD]
            [TD="bgcolor: #3399FF, align: center"][FONT=almoni-dl][U][COLOR=#ffffff][SIZE=4][B]משתמש השבוע[/B][/SIZE][/COLOR][/U]
            [/FONT][/TD]
            [/TR]
            [TR]
            [TD="align: center"][SIZE=3][COLOR=#333333][FONT=tahoma][COLOR=#ff0000][B][URL="${manager.profile}"]${manager.name}[/URL][/B][/COLOR][/FONT][/COLOR][/SIZE]
            [COLOR=#333333][FONT=tahoma]${manager.reason}[/FONT][/COLOR][/TD]
            [TD="align: center"][COLOR=#daa520][FONT=tahoma][B][URL="${user.profile}"]${user.name}[/URL][/B][/FONT][/COLOR]
            [SIZE=2][COLOR=#333333][FONT=tahoma]${user.reason}[/FONT][/COLOR][/SIZE][/TD]
            [TD="align: center"][SIZE=3][FONT=tahoma][B][URL="${forum.href}"]${forum.name}[/URL][/B][/FONT]
            [/SIZE][COLOR=#333333][FONT=tahoma]${forum.reason}
            [/FONT][/COLOR][/TD]
            [/TR]
            [/TABLE]
            [/FONT][/FONT][/COLOR]
            [/CENTER]
            [/COLOR]`;
        },
    },
    {
        name: 'ספורט ובריאות',
        id: 12,
        generate: (forum, user, manager) => {
            return `[CENTER][FONT=&amp][IMG]https://i.imagesup.co/images2/f919e707473619354c2f3d247a8411b2f1076a27.png[/IMG]

            [B][SIZE=6][COLOR=#0099ff]מנהל, משתמש ופורום השבוע -13.8.22[/COLOR][/SIZE][/B]
            [/FONT][/CENTER]
            [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
            [TR="bgcolor: #0099FF"]
            [TD][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
            [TR="bgcolor: #0E5BA7"]
            [TD="align: center"][FONT=&amp][SIZE=5][COLOR=#ffffff][B]מנהל השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
            [TD="align: center"][SIZE=4][B]משתמש השבוע[/B][/SIZE][/TD]
            [TD="align: center"][SIZE=4][B]פרום השבוע[/B][/SIZE][/TD]
            [/TR]
            [TR]
            [TD="align: center"][URL="${manager.profile}"][COLOR=#ff0000][FONT=&amp][SIZE=2][B]${manager.name}[/B][/SIZE][/FONT][/COLOR][/URL]
           
           ${manager.reason}[/TD]
            [TD="align: center"][URL="${user.profile}"]${user.name}[/URL]

            ${user.reason}[/TD]
            [TD="align: center"][URL="${forum.href}"]${forum.name}[/URL]
            ${forum.reason}
            [/TD]
            [/TR]
            [/TABLE]
            [/TD]
            [/TR]
            [/TABLE]
            [CENTER]
            [SIZE=3][FONT=&amp][COLOR=#006699][B]בברכה,
            הנהלת ספורט ובריאות. [COLOR=#D7DADC][IMG]https://static.fcdn.co.il/smilies2/flowers.gif[/IMG][/COLOR]
            [/B][/COLOR][/FONT][/SIZE][/CENTER]`;
        },
    },
    {
        name: 'אנימה וסרטים',
        id: 322,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://i.imagesup.co/images2/3135ad21b460c360a63e42b2d7f389b5b59d4cd3.png[/IMG]
            [TABLE="class: grid, width: 700, align: center"]
            [TR="bgcolor: #FF9933"]
            [TD][SIZE=4][FONT=open sans hebrew][B]מנהל השבוע[/B][/FONT][/SIZE][/TD]
            [TD][SIZE=4][FONT=open sans hebrew][B]משתמש השבוע[/B][/FONT][/SIZE][/TD]
            [TD][SIZE=4][FONT=open sans hebrew][B]פורום השבוע[/B][/FONT][/SIZE][/TD]
            [/TR]
            [TR]
            [TD][URL="${manager.profile}"][COLOR=#ff0000][SIZE=3][B][FONT=open sans hebrew]${manager.name}[/FONT][/B][/SIZE][/COLOR][/URL]
            [FONT=open sans hebrew][B]${manager.reason}[/B][/FONT][/TD]
            [TD][URL="${user.profile}"][COLOR=#00ffff][SIZE=3][FONT=open sans hebrew][B]${user.name}[/B][/FONT][/SIZE][/COLOR][/URL]
            [FONT=open sans hebrew][B]${user.reason}[/B][/FONT][/TD]
            [TD][URL="${forum.href}"][SIZE=3][FONT=open sans hebrew][B][COLOR=#daa520]${forum.name}[/COLOR][/B][/FONT][/SIZE][/URL][URL="https://www.fxp.co.il/forumdisplay.php?f=127"][SIZE=3][FONT=open sans hebrew][B][COLOR=#daa520]ה[/COLOR][/B][/FONT][/SIZE][/URL]
            [FONT=open sans hebrew][B]${forum.reason}[/B][/FONT][/TD]
            [/TR]
            [/TABLE]
            
            [/CENTER]`;
        },
    },
    {
        name: 'סדרות טלוויזיה',
        id: 167,
        generate: (forum, user, manager) => {
            return `[CENTER][SIZE=7]סדרות טלוויזיה [/SIZE][/CENTER]
            [TABLE="width: 900, align: center"]
            [TR="bgcolor: #76ACE4"]
            [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]מנהל השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
            [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]משתמש השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
            [TD="align: center"][COLOR=#ffffff][SIZE=6][B][FONT=&amp]פורום השבוע:[/FONT][/B][/SIZE][/COLOR][/TD]
            [/TR]
            [TR]
            [TD="align: center"][B][URL="${manager.profile}"][B][COLOR=#FF8600]${manager.name}[/COLOR][/B][/URL][/B][/TD]
            [TD="align: center"][B][URL="${user.profile}"][B][COLOR=#4b0082]${user.name}[/COLOR][/B][/URL][/B][/TD]
            [TD="align: center"][URL="${forum.href}"][B][SIZE=5][COLOR=#daa520]${forum.name}[/COLOR][/SIZE][/B][/URL][/TD]
            [/TR]
            [TR]
            [TD="align: center"]${manager.reason}[/TD]
            [TD="align: center"]${user.reason}[/TD]
            [TD="align: center"]${forum.reason}[/TD]
            [/TR]
            [/TABLE]`;
        },
    },
    {
        name: 'משחקי פעולה',
        id: 13,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://images.weserv.nl/?url=i.imgur.com/hhx0Wkk.png[/IMG]
         
    [FONT=almoni-dl]
    [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_grid, width: 925, align: center"]
    [TR]
    [TD="bgcolor: #6699FF"][TABLE="class: cms_table_cms_table_cms_table, width: 925, align: center"]
    [TR]
    [TD="bgcolor: #3366FF, align: center"][COLOR=#ffffff][B]מנהל השבוע[/B][/COLOR][/TD]
    [TD="bgcolor: #3366FF, align: center"][B][COLOR=#ffffff]משתמש השבוע[/COLOR][/B][/TD]
    [TD="bgcolor: #3366FF, align: center"][B][COLOR=#ffffff]פורום השבוע[/COLOR][/B][/TD]
    [/TR]
    [TR]
    [TD="bgcolor: #FFFFFF, align: center"][COLOR=#43cbdb][B][URL="${manager.profile}"]${manager.name}[/URL]
    [/B][/COLOR]${manager.reason}[/TD]
    [TD="bgcolor: #FFFFFF, align: center"][URL="${user.profile}"][COLOR=#43cbdb][B]${user.name}[/B][/COLOR][/URL]
    ${user.reason}[/TD]
    [TD="bgcolor: #FFFFFF, align: center"][URL="${forum.href}"][COLOR=#cc9900][B]${forum.name}[/B][/COLOR][/URL]
    ${forum.reason}[/TD]
    [/TR]
    [/TABLE]
    [/TD]
    [/TR]
    [/TABLE]
    [/FONT]
    [/CENTER]`;
        },
        generateMmoh: (user, manager) => {
            return `CENTER][IMG]https://images.weserv.nl/?url=i.imgur.com/hhx0Wkk.png[/IMG]
 
            [FONT=almoni-dl]
            [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_grid, width: 925, align: center"]
    [TR]
    [TD="bgcolor: #6699FF"][TABLE="class: cms_table_cms_table_cms_table, width: 925, align: center"]
    [TR]
    [TD="bgcolor: #3366FF, align: center"][COLOR=#ffffff][B]משתמש החודש[/B][/COLOR][/TD]
    [TD="bgcolor: #3366FF, align: center"][B][COLOR=#ffffff]מנהל החודש[/COLOR][/B][/TD]
    [/TR]
    [TR]
    [TD="bgcolor: #FFFFFF, align: center"][B][URL="${user.profile}"][COLOR=#3399ff]${user.name}[/COLOR][/URL][/B]
    ${user.reason}[/TD]
    [TD="bgcolor: #FFFFFF, align: center"][B][URL="${manager.profile}"][COLOR=#daa520]${manager.name}[/COLOR][/URL][/B]
    ${manager.reason}[/TD]
    [/TR]
    [/TABLE]
    [/TD]
    [/TR]
    [/TABLE]
    [/FONT]
    [/CENTER]`;
        },
    },
    {
        name: 'משחקי תפקידים',
        id: 141,
        generate: (forum, user, manager) => {
            return `[CENTER][IMG]https://i.imagesup.co/images2/90bc29311a15d3230913188613f20b7d966e5369.png[/IMG]

        [/CENTER]
        [TABLE="class: cms_table, width: 950, align: center"]
        [TR="bgcolor: #346C3D"]
        [TD="align: center"][IMG]https://images.weserv.nl/?url=i.imgur.com/5Wgzwzg.png[/IMG][/TD]
        [TD="align: center"][IMG]https://images.weserv.nl/?url=i.imgur.com/GIZ2FBM.png[/IMG][/TD]
        [TD="align: center"][IMG]https://images.weserv.nl/?url=i.imgur.com/HdTntuE.png[/IMG][/TD]
        [/TR]
        [TR]
        [TD="align: center"][FONT=tahoma][B][URL="${manager.profile}"][COLOR=#ff0000]${manager.name}[/COLOR][/URL][/B]
        
        ${manager.reason}[/FONT][/TD]
        [TD="align: center"][FONT=tahoma][URL="${user.profile}"][B][SIZE=2][COLOR=#000000]${user.name}[/COLOR][/SIZE][/B][/URL]
        
        [/FONT][FONT=tahoma]${user.reaosn}[/FONT][/TD]
        [TD="align: center"][FONT=tahoma][B][URL="${forum.href}"][COLOR=#daa520]${forum.name}[/COLOR][/URL]
        
        [/B]${forum.reason}[/FONT][/TD]
        [/TR]
        [/TABLE]`;
        },
    },
    {
        name: 'משחקי אסטרטגיה',
        id: 494,
        generate: (forum, user, manager) => {
            return `[CENTER][CENTER][CENTER][IMG]https://i.imagesup.co/images2/bcbe1cb5a053e71c8a9455db7d88e0849cdd74ef.png[/IMG][FONT=open sans hebrew]
        [COLOR=#000080][B][SIZE=6]מנהל, משתמש ופורום השבוע [/SIZE][/B][/COLOR]
        [/FONT][/CENTER]
        [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
        [TR="bgcolor: #0099FF"]
        [TD][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
        [TR="bgcolor: #0E5BA7"]
        [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]מנהל השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]משתמש השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]פורום השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
        [/TR]
        [TR]
        [B]
        [TD="align: center"][URL="${manager.profile}"][SIZE=3]${manager.name}[/SIZE][/URL]
        [B][COLOR=#000000][SIZE=3]${manager.reason}[/SIZE][/COLOR][/B][/TD]
        [TD="align: center"][URL="${user.profile}"][SIZE=3]${user.name}[/SIZE][/URL]
        [B][COLOR=#000000][SIZE=3]${user.reason}[/SIZE][/COLOR][/B][/TD]
        [TD="align: center"][B][URL="${forum.href}"][SIZE=3]${forum.name}[/SIZE][/URL][/B]
        [B][SIZE=3]${forum.reason}[/SIZE][/B][/TD]
        [/TR]
        [/TABLE]
        [/TD]
        [/B]
        [/TR]
        [/TABLE]
        [CENTER][SIZE=3][FONT=open sans hebrew][COLOR=#006699][B]בברכה,
        הנהלת משחקי אסטרטגיה. [IMG]https://static.fcdn.co.il/smilies2/flowers.gif[/IMG][/B][/COLOR][/FONT][/SIZE]
        [/CENTER]
        [/CENTER]
        [/CENTER]`;
        },
    },
    {
        name: 'גיימינג',
        id: 134,
        generate: (forum, user, manager) => {
            return `[CENTER][SIZE=3][FONT=Open Sans Hebrew]​[/FONT][/SIZE][IMG]https://i.imagesup.co/images2/ab2de25bd75d032ea4f50b10cf17ae64ce855db4.jpg[/IMG]
        [COLOR=#333333][FONT=almoni-dl][COLOR=#404853][FONT=almoni-dl]​​
        [/FONT][/COLOR][COLOR=#404853][FONT=arial][TABLE="class: cms_table_cms_table_cms_table_cms_table, width: 700, align: center"]
        [TR]
        [TD="bgcolor: #404853"][TABLE="class: cms_table_cms_table, width: 900, align: center"]
        [TR]
        [TD="bgcolor: #797E86"][FONT=almoni-dl][SIZE=3][COLOR=#ffffff][B]מנהל השבוע[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD="bgcolor: #797E86"][FONT=almoni-dl][SIZE=3][B][COLOR=#ffffff]משתמש השבוע[/COLOR][/B][/SIZE][/FONT][/TD]
        [TD="bgcolor: #797E86"][FONT=almoni-dl][SIZE=3][B][COLOR=#ffffff]פורום השבוע[/COLOR][/B][/SIZE][/FONT][/TD]
        [/TR]
        [TR]
        [TD="bgcolor: #FFFFFF"][FONT=open sans hebrew][URL="${manager.profile}"][SIZE=4]    [B][COLOR=#ff0000]${manager.name}[/COLOR][/B]
        [/SIZE][/URL][SIZE=3]${manager.reason}[/SIZE][/FONT][/TD]
        [TD="bgcolor: #FFFFFF"][B][SIZE=3][FONT=open sans hebrew][URL="${user.profile}"]${user.name}[/URL]
        [/FONT][/SIZE][/B][SIZE=3][FONT=open sans hebrew]${user.reason}[/FONT][/SIZE][/TD]
        [TD="bgcolor: #FFFFFF"][URL="${forum.href}"][B][SIZE=4][FONT=open sans hebrew][COLOR=#0000ff]${forum.name}[/COLOR][/FONT][/SIZE][/B][/URL]
        [SIZE=3][FONT=open sans hebrew]${forum.reason}[/FONT][/SIZE][/TD]
        [/TR]
        [/TABLE]
        [/TD]
        [/TR]
        [/TABLE]
        
        
        [/FONT][/COLOR]
        [/FONT][/COLOR][/CENTER]`;
        },
    },
    {
        name: 'קונסולות',
        id: 943,
        generate: (forum, user, manager) => {
            return `[CENTER][FONT=open sans hebrew][IMG]https://i.imagesup.co/images2/757b9e6eb9b1092845b6402100d941893ab05884.png[/IMG]
        [B][SIZE=6][COLOR=#0099ff]מנהל, משתמש ופורום השבוע - 12.08.2022
        [/COLOR][/SIZE][/B]
        [/FONT][/CENTER]
        [TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
        [TR="bgcolor: #0099FF"]
        [TD][TABLE="class: cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_cms_table_XXX, align: center"]
        [TR="bgcolor: #0E5BA7"]
        [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]מנהל השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]משתמש השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
        [TD="align: center"][FONT=open sans hebrew][SIZE=5][COLOR=#ffffff][B]פורום השבוע:[/B][/COLOR][/SIZE][/FONT][/TD]
        [/TR]
        [TR]
        [TD="align: center"][FONT=open sans hebrew][URL="${manager.profile}"]${manager.name}[/URL]
        ${manager.reason}[/FONT][/TD]
        [TD="align: center"][FONT=open sans hebrew][URL="${user.profile}"]${user.profile}[/URL]
        ${user.reason}[/FONT][/TD]
        [TD="align: center"][FONT=open sans hebrew][URL="${forum.href}"]${forum.name}[/URL]
        ${forum.reason}[/FONT][/TD]
        [/TR]
        [/TABLE]
        [/TD]
        [/TR]
        [/TABLE]
        [CENTER][FONT=open sans hebrew][SIZE=3][COLOR=#006699][B]
        בברכה,
        הנהלת קונסולות [IMG]https://static.fcdn.co.il/smilies2/flowers.gif[/IMG][/B][/COLOR][/SIZE][/FONT][/CENTER]`;
        },
    },
];

export default categories;
