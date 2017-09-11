$(document).ready(function () {
    //定义命名空间
    var func = {};
    var data = {};

    // 显示选择角色界面
    $('.selection').show();

    //初始化滑动插件实例
    var mySwiper = new Swiper('.swiper-container', {
        loop: true
    });

    //聊天音效
    func.send = function () {
        document.getElementById('send').play();
    };

    //聊天界面
    func.choice = function (select) {
        var selection = $('.selection');
        var option = $('.wechat-option');
        var result = $('.result');
        var btnTip = $('.btn-tip');
        var time = 2000;
        var myTime = 200;

        // 垂直控制滚动条滚动
        var scrollMain = function () {
            $('html,body').animate({scrollTop: 50000}, 0);
        };

        //打字机插件配置对象
        var typetypeConfig = {
            e: 0,
            t: 100,
            callback: function () {
                btnTip.show();
            }
        };

        //隐藏选择角色界面，显示聊天界面功能
        var hideSelect = function () {
            selection.hide();
            option.show();
        };

        // 隐藏选择角色、聊天界面，显示结果界面功能
        var showResult = function () {
            selection.hide();
            option.hide();
            result.show();
        };

        //定制的角色方法
        function qyy() {
            hideSelect();
            $('#qyy').show();
            var mySay = $('#qyy .chat-me');
            var otherSay = $('#qyy .chat-other');
            var input = $('#qyy .input-content');
            input.typetype(mySay[0].innerText.trim(), typetypeConfig);
            input.animate({scrollLeft: 50000}, 0);
            btnTip.one('click', function () {
                mySay.eq(0).delay(myTime).show(0, function () {
                    func.send();
                    btnTip.hide();
                    input.text(' ');
                    otherSay.eq(0).delay(time).show(0, function () {
                        func.send();
                        otherSay.eq(1).delay(time).show(0, function () {
                            func.send();
                            otherSay.eq(2).delay(time).show(0, function () {
                                func.send();
                                input.typetype('是我喜欢的类型啊，好MAN！[表情]', typetypeConfig);
                                input.animate({scrollLeft: 50000}, 0);
                                btnTip.one('click', function () {
                                    mySay.eq(1).delay(myTime).show(0, function () {
                                        func.send();
                                        btnTip.hide();
                                        input.text(' ');
                                        otherSay.eq(3).delay(time).show(0, function () {
                                            func.send();
                                            otherSay.eq(4).delay(time).show(0, function () {
                                                func.send();
                                                input.typetype(mySay[2].innerText.trim(), typetypeConfig);
                                                input.animate({scrollLeft: 50000}, 0);
                                                btnTip.one('click', function () {
                                                    mySay.eq(2).delay(myTime).show(0, function () {
                                                        func.send();
                                                        scrollMain();
                                                        btnTip.hide();
                                                        input.text(' ');
                                                        otherSay.eq(5).delay(time).show(0, function () {
                                                            func.send();
                                                            scrollMain();
                                                            otherSay.eq(6).delay(time).show(0, function () {
                                                                func.send();
                                                                scrollMain();
                                                                otherSay.eq(7).delay(time).show(0, function () {
                                                                    func.send();
                                                                    scrollMain();
                                                                    input.typetype('最近老板不在，[表情]我上班还偷偷看小说呢，哈哈哈', typetypeConfig);
                                                                    input.animate({scrollLeft: 50000}, 0);
                                                                    btnTip.one('click', function () {
                                                                        mySay.eq(3).delay(myTime).show(0, function () {
                                                                            func.send();
                                                                            scrollMain();
                                                                            btnTip.hide();
                                                                            input.text(' ');
                                                                            setTimeout(showResult, 3000);
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }

        //定制的角色方法
        function gwe() {
            hideSelect();
            $('#gwe').show();
            var mySay = $('#gwe .chat-me');
            var otherSay = $('#gwe .chat-other');
            var input = $('#gwe .input-content');
            otherSay.eq(0).delay(time).show(0, function () {
                func.send();
                input.typetype(mySay[0].innerText.trim(), typetypeConfig);
                input.animate({scrollLeft: 50000}, 0);
                btnTip.one('click', function () {
                    btnTip.hide();
                    input.text(' ');
                    mySay.eq(0).delay(myTime).show(0, function () {
                        func.send();
                        otherSay.eq(1).delay(time).show(0, function () {
                            func.send();
                            otherSay.eq(2).delay(time).show(0, function () {
                                func.send();
                                otherSay.eq(3).delay(time).show(0, function () {
                                    func.send();
                                    otherSay.eq(4).delay(time).show(0, function () {
                                        func.send();
                                        otherSay.eq(5).delay(time).show(0, function () {
                                            func.send();
                                            otherSay.eq(6).delay(time).show(0, function () {
                                                func.send();
                                                input.typetype(mySay[1].innerText.trim(), typetypeConfig);
                                                input.animate({scrollLeft: 50000}, 0);
                                                btnTip.one('click', function () {
                                                    scrollMain();
                                                    btnTip.hide();
                                                    input.text(' ');
                                                    mySay.eq(1).delay(myTime).show(0, function () {
                                                        func.send();
                                                        scrollMain();
                                                        otherSay.eq(7).delay(time).show(0, function () {
                                                            func.send();
                                                            scrollMain();
                                                            input.typetype(mySay[2].innerText.trim(), typetypeConfig);
                                                            input.animate({scrollLeft: 50000}, 0);
                                                            btnTip.one('click', function () {
                                                                scrollMain();
                                                                btnTip.hide();
                                                                input.text(' ');
                                                                mySay.eq(2).delay(myTime).show(0, function () {
                                                                    func.send();
                                                                    scrollMain();
                                                                    otherSay.eq(8).delay(time).show(0, function () {
                                                                        func.send();
                                                                        scrollMain();
                                                                        input.typetype(mySay[3].innerText.trim(), typetypeConfig);
                                                                        input.animate({scrollLeft: 50000}, 0);
                                                                        btnTip.one('click', function () {
                                                                            mySay.eq(3).delay(myTime).show(0, function () {
                                                                                func.send();
                                                                                scrollMain();
                                                                                btnTip.hide();
                                                                                input.text(' ');
                                                                                setTimeout(showResult, 3000);
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }

        //定制的角色方法
        function qxx() {
            hideSelect();
            $('#qxx').show();
            var mySay = $('#qxx .chat-me');
            var otherSay = $('#qxx .chat-other');
            var input = $('#qxx .input-content');
            otherSay.eq(0).delay(time).show(0, function () {
                func.send();
                otherSay.eq(1).delay(time).show(0, function () {
                    func.send();
                    input.typetype(mySay[0].innerText.trim(), typetypeConfig);
                    input.animate({scrollLeft: 50000}, 0);
                    btnTip.one('click', function () {
                        mySay.eq(0).delay(myTime).show(0, function () {
                            func.send();
                            btnTip.hide();
                            input.text(' ');
                            otherSay.eq(2).delay(time).show(0, function () {
                                func.send();
                                otherSay.eq(3).delay(time).show(0, function () {
                                    func.send();
                                    otherSay.eq(4).delay(time).show(0, function () {
                                        func.send();
                                        input.typetype(mySay[1].innerText.trim(), typetypeConfig);
                                        input.animate({scrollLeft: 50000}, 0);
                                        btnTip.one('click', function () {
                                            mySay.eq(1).delay(myTime).show(0, function () {
                                                func.send();
                                                scrollMain();
                                                btnTip.hide();
                                                input.text(' ');
                                                otherSay.eq(5).delay(time).show(0, function () {
                                                    func.send();
                                                    scrollMain();
                                                    otherSay.eq(6).delay(time).show(0, function () {
                                                        func.send();
                                                        scrollMain();
                                                        input.typetype(mySay[2].innerText.trim(), typetypeConfig);
                                                        input.animate({scrollLeft: 50000}, 0);
                                                        btnTip.one('click', function () {
                                                            mySay.eq(2).delay(myTime).show(0, function () {
                                                                func.send();
                                                                scrollMain();
                                                                btnTip.hide();
                                                                input.text(' ');
                                                                otherSay.eq(7).delay(time).show(0, function () {
                                                                    func.send();
                                                                    scrollMain();
                                                                    otherSay.eq(8).delay(time).show(0, function () {
                                                                        func.send();
                                                                        scrollMain();
                                                                        input.typetype(mySay[3].innerText.trim(), typetypeConfig);
                                                                        input.animate({scrollLeft: 50000}, 0);
                                                                        btnTip.one('click', function () {
                                                                            mySay.eq(3).delay(myTime).show(0, function () {
                                                                                func.send();
                                                                                scrollMain();
                                                                                btnTip.hide();
                                                                                input.text(' ');
                                                                                otherSay.eq(9).delay(time).show(0, function () {
                                                                                    func.send();
                                                                                    scrollMain();
                                                                                    input.typetype('不跟你们废话了，我要去吃我的唐僧肉了[表情]', typetypeConfig);
                                                                                    input.animate({scrollLeft: 50000}, 0);
                                                                                    btnTip.one('click', function () {
                                                                                        mySay.eq(4).delay(myTime).show(0, function () {
                                                                                            func.send();
                                                                                            scrollMain();
                                                                                            btnTip.hide();
                                                                                            input.text(' ');
                                                                                            setTimeout(showResult, 3000);
                                                                                        });
                                                                                    });
                                                                                });
                                                                            });
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }

        //定制的角色方法
        function ad() {
            hideSelect();
            $('#ad').show();
            var mySay = $('#ad .chat-me');
            var otherSay = $('#ad .chat-other');
            var input = $('#ad .input-content');
            otherSay.eq(0).delay(time).show(0, function () {
                func.send();
                otherSay.eq(1).delay(time).show(0, function () {
                    func.send();
                    input.typetype(mySay[0].innerText.trim(), typetypeConfig);
                    input.animate({scrollLeft: 50000}, 0);
                    btnTip.one('click', function () {
                        mySay.eq(0).delay(myTime).show(0, function () {
                            func.send();
                            btnTip.hide();
                            input.text(' ');
                            otherSay.eq(2).delay(time).show(0, function () {
                                func.send();
                                otherSay.eq(3).delay(time).show(0, function () {
                                    func.send();
                                    otherSay.eq(4).delay(time).show(0, function () {
                                        func.send();
                                        input.typetype(mySay[1].innerText.trim(), typetypeConfig);
                                        input.animate({scrollLeft: 50000}, 0);
                                        btnTip.one('click', function () {
                                            mySay.eq(1).delay(myTime).show(0, function () {
                                                func.send();
                                                btnTip.hide();
                                                input.text(' ');
                                                otherSay.eq(5).delay(time).show(0, function () {
                                                    func.send();
                                                    scrollMain();
                                                    otherSay.eq(6).delay(time).show(0, function () {
                                                        func.send();
                                                        scrollMain();
                                                        otherSay.eq(7).delay(time).show(0, function () {
                                                            func.send();
                                                            scrollMain();
                                                            input.typetype(mySay[2].innerText.trim(), typetypeConfig);
                                                            input.animate({scrollLeft: 50000}, 0);
                                                            btnTip.one('click', function () {
                                                                mySay.eq(2).delay(myTime).show(0, function () {
                                                                    func.send();
                                                                    scrollMain();
                                                                    btnTip.hide();
                                                                    input.text(' ');
                                                                    otherSay.eq(8).delay(time).show(0, function () {
                                                                        func.send();
                                                                        scrollMain();
                                                                        setTimeout(showResult, 3000);
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }

        //定制的角色方法
        function fsm() {
            hideSelect();
            $('#fsm').show();
            var mySay = $('#fsm .chat-me');
            var otherSay = $('#fsm .chat-other');
            var input = $('#fsm .input-content');
            otherSay.eq(0).delay(time).show(0, function () {
                func.send();
                otherSay.eq(1).delay(time).show(0, function () {
                    input.typetype('姐妹们放心吧，我没事[表情]', typetypeConfig);
                    input.animate({scrollLeft: 50000}, 0);
                    btnTip.one('click', function () {
                        mySay.eq(0).delay(myTime).show(0, function () {
                            func.send();
                            btnTip.hide();
                            input.text(' ');
                            otherSay.eq(2).delay(time).show(0, function () {
                                func.send();
                                otherSay.eq(3).delay(time).show(0, function () {
                                    func.send();
                                    input.typetype(mySay[1].innerText.trim(), typetypeConfig);
                                    input.animate({scrollLeft: 50000}, 0);
                                    btnTip.one('click', function () {
                                        mySay.eq(1).delay(myTime).show(0, function () {
                                            func.send();
                                            btnTip.hide();
                                            input.text(' ');
                                            otherSay.eq(4).delay(time).show(0, function () {
                                                func.send();
                                                otherSay.eq(5).delay(time).show(0, function () {
                                                    func.send();
                                                    scrollMain();
                                                    input.typetype('我这家里乌烟瘴气的，以前又这么对他，他怎么可能还看得上我[表情]', typetypeConfig);
                                                    input.animate({scrollLeft: 50000}, 0);
                                                    btnTip.one('click', function () {
                                                        mySay.eq(2).delay(myTime).show(0, function () {
                                                            func.send();
                                                            scrollMain();
                                                            btnTip.hide();
                                                            input.text(' ');
                                                            otherSay.eq(6).delay(time).show(0, function () {
                                                                func.send();
                                                                scrollMain();
                                                                otherSay.eq(7).delay(time).show(0, function () {
                                                                    func.send();
                                                                    scrollMain();
                                                                    input.typetype('其实我心里也挺矛盾的，以前真不该那样对他[表情]', typetypeConfig);
                                                                    input.animate({scrollLeft: 50000}, 0);
                                                                    btnTip.one('click', function () {
                                                                        mySay.eq(3).delay(myTime).show(0, function () {
                                                                            func.send();
                                                                            scrollMain();
                                                                            btnTip.hide();
                                                                            input.text(' ');
                                                                            setTimeout(showResult, 3000);
                                                                        });
                                                                    });
                                                                });
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }

        //出错时重新载入页面
        function reload() {
            window.location.reload();
        }

        // 聊天界面选择逻辑
        switch (select) {
            case 'role-1':
                qyy();
                break;
            case 'role-2':
                gwe();
                break;
            case 'role-3':
                qxx();
                break;
            case 'role-4':
                ad();
                break;
            case 'role-5':
                fsm();
                break;
            default:
                reload();
                break;
        }
    };

    //测试浏览器方法
    func.testBrowser = function () {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs) {
            return "ios";
        } else if (bIsMidp || bIsUc7 || bIsUc || bIsAndroid) {
            return "android";
        } else if (bIsCE || bIsWM) {
            return "wp";
        } else {
            return "pc";
        }
    };

    //结果页欢乐颂第二部跳转
    func.no2 = function () {
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ushaqi.zhuishushenqi&ckey=CK1328811162710';
    };

    //结果页欢乐颂第三部跳转
    func.no3 = function () {
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.ushaqi.zhuishushenqi&ckey=CK1328811162710';
    };

    //分享功能
    func.share = function () {
        var testResult = func.testBrowser();
        if (testResult == 'ios') {
            $("#mark_ios").show();
        }
        if (testResult == 'android') {
            $("#mark_android").show();
        }
    };

    //事件集中绑定处
    $('.swiper-slide').click(function (event) {
        // 获取事件对象的id
        var select = event.target.id;
        // 将选择的对象id传给预先设置的方法
        func.choice(select);
    });
    $('#btn-1').click(func.no2);
    $('#btn-2').click(func.no3);
    $('#btn-share').click(func.share);
    $('#mark_ios,#mark_android').click(function () {
        $(this).hide();
    });
});