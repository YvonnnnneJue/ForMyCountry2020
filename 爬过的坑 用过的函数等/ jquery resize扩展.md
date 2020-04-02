``` javascript
// 我是大自然的搬运工 

// ↓ 以下可以 监听 ‘某个元素的尺寸’ 变化事件 （原jquery的resize，只能监听window窗口）

(function ($, h, c) {

​    var a = $([]), e = $.resize = $.extend($.resize, {}), i, k = "setTimeout", j = "resize", d = j

​        \+ "-special-event", b = "delay", f = "throttleWindow";

​    e[b] = 350;

​    e[f] = true;

​    $.event.special[j] = {

​        setup: function () {

​            if (!e[f] && this[k]) {

​                return false

​            }

​            var l = $(this);

​            a = a.add(l);

​            $.data(this, d, {

​                w: l.width(),

​                h: l.height()

​            });

​            if (a.length === 1) {

​                g()

​            }

​        },

​        teardown: function () {

​            if (!e[f] && this[k]) {

​                return false

​            }

​            var l = $(this);

​            a = a.not(l);

​            l.removeData(d);

​            if (!a.length) {

​                clearTimeout(i)

​            }

​        },

​        add: function (l) {

​            if (!e[f] && this[k]) {

​                return false

​            }

​            var n;

​            function m(s, o, p) {

​                var q = $(this), r = $.data(this, d);

​                r.w = o !== c ? o : q.width();

​                r.h = p !== c ? p : q.height();

​                n.apply(this, arguments)

​            }

​            if ($.isFunction(l)) {

​                n = l;

​                return m

​            } else {

​                n = l.handler;

​                l.handler = m

​            }

​        }

​    };

​    function g() {

​        i = h[k](function () {

​            a.each(function () {

​                var n = $(this), m = n.width(), l = n.height(), o = $

​                    .data(this, d);

​                if (m !== o.w || l !== o.h) {

​                    n.trigger(j, [o.w = m, o.h = l])

​                }

​            });

​            g()

​        }, e[b])

​    }

})(jQuery, this);



// ↑ 以上可以 监听 ‘某个元素的尺寸’ 变化事件 （原jquery的resize，只能监听window窗口）



// 案例

// 当 search 版块 尺寸发生变化时，调整 ‘表头’ 位置
$('.section-header').resize(function () {
	let g_tableThead = $('.section-header')[0].getBoundingClientRect().bottom;
	$('#header-fixed').css('display', 'table').css('top', g_tableThead + 'px');
})


```

