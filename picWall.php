<?php 

    include 'database.php';

    session_start();  //开启session

    $username = $_SESSION['username'];//获得用户名
    $totalPage = $_SESSION['totalPage'];//获取总页数
    // $picId=$_SESSION['pics_id'];//获取图片id
    
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Picture Wall</title>
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/function.css">
    <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css"> 
    <link type="text/css" rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" type="text/css" href="css/picWallStyle.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/uploadPreview.min.js"></script>
    <script type="text/javascript" src="js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="js/jquery.mixitup.min.js"></script>
    <script src="js/jquery.sliphover.min.js"></script>
    <script>
    //页面重新刷新一次，针对分页调到另一个界面分页数目不变的问题
    window.onload=function(){
        if (location.href.indexOf("?xyz=")<0)
        {
            location.href=location.href+"?xyz="+Math.random();
        }
    }
    </script>
    <script type="text/javascript">
    $(document).ready(function(){
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
                $('#portfoliolist .portfolio').remove();//把之前的内容给移除
                $('#pagination li').remove();//把之前的分页给移除
                $.each(data, function(i, n) {
                    
                    $("#portfoliolist").append("<div class='portfolio "+n["user_name"]+"' data-cat='"+n["user_name"]+"'><div class='portfolio-wrapper demo'><a class='imgA' href='images/users/"+n["user_name"]+"/"+n["pics_name"]+"'><img src='images/users/"+n["user_name"]+"/"+n["pics_name"]+"' title='"+n["pics_title"]+"<br/>"+n["user_name"]+"'></a><a class='commentA' id='comBtn"+n["pics_id"]+"'>Add Comment</a><a class='commentA showCom' id='showCom"+n["pics_id"]+"'>Show Comment</a><div id='comArea"+n["pics_id"]+"' class='eachComment'></div></div>");

                    $.getJSON("picCommentData.php",function(data){
                        $.each(data,function(j,m){
                            var comContent="<p>"+m["comment_content"]+"</p>";
                            var comUser="<a>"+m["comment_user"]+"</a>";
                            var comDate="<b>"+m["comment_date"]+"</b>";
                            
                            if(m["pics_id"]==n["pics_id"]){
                                $('#comArea'+n["pics_id"]).append("<div class='commentArea' id='com"+m["comment_id"]+"pic"+n["pics_id"]+"'></div>");
                                $('#showCom'+n["pics_id"]).css({'background':'rgb(243, 152, 57)',
                                    'color':'rgb(146,88,0)'});
                            }

                            $("#com"+m["comment_id"]+"pic"+n["pics_id"]).append(comContent+comUser+comDate);

                        })   
                    })

                    $('#comBtn'+n["pics_id"]).click(function(){
                        $('.theme-popover-mask').fadeIn(100);
                        $('.picComment-popover').slideDown(200);
                        $("#picId").val(n["pics_id"]);
                    });

                    $('.picComment-popover .theme-poptit .popclose,#commentCancel').click(function(){
                        $('.theme-popover-mask').fadeOut(100);
                        $('.picComment-popover').slideUp(200);
                        $("#picCommentForm")[2].reset();
                    });

                    $('#portfoliolist .demo').sliphover();

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

                var totalPage="<?php echo $totalPage;?>";
                pagination(totalPage,_pageNow);// 分页

                $(".showCom").click(function(){
                    $(this).siblings('.eachComment').fadeToggle();
                });

            });
        }
        /**
         * 分页
         * @param totalPage
         * @param _pageNow
         */
        function pagination(totalPage, _pageNow) {
            $('#pagination').append('<li><a> << </a></li>');
            $('#pagination').append('<li><a> >> </a></li>');
            for ( var i = 1; i <= totalPage; i++) {
                if (i == _pageNow) {
                    $('#pagination li:last').before('<li class="active"><a>' + i + '</a></li>');
                } else {
                    $('#pagination li:last').before('<li><a>' + i + '</a></li>');
                }
            }
            // 绑定click事件
            $('#pagination li a').bind('click', function() {
                var pageNow_ = 1;
                if ($.trim($(this).text()) == '<<') {
                    pageNow_ = 1;
                } else if ($.trim($(this).text()) == '>>') {
                    pageNow_ = totalPage;
                } else {
                    pageNow_ = $(this).text() == '' ? 1 : $(this).text();
                }
                loadPicData(pageNow_);
            });
        }
    })
    </script>
    <script type="text/javascript">
    $(function() {
        $("#fileClick").change(function() {
            $("#fileUrl").text($("#fileClick").val());
            $("#fileUrl").click(function () {
            $("#imgdiv").fadeIn();
            if(($("#imgdiv").height())>=500){
                $("#imgdiv").css({
                    'top':'30%',
                    'padding':'5px 20px'
            });}
            });
            $("#close").click(function() {
            $("#imgdiv").fadeOut();
            });
        });
        new uploadPreview({
            UpBtn: "fileClick",
            DivShow: "imgdiv",
            ImgShow: "imgShow"
        });
    })
    </script>
    <script type="text/javascript">
        $(function(){
            //新增msg
            $('#addBtn').click(function(){
                $('.theme-popover-mask').fadeIn(100);
                $('.addPic-popover').slideDown(200);
            })
            $('.addPic-popover .theme-poptit .popclose,#picCancel').click(function(){
                $('.theme-popover-mask').fadeOut(100);
                $('.addPic-popover').slideUp(200);
                $('#imgsForm')[0].reset();
                $('#fileClick').val('');
                $("#fileUrl").text('No Files');
            });
        })
    </script>
