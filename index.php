<!DOCTYPE html>
<html>
<head>
<title>uktogether</title>
<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" type="text/css" href="css/layout.css"> -->
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/function.css">
    <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/indexStyle.css"/>
    <link rel="stylesheet" type="text/css" href="plugin/jquery.ma.infinitypush.css"/>
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/jquery.mixitup.min.js"></script>
    <script type="text/javascript" src="js/move-top.js"></script>
    <script type="text/javascript" src="js/easing.js"></script>
    <script type="text/javascript" src="js/responsiveslides.min.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript">
        $(function () {
            $("#slider3").responsiveSlides({
                manualControls: '#slider3-pager'
            });
        });
    </script>
    <script type="text/javascript">
        $(function () {
            $('#myCarousel').carousel({
                interval: 3000
            });
        });
    </script>
    <script type="text/javascript">
        jQuery(document).ready(function ($) {
            $(".scroll").click(function (event) {
                event.preventDefault();
                $('html,body').animate({
                    scrollTop: $(this.hash).offset().top
                }, 1000);
            });
        });
    </script>
    <script type="text/javascript" src="plugin/jquery.ma.infinitypush.js"></script>

    <script type="text/javascript">

        $(document).ready(function () {

            function responsive() {
                if ($(window).width() <= 767) {
                    console.log('mobile navigation');

                    $('#primary-navigation').infinitypush();

                    $('body').removeClass('desktop');
                } else {
                    console.log('desktop navigation');

                    $('#primary-navigation').infinitypush({
                        destroy: true
                    });

                    $('body').addClass('desktop');
                }
            }

            function windowResize() {
                $(window).resize(function () {
                    responsive();
                });
            }

            responsive();
            windowResize();

        });

    </script>
    <script type="text/javascript">
        $(function(){
            $(function() {
            init();
            });
            /**
             * 初始化
             */
            function init() {
                loadPicData(1);
            }
            //数据显示
            function loadPicData(pageNow){
                var url='paginationPics.php?page='+pageNow+'.php';
                var _pageNow = pageNow;
                $.getJSON(url, function(data) {
                    // $('#portfoliolist .portfolio').remove();//把之前的内容给移除
                    // $('#pagination li').remove();//把之前的分页给移除
                    $.each(data, function(i, n) {
                        
                        $("#portfoliolist").append("<div class='portfolio "+n["user_name"]+"' data-cat='"+n["user_name"]+"'><div class='portfolio-wrapper demo'><a class='imgA' href='images/users/"+n["user_name"]+"/"+n["pics_name"]+"'><img src='images/users/"+n["user_name"]+"/"+n["pics_name"]+"' title='"+n["pics_title"]+"<br/>"+n["user_name"]+"'></a></div></div>");

                        var filterList = {

                            init:function(){
                                // MixItUp plugin
                                $('#portfoliolist').mixitup({
                                    targetSelector: '.portfolio',
                                    filterSelector: '.filter',
                                    effects: ['fade'],
                                    easing: 'snap',
                                });             
                            }
                        };

                        // Run the show!
                        filterList.init();
                    });
                });
            }
        })
    </script>
</head>

