export default function mainGenFunc(forum, user, manager) {
    console.log(manager.name, manager.reason, manager.profile);
    console.log(forum.name, forum.reason, forum.link);
    console.log(user.name, user.profile, user.reason);
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
[TD="bgcolor: #FFFFFF, align: center"][URL="${forum.link}"][COLOR=#cc9900][B]${forum.name}[/B][/COLOR][/URL]
${forum.reason}[/TD]
[/TR]
[/TABLE]
[/TD]
[/TR]
[/TABLE]
[/FONT]
[/CENTER]`;
}
