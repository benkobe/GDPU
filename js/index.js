var point = document.querySelector('.point');
var pic = document.querySelector('.pic');
var l = document.querySelector('.left_bg');
var c = document.querySelector('.bg');
var r = document.querySelector('.right_bg');

// for (var i = 0; i < point.children.length; i++) {
//     point.children[i].addEventListener('click', function() {
//         if (i == 0) {
//             for (var i = 0; i < point.children.length; i++) {
//                 point.children[i].className = '';
//                 point.children[0].className = 'current';
//             }
//             pic.children[0].className = 'center_cha bgi_two';
//             pic.children[1].className = 'left_cha bgi_three';
//             pic.children[2].className = 'right_cha bgi_one';
//         } else if (i == 1) {
//             for (var i = 0; i < point.children.length; i++) {
//                 point.children[i].className = '';
//                 point.children[1].className = 'current';
//             }
//             pic.children[0].className = 'left_cha bgi_two';
//             pic.children[1].className = 'right_cha bgi_three';
//             pic.children[2].className = 'center_cha bgi_one';
//         } else {
//             for (var i = 0; i < point.children.length; i++) {
//                 point.children[i].className = '';
//                 point.children[2].className = 'current';
//             }
//             pic.children[0].className = 'right_cha bgi_two';
//             pic.children[1].className = 'center_cha bgi_three';
//             pic.children[2].className = 'left_cha bgi_one';
//         }
//     })
// }

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

//图片
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

// //下拉菜单
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


//登录按钮阴影
var login = document.querySelector('.login');
var login_a = login.querySelector('a');
login_a.onmouseover = function() {
    this.style.boxShadow = '3px 3px 8px #18367e';
}
login_a.onmouseout = function() {
    this.style.boxShadow = '';
}

var a = document.querySelector('.tips_a');
a.onmouseover = function() {
    this.style.boxShadow = '2px 2px 8px #18367e';
}
a.onmouseout = function() {
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

//放大镜放大变色效果
var ss = document.querySelector('.sousuo');
ss.onmouseover = function() {
    this.style.fontSize = '26px';
    this.style.color = '#18367e';
}
ss.onmouseout = function() {
    this.style.fontSize = '20px';
    this.style.color = '#fff';
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