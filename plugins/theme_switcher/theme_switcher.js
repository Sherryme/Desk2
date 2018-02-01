
$(function () {

    //此处预定义了背景数据，其实可以用ajax获取
    var themes = [
        {
            "pic": "./plugins/theme_switcher/bg/bg1.jpg",
            "thumb": "./bg/bg1_small.jpg",
            "title": "Win10"
        },

        {
            "pic": "./plugins/theme_switcher/bg/bg12.jpg",
            "thumb": "./bg/bg12_small.jpg",
            "title": "Yuu - Liberate"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg13.jpg",
            "thumb": "./bg/bg13_small.jpg",
            "title": "wlop - 南山南"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg2.jpg",
            "thumb": "./bg/bg2_small.jpg",
            "title": "朦胧"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg3.jpg",
            "thumb": "./bg/bg3_small.jpg",
            "title": "帆船"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg4.jpg",
            "thumb": "./bg/bg4_small.jpg",
            "title": "麦田"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg5.jpg",
            "thumb": "./bg/bg5_small.jpg",
            "title": "萌芽"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg7.jpg",
            "thumb": "./bg/bg7_small.jpg",
            "title": "度假海滩"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg8.jpg",
            "thumb": "./bg/bg8_small.jpg",
            "title": "冬日暖阳"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg9.jpg",
            "thumb": "./bg/bg9_small.jpg",
            "title": "花朵"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg10.jpg",
            "thumb": "./bg/bg10_small.jpg",
            "title": "树梢上的小鸟"
        },
        {
            "pic": "./plugins/theme_switcher/bg/bg11.jpg",
            "thumb": "./bg/bg11_small.jpg",
            "title": "跑车"
        },
    ];

    var theme_area=$("#theme_area");
    theme_area.on('click','.theme_setting',function () {
        var pic=$(this).data('pic');
        Win10_parent.setBgUrl({main:pic});
        //此处你也许想用ajax把修改信息保存到服务器

    });


    themes.forEach(function (t) {
        var theme=$("<a href=\"javascript:;\" data-pic=\""+t.pic+"\" class=\"theme_setting \">\n" +
            "            <div class=\"theme_icon\"><img src=\""+t.thumb+"\"></div>\n" +
            "            <div class=\"theme_text\">"+t.title+"</div>\n" +
            "        </a>");
        theme_area.append(theme)
    });
});