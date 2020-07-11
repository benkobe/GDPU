//接收登录页面的用户名
var unstr = location.search.substr(1);
var arr = unstr.split('=');
var client = document.querySelector('.client');
client.innerHTML = arr[1] + "    <strong>欢迎您</strong>"

//图片轮播
var cs = 1;
setInterval(turn_pic, 5000);

function turn_pic() {
    if (cs === 1) {
        r.className = 'center_cha bgi_three';
        c.className = 'left_cha bgi_one';
        l.className = 'right_cha bgi_two';
        cs = 2;
        for (var i = 0; i < point.children.length; i++) {
            point.children[i].className = '';
            point.children[2].className = 'current';
        }
    } else if (cs === 2) {
        r.className = 'left_cha bgi_three';
        c.className = 'right_cha bgi_one';
        l.className = 'center_cha bgi_two';
        cs = 3;
        for (var i = 0; i < point.children.length; i++) {
            point.children[i].className = '';
            point.children[0].className = 'current';
        }
    } else if (cs === 3) {
        r.className = 'right_cha bgi_three';
        c.className = 'center_cha bgi_one';
        l.className = 'left_cha bgi_two';
        cs = 1;
        for (var i = 0; i < point.children.length; i++) {
            point.children[i].className = '';
            point.children[1].className = 'current';
        }
    }

}


//pic动画
var point = document.querySelector('.point');
var pic = document.querySelector('.pic');
var l = document.querySelector('.left_bg');
var c = document.querySelector('.bg');
var r = document.querySelector('.right_bg');

point.children[0].addEventListener('click', function() {
    for (var i = 0; i < point.children.length; i++) {
        point.children[i].className = '';
        point.children[0].className = 'current';
    }
    pic.children[0].className = 'center_cha bgi_two';
    pic.children[1].className = 'left_cha bgi_three z';
    pic.children[2].className = 'right_cha bgi_one z';
})
point.children[1].addEventListener('click', function() {
    for (var i = 0; i < point.children.length; i++) {
        point.children[i].className = '';
        point.children[1].className = 'current';
    }
    pic.children[0].className = 'left_cha bgi_two z';
    pic.children[1].className = 'right_cha bgi_three z';
    pic.children[2].className = 'center_cha bgi_one';
})
point.children[2].addEventListener('click', function() {
    for (var i = 0; i < point.children.length; i++) {
        point.children[i].className = '';
        point.children[2].className = 'current';
    }
    pic.children[0].className = 'right_cha bgi_two z';
    pic.children[1].className = 'center_cha bgi_three';
    pic.children[2].className = 'left_cha bgi_one z';
})

l.addEventListener('click', function() {
    for (var i = 0; i < point.children.length; i++) {
        point.children[i].className = '';
        point.children[0].className = 'current';
    }
    pic.children[0].className = 'center_cha bgi_two';
    pic.children[1].className = 'left_cha bgi_three z';
    pic.children[2].className = 'right_cha bgi_one z';
})
c.addEventListener('click', function() {
    for (var i = 0; i < point.children.length; i++) {
        point.children[i].className = '';
        point.children[1].className = 'current';
    }
    pic.children[0].className = 'left_cha bgi_two z';
    pic.children[1].className = 'right_cha bgi_three z';
    pic.children[2].className = 'center_cha bgi_one';
})
r.addEventListener('click', function() {
    for (var i = 0; i < point.children.length; i++) {
        point.children[i].className = '';
        point.children[2].className = 'current';
    }
    pic.children[0].className = 'right_cha bgi_two z';
    pic.children[1].className = 'center_cha bgi_three';
    pic.children[2].className = 'left_cha bgi_one z';
})


//下拉菜单
// var nav = document.querySelector('.nav');
// var lis = nav.children;
// for (var i = 0; i < lis.length - 3; i++) {
//     lis[i].onmouseover = function() {
//         this.children[1].style.display = 'block';
//         for (var j = 0; j < this.children[1].children.length; j++) {
//             this.children[1].children[j].onmouseover = function() {
//                 this.style.backgroundColor = '#18367e';
//             }
//         }
//         for (var j = 0; j < this.children[1].children.length; j++) {
//             this.children[1].children[j].onmouseout = function() {
//                 this.style.backgroundColor = '#3672e0';
//             }
//         }
//     }
//     lis[i].onmouseout = function() {
//         this.children[1].style.display = 'none';
//     }
// }

//下拉菜单 jQuery
$(".nav>li").hover(function() {
    var index = $(this).index();
    $(".nav ul").eq(index).stop().slideToggle(200);
})
$("#nav li").mouseenter(function() {
    $(this).css("background", "#18367e");
})
$("#nav li").mouseleave(function() {
    $(this).css("background", "#3672e0");
})

//退出登录按钮阴影
var logout_a = document.querySelector('.logout').querySelector('a');
logout_a.onmouseover = function() {
    this.style.boxShadow = '3px 3px 8px #18367e';
}
logout_a.onmouseout = function() {
    this.style.boxShadow = '';
}

