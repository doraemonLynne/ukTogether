<?php 

    include 'database.php';

    session_start();  //开启session

    $username = $_SESSION['username'];//获得用户名
    $credits = $_SESSION['new_credits'];//获得积分
    $totalPage = $_SESSION['totalPage'];//获取总页数
    
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>North Wales</title>
    <link rel="stylesheet" type="text/css" href="css/reset.css">
    <link rel="stylesheet" type="text/css" href="css/function.css">
    <link rel="stylesheet" type="text/css" href="font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="bootstrap/js/bootstrap.min.js"></script>
    <script>
    //页面加载完重新刷新一次
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
            loadMsgData(1);
        }
        //数据显示
        function loadMsgData(pageNow){
            var url='paginationMsg.php?page='+pageNow+'.php';
            var _pageNow = pageNow;
            $.getJSON(url,function(data){ 

                $('.m-content .box .m-slices').remove();//把之前的内容给移除
                $('.m-content .box .msgChange').remove();//把之前的内容给移除
                $('#pagination li').remove();//把之前的分页给移除
                $('.m-content .msgComment').remove();//把之前的comment移除

                $.each(data,function(i,n){

                    var msgTitle="<h3>"+n["msg_title"]+"</h3>";
                    var msgContent="<p>"+n["msg_content"]+"</p>";
                    var userName="<em>"+n["user_name"]+"</em>";
                    var pubDate="<b>"+n["pub_date"]+"</b>";
                    var showComment="<a class='msgChange showCom' id='showCom"+n["msg_id"]+"'>Show/Hide Comment</a>"
                    var commentBtn="<a class='msgChange msgcomment' id='comment"+n["msg_id"]+"'>Add Comment</a>"
                    var updateBtn="<a class='msgChange msgUpdate' id='update"+n["msg_id"]+"'>Update<a>";
                    var delBtn="<a class='msgChange msgDel' href='msgdelete.php?id="+n["msg_id"]+"'>Delete</a>";
                
                    $(".m-content .box").append("<div class='m-slices'><div class='con-left f-fl'></div><div class='con-right f-fr'>"+msgTitle+msgContent+userName+pubDate+"</div></div><div class='f-fr msgBtns'>"+delBtn+updateBtn+commentBtn+showComment+"</div><div class='msgComment f-cb' id='msgComment"+n["msg_id"]+"'></div>");

                    $.getJSON("msgCommentData.php",function(data){
                        $.each(data,function(j,m){
                            var comContent="<p>"+m["comment_content"]+"</p>";
                            var comUser="<a>"+m["comment_user"]+"</a>";
                            var comDate="<b>"+m["comment_date"]+"</b>";
                            
                            if(m["msg_id"]==n["msg_id"]){
                                $('#msgComment'+n["msg_id"]).append("<div class='commentSlices' id='com"+m["comment_id"]+"msg"+n["msg_id"]+"'></div><div class='f-fr comment-right'></div>");

                                $('#showCom'+n["msg_id"]).css({'background':'rgb(243, 152, 57)',
                                    'color':'rgb(146,88,0)'});//若有comment，则按钮改变背景颜色
                            }

                            $("#com"+m["comment_id"]+"msg"+n["msg_id"]).append(comContent+comUser+comDate);

                        })   
                    })

                    $('#showCom'+n["msg_id"]).click(function(){
                        $(this).parent().siblings('#msgComment'+n["msg_id"]).fadeToggle(100); //显示隐藏评论
                    })

                    // 修改msg
                    $('#update'+n["msg_id"]).click(function(){
                        $('.theme-popover-mask').fadeIn(100);
                        $('.updateMsg-popover').slideDown(200);
                        $('#updateTitle').val(n['msg_title']);
                        $('#updateContent').val(n['msg_content']);
                        $('#updateId').val(n['msg_id']);
                    })
                    $('.updateMsg-popover .theme-poptit .popclose,#updateCancel').click(function(){
                        $('.theme-popover-mask').fadeOut(100);
                        $('.updateMsg-popover').slideUp(200);
                    });

                    //评论msg
                    $('#comment'+n["msg_id"]).click(function(){
                        $('.theme-popover-mask').fadeIn(100);
                        $('.msgComment-popover').slideDown(200);
                        $("#msgId").val(n["msg_id"]);
                    });

                    $('.msgComment-popover .theme-poptit .popclose,#commentCancel').click(function(){
                        $('.theme-popover-mask').fadeOut(100);
                        $('.msgComment-popover').slideUp(200);
                        $("#msgCommentForm")[2].reset();
                    });  
                });
                var totalPage="<?php echo $totalPage;?>";
                pagination(totalPage,_pageNow);// 分页
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
                if ($.trim($(this).text()) == '<<') { //trim去除两边空白
                    pageNow_ = 1;
                } else if ($.trim($(this).text()) == '>>') {
                    pageNow_ = totalPage;
                } else {
                    pageNow_ = $(this).text() == '' ? 1 : $(this).text();
                }
                loadMsgData(pageNow_);
            });
        }
    })
    </script>
    <script type="text/javascript">
    //新增msg
    $(function(){
        $('#addBtn').click(function(){
            $('.theme-popover-mask').fadeIn(100);
            $('.addMsg-popover').slideDown(200);
        })
        $('.addMsg-popover .theme-poptit .popclose,#msgCancel').click(function(){
            $('.theme-popover-mask').fadeOut(100);
            $('.addMsg-popover').slideUp(200);
            $('#msgForm')[0].reset();
            $('#msgForm')[1].reset();
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
                    <li><a href="main.php" style="background: #52cfeb;color: #fff;">Message</a></li>
                    <li><a href="picWall.php">Picture Wall</a></li>
                    <li><a href="#" id="addBtn">Add</a></li>
                    <li><a href="profile.php">Profile</a></li>
                    <li><a href="logout.php" id="Logout">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <div class="m-user">
        <h3>Hello!<b><?php echo $username?></b>!</h3>
        <div class="user-doc">
        <p>Welcome to the North Wales Forum!</p>
        <p>Your credits are<b> <?php echo $credits?></b>!</p>
        </div>
    </div>
    <div class="m-content f-cb">
        <div class="box f-cb">
        </div>
    </div>
    <div class="addMsg-popover theme-popover">
        <div class="theme-poptit">
        <a href="javascript:void(0);" title="关闭" class="popclose"><i class="fa fa-times fa-2x"></i></a>
        <h3>Add Message</h3>
        </div>
        <div class="theme-popbod dform m-pop">
            <form action="msgadd.php" method="post" id="msgForm">
                <div class="msgInp">
                    <label for="msgTitle">Title</label>
                    <input type="text" id="msgTitle" name="msgTitle" placeholder="Title" required="required" maxlength="50">
                </div>
                <div class="msgInp">
                    <label for="msgContent">Content</label>
                    <textarea id="msgContent" name="msgContent" placeholder="Content" required="required" maxlength="160" rows="8"></textarea>
                </div>
                <div class="msgBtns">
                    <button type="submit" id="msgSub" class="subBtn">Submit</button>
                    <button type="button" id="msgCancel" class="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    <div class="updateMsg-popover theme-popover">
        <div class="theme-poptit">
        <a href="javascript:void(0);" title="关闭" class="popclose"><i class="fa fa-times fa-2x"></i></a>
        <h3>Update Message</h3>
        </div>
        <div class="theme-popbod dform m-pop">
            <form action="msgupdate.php" method="post" id="updateForm">
                <div class="msgInp">
                    <label for="updateTitle">Title</label>
                    <input type="text" id="updateTitle" name="msgTitle" placeholder="Title" required="required" maxlength="50">
                </div>
                <div class="msgInp">
                    <label for="updateContent">Content</label>
                    <textarea id="updateContent" name="msgContent" placeholder="Content" required="required" maxlength="160" rows="8"></textarea>
                </div>
                <div class="msgInp">
                    <input type="hidden" id="updateId" name="updateId" placeholder="Title" required="required" maxlength="50">
                </div>
                <div class="msgBtns">
                    <button type="submit" id="updateSub" class="subBtn">Submit</button>
                    <button type="button" id="updateCancel" class="cancelBtn">Cancel</button>
                </div>
            </form>
        </div>
    </div>
    <div class="msgComment-popover theme-popover">
        <div class="theme-poptit">
        <a href="javascript:void(0);" title="关闭" class="popclose"><i class="fa fa-times fa-2x"></i></a>
        <h3>Add Comment</h3>
        </div>
        <div class="theme-popbod dform m-pop">
            <form action="msgComment.php" method="post" id="msgCommentForm">
                <div class="msgInp">
                    <input type="hidden" id="msgId" name="msgId" maxlength="10">
                </div>
                <div class="msgInp">
                    <input type="hidden" id="commentUser" name="commentUser" maxlength="50" value="<?php echo $username?>">
                </div>
                <div class="msgInp">
                    <label for="msgComment">Content</label>
                    <textarea id="msgComment" name="msgComment" placeholder="Content" required="required" maxlength="200" rows="8"></textarea>
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
