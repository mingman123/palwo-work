function isM() {
    // 禁止滑动下拉
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: '6%',
        centeredSlides: true,
        on: {
            init: function () {
                $('.guest').css('display', 'none');
            }
        }
    });
    $(function () {
        $('#video1').remove();
        $('#video2').remove();
        var maxScroll = 14300 + $('.foot-cont').height();
        $('.wrap').height(maxScroll);
        headerBg.init();
        topBox.init();
        schedule.init();
        map.init();
        mapDetails.init();
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
            topBox.scroll();
            schedule.scroll();
            map.scroll();
            mapDetails.scroll();
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
            if (scrollTop < 1000) this.anima0();
            if (scrollTop >= 1000) this.anima1();
        },
        anima0: function () {
            const scrollNum = scrollTop - 0;
            const y = rangeLimit(this.meanY * scrollNum, 100, 0);
            $('.top-box').css({
                transform: 'translateY(-' + y + '%)'
            });
        },
        anima1: function () {
            $('.top-box').css({
                transform: 'translateY(-100%)'
            });
        }
    }
    // 第一页
    var headerBg = {
        cont1Scale: 1.2,
        cont1Scale2: 1.1,
        cont1Scale3: 1,
        cont1H: $(window).height() * 1.1,
        endCont1H: $(window).height() * .96,
        endCont1H2: $(window).height() * .9,
        cont1W: 110,
        endCont1W: 100,
        endCont1W2: 89,
        top: 0,
        txt1Y: -$(window).height(),
        txt2Y: $(window).height(),
        init: function () {
            const num1 = 1000;
            const num2 = 800;
            const num3 = 350;
            const num4 = 1500;
            this.meanScale1 = (this.cont1Scale2 - this.cont1Scale) / num1;
            this.meanScale2 = (this.cont1Scale3 - this.cont1Scale2) / num2;
            this.meanTxt1Y = this.txt1Y / num1; // 平均值
            this.meanCont1H = (this.cont1H - this.endCont1H) / num1; // 平均值
            this.meanCont1H2 = (this.endCont1H - this.endCont1H2) / num2; // 平均值
            this.meanCont1W = (this.cont1W - this.endCont1W) / num1; // 平均值
            this.meanCont1W2 = (this.endCont1W - this.endCont1W2) / num2; // 平均值
            this.meanOpacity = 1 / num3;
            this.meanHeaderY = this.txt2Y / num4;
        },
        scroll: function () {
            if (scrollTop < 1000) this.anima0();
            if (scrollTop >= 1000 && scrollTop < 2300) this.anima1();
            if (scrollTop >= 1500 && scrollTop < 2300) this.anima2();
            if (scrollTop > 2300) this.anima3();
        },
        anima0: function () {
            const scrollNum = scrollTop;
            const scale = rangeLimit(this.cont1Scale + this.meanScale1 * scrollNum, this.cont1Scale, this.cont1Scale2);
            const txt1Y = rangeLimit(this.meanTxt1Y * scrollNum, 0, this.txt1Y);
            const txt2Y = rangeLimit(this.txt2Y + this.meanTxt1Y * scrollNum, this.txt2Y, 0);
            const cont1H = rangeLimit(this.cont1H - this.meanCont1H * scrollNum, this.cont1H, this.endCont1H);
            const cont1W = rangeLimit(this.cont1W - this.meanCont1W * scrollNum, this.cont1W, this.endCont1W);
            $('.cont1').css({
                'transform': 'scale(' + scale + ') translate3d(0, 0, 0)'
                // 'height': cont1H,
                // 'width': cont1W + '%',
            });
            $('.header-txt1').css({
                'transform': 'translate3d(0, ' + txt1Y + 'px, 0)',
                'display': 'block'
            });
            $('.header-txt2').css({
                'transform': 'translate3d(0, ' + txt2Y + 'px, 0)',
                'display': 'block'
            });
            $('.header-bg').css({
                'opacity': 1
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 1000;
            const scale = rangeLimit(this.cont1Scale2 + this.meanScale2 * scrollNum, this.cont1Scale2, this.cont1Scale3);
            let cont1H = this.endCont1H - this.meanCont1H2 * scrollNum;
            let cont1W = this.endCont1W - this.meanCont1W2 * scrollNum;
            let txt2Y = this.meanTxt1Y * scrollNum;
            if (txt2Y > 0) txt2Y = 0;
            if (txt2Y < this.txt1Y) txt2Y = this.txt1Y;
            if (cont1W > this.endCont1W) cont1W = this.endCont1W;
            if (cont1W < this.endCont1W2) cont1W = this.endCont1W2;
            if (cont1H > this.endCont1H) cont1H = this.endCont1H;
            if (cont1H < this.endCont1H2) cont1H = this.endCont1H2;
            $('.schedule-box').css('display', 'none');
            $('.cont1').css({
                // 'height': cont1H,
                // 'width': cont1W + '%',
                'transform': 'scale(' + scale + ') translate3d(0, 0, 0)'
            });
            $('.header-txt2').css({
                'transform': 'translate3d(0, ' + txt2Y + 'px, 0)'
            });
            $('.header').css({
                'transform': 'translate3d(0, 0, 0)',
                'overflow': 'unset'
            });
        },
        anima2: function () {
            const scrollNum = scrollTop - 1500;
            const scrollNum2 = scrollTop - 1800;
            const opacity = rangeLimit(1 - this.meanOpacity * scrollNum, 1, 0);
            const opacity2 = rangeLimit(this.meanOpacity * scrollNum2, 1, 0);
            $('.header-bg').css({
                'opacity': opacity
            });
            $('.header-txt3').css({
                'opacity': opacity2
            });
            $('.header-txt1,.header-txt2').css({
                'display': 'none'
            });
        },
        anima3: function () {
            $('.schedule-box').css('display', 'block');
            const scrollNum = scrollTop - 2300;
            let headerY = this.meanHeaderY * scrollNum;
            if (headerY < 0) headerY = 0;
            if (headerY > this.txt2Y) headerY = this.txt2Y;
            $('.header').css({
                'transform': 'translate3d(0, ' + headerY + 'px, 0)',
                'overflow': 'hidden'
            });
            $('.header-bg').css({
                'opacity': 0
            });
            $('.header-txt3').css({
                'opacity': 1
            });
            $('.cont1').css({
                'height': this.endCont1H2,
                'width': this.endCont1W2 + '%',
            });
            $('.header-txt1,.header-txt2').css({
                'display': 'none'
            });
        }
    }
    // 日程
    var schedule = {
        y: -18,
        titleScale: 1.25,
        title1X: 1.8,
        title1Y: 1.2,
        title2X: 1.5,
        title2Y: 1.4,
        scheduleItemX: 17,
        init: function () {
            const num1 = 200;
            const num2 = 2600;
            this.meanTitleScale = (this.titleScale - 1) / num1;
            this.meanTitle1X = this.title1X / num1;
            this.meanTitle1Y = this.title1Y / num1;
            this.meanTitle2X = this.title2X / num1;
            this.meanTitle2Y = this.title2Y / num1;
            this.meanScheduleItemX = this.scheduleItemX / num1;
            this.meanOpacity = 1 / num1;
            this.meanY = this.y / num2;
        },
        scroll: function () {
            if (scrollTop < 3500) this.anima0();
            if (scrollTop >= 3500) this.anima1();
        },
        anima0: function () {
            $('.header').css('display', 'block');
            $('.schedule-title1').css({
                'transform': 'translate3d(1.8rem,1.2rem,0) scale(1.25)'
            });
            $('.schedule-title2').css({
                'transform': 'translate3d(1.5rem,1.4rem,0) scale(1.25)'
            });
            $('.schedule').css({
                'transform': 'translate3d(0, 0, 0)'
            });
            $('.schedule-item').css({
                'transform': 'translate3d(' + this.scheduleItemX + '%, 0, 0)',
                'opacity': 0
            });
            $('.guest').css({
                'transform': 'translate3d(0, ' + -this.y + 'rem, 0)',
                'display': 'none'
            });
        },
        anima1: function () {
            $('.header').css('display', 'none');
            const scrollNum = scrollTop - 3500;
            const TitleScale = rangeLimit(this.titleScale - this.meanTitleScale * scrollNum, this.titleScale, 1);
            const title1X = rangeLimit(this.title1X - this.meanTitle1X * scrollNum, this.title1X, 0);
            const title1Y = rangeLimit(this.title1Y - this.meanTitle1Y * scrollNum, this.title1Y, 0);
            const title2X = rangeLimit(this.title2X - this.meanTitle2X * scrollNum, this.title2X, 0);
            const title2Y = rangeLimit(this.title2Y - this.meanTitle2Y * scrollNum, this.title2Y, 0);
            $('.schedule-title1').css({
                'transform': 'translate3d(' + title1X + 'rem, ' + title1Y + 'rem, 0) scale('+ TitleScale +')'
            });
            $('.schedule-title2').css({
                'transform': 'translate3d(' + title2X + 'rem, ' + title2Y + 'rem, 0) scale('+ TitleScale +')'
            });
            const y = rangeLimit(this.meanY * scrollNum, 0, this.y);
            const y2 = rangeLimit(this.meanY * scrollNum - this.y, -this.y, 0);
            $('.schedule').css({
                'transform': 'translate3d(0, ' + y + 'rem, 0)'
            });
            $('.guest').css({
                'transform': 'translate3d(0, ' + y2 + 'rem, 0)',
                'display': 'block'
            });
            // 日程详情
            for ( let i = 0; i < 4; i++) {
                const scrollNum1 = scrollNum - 300 * i;
                const scheduleItemX = rangeLimit(this.scheduleItemX - this.meanScheduleItemX * scrollNum1, this.scheduleItemX, 0);
                const opacity = rangeLimit(this.meanOpacity * scrollNum1, 1, 0);
                $('.schedule-item').eq(i).css({
                    'transform': 'translate3d(' + scheduleItemX + '%, 0, 0)',
                    'opacity': opacity
                });
            }
        },
    }
    // 地图
    var map = {
        y: -$(window).height(),
        titleY: -50,
        init: function () {
            const num1 = 900;
            const num2 = 400;
            this.meanY = this.y / num1;
            this.meanOpacity = 1 / num2;
            this.meanTitleY = this.titleY / num2;
        },
        scroll: function () {
            if (scrollTop < 6500) this.anima0();
            if (scrollTop >= 6500 && scrollTop < 7900) this.anima1();
            if (scrollTop >= 7900 && scrollTop < 8300) this.anima2();
            if (scrollTop >= 8300 && scrollTop < 8700) this.anima3();
            if (scrollTop >= 8700) this.anima4();
            if (scrollTop >= 7400) {
                $('.map').css({
                    'transform': 'translate3d(0, ' + this.y + 'px, 0)',
                    'display': 'block'
                });
                $('.guest,.schedule').css('display', 'none');
            }
            if (scrollTop < 7400 && scrollTop > 6500) {
                $('.guest,.schedule').css('display', 'block');
            }
        },
        anima0: function () {
            $('.map').css({
                'transform': 'translate3d(0, 0, 0)',
                'display': 'none'
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 6500;
            const y = rangeLimit(this.meanY * scrollNum, 0, this.y);
            $('.map').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)',
                'display': 'block'
            });
            const scrollNum2 = scrollTop - 7400;
            const opacity = rangeLimit(this.meanOpacity * scrollNum2, 1, 0);
            const titleY = rangeLimit(this.meanTitleY * scrollNum2, 0, -50);
            $('.map-title').css({
                'transform': 'translate3d(0, ' + titleY + '%, 0)',
                'opacity': opacity
            });
        },
        anima2: function () {
            const scrollNum = scrollTop - 7900;
            const opacity = rangeLimit(1 - this.meanOpacity * scrollNum, 1, 0);
            const titleY = rangeLimit(this.meanTitleY * scrollNum - 50, -50, -100);
            $('.map-title').css({
                'transform': 'translate3d(0, ' + titleY + '%, 0)',
                'opacity': opacity
            });
            $('.map-txts').css({
                'transform': 'translate3d(0, ' + this.titleY + '%, 0)',
                'opacity': 0
            });
        },
        anima3: function () {
            const scrollNum = scrollTop - 8300;
            const opacity = rangeLimit(this.meanOpacity * scrollNum, 1, 0);
            const txtsY = rangeLimit(this.meanTitleY * scrollNum, 0, -50);
            $('.map-txts').css({
                'transform': 'translate3d(0, ' + txtsY + '%, 0)',
                'opacity': opacity
            });
            $('.map-title').css({
                'transform': 'translate3d(0, -100%, 0)',
                'opacity': 0
            });
        },
        anima4: function () {
            const scrollNum = scrollTop - 8700;
            const opacity = rangeLimit(1 - this.meanOpacity * scrollNum, 1, 0);
            const txtsY = rangeLimit(this.meanTitleY * scrollNum - 50, -50, -100);
            $('.map-txts').css({
                'transform': 'translate3d(0, ' + txtsY + '%, 0)',
                'opacity': opacity
            });
        }
    }
    // 地图详情
    var mapDetails = {
        scale: 0,
        overScale1: .32,
        overScale2: 1,
        rotate: -90,
        overRotate1: 0,
        overRotate2: 180,
        x: -10,
        y: 50,
        areaTxtY: 15,
        init: function () {
            const num1 = 400;
            const num2 = 800;
            this.meanScale1 = this.overScale1 / num1; // 平均偏移量
            this.meanRotate1 = (this.overRotate1 - this.rotate) / num1;
            this.meanRotate2 = this.overRotate2 / num2;
            this.meanScale2 = (this.overScale2 - this.overScale1) / num2;
            this.meanX = this.x / num2;
            this.meanY = this.y / num2;
            this.meanOpacity = 1 / num1;
            this.meanAreaTxtY = this.areaTxtY / num1;
        },
        scroll: function () {
            if (scrollTop < 8300) this.anima0();
            if (scrollTop >= 8300 && scrollTop < 8700) this.anima1();
            if (scrollTop >= 8700 && scrollTop < 13700) this.anima2();
            if (scrollTop >= 13700) this.anima3();
        },
        anima0: function () {
            $('.map-pics').css({
                'transform': 'scale(0) rotate(' + this.rotate + 'deg) translate3d(0, 0, 0)'
            });
            $('.area').css({
                'opacity': 0
            });
            $('.area-txt').css({
                'opacity': 0,
                'transform': 'translate3d(0, ' + this.areaTxtY + '%, 0)',
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 8300;
            const scale = rangeLimit(this.meanScale1 * scrollNum, this.overScale1, 0);
            const rotate = rangeLimit(this.rotate + this.meanRotate1 * scrollNum, this.overRotate1, this.rotate);
            $('.map-pics').css({
                'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg) translate3d(0, 0, 0)'
            });
        },
        anima2: function () {
            const scrollNum = scrollTop - 8700;
            const scale = rangeLimit(this.overScale1 + this.meanScale2 * scrollNum, this.overScale2, 0);
            const rotate = rangeLimit(this.meanRotate2 * scrollNum, this.overRotate2, this.overRotate1);
            const x = rangeLimit(this.meanX * scrollNum, 0, this.x);
            const y = rangeLimit(this.meanY * scrollNum, this.y, 0);
            $('.map-pics').css({
                'transform': 'scale(' + scale + ') rotate(' + rotate + 'deg) translate3d(' + x + '%,' + y + '%, 0)'
            });
            const num = [9100, 9800, 10500, 11200, 11900, 12600, 13300];
            for ( let i = 0; i < $('.area-txt').length; i++) {
                const gap = scrollTop - num[i];
                let opacity;
                let areaTxtY;
                if (gap > 400) {
                    const scrollNum1 = gap - 400;
                    opacity = rangeLimit(1 - this.meanOpacity * scrollNum1, 1, 0);
                    areaTxtY = rangeLimit(-this.meanAreaTxtY * scrollNum1, 0, -this.areaTxtY);
                } else {
                    const scrollNum1 = gap;
                    opacity = rangeLimit(this.meanOpacity * scrollNum1, 1, 0);
                    areaTxtY = rangeLimit(this.areaTxtY - this.meanAreaTxtY * scrollNum1, this.areaTxtY, 0);
                }
                $('.area').eq(i).css({
                'opacity': opacity
                });
                $('.area-txt').eq(i).css({
                    'opacity': opacity,
                    'transform': 'translate3d(0, ' + areaTxtY + '%, 0)',
                });
            }
        },
        anima3: function () {
            $('.map').css('display', 'block')
            $('.map-pics').css({
                'transform': 'scale(1) rotate(' + this.overRotate2 + 'deg) translate3d(' + this.x + '%,' + this.y + '%, 0)'
            });
            $('.area-txt').css({
                'opacity': 0,
                'transform': 'translate3d(0, ' + -this.areaTxtY + '%, 0)',
            });
            $('.area-txt7').css({
                'opacity': 1,
                'transform': 'translate3d(0, 0, 0)',
            });
        }
    }
    // 大会资讯和直播合作    方便控制
    var footCont = {
        y: 0,
        overY: - $(window).height(),
        overY2: - $('.foot-cont').height(),
        init: function () {
            const num1 = 600;
            this.meanY = this.overY / num1; // 平均偏移量
        },
        scroll: function () {
            if (scrollTop < 13700) this.anima0();
            if (scrollTop >= 13700 && scrollTop < 14300) this.anima1();
            if (scrollTop >= 14300) this.anima2();
        },
        anima0: function () {
            $('.foot-cont').css({
                'transform': 'translate3d(0, ' + this.y + 'px, 0)',
                'display': 'none'
            });
        },
        anima1: function () {
            const scrollNum = scrollTop - 13700;
            const y = rangeLimit(this.meanY * scrollNum, 0, this.overY);
            const y2 = rangeLimit(this.overY + this.meanY * scrollNum, this.overY, this.overY*2);
            $('.foot-cont').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)',
                'display': 'block'
            });

            $('.map').css({
                'transform': 'translate3d(0, ' + y2 + 'px, 0)',
                'display': 'block'
            });
        },
        anima2: function () {
            const scrollNum = scrollTop - 14300;
            const y = rangeLimit(this.overY - scrollNum, this.overY, this.overY2);
            $('.foot-cont').css({
                'transform': 'translate3d(0, ' + y + 'px, 0)'
            });
            $('.map').css({
                'display': 'none'
            });
        }
    }
}