</head>

<body>
    <header>
        <div class="box">
            <nav>
                <ul class="f-cb">
                    <li><a href="index.php">Home</a></li>
                    <li><a href="story.html">Story</a></li>
                    <li><a href="main.php">Message</a></li>
                    <li><a href="picWall.php" style="background: #52cfeb;color: #fff;">Picture Wall</a></li>
                    <li><a href="#" id="addBtn">Add</a></li>
                    <li><a href="profile.php">Profile</a></li>
                    <li><a href="logout.php" id="Logout">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="m-content">
        <div class="container f-cb">
            <ul id="filters" class="clearfix">
                <li><span class="filter active" data-filter="admin maomao keke shishi">All</span></li>
                <li><span class="filter" data-filter="admin">Admin</span></li>
                <li><span class="filter" data-filter="maomao">Maomao</span></li>
                <li><span class="filter" data-filter="keke">Keke</span></li>
                <li><span class="filter" data-filter="shishi">Shishi</span></li>
                <li><span class="filter" data-filter="xiaoyu">Xiaoyu</span></li>
                <li><span class="filter" data-filter="witch">Witch</span></li>
            </ul>
            <div id="portfoliolist"> 
                <!-- <div class="portfolio">
                    <div class="portfolio-wrapper">
                        <a><img></a>
                        <a>CommentBtn</a>
                    </div>
                    <div class="comment">
                        <p></p>
                        <a></a>
                        <b></b>
                    </div>
                </div>  -->
            </div>
        </div>
    </div>
    <div class="addPic-popover theme-popover">
        <div class="theme-poptit">
        <a href="javascript:void(0);" title="关闭" class="popclose"><i class="fa fa-times fa-2x"></i></a>
        <h3>Add Picture</h3>
        </div>
        <div class="theme-popbod dform m-pop">
            <form action="upImgs.php" method="post" id="imgsForm" enctype="multipart/form-data">
                <div class="msgInp">
                    <label for="picTitle">Title</label>
                    <input type="text" id="picTitle" name="picTitle" placeholder="Title" required="required" maxlength="50">
                </div>
                <div class="msgInp f-cb">
                    <div class="fileWrap f-cb">
                        <div class="fileCon" id="fileUrl">No Files</div>
                        <div class="fileBtn">
                            <span>Add Files</span>
                            <input type="file" id="fileClick" name='imgfile' />
                        </div>
                    </div>
                </div>
                <div id="imgdiv">
                    <i class="fa fa-close fa-2x" id="close"></i>
                    <img id="imgShow"/>
                </div>
                <div class="msgBtns">
                    <button type="submit" id="picSub" class="subBtn">Submit</button>
                    <button type="button" id="picCancel" class="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    <div class="picComment-popover theme-popover">
        <div class="theme-poptit">
        <a href="javascript:void(0);" title="关闭" class="popclose"><i class="fa fa-times fa-2x"></i></a>
        <h3>Add Comment</h3>
        </div>
        <div class="theme-popbod dform m-pop">
            <form action="picComment.php" method="post" id="picCommentForm">
                <div class="msgInp">
                    <input type="hidden" id="picId" name="picId" maxlength="10">
                </div>
                <div class="msgInp">
                    <input type="hidden" id="commentUser" name="commentUser" maxlength="50" value="<?php echo $username?>">
                </div>
                <div class="msgInp">
                    <label for="picComment">Content</label>
                    <textarea id="picComment" name="picComment" placeholder="Content" required="required" maxlength="200" rows="8"></textarea>
                </div>
                <div class="msgBtns">
                    <button type="submit" id="commentSub" class="subBtn">Submit</button>
                    <button type="button" id="commentCancel" class="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    <div class="theme-popover-mask"></div>

    <!-- 04.11.2016新增pagination -->
    <div class="box">
        <ul class="pagination f-fr" id="pagination">
        </ul>
    </div>
</body>

</html>
