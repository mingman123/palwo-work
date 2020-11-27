function isPc() {
    $(function () {
        var maxScroll = 23500 + $('.foot-cont').height();
        $('.wrap').height(maxScroll);
        headerBg.init();
        headerTxt1.init();
        headerTxt2.init();
        topBox.init();
        headerTxt3Inno.init();
        scheduleTitle1.init();
        scheduleTitle2.init();
        scheduleItem.init();
        schedule.init();
        guest.init();
        map.init();
        mapDetails.init();
        area.init();
        footCont.init();
        window.requestAnimationFrame(handleScroll);
    });
    // 滚动事件
    function handleScroll() {
        document.title = scrollTop;
        const oldScrollTop = scrollTop;
        scrollTop = $(window).scrollTop();
        if (oldScrollTop !== scrollTop || scrollTop < 700) {
            console.log(scrollTop);
            headerBg.scroll();
            headerTxt1.scroll();
            headerTxt2.scroll();
            topBox.scroll();
            headerTxt3Inno.scroll();
            scheduleTitle1.scroll();
            scheduleTitle2.scroll();
            scheduleItem.scroll();
            schedule.scroll();
            guest.scroll();
            map.scroll();
            mapDetails.scroll();
            area.scroll();
            footCont.scroll();
        }
        window.requestAnimationFrame(handleScroll);
    }
    // 头部
    var topBox = {
        init: function () {
            const num1 = 700;
            this.meanY = 100 / num1; // 平均Y值
        },
        scroll: function () {
            if (scrollTop < 1800) this.anima0();
            if (scrollTop >= 1800) this.anima1();
        },
        anima0: function () {
            $('.top-box').css({
                transform: 'translateY(0%)'
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 1800;
            const y = rangeLimit(this.meanY * scrollNum, 100, 0)
            $('.top-box').css({
                transform: 'translateY(-' + y + '%)'
            });
        }
    }
    // 视频
    var headerBg = {
        width: $('.cont1').width(),
        height: $('.cont1').height(),
        overW: 1102,
        overH: 642,
        top: 0,
        init: function () {
            const num1 = 1600;
            const num2 = 500;
            const num3 = 1300;
            const num4 = 1200;
            const num5 = 2300;
            this.overTop = -$(window).height();
            this.meanW = (this.width - this.overW) / num1; // 平均宽度
            this.meanH = (this.height - this.overH) / num1; // 平均高度
            this.meanOpacity = 1 / num2; // 平均透明度
            this.meanTop = (this.top - this.overTop) / num3; // 平均top值
            this.meanW2 = (this.width - this.overW) / num4; // 平均宽度
            this.meanH2 = (this.height - this.overH) / num4; // 平均高度
            this.meanOpacity2 = 1 / num5; // 平均透明度
        },
        scroll: function () {
            if (scrollTop < 1000) this.anima0();
            if (scrollTop < 1500) this.anima1();
            if (scrollTop >= 400 && scrollTop < 3000) this.anima2();
            if (scrollTop >= 1800 && scrollTop < 3000) this.anima3();
            if (scrollTop < 3000) this.anima4();
            if (scrollTop >= 3000) this.anima5();
        },
        anima0: function () {
            $('.cont1').css({
                'width': '100%',
                'height': '100%',
            });
            $('.header').css({
                'width': '100%',
                'height': '100%',
                'transform': 'translate3d(0, ' + this.top + 'px, 0)'
            });
            $('.cont1-bg').css({
                'display': 'block'
            });
        },
        anima1: function () {
            $('.header-bg').css({
                'opacity': 1,
            });
            $('.schedule,.guest').css('display', 'none');
        },
        anima2: function () {
            const scrollNum = scrollTop - 400;
            let w = this.width - this.meanW2 * scrollNum;
            let h = this.height - this.meanH2 * scrollNum;
            if (w < this.overW) w = this.overW;
            if (h < this.overH) h = this.overH;
            $('.cont1').css({
                'width': w,
                'height': h,
            });
        },
        anima3: function () {
            const scrollNum = scrollTop - 1800;
            const opacity = rangeLimit(1 - this.meanOpacity * scrollNum, 1, 0);
            $('.header-bg').css({
                'opacity': opacity,
            });
            $('.schedule,.guest').css('display', 'block');
        },
        anima4: function () {
            const scrollNum = scrollTop;
            let w = this.width - this.meanW * scrollNum;
            let h = this.height - this.meanH * scrollNum;
            if (w < this.overW) w = this.overW;
            if (h < this.overH) h = this.overH;
            $('.header').css({
                'width': w,
                'height': h,
                'transform': 'translate3d(0, ' + this.top + 'px, 0)'
            });
            const scrollNum2 = scrollTop - 600;
            const opacity = rangeLimit(1 - this.meanOpacity2 * scrollNum2, 1, 0);
            $('#video1').css({
                'opacity': opacity,
            });
        },
        anima5: function () {
            const scrollNum = scrollTop - 3000;
            let _top = this.top - this.meanTop * scrollNum;
            if (_top < this.overTop) _top = this.overTop;
            $('.cont1').css({
                'width': this.overW,
                'height': this.overH,
            });
            $('.header').css({
                'transform': 'translate3d(0, ' + _top + 'px, 0)'
            });
            $('.cont1-bg').css({
                'display': 'none'
            });
            $('.header-bg').css({
                'opacity': 0,
            });
        },

    }
    // 头图文案1
    var headerTxt1 = {
        y: 0,
        overY: -$(window).height(),
        init: function () {
            const num1 = 1000;
            this.meanY = (this.overY - this.y) / num1; // 平均宽度
        },
        scroll: function () {
            this.anima1();
        },
        anima1: function () {
            const y = rangeLimit(this.meanY * scrollTop, this.y, this.overY);
            $('.header-txt1').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)',
            });
        }
    }
    // 头图文案2
    var headerTxt2 = {
        y: $(window).height() - 300,
        overY: -$(window).height() + 300,
        init: function () {
            const num1 = 2000;
            this.meanY = (this.overY - this.y) / num1; // 平均宽度
        },
        scroll: function () {
            this.anima1()
        },
        anima0: function () {
            $('.header-txt2').css({
                'transform': 'translate3d(0, ' + this.y + 'px, 0)',
            });
        },
        anima1: function () {
            const y = rangeLimit(this.y + this.meanY * scrollTop, this.y, this.overY);
            $('.header-txt2').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)',
            });
        },
    }
    // 头图文案inno
    var headerTxt3Inno = {
        init: function () {
            const num1 = 600;
            this.meanOpacity = 1 / num1;
        },
        scroll: function () {
            this.anima1();
        },
        anima1: function () {
            const scrollNum = scrollTop - 2200;
            const opacity = rangeLimit(this.meanOpacity * scrollNum, 1, 0);
            $('.header-txt3-inno').css({
                'opacity': opacity
            });
        }
    }
    // 日程
    var schedule = {
        top: 0,
        overTop: -$(window).height() * .76,
        init: function () {
            const num1 = 2000;
            this.meanTop = (this.top - this.overTop) / num1; // 平均top值
        },
        scroll: function () {
            if (scrollTop < 5500) this.anima0();
            if (scrollTop >= 5500) this.anima1();
        },
        anima0: function () {
            $('.schedule').css({
                'transform': 'translate3d(0, ' + this.top + 'px, 0)'
            })
        },
        anima1: function () {
            const scrollNum = scrollTop - 5500;
            let _top = this.top - this.meanTop * scrollNum;
            if (_top < this.overTop) {
                _top = this.overTop;
            }
            $('.schedule').css({
                'transform': 'translate3d(0, ' + _top + 'px, 0)'
            });
        }
    }
    // 日程标题1
    var scheduleTitle1 = {
        scale: 1.5,
        x: 394,
        y: 174,
        init: function () {
            const num1 = 700;
            this.meanScale = (this.scale - 1) / num1;
            this.meanX = this.x / num1;
            this.meanY = this.y / num1;
        },
        scroll: function () {
            if (scrollTop < 4200) this.anima0();
            if (scrollTop >= 4200) this.anima1();
        },
        anima0: function () {
            $('.schedule-title1').css({
                "transform": 'translate3d(' + this.x + 'px,' + this.y + 'px,0) scale(' + this.scale + ')'
            });
            $('.header').css('display', 'block');
        },
        anima1: function () {
            const scrollNum = scrollTop - 4200;
            let scale = this.scale - this.meanScale * scrollNum;
            let x = this.x - this.meanX * scrollNum;
            let y = this.y - this.meanY * scrollNum;
            if (scale < 1) scale = 1;
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            $('.schedule-title1').css({
                "transform": 'translate3d(' + x + 'px,' + y + 'px,0) scale(' + scale + ')'
            });
            $('.header').css('display', 'none');
        }
    }
    // 日程标题2
    var scheduleTitle2 = {
        scale: 2,
        x: 446,
        y: 210,
        init: function () {
            const num1 = 700;
            this.meanScale = (this.scale - 1) / num1;
            this.meanX = this.x / num1;
            this.meanY = this.y / num1;
        },
        scroll: function () {
            if (scrollTop < 4200) this.anima0();
            if (scrollTop >= 4200) this.anima1();
        },
        anima0: function () {
            $('.schedule-title2').css({
                "transform": 'translate3d(' + this.x + 'px,' + this.y + 'px,0) scale(' + this.scale + ')'
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 4200;
            let scale = this.scale - this.meanScale * scrollNum;
            let x = this.x - this.meanX * scrollNum;
            let y = this.y - this.meanY * scrollNum;
            if (scale < 1) scale = 1;
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            $('.schedule-title2').css({
                "transform": 'translate3d(' + x + 'px,' + y + 'px,0) scale(' + scale + ')'
            });
        }
    }
    // 日程详细
    var scheduleItem = {
        x: 322,
        y: 150,
        init: function () {
            const num1 = 700;
            this.meanX = this.x / num1;
            this.meanY = this.y / num1;
            this.meanOpacity = 1 / num1;
        },
        scroll: function () {
            if (scrollTop < 4200) this.anima0();
            if (scrollTop >= 4200) this.anima1();
        },
        anima0: function () {
            $('.schedule-item').css({
                'opacity': '0'
            })
        },
        anima1: function () {
            const scrollNum = [scrollTop - 4250, scrollTop - 4300, scrollTop - 4350, scrollTop - 4400]
            var opacity = [];
            const x = [];
            const y = [];
            for (let i = 0; i < scrollNum.length; i++) {
                opacity[i] = this.meanOpacity * scrollNum[i];
                x[i] = this.x - this.meanX * scrollNum[i];
                y[i] = this.y - this.meanY * scrollNum[i];
                if (x[i] > this.x) x[i] = this.x;
                if (x[i] < 0) x[i] = 0;
                if (y[i] > this.y) y[i] = this.y;
                if (y[i] < 0) y[i] = 0;
                if (opacity[i] > 1) opacity[i] = 1;
                if (opacity[i] < 0) opacity[i] = 0;
                $('.schedule-item').eq(i).css({
                    'opacity': opacity[i],
                    "transform": 'translate3d(' + x[i] + 'px,' + y[i] + 'px,0)'
                });
            }
        }
    }
    // 嘉宾
    var guest = {
        top: 0,
        overTop: -$(window).height() * .76,
        len: $('.guest-box').length,
        clicking: false,
        init: function () {
            const num1 = 2000;
            this.meanTop = (this.top - this.overTop) / num1; // 平均top值
            this.minLeft = 1132 - 442 * this.len;
            $('.guest-next').on('click', function () {
                if (guest.clicking) return;
                guest.clicking = true;
                let left = parseInt($('.guests').css('left')) - 442*2;
                if (left < guest.minLeft) left = guest.minLeft;
                $('.guests').css('left', left);
                setTimeout(function () {
                    guest.clicking = false;
                }, 300);
            });
            $('.guest-prev').on('click', function () {
                if (guest.clicking) return;
                guest.clicking = true;
                let left = parseInt($('.guests').css('left')) + 442*2;
                if (left > 0) left = 0;
                $('.guests').css('left', left);
                setTimeout(function () {
                    guest.clicking = false;
                }, 300);
            });
        },
        scroll: function () {
            if (scrollTop < 5500) this.anima0();
            if (scrollTop >= 5500) this.anima1();
        },
        anima0: function () {
            $('.guest').css({
                'transform': 'translate3d(0, 0, 0)'
            })
        },
        anima1: function () {
            const scrollNum = scrollTop - 5500;
            let _top = this.top - this.meanTop * scrollNum;
            if (_top < this.overTop) _top = this.overTop;
            $('.guest').css({
                'transform': 'translate3d(0, ' + _top + 'px, 0)'
            });
        }
    }
    // 地图
    var map = {
        y: 0,
        overY: -$(window).height(),
        mapTitleTop: 50,
        mapTitleY: 50,
        mapTxtY: 60,
        mapTxtY2: -60,
        init: function () {
            const num = 1000;
            const num2 = 500;
            const num3 = 1000;
            const num4 = 700;
            this.meanY = this.overY / num; // 平均偏移量
            this.meanMapTitleTop = this.mapTitleTop / num2; // 平均偏移量
            this.meanMapTitleY = this.mapTitleY / num2; // 平均偏移量
            this.meanOpacity = 1 / num2;
            this.meanTxtY = this.mapTxtY / num3; // 平均偏移量
            this.meanOpacity2 = 1 / num3;
            this.meanTxtY2 = this.mapTxtY2 / num4; // 平均偏移量
            this.meanOpacity3 = 1 / num4;
        },
        scroll: function () {
            if (scrollTop < 8000) this.anima0();
            if (scrollTop >= 8000 && scrollTop < 9500) this.anima1();
            if (scrollTop >= 9500 && scrollTop < 11500) this.anima2();
            if (scrollTop >= 11500 && scrollTop < 23000) this.anima3();
            if (scrollTop >= 22500) this.anima4();
        },
        anima0: function () {
            $('.map').css({
                'transform': 'translate3d(0, 0, 0)'
            });
            $('.map-title').css({
                'top': 0,
                'opacity': 0
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 8000;
            const scrollNum2 = scrollTop - 8500;
            const y = rangeLimit(this.meanY * scrollNum, 0, this.overY);
            $('.map').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)',
                'display': 'block'
            });
            const mapTitleTop = rangeLimit(this.meanMapTitleTop * scrollNum2, this.mapTitleTop, 0);
            const mapTitleY = rangeLimit(this.mapTitleY - this.meanMapTitleY * scrollNum2, this.mapTitleY, 0);
            const opacity = rangeLimit(this.meanOpacity * scrollNum2, 1, 0);
            $('.map-title').css({
                'top': mapTitleTop + '%',
                'opacity': opacity,
                'transform': 'translate3d(0, ' + mapTitleY + 'px, 0)'
            });
            $('.guest,.schedule').css('display', 'block');
        },
        anima2: function () {
            const scrollNum = scrollTop - 9500;
            const scrollNum2 = scrollTop - 9800;
            const mapTitleY = rangeLimit(-this.meanTxtY * scrollNum, 0, -this.mapTxtY);
            const mapTxtY = rangeLimit(this.mapTxtY - this.meanTxtY * scrollNum2, this.mapTxtY, 0);
            const opacity = rangeLimit(1 - this.meanOpacity * scrollNum, 1, 0);
            const opacity2 = rangeLimit(this.meanOpacity * scrollNum2, 1, 0);
            $('.map-title').css({
                'transform': 'translate3d(0, ' + mapTitleY + 'px, 0)',
                'opacity': opacity
            });
            $('.map-txts').css({
                'transform': 'translate3d(0, ' + mapTxtY + 'px, 0)',
                'opacity': opacity2
            });
            $('.map').css({
                'transform': 'translate3d(0, ' + this.overY + 'px, 0)'
            });
            $('.guest,.schedule').css('display', 'none');
        },
        anima3: function () {
            const scrollNum = scrollTop - 11500;
            const opacity = rangeLimit(1 - this.meanOpacity3 * scrollNum, 1, 0);
            let mapTxtY = this.meanTxtY2 * scrollNum;
            if (mapTxtY < this.mapTxtY2) mapTxtY = this.mapTxtY2;
            $('.map-txts').css({
                'transform': 'translate3d(0, ' + mapTxtY + 'px, 0)',
                'opacity': opacity
            });
            $('.map').css({
                'transform': 'translate3d(0, ' + this.overY + 'px, 0)'
            });
        },
        anima4: function () {
            const scrollNum = scrollTop - 22500;
            const y = rangeLimit(this.overY + this.meanY * scrollNum, 0, this.overY * 2);
            $('.map').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)'
            });
        }
    }
    // 地图详情
    var mapDetails = {
        scale: 0,
        overScale1: .42,
        overScale2: 1,
        rotate: -90,
        overRotate1: 0,
        overRotate2: 90,
        overLeft: 50,
        x: -10,
        y: 50,
        init: function () {
            const num1 = 1000;
            const num2 = 1500;
            this.meanScale1 = this.overScale1 / num1; // 平均偏移量
            this.meanRotate1 = (this.overRotate1 - this.rotate) / num1;
            this.meanRotate2 = this.overRotate2 / num2;
            this.meanScale2 = (this.overScale2 - this.overScale1) / num2;
            this.meanRotate2 = this.overRotate2 / num2;
            this.meanX = this.x / num2;
            this.meanY = this.y / num2;
        },
        scroll: function () {
            if (scrollTop < 10000) this.anima0();
            if (scrollTop >= 10000 && scrollTop < 11500) this.anima1();
            if (scrollTop >= 11500) this.anima2();
        },
        anima0: function () {
            $('.map-pics').css({
                'left': 50 + '%',
                'transform': 'scale(0) rotate(' + this.rotate + 'deg) translate3d(0, 0, 0)'
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 10000;
            let scale = this.meanScale1 * scrollNum;
            const rotate = rangeLimit(this.rotate + this.meanRotate1 * scrollNum, this.overRotate1, this.rotate);
            if (scale > this.overScale1) scale = this.overScale1;
            $('.map-pics').css({
                'left': 50 + '%',
                'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg) translate3d(0, 0, 0)'
            });
        },
        anima2: function () {
            const scrollNum = scrollTop - 11500;
            const rotate = rangeLimit(this.meanRotate2 * scrollNum, this.overRotate2, this.overRotate1);
            const x = rangeLimit(this.meanX * scrollNum, 0, this.x);
            const y = rangeLimit(this.meanY * scrollNum, this.y, 0);
            let scale = this.overScale1 + this.meanScale2 * scrollNum;
            if (scale > this.overScale2) scale = this.overScale2;
            $('.map-pics').css({
                'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg) translate3d(' + x + '%,' + y + '%, 0)'
            });
        }
    }
    // 区域介绍
    var area = {
        y: 0,
        overY: -50,
        overY2: -100,
        init: function () {
            const num1 = 500;
            this.meanOpacity = 1 / num1;
            this.meanY = this.overY / num1;
            this.meanY2 = (this.overY2 - this.overY) / num1;
        },
        scroll: function () {
            if (scrollTop < 12500) this.anima0();
            if (scrollTop >= 12500) this.anima1();
        },
        anima0: function () {
            $('.area').css({
                'opacity': 0,
            });
            $('.area-txt').css({
                'opacity': 0,
                'transform': 'translate3d(0,' + this.overY + 'px,0)'
            });
        },
        anima1: function () {
            const num = [12500, 14000, 15500, 17000, 18500, 20000, 21500];
            for (var i = 0; i < num.length; i++) {
                const gap = scrollTop - num[i];
                let opacity;
                let y;
                if (gap <= 1000 || i == num.length - 1) {
                    const scrollNum = gap;
                    opacity = rangeLimit(this.meanOpacity * scrollNum, 1, 0);
                    y = rangeLimit(this.meanY * scrollNum, this.y, this.overY);
                } else {
                    const scrollNum = gap - 1000;
                    opacity = rangeLimit(1 - this.meanOpacity * scrollNum, 1, 0);
                    y = rangeLimit(this.overY + this.meanY2 * scrollNum, this.overY, this.overY2);
                }
                $('.area').eq(i).css({
                    'opacity': opacity,
                });
                $('.area-txt').eq(i).css({
                    'opacity': opacity,
                    'transform': 'translate3d(0,' + y + 'px,0)'
                });
            }
        }
    }
    // 大会资讯和直播合作    方便控制
    var footCont = {
        y: 0,
        overY: - $(window).height(),
        overY2: - $('.foot-cont').height(),
        init: function () {
            const num1 = 1000;
            this.meanY = this.overY / num1; // 平均偏移量
        },
        scroll: function () {
            if (scrollTop < 22500) this.anima0();
            if (scrollTop >= 22500 && scrollTop < 23500) this.anima1();
            if (scrollTop >= 23500) this.anima2();
        },
        anima0: function () {
            $('.foot-cont').css({
                'transform': 'translate3d(0, ' + this.y + 'px, 0)'
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 22500;
            const y = rangeLimit(this.meanY * scrollNum, 0, this.overY);
            $('.foot-cont').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)'
            });
            $('.map,.foot-cont').css('display', 'block');
        },
        anima2: function () {
            const scrollNum = scrollTop - 23500;
            const y = rangeLimit(this.overY - scrollNum, this.overY, this.overY2);
            $('.foot-cont').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)'
            });
            $('.map').css('display', 'none');
        }
    }
}