<body>
<div class="g-wrap">
    <!-- 头部 -->
    <div class="g-hd">
        <!---start-slider-->
        <div class="slider">
            <!-- Slideshow -->
            <ul class="rslides" id="slider3">
                <li>
                    <img src="images/4.jpg" alt="">
                </li>
                <li>
                    <img src="images/5.jpg" alt="">
                </li>
                <li>
                    <img src="images/1.jpg" alt="">
                </li>
            </ul>
            <!-- Slideshow -->
            <ul id="slider3-pager">
                <li><a href="#"><span> </span></a></li>
                <li><a href="#"><span> </span></a></li>
                <li><a href="#"><span> </span></a></li>
            </ul>
        </div>
        <!--//End-slider-->
        <!-- 背景轮播 -->
        <!-- <div id="myCarousel" class="carousel slide">
        
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            
            <div class="carousel-inner">
                <div class="item active">
                    <div class="slide-1">
                    </div>
                </div>
                <div class="item">
                    <div class="slide-2">
                    </div>
                </div>
                <div class="item">
                    <div class="slide-3">
                    </div>
                </div>
            </div>
        </div> -->
        <!-- /背景轮播 -->
        <div class="g-hd-top">
            <div class="g-box">
                <a class="u-logo" href="#">UKTogether</a>
                <span class="u-sublogo">I'm your tag line</span>
                <!-- 导航-->
                <ul class="m-nav f-fr">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="#Features" class="scroll">Features</a></li>
                    <li><a href="#Works" class="scroll">Works</a></li>
                    <li><a href="#Team" class="scroll">Team</a></li>
                    <li><a href="#Contact" class="scroll">Contact</a></li>
                    <li><a href="loginnew.php">Login</a></li>
                </ul>
                <div id="wrapper" style="display: none;">
                    <nav id="primary-navigation">
                        <ul>
                            <li><a href="index.php">Home</a></li>
                            <li><a href="#Features">Features</a></li>
                            <li><a href="#Works">Works</a></li>
                            <li><a href="#Team">Team</a></li>
                            <li><a href="#Contact">Contact</a></li>
                            <li><a href="loginnew.php">Login</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- /导航 -->
            </div>
        </div>
        <div class="g-hd-main">
            <div class="g-box">
                <div class="m-tt">
                    <div class="u-firtt">
                        <span class="u-firtt-meet">Meet</span>
                        <span class="u-firtt-brandi">North Wales!</span>
                    </div>
                </div>
                <div class="u-social">
                    <i class="fa fa-twitter"></i>
                    <i class="fa fa-facebook"></i>
                    <i class="fa fa-google-plus"></i>
                    <i class="fa fa-dribbble"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- /头部 -->
    <!-- 主体 -->
    <div class="g-bd">
        <!-- FEATURES模块 -->
        <div class="m-features" id="Features">
            <div class="g-box">
                <!-- 每个模块的标题 -->
                <div class="m-heading">
                    <h2 class="m-heading-tt">FEATURES</h2>
                    <span class="m-heading-heart"><i class="fa fa-heart-o"></i></span>
                </div>
                <!-- /每个模块的标题 -->
                <div id="FeaturesCarousel" class="carousel slide m-list f-cb">
                    <!-- 轮播（Carousel）指标 -->
                    <ol class="carousel-indicators">
                        <li data-target="#FeaturesCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#FeaturesCarousel" data-slide-to="1"></li>
                    </ol>
                    <!-- 轮播（Carousel）项目 -->
                    <div class="carousel-inner f-cb">
                        <div class="item active">
                            <ul>
                                <li>
                                    <i class="fa fa-coffee"></i>
                                    <h3 class="m-list-tt">Story</h3>
                                    <div class="m-list-para">
                                        <p>Life will teach me how to live,</p>
                                        <p>hope will keep me alive,</p>
                                        <p>opportunity will ensure that I strive.</p>
                                        <p>But it's living alone the freedom,</p>
                                        <p>the free will that will show me how to survive....</p>
                                        <p>I will Learn. I will Grow. I will Rise.</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-pencil"></i>
                                    <h3 class="m-list-tt">Message</h3>
                                    <div class="m-list-para">
                                        <p>Life will teach me how to live,</p>
                                        <p>hope will keep me alive,</p>
                                        <p>opportunity will ensure that I strive.</p>
                                        <p>But it's living alone the freedom,</p>
                                        <p>the free will that will show me how to survive....</p>
                                        <p>I will Learn. I will Grow. I will Rise.</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-bullhorn"></i>
                                    <h3 class="m-list-tt">Picture Wall</h3>
                                    <div class="m-list-para">
                                        <p>Life will teach me how to live,</p>
                                        <p>hope will keep me alive,</p>
                                        <p>opportunity will ensure that I strive.</p>
                                        <p>But it's living alone the freedom,</p>
                                        <p>the free will that will show me how to survive....</p>
                                        <p>I will Learn. I will Grow. I will Rise.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="item">
                            <ul>
                                <li>
                                    <i class="fa fa-coffee"></i>
                                    <h3 class="m-list-tt">Profile</h3>
                                    <div class="m-list-para">
                                        <p>Life will teach me how to live,</p>
                                        <p>hope will keep me alive,</p>
                                        <p>opportunity will ensure that I strive.</p>
                                        <p>But it's living alone the freedom,</p>
                                        <p>the free will that will show me how to survive....</p>
                                        <p>I will Learn. I will Grow. I will Rise.</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-pencil"></i>
                                    <h3 class="m-list-tt">Development</h3>
                                    <div class="m-list-para">
                                        <p>Life will teach me how to live,</p>
                                        <p>hope will keep me alive,</p>
                                        <p>opportunity will ensure that I strive.</p>
                                        <p>But it's living alone the freedom,</p>
                                        <p>the free will that will show me how to survive....</p>
                                        <p>I will Learn. I will Grow. I will Rise.</p>
                                    </div>
                                </li>
                                <li>
                                    <i class="fa fa-bullhorn"></i>
                                    <h3 class="m-list-tt">Consulting</h3>
                                    <div class="m-list-para">
                                        <p>Life will teach me how to live,</p>
                                        <p>hope will keep me alive,</p>
                                        <p>opportunity will ensure that I strive.</p>
                                        <p>But it's living alone the freedom,</p>
                                        <p>the free will that will show me how to survive....</p>
                                        <p>I will Learn. I will Grow. I will Rise.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /FEATURES模块 -->
        <!-- WORKS模块 -->
        <div class="m-works" id="Works">
            <div class="g-box">
                <div class="m-heading">
                    <h2 class="m-heading-tt">WORKS</h2>
                    <span class="m-heading-heart"><i class="fa fa-heart-o"></i></span>
                </div>
                <div class="m-doc">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                </div>
                <!-- <div class="m-works-nav f-cb">
                    <ul class="f-cb">
                        <li><a href="#">All</a></li>
                        <li><a href="#">Branding</a></li>
                        <li><a href="#">Web</a></li>
                        <li><a href="#">Logo Design</a></li>
                        <li><a href="#">Photography</a></li>
                    </ul>
                </div> -->
                <div class="m-works-nav f-cb">
                    <ul id="filters" class="f-cb">
                        <li><span class="filter active" data-filter="admin maomao keke shishi">All</span></li>
                        <li><span class="filter" data-filter="admin">Admin</span></li>
                        <li><span class="filter" data-filter="maomao">Maomao</span></li>
                        <li><span class="filter" data-filter="keke">Keke</span></li>
                        <li><span class="filter" data-filter="shishi">Shishi</span></li>
                        <li><span class="filter" data-filter="xiaoyu">Xiaoyu</span></li>
                        <li><span class="filter" data-filter="witch">Witch</span></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /WORKS模块 -->
        <!-- 图片墙 -->
        <div class="m-picwalls f-cb">
            <!-- <ul>
                <li><img src="images/work-1.jpg"></li>
                <li><img src="images/work-2.jpg"></li>
                <li><img src="images/work-3.jpg"></li>
                <li><img src="images/work-4.jpg"></li>
                <li><img src="images/work-5.jpg"></li>
                <li><img src="images/work-6.jpg"></li>
                <li><img src="images/work-7.jpg"></li>
                <li><img src="images/work-8.jpg"></li>
            </ul> -->
            <div id="portfoliolist"> 
            </div>
        </div>
        <!-- /图片墙 -->
        <!-- MEET OUR TEAM模块 -->
        <div class="m-meetourteam" id="Team">
            <div class="g-box">
                <div class="m-heading">
                    <h2 class="m-heading-tt">MEET OUR TEAM</h2>
                    <span class="m-heading-heart"><i class="fa fa-heart-o"></i></span>
                </div>
                <div class="m-doc">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore</p>
                </div>
                <div id="TeamCarousel" class="carousel slide m-teampics f-cb">
                    <!-- 轮播（Carousel）指标 -->
                    <ol class="carousel-indicators">
                        <li data-target="#TeamCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#TeamCarousel" data-slide-to="1"></li>
                    </ol>
                    <!-- 轮播（Carousel）项目 -->
                    <div class="carousel-inner f-cb">
                        <div class="item active">
                            <ul>
                                <li><img src="images/thumb_IMG_0508_1024.jpg">
                                    <h3>Yingying T</h3>
                                    <h4>Managing Director</h4></li>
                                <li><img src="images/thumb_IMG_0505_1024.jpg">
                                    <h3>Linyong S</h3>
                                    <h4>Lead Designer</h4></li>
                                <li><img src="images/thumb_IMG_0506_1024.jpg">
                                    <h3>Maomao G</h3>
                                    <h4>Lead Developer</h4></li>
                                <li><img src="images/thumb_IMG_0507_1024.jpg">
                                    <h3>Kexin Z</h3>
                                    <h4>Sr.UI Designer</h4></li>
                            </ul>
                        </div>
                        <div class="item">
                            <ul>
                                <li><img src="images/thumb_IMG_0508_1024.jpg">
                                    <h3>Yingying T</h3>
                                    <h4>Managing Director</h4></li>
                                <li><img src="images/thumb_IMG_0505_1024.jpg">
                                    <h3>Linyong S</h3>
                                    <h4>Lead Designer</h4></li>
                                <li><img src="images/thumb_IMG_0506_1024.jpg">
                                    <h3>Maomao G</h3>
                                    <h4>Lead Developer</h4></li>
                                <li><img src="images/thumb_IMG_0507_1024.jpg">
                                    <h3>Kexin Z</h3>
                                    <h4>Sr.UI Designer</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /MEET OUR TEAM模块 -->
        <!-- SUN FUN FACTS模块 -->
        <div class="m-facts">
            <div class="g-box">
                <div class="m-heading">
                    <h2 class="m-heading-tt">SUN FUN FACTS</h2>
                    <span class="m-heading-heart"><i class="fa fa-heart-o"></i></span>
                </div>
                <div class="m-facts-list">
                    <ul class="f-cb">
                        <li>
                            <div class="m-list-detail">
                                <i class="fa fa-clock-o"></i>
                                <h3>3200</h3>
                                <h4>HOURS OF WORK</h4>
                            </div>
                        </li>
                        <li>
                            <div class="m-list-detail">
                                <i class="fa fa-user-plus"></i>
                                <h3>120</h3>
                                <h4>SATISFIED CLIENTS</h4>
                            </div>
                        </li>
                        <li>
                            <div class="m-list-detail">
                                <i class="fa fa-rocket"></i>
                                <h3>360</h3>
                                <h4>PROJECTS DELIVERED</h4>
                            </div>
                        </li>
                        <li>
                            <div class="m-list-detail">
                                <i class="fa fa-trophy"></i>
                                <h3>42</h3>
                                <h4>AWARDS WON</h4>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- /SUN FUN FACTS模块 -->
        <!-- LET'S DISCUSS模块 -->
        <div class="m-discuss" id="Contact">
            <div class="g-box">
                <div class="m-heading">
                    <h2 class="m-heading-tt">LET'S DISCUSS</h2>
                    <span class="m-heading-heart"><i class="fa fa-heart-o"></i></span>
                </div>
                <div class="m-doc">
                    <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam,eaque ipsa quae ab illo
                        inventore</p>
                </div>
                <div class="m-dis-main">
                    <div class="m-dis m-discuss-1">
                        <h3>Email Address</h3>
                        <p>
                        shilinyong_sly@uktogether.co
                        </p>
                    </div>
                    <div class="m-dis m-discuss-2">
                        <form>
                            <fieldset>
                                <h3>Say hello!</h3>
                                <ul>
                                    <li>
                                        <label for='name'>Name</label>
                                        <input type="text" id="name" name="name"></input>
                                    </li>
                                    <li>
                                        <label for='email'>Email</label>
                                        <input type="email" id="email" name="email"></input>
                                    </li>
                                    <li class="u-message">
                                        <label for='message'>Message</label>
                                        <input type="text" id="message" name="message"></input>
                                    </li>
                                </ul>
                            </fieldset>
                                <span class="u-enve"><i class="fa fa-envelope"></i>
                                <a href="#">Send Message</a></span>
                        </form>
                    </div>
                    <div class="m-dis m-discuss-3">
                        <ul>
                            <li><i class="fa fa-behance"></i></li>
                            <li><i class="fa fa-twitter"></i></li>
                            <li><i class="fa fa-dribbble"></i></li>
                            <li><i class="fa fa-facebook-square"></i></li>
                            <li><i class="fa fa-google-plus"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- <div class="m-map f-cb">
            </div> -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3146627.8634626623!2d-96.59883788421166!3d39.629933318909686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1399976101005"></iframe>
        </div>
        <!-- /LET'S DISCUSS模块 -->
    </div>
    <!-- /主体 -->
    <!-- 尾部 -->
    <div class="g-ft">
        <div class="g-box f-cb">
           <!--  <ul class="f-cb">
                <li>
                    <h3>Lynne</h3>
                    <p>eusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </li>
                <li>
                    <h4>Subscribe</h4>
                    <div class="u-sub">
                        <input type="text" id="subscribe" name="subscribe"></input>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                    <p class="m-foot-ensmod">eusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </li>
                <li>
                    <h4>Explore</h4>
                    <ul class="u-ft-ul">
                        <li class="u-ft-li">
                            <ul class="u-ft-sonul">
                                <li>Envato</li>
                                <li>Themecurve</li>
                                <li>Kreativeshoecase</li>
                                <li>Freebiescurve</li>
                            </ul>
                        </li>
                        <li class="u-ft-li">
                            <ul class="u-ft-sonul">
                                <li>Themeforest</li>
                                <li>Microsoft</li>
                                <li>Google</li>
                                <li>Yahoo</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <div class="m-last-li">
                        <p class="m-forthline">Created with<i class="fa fa-heart-o"></i>by <b>themecurve</b>,</p>
                        <p class="m-forthline">exclusive for Kreativeshoecase</p>
                        <p class="u-copy">&copy; 2014 Brandi.All Rights Reserved.</p>
                    </div>
                </li>
            </ul> -->
            <p class="u-copy">&copy; 2016 uktogether. All Rights Reserved.</p>   
        </div>
        <script type="text/javascript">
            $(document).ready(function () {
                /*
                 var defaults = {
                 containerID: 'toTop', // fading element id
                 containerHoverID: 'toTopHover', // fading element hover id
                 scrollSpeed: 1200,
                 easingType: 'linear'
                 };
                 */

                $().UItoTop({
                    easingType: 'easeOutQuart'
                });

            });
        </script>
        <a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
    </div>
    <audio src="media/Bye bye my blue.mp3" controls="controls" autoplay="true" loop="loop" style="display: none;">
    </audio>
    <!-- /尾部 -->
</div>
</body>
</html>
