// //表格行变色
var tb = document.querySelectorAll('tbody')
for (var i = 0; i < tb.length; i++) {
    var tr = tb[i].children;
    for (var j = 0; j < tr.length; j++) {
        tr[j].onmouseover = function() {
            this.style.backgroundColor = '#3672e0';
        }
        tr[j].onmouseout = function() {
            this.style.backgroundColor = '';
        }
    }
}