//新闻变色
var a = document.querySelectorAll('.news_ul');
for (var j = 0; j < a.length; j++) {
    var news = a[j].querySelectorAll('a');
    for (var i = 0; i < news.length; i++) {
        news[i].onmouseover = function() {
            this.style.color = '#18367e';
        }
        news[i].onmouseout = function() {
            this.style.color = '#333';
        }
    }
}

//放大镜放到与变色效果
var ss = document.querySelector('.sousuo');
ss.onmouseover = function() {
    this.style.fontSize = '26px';
    this.style.color = '#18367e';
}
ss.onmouseout = function() {
    this.style.fontSize = '20px';
    this.style.color = '#fff';
}


//留言区域
var text = document.querySelector('textarea');
var com = document.querySelector('.comment');
var btn = com.querySelector('.com_btn');
var is = document.querySelector('.issue');
var send = document.querySelector('.send');
var shou = document.querySelector('.shou');
var ul = document.querySelector('.alread').querySelector('ul');
var t = document.querySelector('textarea');
btn.onmouseover = function() {
    this.style.boxShadow = '2px 2px 8px #3672e0';
}
btn.onmouseout = function() {
    this.style.boxShadow = '';
}
btn.onclick = function() {
    com.style.display = 'none';
    // is.style.display = 'block';
    $(".issue").slideDown(1000);
    // send.style.display = 'block';
    // shou.style.display = 'block';
    t.style.display = 'block';
    send.className = 'send';
    shou.className = 'shou';
}
send.onmouseover = function() {
    this.style.boxShadow = '2px 2px 8px #3672e0';
}
send.onmouseout = function() {
    this.style.boxShadow = '';
}
shou.onmouseover = function() {
    this.style.boxShadow = '2px 2px 8px #3672e0';
}
shou.onmouseout = function() {
    this.style.boxShadow = '';
}

//留言实时时间
function time() {
    var times = new Date();
    h = times.getHours();
    h = h < 10 ? '0' + h : h;
    m = times.getMinutes();
    m = m < 10 ? '0' + m : m;
    s = times.getSeconds();
    s = s < 10 ? '0' + s : s;
    return h + ':' + m + ':' + s;
}

// send.onclick = function() {
//     if (text.value == '') {
//         alert('请输入内容');
//     } else {
//         var lis = document.createElement('li');
//         ul.insertBefore(lis, ul.children[0]);
//         lis.innerHTML = text.value + '    ' + time() + "<a href='javascript:;'>删除</a>";
//         text.value = '';
//         var as = document.querySelectorAll('a');
//         for (var i = 0; i < as.length; i++) {
//             as[i].onclick = function() {
//                 ul.removeChild(this.parentNode);
//             }
//         }
//     }
// }

//发布评论jQuery做法
$(".send").on("click", function() {
        var li = $("<li></li>");
        li.html($("textarea").val() + "     " + time() + "<a href='javascript:;'>删除</a>");
        $(".alread ul").prepend(li);
        $(".alread ul li").slideDown();
        $("textarea").val("");
    })
    //删除评论jQuery做法
$(".alread ul").on("click", "a", function() {
    $(this).parent().slideUp(function() {
        $(this).remove();
    })
})

shou.onclick = function() {
    // send.style.display = 'none';
    // shou.style.display = 'none';
    send.className = 'send_hui';
    shou.className = 'shou_hui';
    // t.style.display = 'none';
    $(".issue").slideUp(1000);
    // setTimeout("t.style.display='none'", 1000);
    com.style.display = 'block';

}

//鼠标移到图片上，鼠标变为自定义图片ico
var all = document.querySelector('.pic');
all.addEventListener('mousemove', function(e) {
    all.style.cursor = 'url(img/cur.ico),auto';
})

//按s键使搜索框获得焦点
var s = document.querySelector('.search');
document.addEventListener('keyup', function(e) {
    if (e.keyCode === 27) {
        s.focus();
    }
})

//新闻卡片阴影
var news = document.querySelector(".news");
var box = document.querySelector('.box');
var box_center = document.querySelector('.box_center');
var box_right = document.querySelector('.box_right');
box.addEventListener('mouseenter', function() {
    box.style.boxShadow = '10px 10px 20px rgba(3,3,3,0.5)';
    box.className = "box box_z";
    news.className = 'news w news_l';
})
box_center.addEventListener('mouseenter', function() {
    box_center.style.boxShadow = '10px 10px 20px rgba(3,3,3,0.5)';
    box_center.className = "box_center box_z";
    news.className = 'news w news_c';

})
box_right.addEventListener('mouseenter', function() {
    box_right.style.boxShadow = '-10px 10px 20px rgba(3,3,3,0.5)';
    box_right.className = "box_right box_z";
    news.className = 'news w news_r';
})
box.addEventListener('mouseleave', function() {
    box.style.boxShadow = '';
    box.className = "box";
    // news.className = 'news w';
})
box_center.addEventListener('mouseleave', function() {
    box_center.style.boxShadow = '';
    box_center.className = "box_center";
})
box_right.addEventListener('mouseleave', function() {
    box_right.style.boxShadow = '';
    box_right.className = "box_right";
    // news.className = 'news w';
})