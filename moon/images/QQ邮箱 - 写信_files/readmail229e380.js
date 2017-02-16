(function(v){
var h={_sQReply:"quickreply",_sQSource:"source",_sQSendBtn:"sendbtn",_sQReplyTxtContainer:"qmQuickReplyTextContainer",_sQReplyBtnContainer:"qmQuickReplyButtonContainer",_sAfterSendDiv:"afterSendDiv",_sAfterSendingDiv:"afterSendingDiv",_sQuickReplyPart:"QuickReplyPart",_sQMEditorArea:"QMEditorArea",_sQMEditorToolArea:"QMEditorToolBarPlusArea",_sJumpToNewWin:"jumpToNewWin",_sReplyFrm:"replyfrm",_sSubMailStartDiv:"submail_start_div",_sContentDiv:"contentDiv",_sContentClassName:"qm_converstaion_body",_sImgStar:"img_star",_sTopBtn:"img_mailtop",_sStarStatus:"starStatus",_sMailtopStatus:"mailtopStatus",_sStarTopStatus:"starTopStatus",_sTagContainer:'tagContainer',_sMailContainer:"mailContentContainer",_sSendTimeMsg:"send_time_msg",_sAttachment:"attachment",_sPageEnd:"pageEnd",_sNextMailTop:"nextmail_top",_sNextMailBt:"nextmail_bt",_sNextNewMail:"nextnewmail",_sNextNewDiv:"nextnewDiv",_sQQMailBgMusicInfo:"QQMailBgMusicInfo",_sBgMusic:"bgmusic",_sMp3PlayerContainer:"mp3player_container",_sMp3PlayerInfo:"mp3player_info",_sSubMail:"submail",_sFold:"fold",_sDetail:"detail",_sSum:"sum",_sExpand:"expand",_sDetailBtn:"detailBtn",_sReferInfo:"referinfo",_sSettingGroup:"setting_group",_sRmd:"rmd",_sRemarkContent:"remarkContent",_sRemarkContainer:"remarkcontainer",_sRemarkText:"remarktext",_sRemarkWrite:"remarkwrite",_sRemarkRead:"remarkread",_sRemarkSave:"remarksave",_sSenderInfo:"senderInfo",_sSenderInfo2:"senderInfo2",_sSenderInfo3:"senderInfo3",_sMainMail:"mainmail",_sRejectGroupY:"rejectgroupy",_sRejectGroupN:"rejectgroupn",_sCheatCodeBar:"spam",_sGreenBar:"cheatcode_greenbar",_sGreenBarText:"greenbar_text"},l={_sConvReAndFw:"convreandfw",_sSpam:"spam",_sAdMail:"adMail",_sMoreOprContainer:"moreoprContainer"},I="qmTranslate",f="\u8BF7\u5728\u6B64\u8F93\u5165\u5907\u6CE8...",k=T(['<img src="$images_path$webp/spacer1e9c5d.gif" class="icon_addMusic_d"/>','&nbsp;<a href="http://cgi.music.soso.com/fcgi-bin/m.q?w=$title$%20$author$&t=0" target="_blank">$title$ - $author$</a>']),j=TE(["/cgi-bin/mail_list?sid=$sid$&folderid=$folderid$&folderkey=$folderkey$",'$@$if($s$=="from_unread_list")$@$','&flag=new&s=unread','$@$else if($s$=="from_star_list")$@$','&flag=star&s=star','$@$endif$@$','$@$if($more$)$@$','$more$','$@$endif$@$']),m="/cgi-bin/readmail?sid=$sid$&mailid=$mailid$",n=TE([m,"&t=","$@$if($t$)$@$","$t$","$@$else$@$","compose","$@$endif$@$","&s=$s$&disptype=$disptype$"]),c=TE(['/cgi-bin/readmail?sid=$sid$&t=compose&s=forward&disptype=html&from=attachfolder&getSubjectFromAttachName=1','&mailattach=$mailid$|$attachid$|$attachname$|$fileextenal$|$filebyte$']),d=TE(["/cgi-bin/readtemplate?sid=$sid$&t=compose&s=cnew&bigatt=1&attid=$attachid$&filesize=$filesize$&downpage=$downpage$&exptime=$exptime$&nocheckframe=true&urifilename=$urifilename$&getSubjectFromAttachName=1&k=$k$&code=$code$&fid=$fid$"]),p=TE("/cgi-bin/grouplist?oper=$oper$&sid=$sid$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=$action$"),o=TE("/cgi-bin/grouplist?oper=reject&sid=$sid$&reject=$yn$&gid=$gid$@groupmail.qq.com&t=mail_mgr2&mailaction=reject_group"),t=TE("/cgi-bin/reader_list?type=home&classtype=allfriend&uin=$mail.from.qq$&t=reader_personal&sid=$sid$&s=sidebar"),s=TE("/cgi-bin/mail_list?sid=$sid$&t=mail_list_preview&sender=$mail.from.addr$&receiver=$mail.from.addr$&matchtype=include&folderid=all&page=0&name=$mail.from.name$&pagesize=5&mailidx=$mailid$&listmode=0&from=sidebar&s=$s$&record=n"),g=TE(['<form method="$sMethod$" id="$sFormId$" name="$sFormId$" target="$sTarget$" action="$sAction$" enctype="multipart/form-data">','$@$for($oInputs$)$@$','<input name="$name$" type="hidden" value="$value$"/>','$@$endfor$@$','</form>']),b='"$@$eval getTop().htmlEncode($name$)$@$"&lt;$addr$&gt;; ',a=TE(['$@$for($addrs$)$@$','"$@$eval getTop().encodeNick($name$)$@$"<$addr$>; ','$@$endfor$@$']),q=TE(['<div id="container" style="line-height:20px">','<div>','<div style="margin:8px 4px 0 0;">','<a class="right" id="other" href="/cgi-bin/grouplist?sid=$sid$&t=setting_group&oper=list">\u7BA1\u7406\u5176\u4ED6\u7FA4</a>','<p style="margin:0;">\u5BF9\u6B64\u7FA4:</p>','</div>','<div style="margin-bottom:5px;margin-left:8px;">','<div style="padding:5px 0 3px">','<input type="radio" name="qqnotify" class="cb" value="notifyyes" $@$if(!$bReject$&&$bNotify$)$@$checked="true"$@$endif$@$ id="qqnotify"/>','<label for="qqnotify" style="color:#333">\u63A5\u6536\u65B0\u90AE\u4EF6\uFF0C\u5E76\u5728QQ\u63D0\u9192</label>','</div>','<div style="padding:5px 0 3px">','<input type="radio" name="qqnotify" class="cb" value="notifyno" $@$if(!$bReject$&&!$bNotify$)$@$checked="true"$@$endif$@$ id="noqqnotify"/>','<label for="noqqnotify" style="color:#333">\u63A5\u6536\u65B0\u90AE\u4EF6\uFF0C\u4E0D\u5728QQ\u63D0\u9192</label>','</div>','<div style="padding:5px 0 3px;">','<input type="radio" name="qqnotify" class="cb" value="reject" $@$if($bReject$)$@$checked="true"$@$endif$@$ id="reject"/>','<label for="reject" style="color:#333">\u62D2\u6536\u90AE\u4EF6</label>','</div>','</div>','</div>','<div style="position:relative;border-top:1px solid #ccc;padding-top:8px;$@$if($bReject$)$@$display:none;$@$endif$@$;" class="clear" id="setnewdiv">','<p style="margin:0;">\u5BF9\u6B64\u7FA4\u5DF2\u8BFB\u90AE\u4EF6:</p>','<div style="margin-left:8px;">','<div style="padding:5px 0 3px">','<input type="radio" name="unread" class="cb" value="setnewyes" $@$if($bNewreply$)$@$checked="true"$@$endif$@$ id="setunread"/>','<label for="setunread" style="color:#333">\u6709\u65B0\u56DE\u590D\u65F6\uFF0C\u6807\u4E3A\u672A\u8BFB</label>','</div>','<div style="padding:5px 0 3px">','<input type="radio" name="unread" class="cb" value="setnewno" $@$if(!$bNewreply$)$@$checked="true"$@$endif$@$ id="setread"/>','<label for="setread" style="color:#333">\u6709\u65B0\u56DE\u590D\u65F6\uFF0C\u4FDD\u6301\u5DF2\u8BFB</label>','</div>','</div>','</div>','<div style="padding:10px 0;overflow:hidden;" class="clear">','<a class="btn_blue btn_space" id="save">\u4FDD\u5B58\u66F4\u6539</a>','<a class="btn_gray" href="javascript:;" id="cancel">\u53D6\u6D88</a>','</div>','</div>']),u={_REPLY_DLG:T(['<div class="dialog_feedback">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','<div class="dialog_f_t">\u662F\u5426\u8981\u56DE\u590D\u5168\u90E8\u6536\u4EF6\u4EBA\uFF1F</div>','<div class="dialog_f_d"> \u60A8\u662F\u5BC6\u9001\u7684\u6536\u4EF6\u4EBA\uFF0C\u5176\u4ED6\u6536\u4EF6\u4EBA\u4E0D\u77E5\u9053\u60A8\u6536\u5230\u4E86\u6B64\u90AE\u4EF6\uFF01</div>','</div>','</div>']),_REPLY_DLG_FOOT:T(["<input type=button id='replyall' class='btn wd4' value='\u56DE\u590D\u5168\u90E8'>","<input type=button class='btn wd4' value='\u56DE\u590D\u53D1\u4EF6\u4EBA' id='reply'>","<input type=button class='btn wd4' value='\u53D6\u6D88' id='cancel'>"]),_REFERPART:TE(['<div><br></div><div><br></div>','<div style="font-size: 12px;font-family: Arial Narrow;padding:2px 0 2px 0;">','------------------&nbsp;$REFER$&nbsp;------------------','</div>','<div style="font-size: 12px;background:#efefef;padding:8px;">','<div><b>$FROM$</b> ',b,'</div>','<div><b>$DATE$</b> $date$</div>','<div><b>$TO$</b> $@$for($to$)$@$',b,'$@$endfor$@$</div>','$@$if($cc.length$)$@$','<div><b >$CC$</b> $@$for($cc$)$@$',b,'$@$endfor$@$</div>','$@$endif$@$','<div><b>$SUBJECT$</b> $subject$</div>','</div><div><br></div>','$orgcontent$'])},i={_ZH_CN:{REFER:"\u539F\u59CB\u90AE\u4EF6",FROM:"\u53D1\u4EF6\u4EBA:",DATE:"\u53D1\u9001\u65F6\u95F4:",TO:"\u6536\u4EF6\u4EBA:",CC:"\u6284\u9001:",SUBJECT:"\u4E3B\u9898:"},_EN_US:{REFER:"Original",FROM:"From:",DATE:"Date:",TO:"To:",CC:"Cc:",SUBJECT:"Subject:"}},e=T("/cgi-bin/config_blackwhitelist?sid=$sid$&act=whitelist&Fun=submit&pagefrom=readmail&group=$fromaddr$&sloc=readmail_yellow_tip"),r=T("/cgi-bin/report_cgi?r_type=$rtype$&r_result=$rresult$&r_msg=$rmsg$");
function x(M,N)
{
var Q=M.sFormId||unikey(),O=S(Q,M.oWin),P=[];
if(O)
{
removeSelf(O);
}
N=N||{};
N.sid=N.sid||getSid();
E(N,function(U,R){
P.push({name:R,value:U});
});
M.oInputs=P;
insertHTML(M.oWin.document.body,"beforeEnd",g.replace(extend({sFormId:Q,sTarget:"actionFrame",sMethod:"POST"},M)));
return S(Q,M.oWin);
}
var z=function(M){
return {processCallback:function(N){
var Q=getTop();
for(var O in N)
{
var P=N[O];
var R=P.sValue.replace(new RegExp('('+P.sLocation+')','g'),function(U){
return ['<span onmouseover="QMReadMail.showLocationTip(this)" class="readmail_locationTip" onmouseout="QMReadMail.hideLocationTip(this)">',U,'</span>'].join('');
});
Q.replaceHTML(N[O].oNode,R);
}
if(N.length>0)
{
Q.ossLog('delay',0.05,'stat=previewer&from=3&suffix='+M.sMailId);
Q.ossLog('delay','all','stat=sgkv&group=readmaillocidt&cnt='+N.length);
}
}};
};
function w(N,M)
{
rdVer(N,1);
if(!rdVer.check(M))
{
reloadFrm(M);
}
}
function A(R,Q,N,O,P)
{
var U=new Date();
var V=new Date(R,Q,N,O,P,0);
var M=U>V;
if(M)
{
return ['\u6B64\u90AE\u4EF6\u662F\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u5DF2\u5728<span style="color:black;" >&nbsp;',R,'\u5E74',Q,'\u6708',N,'\u65E5',O,'\u65F6',P,'\u5206','&nbsp;</span>\u53D1\u51FA\u3002'].join("");
}
else{
return ['\u6B64\u90AE\u4EF6\u662F\u5B9A\u65F6\u90AE\u4EF6\uFF0C\u5C06\u5728<span style="color:black;" >&nbsp;',R,'\u5E74',Q,'\u6708',N,'\u65E5',O,'\u65F6',P,'\u5206','&nbsp;</span>\u53D1\u51FA\u3002'].join("");
}
}
function H(M)
{
return filteScript(M.replace(/<div id=\'?\"?QQMailBgMusicInfo\'?\"?.*?>.*?<\/div>/ig,"").replace(/<player .*?><\/player>/ig,"").replace(/(^\s+)|(\s+$)/ig,""));
}
function C(M)
{
var N=true,P;
try{
P=getTop().goUserInfo.get('RealDefaultAllMail');
}
catch(Q)
{
return false;
}
function O(R)
{
if(!R)
{
return false;
}
for(var W=0;W<R.length;W++)
{
if(R[W])
{
var U=R[W].addr||"",V=R[W].qq;
if(V==g_admuin||U.indexOf("@g.qq.com")>0)
{
return true;
}
for(var X=0;X<P.length;X++)
{
if((P[X].email||"").toLowerCase()==U.toLowerCase())
{
return true;
}
}
}
}
return false;
}
if(P&&P.length)
{
N=!(O(M.to)||O(M.cc)||O([M.from]));
}
else{
N=false;
}
return N;
}
function D(M,N)
{
return (M.ctrlKey&&M.keyCode==13||M.altKey&&M.keyCode==83);
}
function y()
{
var M=getTop(),N="http://x.soso.com/js/xf/xflib2.0.js";
location.protocol==="https:"&&(N=["/cgi-bin/magurl?sid=",M.getSid(),"&act=rep&url=",N].join(""));
M.loadJsFile(N,true,M.document,function(){
var O=M.finds("[ck=xfDl]",M.getMainWin().document);
if(M.XFLIB&&M.XFLIB.IsXFInstalled())
{
M.E(O,function(P){
M.show(P,true);
});
}
});
}
function J(M)
{
var P=calcPos(M),N=calcPos(S("mainFrame",getTop())),O=QMMenu("readmail_qb_push_tip");
if(O)
{
O.show();
}
else{
new QMMenu({sId:"readmail_qb_push_tip",sClassName:"qmpanel_shadow",nX:P[3]-160,nY:P[2],nWidth:258,bAutoClose:true,oEmbedWin:this._moWin,oItems:[{nHeight:110,sItemValue:['<div style="line-height:20px;padding:15px 0 15px;white-space:normal;">','\u5EFA\u8BAE\u5B89\u88C5QQ\u6D4F\u89C8\u5668\uFF0C\u53EF\u6709\u6548\u62E6\u622A\u9493\u9C7C\u548C<br/>\u6B3A\u8BC8\u7F51\u7AD9\uFF0C\u9632\u6B62\u5E10\u53F7\u4FE1\u606F\u88AB\u76D7\u3002','</div>','<div class="txt_right" style="line-height:30px;">','<a href="javascript:;" class="btn_blue" id="setup_btn">\u7ACB\u5373\u5B89\u88C5</a>','</div>'].join('')}],onload:function(){
var Q=this;
LogKV({sValue:"getinvestigate|readmail|qbpushtip|show"});
addEvent(Q.S("setup_btn"),"click",function(R){
LogKV({sValue:"getinvestigate|readmail|qbpushtip|click"});
window.open(getTop().gbIsMac?'http://dldir1.qq.com/invc/tt/QQBrowser_for_QQMail.dmg':"http://dldir1.qq.com/invc/tt/QQBrowser_Setup_Email_fjck.exe","_blank");
});
}});
}
}
function B(M)
{
if(M.offsetY<M.fromElement.clientHeight/2)
{
QMMenu("readmail_qb_push_tip").hide();
}
}
var F={};
var G=F.qmBaseDM=F._qmBaseDM=inherit("_qmBaseDM",Object,function(M){
return {$_constructor_:function(){
var N=arguments;
if(N.length)
{
var O=this;
O._moContext=N[N.length-1];
O._moWin=O._moContext.oWin;
O._msModuleName=O._moContext.sModuleName;
O._init.apply(O,arguments);
}
},_initMemVar:function(){
},_setEvent:function(){
},_ready:function(){
},_startSubMod:function(){
},_init:function(){
var N=this;
N._initMemVar.apply(N,arguments);
N._setEvent.apply(N,arguments);
N._ready.apply(N,arguments);
N._getDealCustomUIMethod();
},_getDealCustomUIMethod:function(){
var N=this;
var O=N._moWin;
if(O.location.href.indexOf('t=mail_list_ad')!=-1&&O.dealCustomUI)
{
N.dealCustomUI=O.dealCustomUI;
}
else{
N.dealCustomUI=function(){
};
}
},attr:function(N,O,P){
var Q=attr(N,O,P);
if(Q==null&&N)
{
return P===undefined?N[O]:(N[O]=P);
}
return Q;
},S:function(N){
var O=this;
return S(N+(O._moContext.sAux||""),O._moWin);
},SN:function(N){
var O=this;
return SN(N+(O._moContext.sAux||""),O._moWin);
},context:function(N){
var O=this;
N=N||"sContext";
return O._moContext[N];
},getMailId:function(){
return this.context("sContext");
},getFromInfo_:function(){
return this._moMailInfo.from||{};
},_handle:function(O,N,P){
var U=this,R=getEventTarget(N),Q=R.ownerDocument,Y=U._msModuleName,W,X,V;
while(R&&isObjContainTarget(O,R))
{
W=attr(R,P);
if(W&&!X)
{
X=W;
V=R;
}
W=attr(R,G._MOD_ATTR);
if(W)
{
if(W==Y)
{
if(X&&typeof (U[X])=="function")
{
U[X](V,U.getMailId(),N);
}
break;
}
else{
X=null;
}
}
R=R.parentNode;
}
},md:function(){
getTop().md();
},mu:function(){
getTop().mu();
},confirmOpen:function(O,N){
getTop().confirmBox({title:"\u8B66\u544A",msg:['<div class="dialog_f_t" style="margin-top: 2px;font-weight: normal;"> '+O.msg+'</div>'].join(""),confirmBtnTxt:O.btnTxt,cancelBtnTxt:'\u53D6\u6D88',onshow:function(){
gbIsMac||this.S("cancel").focus();
getTop().LogKV("attachanti|readmail|"+(O.kvKey||"total"));
},onreturn:function(P){
P&&(typeof N=="function")&&N();
}});
return false;
},checkPoison:function(N){
var O=this,P=getTop(),Q=N||O.getMailId();
QMAjax.send(T('/cgi-bin/do?action=checkvirus&sid=$sid$&mailid=$mailid$&t=do.json&cacheage=7200&ver=$ver$').replace({sid:getSid(),mailid:Q,ver:getTop().CommVer.get("checkPoison")}),{method:"GET",onload:function(R,U){
var ad=trim(U);
if(R&&ad.indexOf("(")==0)
{
var ac=evalValue(ad);
for(var ae in ac)
{
if(!ae)
{
return;
}
if(ac[ae].isSafe=="0"||ac[ae].isSpam=="1")
{
var W=P.S(["span_attachIndex_",Q,"_",ae].join(""),O._moWin);
if(ac[ae].isSafe=="0")
{
W.style.display="";
P.attr(W,"poisonname",ac[ae].virus);
P.S(["span_",Q,"_safe"].join(""),O._moWin).style.display="none";
}
var aa=W&&W.parentNode&&W.parentNode.parentNode,Y=P.finds("div.down_big",aa),Z=P.finds("a",aa.parentNode);
if(Y&&Y.length>0&&(Y=Y[0]))
{
var V=P.finds("a",Y);
if(V&&V.length>0)
{
V[0].href+="&kvclick=attach|poison|download";
V[0].onclick=(function(af){
return function(ag){
P.preventDefault(ag||O._moWin.event);
O.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u4E0B\u8F7D\u3002",btnTxt:"\u7EE7\u7EED\u4E0B\u8F7D",kvKey:"download"},function(){
P.goUrlMainFrm(af[0].href,false,true);
});
};
})(V);
P.attr(V[1],"ispoison","1");
}
}
if(Z&&Z.length>0&&(Z=Z[0]))
{
P.attr(Z,"ispoison","1");
}
var X=P.S("attach_tools_download_"+ae,O._moWin),ab=P.S("attach_tools_preview_"+ae,O._moWin);
ab&&(P.attr(ab,"ispoison","1"));
if(X)
{
X.onclick=(function(af){
return function(ag){
P.preventDefault(ag||O._moWin.event);
O.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u4E0B\u8F7D\u3002",btnTxt:"\u7EE7\u7EED\u4E0B\u8F7D",kvKey:"download"},function(){
P.goUrlMainFrm(af[0].href,false,true);
});
};
})(X);
}
}
}
}
}});
},_POISON_WARNING_TEMP:T(['<div unselectable="on" id="div_poision_warning" class="newtips" style="top: $top$px; left: $left$px;" mor="setInStatus" mot="setOutStatus">','<div unselectable="on" class="tipcontainer" style="opacity: 1;">','<span class="arrowup" style="margin-left: 106px;"></span>','<span class="arrowleft" style="display: none; margin-top: 106px;"></span>','<span class="arrowright" style="display: none; margin-top: 106px;"></span>','<div unselectable="on" class="container">','<div unselectable="on" class="contentcontainer">','<div unselectable="on" class="content" style="position:relative;zoom:1;padding:15px 14px 15px 14px">','<div class="tipstxt" style="padding-left:0px">','<b>\u75C5\u6BD2\u540D\uFF1A$poisonname$</b>','<br>','<span class="ico_Avira"></span>','\u68C0\u67E5\u7ED3\u679C\u7531\u7535\u8111\u7BA1\u5BB6\u4E91\u67E5\u6740\u5F15\u64CE\u63D0\u4F9B','</div>','</div>','</div>','</div>','</div>','</div>']),showPoisonWaring:function(N){
var Q=getTop(),O=this;
var P=Q.calcPos(N),R=Q.S("div_poision_warning",O._moWin);
if(R)
{
Q.removeSelf(R);
O._nTimeoutIndex&&clearTimeout(O._nTimeoutIndex);
}
Q.insertHTML(O._moWin.document.body,"afterBegin",O._POISON_WARNING_TEMP.replace({"top":P[0],"left":P[3],"poisonname":Q.attr(N.parentNode.parentNode,"poisonname")}));
var R=Q.S("div_poision_warning",O._moWin),U=Q.calcPos(R);
if(P[3]+P[4]/2+U[4]/2<=O._moWin.document.body.clientWidth)
{
R.style.top=P[0]+P[5]+"px";
if(P[3]+P[4]/2>=U[4]/2)
{
R.style.left=P[3]+P[4]/2-U[4]/2-P[4]+"px";
}
else{
R.style.left="0px";
}
}
else{
R.style.top=P[0]+P[5]+"px";
R.style.left=O._moWin.document.body.clientWidth-U[4]-65+"px";
}
},setOutStatus:function(N){
var P=getTop(),O=this;
P.attr(N,"isOut","1");
O.hidePoisonWaring(N);
},setInStatus:function(N){
var P=getTop(),O=this;
P.attr(N,"isOut","0");
},hidePoisonWaring:function(){
var O=getTop(),N=this;
N._nTimeoutIndex=setTimeout(function(){
var P=O.S("div_poision_warning",N._moWin);
if(P&&O.attr(P,"isOut")!="0")
{
O.removeSelf(P);
}
},100);
},evt:function(N,O){
var Q=this,P=function(R){
R=typeof (R)=="string"?Q.S(R):R;
E(N,function(U){
var V=G._oEvtMap[U];
V&&addEvent(R,V,function(W){
Q._handle(R,W,U);
});
});
};
if(typeof (O)=="string")
{
O=Q.S(O);
}
if(O.nodeType)
{
P(O);
}
else{
E(O,function(R){
P(R);
});
}
}};
},{_MOD_STATE:"_module_state_",_MOD_ATTR:"module",_CON_ATTR:"context",_AUX_ATTR:"aux",_oEvtMap:{mor:"mouseover",mot:"mouseout",ck:"click",md:"mousedown",mu:"mouseup",dck:"dblclick"}});
F.qmReadMail=inherit("qmReadMail",F._qmBaseDM,function(M){
return {_ready:function(){
var N=this;
N._initWinFunc.apply(N,arguments);
N._moWin.document.body.focus();
setTimeout(function(){
N._pageReady.apply(N,arguments);
y();
N.dealCustomUI('initPage',N._moWin);
N.osslogImgAttach_();
if(N._msModuleName==="qmConvMail")
{
for(_subMailId in N._moSubMails)
{
N.checkPoison(_subMailId);
break;
}
}
else{
N.checkPoison();
}
},50);
},_rInsPageEnd:function(){
var O=this,N=O.S(h._sPageEnd);
if(getTop().S("qqmail_mailcontainer",O._moWin))
{
getTop().S("qqmail_mailcontainer",O._moWin).appendChild(N);
}
else{
O._moWin.document.body.appendChild(N);
}
show(N,true);
},_fakeReadMail:function(){
var P=this,O=P._moConfig,N=new QMCache({appName:"mail_rank"});
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&rank=$rank$&mailid=$mailid$&t=readsubmail&mode=fake&s=r2&base=$base$&pf=$pf$&folderid=$folderid$&folderkey=$folderkey$').replace({sid:getSid(),mailid:P.getMailId(),pf:rdVer.isPre(O.folderid)?1:0,folderid:O.folderid,folderkey:O.folderkey,rank:N.getData(P.getMailId()),base:rdVer("BaseVer",0)}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(Q,R){
var W=trim(R);
if(Q&&W.indexOf("(")==0)
{
var V=evalValue(W);
if(V)
{
P._updatePreAndNext(V);
}
}
else{
var U=getActionWin().document;
U.open();
U.write(R);
}
}});
},_flushFolder:function(){
var P=this,O=P._moConfig,Q=P.getMailId(),N=QMMailCache.getData(Q);
if((O.bNewMail==1)&&(!N||N.bUnread===true))
{
folderOpt({bNewMail:O.bNewMail,sFolderId:O.folderid,sMailId:Q,oMatchTag:O.oMatchTag,oSysTag:O.oSysTag,bStar:O.bStar,bAddrvip:O.bAddrvip});
}
else{
getTop().recordCompareReadedMailId(Q);
}
},_setEvent:function(){
var N=this,O=N._moWin;
N.evt(["ck","md","kd","mor","mot","mu"],O.document.body);
N._initSelectAllEvt();
},_initWinFunc:function(){
var O=this,P=O._moWin,N=arguments[0];
P.QMReadMail=O;
P.go=function(R,X,W,U,V){
var Y={opt:W};
if(V)
{
Y.more=["&loc=",O._moConfig.loc,V].join("");
}
O.optMail(Y,O.getMailId(),R);
};
P.fw=function(U,R){
callBack.call(O,O[U],R);
};
P.goback=function(){
O.goback();
};
P.makeMailListUrl=function(){
return O._makeMailListUrl();
};
P.setRemindSpan=function(R){
O.S('remind_edit_'+R).innerHTML=(reminddetail["mailid:"+R]||"").replace(/linktitle=.*&sid=/g,function(U){
return U.replace(/\'/g,"&#039;");
});
};
P.setMoreOperation=function(R,U){
O._moMoreOptSel&&O._moMoreOptSel.switchPair(R,U);
},P.fjGetFlvAttrUrl=function(){
return T("/cgi-bin/readtemplate?sid=$sid$&t=video_ref.smil&vsrc=$vsrc$").replace({sid:getSid(),vsrc:encodeURIComponent(P.sFlvPlayUrl.substr(1))});
};
if(N.bNeedIdentifyLocation)
{
try{
K(N.sLocationIdentifyUrl,N.sLocationWorkerImportUrl);
}
catch(Q)
{
N.bNeedIdentifyLocation=false;
_oTop.ossLog('delay','all','stat=sgkv&group=readmailworkeriniterror&cnt=1');
}
}
},_initMemVar:function(N,O){
var P=this;
P._moConfig=N;
P._moMailInfo=O;
},_updatePreAndNext:function(N){
var R=this,U,Q=R.S(h._sNextMailTop),P=R.S(h._sNextMailBt),O=R.S(h._sNextNewMail);
if(P&&Q&&O)
{
if(N.sPn.indexOf("\u4E0A\u4E00\u5C01")!=-1&&N.sPn.indexOf("\u4E0B\u4E00\u5C01")!=-1)
{
Q.innerHTML=P.innerHTML=N.sPn;
}
if(U=trim(N.sPnNew))
{
O.innerHTML=U;
}
show(attr(R.S(h._sNextNewDiv),"mailid",N.sPnNewMailId),U!="");
}
},clearCache:function(){
getTop().QMMLCache.upVer();
rdVer(this.getMailId(),1);
},_onMoreOptSel:function(N){
var R=this,U=R.getMailId();
switch(N)
{case "delremark":
case "addremark":
R._moRemark.toggle(U);
break;
case "delremind":
case "addremind":
var P=GelTags("a",S("remind_edit_"+U,document));
if(P&&P[0])
{
if(_aoItem.sId=="addremind")
{
fireMouseEvent(P[0],"click");
}
else{
var Q=getUrlParams(S("remind_delete",document).href||location),O=document.remind_frm;
O.ruleid.value=Q["ruleid"];
O.from.value=Q["from"];
O.submit();
}
}
break;
case "print":
R.optMail2({opt:"print"});
break;
}
},_readMailFinish:function(N){
if(bnewwin)
{
var P=window.opener,Q=this,O=Q._moConfig;
try{
if(P&&P.readMailFinish)
{
P.readMailFinish(Q.getMailId(),O.reandfw,O.folderid);
}
}
catch(R)
{
}
}
},getEditorContent:function(){
var N=this;
return N._moQReply&&N._moQReply.getContent();
},disableConfirm:function(){
var N=this;
return N._moQReply&&N._moQReply.disableConfirm();
},_startSubMod:function(N){
var U=this,R,Q=U._moMailInfo,P=extend({},U._moContext,N,{oMailInstance:U}),O=U._moConfig;
switch(P.sModuleName)
{case "qmRemark":
R=U._moRemark=new F.qmRemark(function(V){
var W=U._moMoreOptSel;
if(W)
{
switch(V)
{case "del":
W.switchPair("addremark","delremark");
break;
case "save":
W.switchPair("delremark","addremark");
}
}
QMMailCache.setExpire();
U.clearCache();
},P);
break;
case "qmMoreOptSel":
R=U._moMoreOptSel=new F.qmMoreOptSel({oMoreOpt:O.oMoreOpt,fOnSelect:function(V){
U._onMoreOptSel(V);
}},P);
break;
case "qmQReply":
R=U._moQReply=new F.qmQReply(O,Q,{fCheckBcc:function(){
callBack.call(U,U.checkBcc,arguments);
},sSubTmp:""},P);
break;
case "qmAntiSpam":
R=U._moAntiSpam=new F.qmAntiSpam(O,Q,P);
break;
case "qmMarkAdMail":
R=U._moMarkAdMail=new F.qmMarkAdMail(O,Q,P);
break;
case "qmReminder":
_oModel=U._moReminder=new F.qmReminder(O,Q,P);
break;
case "qmSenderInfo":
R=new F.qmSenderInfo(O,Q,P);
break;
case "qmPlayerParser":
R=new F.qmPlayerParser({oContentDom:U.S(h._sContentDiv),bManuPlay:O.bMusicManuPlay},P);
break;
case I:
if(getTop().goUserInfo.get("DEF_TRANSLATE")=="1")
{
loadJsFile("$js_path$webp/qmtranslate24e6ae.js",true,v.document,function(){
waitFor(function(){
return U.S(h._sContentDiv)&&v.QMTranslate;
},function(V){
if(V)
{
var W=U.S(h._sContentDiv);
new v.QMTranslate({oDom:W});
}
});
});
}
break;
}return R;
},_adjustMailContainer:function(){
var O=this,N=O.S(h._sMailContainer);
N.style.overflowY="scroll";
if(N.scrollHeight-N.offsetHeight>10)
{
N.style.height=N.scrollHeight+"px";
}
N.style.overflowY="";
},_sendCopyAction:function(N){
var V=getTop(),U=this,O=false,Q=0,R=0,P=0;
U._moWin.document.body.oncopy=function(W){
if(!O)
{
var Z=V.getEventTarget(W),aa="",X=256,Y=[[{sId:"",sItemValue:'<span class="icon_caution_s"></span>\u8BE5\u5730\u5740\u5B58\u5728\u4E0D\u826F\u5185\u5BB9\uFF0C\u5EFA\u8BAE\u505C\u6B62\u8BBF\u95EE',bDisSelect:true}],[{sId:"",sItemValue:'<span class="icon_info_s"></span>\u8BE5\u5730\u5740\u5B89\u5168\u6027\u65E0\u6CD5\u786E\u5B9A\uFF0C\u8BF7\u8C28\u614E\u6253\u5F00',bDisSelect:true}],""];
if(U._moWin.document.selection)
{
aa=U._moWin.document.selection.createRange().text;
R=U._moWin.document.selection.createRange().offsetTop+bodyScroll(U._moWin.document,'scrollTop');
Q=U._moWin.document.selection.createRange().offsetLeft;
P=U._moWin.document.selection.createRange().boundingHeight;
}
else{
if(V.isObjContainTarget(N,Z))
{
aa=U._moWin.getSelection();
var ac=U._moWin.getSelection();
if(ac.rangeCount>0)
{
var ab=ac.getRangeAt(0).getBoundingClientRect();
Q=ab.left;
R=ab.top+bodyScroll(U._moWin.document,'scrollTop');
P=ab.height;
}
}
}
if(aa!="")
{
if(aa.length>X)
{
aa=aa.substring(0,X);
}
O=true;
QMAjax.send(T("/cgi-bin/mail_spam?sid=$sid$&stat=getcopycontent&content=$content$&t=getcopycontent&action=copy_link").replace({sid:getSid(),content:V.encodeURI(aa)}),{method:"POST",onload:function(ad,ae){
O=false;
if(ad)
{
if(ae!="2")
{
new QMMenu({oEmbedWin:U._moWin,sClassName:(ae==0?"tips_maliciousLink":"tips_unknowLink"),sid:"report",oItems:Y[ae],nWidth:237,nX:Q,nY:R+P+5,bAutoClose:false});
}
}
}});
setTimeout(function(){
O=false;
},5000);
}
}
};
},_pageReady:function(){
var V=getTop(),U=this,W=U._moWin,R=U._moMailInfo,O=U._moConfig,P=U.S(h._sContentDiv),Q=S("folder_"+O.folderid,V),X=W.document.body.background;
if(!P)
{
return;
}
U._rInsPageEnd();
U._adjustMailContainer();
U._fakeReadMail();
O.bBccToMe=C(R);
O.sMailContent=h._sMailContainer;
U._readMailFinish();
X&&(P.style.backgroundImage="url("+X+")");
swapLink(P,O.disptype,W,U.getMailId());
if(O.bNeedIdentifyLocation)
{
V.locationIdentify(P,z({sMailId:U.getMailId()}));
}
U._sendCopyAction(P);
initMailSelect(O.oMoveItems,true,O.bOpenTag=="1",W,O.folderid,O.bAutoTag);
U._startSubMod({sModuleName:"qmQReply"});
U._startSubMod({sModuleName:"qmMoreOptSel"});
U._startSubMod({sModuleName:"qmRemark"});
if(O.bReminder)
{
U._startSubMod({sModuleName:"qmReminder"});
}
U._startSubMod({sModuleName:"qmAntiSpam"});
U._startSubMod({sModuleName:"qmMarkAdMail"});
U._startSubMod({sModuleName:"qmSenderInfo"});
U._startSubMod({sModuleName:"qmPlayerParser"});
var N=W.document.body;
if(getUrlParams(getTop().location)["t"]!="newwin_frame"&&N.scrollWidth>N.clientWidth)
{
requestShowTip("tipRemindEdit",19,W);
}
if(Q&&Q.parentNode.parentNode.id=="folder_pop_td")
{
new QMSender({oWin:W,nCurFolderId:O.folderid,sWidth:210,sCurSaveFrom:O.saveFrom});
}
O.bClearRDCache&&U.clearCache();
U._sendTimeMail();
if(O.flowid)
{
ossLog("realtime","all","flowid="+O.flowid);
}
U._flushFolder();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,U.getMailId());
getTop().goUserInfo.deferget('DEF_TRANSLATE',function(Y){
U._startSubMod({sModuleName:I});
U.rmLanguage(P);
});
U.checkDecryptMail();
U.showAD();
U.showQBTipBtn();
U._fixAbsoluteContent();
},_fixAbsoluteContent:function(){
var X=this;
var W=X.S(h._sContentDiv);
if(!W)
{
return;
}
var R=0;
var V=0;
var U=(new Date()).getTime();
var Q;
function P()
{
if(R&&_oTop.isShow(W))
{
var Y=_oTop.calcPos(W,'json');
R-=Y.top;
debug('content height fix',R);
if(R>Y.height)
{
W.style.height=R+'px';
_oTop.LogKV('readmail|fix|absolute_cont');
if(!Q)
{
setTimeout(function(){
_oTop.speedLog('1',Q-U,'readmail');
},5000);
Q=(new Date()).getTime();
}
}
}
}
var N=false;
function O()
{
N=true;
_oTop.E(W.getElementsByTagName('*'),function(Y){
if(Y.nodeType!=3)
{
if(_oTop.getStyle(Y,'position')=='absolute')
{
R=Math.max(_oTop.calcPos(Y,'json').bottom,R);
}
}
});
P();
}
_oTop.E(W.getElementsByTagName('*'),function(Y){
if(Y.nodeType!=3)
{
if(_oTop.getStyle(Y,'position')=='absolute')
{
R=Math.max(_oTop.calcPos(Y,'json').bottom,R);
}
if(Y.tagName=='IMG')
{
if(V++===0)
{
setTimeout(function(){
if(!N)
{
O();
}
},2000);
}
Y.onerror=Y.onload=function(){
Y.onload=Y.onerror=null;
if(--V<=0)
{
O();
}
};
}
}
});
P();
},_initSelectAllEvt:function(){
var O=getTop(),N=this,P=N._moWin;
addEvent(P.document,"keydown",function(Q){
if(Q.ctrlKey&&Q.keyCode=="65")
{
N.doSelectAll(Q,N.S(h._sMailContainer));
}
});
},checkAttachImgSize_:function(N){
var R=getTop();
var Q=this;
function P(U)
{
if(U.naturalWidth)
{
O(U.naturalWidth,U.naturalHeight,U);
}
else if(U.width)
{
R.rmClass(U,'readmail_limit_img_size');
var W=U.width;
var V=U.height;
R.addClass(U,'readmail_limit_img_size');
O(W,V,U);
}
}
function O(Y,X,U)
{
var W=U.width;
var V=U.height;
if(Y>W||X>V)
{
R.ossLogCustom('delay','all','attImgtobig',{src:U.src,max:{w:Y,h:X},cur:{w:V,h:V}});
R.ossLog('delay','all','kw=attImgtobig');
}
}
R.E(N,function(U){
if(U.complete)
{
P(U);
}
else{
U.onload=function(){
U.onload=U.onerror=null;
P(U);
};
U.onerror=function(){
U.onload=U.onerror=null;
};
}
});
},osslogImgAttach_:function(){
this.checkAttachImgSize_(getTop().CN('readmail_limit_img_size',this.S('attachment')));
},_sendTimeMail:function(){
var P=this.S(h._sSendTimeMsg),Q=this,R=getTop(),N=[];
if(P)
{
E(["year","month","day","hour","min"],function(U){
N.push(attr(P,U));
});
P.innerHTML=callBack(A,N);
var O=this.S("editsendtime");
getTop().addEvent(O,"click",function(){
initTimeSendDlg({sendtimeyear:R.S("sendtimeyear",R.getMainWin()),sendtimemonth:R.S("sendtimemonth",R.getMainWin()),sendtimeday:R.S("sendtimeday",R.getMainWin()),sendtimehour:R.S("sendtimehour",R.getMainWin()),sendtimemin:R.S("sendtimemin",R.getMainWin()),confirmbtn:"\u786E\u5B9A",title:"\u4FEE\u6539\u65F6\u95F4",timetips:""},function(){
QMAjax.send(T(["/cgi-bin/mail_mgr?mailaction=mdy_sendtime&mailid=$mailid$&ef=js&resp_charset=UTF8","&sendtimeyear=$sendtimeyear$","&sendtimemonth=$sendtimemonth$","&sendtimeday=$sendtimeday$","&sendtimehour=$sendtimehour$","&sendtimemin=$sendtimemin$"]).replace({mailid:Q.getMailId(),sendtimeyear:R.S("sendtimeyear",R.getMainWin()).value,sendtimemonth:R.S("sendtimemonth",R.getMainWin()).value,sendtimeday:R.S("sendtimeday",R.getMainWin()).value,sendtimehour:R.S("sendtimehour",R.getMainWin()).value,sendtimemin:R.S("sendtimemin",R.getMainWin()).value}),{method:"POST",onload:function(U,V){
if(U)
{
var X=evalValue(V);
if(X.errcode=="0")
{
showInfo("\u5B9A\u65F6\u90AE\u4EF6\u4FEE\u6539\u6210\u529F\uFF0C\u5C06\u5728\u60A8\u6307\u5B9A\u7684\u65F6\u95F4\u53D1\u51FA");
var W=[R.S("sendtimeyear",R.getMainWin()).value,R.S("sendtimemonth",R.getMainWin()).value,R.S("sendtimeday",R.getMainWin()).value,R.S("sendtimehour",R.getMainWin()).value,R.S("sendtimemin",R.getMainWin()).value];
P.innerHTML=callBack(A,W);
}
else{
showError(X.errmsg);
}
}
}});
},function(){
});
});
}
},checkDecryptMail:function(){
var N=this;
_oConfig=N._moConfig;
if(_oConfig.bEncrypt)
{
addEvent(N.S("decryptmail_pw"),"keydown",function(O){
if(O.keyCode=="13")
{
fireMouseEvent(N.S("decryptmail"),"click");
}
});
}
},decryptMail:function(O,P,N){
var Q=this,R=Q._moWin,U=encodeURIComponent(Q.S("decryptmail_pw").value);
if(U)
{
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&mailid=$mailid$&action=decryptmail&t=success&secmailcode=$code$&ef=js&resp_charset=UTF8").replace({mailid:P,sid:getSid(),code:U}),{method:"GET",onload:function(V,W){
if(V)
{
var X=evalValue(W);
if(X.errcode=="0")
{
Q._moConfig.bEncrypt=false;
Q.afterDecrytMail();
}
else{
showError(X.errmsg);
}
}
}});
}
else{
showError("\u8BF7\u8F93\u5165\u5BC6\u7801");
Q.S("decryptmail_pw").focus();
}
},afterDecrytMail:function(){
var O=this,N=O._moConfig;
showInfo("\u90AE\u4EF6\u89E3\u5BC6\u6210\u529F");
if(N.bNeedReceipt&&N.bNewMail)
{
var P=O._moWin.location.href;
O.clearCache();
goUrl(O._moWin,cookQueryString(P,{force_needreceipt:1,r:Math.random()}));
}
else{
w(O.getMailId(),O._moWin);
}
},doSelectAll:function(O,N){
var V=getTop(),U=this,W=U._moWin,P=W.document;
if(U._moRemark.isFoucs())
{
return;
}
if(W.getSelection)
{
var R=W.getSelection(),Q=P.createRange();
R.rangeCount>0&&R.removeAllRanges();
Q.selectNode(N);
R.addRange(Q);
}
else{
var Q=P.body.createTextRange();
Q.moveToElementText(N);
Q.select();
}
N.scrollIntoView();
V.preventDefault(O);
},getMailInfo:function(){
return this._moMailInfo;
},updateMailSize:function(N){
var U=this,Y=U._moWin,R=U._moMailInfo,V=getTop(),X=V.S("submailCnt",Y),W=V.S("submailCntAll",Y),Q=V.finds(".mailunread",Y).length,O=V.finds(".mailread",Y).length,P=Q+O;
if(N!==true)
{
W&&(W.innerHTML=P);
X&&(X.innerHTML=Q+"/");
}
return {nTotal:P,nUnReadCnt:Q,nReadCnt:O};
},getCBInfo:function(){
var Q=this,N=Q._moConfig,P=Q._moMailInfo,O=Q.getFromInfo_(),R=Q.S(h._sImgStar),X=Q.S(h._sTopBtn),Y=N.oSysTag||"",V=[],U={};
if(Y!="")
{
V=Y.split("|");
}
for(var Z=0;Z<V.length-1;Z++)
{
if(V[Z]!="")
{
var W=V[Z].split(":");
if(W[0]&&W[1]!="")
{
U[W[0]]=W[1];
}
}
}
return {oWin:Q._moWin,sFid:N.folderid,bML:false,oMail:[{sMid:Q.getMailId(),bSys:N.bSys,bAd:N.bAd,bUnr:false,bSubUnr:false,bStar:hasClass(R,'qm_ico_flagon'),bTop:hasClass(X,'qm_ico_topon'),bTms:false,oSysTag:U||{},oTagIds:N.oMatchTag,sSName:O.name,sSEmail:O.addr,oStar:R,oTopBtn:X,oTCont:Q.S(h._sTagContainer)}]};
},notify:function(O,N){
var Q=this;
switch(O)
{case "delsubmail":
var P=Q.updateMailSize();
if(Q.dealCustomUI('delSubMailInGlobal',P)!==false&&P.nTotal<=0)
{
Q.goback();
}
QMMailCache.setExpire();
break;
case "toRefer":
var R=Q._moSubMails[N];
if(R)
{
R.seek();
}
break;
}
},modifyTag:function(N,O){
var Q=this._moConfig.oMatchTag;
if(!Q)
{
return;
}
for(var P=Q.length-1;P>=0;P--)
{
if(Q[P]==N)
{
break;
}
}
if(O)
{
if(N<0)
{
Q.length=0;
}
else{
Q.splice(P,1);
}
}
else{
if(P<0)
{
Q.push(N);
}
}
},toAttach:function(N){
var Q=this,R=Q.S(h._sAttachment+(Q.attr(N,"seq")||"")),P;
function O(W,V)
{
var U=arguments.callee;
if(!V||!U.time)
{
U.orgclass=R.className;
U.time=0;
}
R.className=(U.time%2==0)?"toolbg":U.orgclass;
R.style.height=(U.time%2==0)?"auto":"auto";
if(++U.time<W)
{
setTimeout(function(){
U(W,true);
},70);
}
}
if(R)
{
P=Q._moWin.document.documentElement;
if(P.scrollHeight<=P.clientHeight)
{
O(6);
}
else{
scrollIntoMidView(R,P,false,0,true);
O(4);
}
}
},prevandnext:function(O,P,N){
var Q=this,R=Q.attr(O,"mailid");
rdVer.log(R,"hit");
goUrl(Q._moWin,["/cgi-bin/readmail?",rdVer.url(R,Q._moConfig.folderid,"",Q.attr(O,"type")==="collo"||Q._moWin.name=='readmail_float'?"3":"",false,"",false,"",false,Q._moConfig.folderkey).split('?')[1],Q._moWin.name=='readmail_float'?'&floatRead=true&nogoback=true':'',bnewwin?"&newwin=true":""].join(""),true);
N&&preventDefault(N);
},_makeMailListUrl:function(){
var N=this._moConfig;
return j.replace({sid:getSid(),folderid:N.folderid,folderkey:N.folderkey,s:N.subtmpl,more:'&r='+Math.random()});
},goback:function(P,Q,O,N){
if(bnewwin)
{
goUrlTopWin("/cgi-bin/frame_html?sid="+getSid());
}
else{
trace("history back","","start","mail_list");
if(1||!QMHistory.tryBackTo("mail_list"))
{
var R=this,U=getTop().QMMLCache.url(QMHistory.getUrl("mail_list")||R._makeMailListUrl(),{},true);
if(N)
{
U=R._makeMailListUrl();
}
R._moWin.location.href=U;
waitFor(function(){
return !!S("list",getMainWin());
},function(V){
if(V)
{
bodyScroll(R._moWin,"scrollTop",getTop().gnMailListPos);
}
});
}
}
preventDefault(O);
},tag:function(O,P,N){
var Q=this;
QMTag.readclose(N,Q.getCBInfo());
},starMail:function(N){
var O=this;
starMail(null,extend(O.getCBInfo(),{oncomplete:function(Q,P){
O.clearCache();
var U=O.S(h._sStarStatus),R=O.S(h._sMailtopStatus),V=O.S(h._sStarTopStatus);
if(P)
{
if(!isShow(V)&&!isShow(R))
{
show(U,P);
}
else{
show(R,!P);
show(V,P);
}
}
else{
if(isShow(O.S(h._sStarTopStatus)))
{
show(V,P);
show(R,!P);
}
else{
show(U,P);
}
}
return true;
}}));
},topMail:function(N){
var O=this;
topMail(null,extend(O.getCBInfo(),{oncomplete:function(Q,P){
O.clearCache();
var U=O.S(h._sStarStatus),R=O.S(h._sMailtopStatus),V=O.S(h._sStarTopStatus);
if(P)
{
if(!isShow(V)&&!isShow(U))
{
show(R,P);
}
else{
show(U,!P);
show(V,P);
}
}
else{
if(isShow(V))
{
show(V,P);
show(U,!P);
}
else{
show(R,P);
}
}
return true;
}}));
},getQMPreviewer:function(N){
var O=this,P=getTop();
if(P.QMPreviewer)
{
N&&N(P.QMPreviewer);
}
else{
loadCssFile("$css_path$../js/com/kits/qmpreviewer/css/previewer2675d2.css",true,P.document);
loadJsFile("$js_path$webp/com/kits/qmpreviewer289d4d.js",true,P.document,function(){
N&&N(P.QMPreviewer);
});
}
},showScanImg:function(O,P,N){
var U=this,Q=parents("div.attachitem",O)[0],R=finds("a[ck='previewAttach2']",Q)[0];
showTwoDCodeImgMenu(U._moWin,O,attr(R,"filename"),attr(R,"down"));
preventDefault(N);
},previewAttach3:function(O,P,N){
var Q=this,R=S(["AttachIconA",P,(Q.attr(O,"idx")||0)].join(""),Q._moWin);
fireMouseEvent(R,"click");
},previewAttach2:function(O,P,N){
var Q=this;
function R()
{
var W=function(X){
var Y=X&&X.getAttribute('timeout');
if(Y&&Y=="1")
{
return true;
}
return false;
},U=function(){
var Y,X=0,Z=[];
while(Y=V(X))
{
Z.push(Y);
X++;
}
return Z;
},V=function(Y,X){
var aa={},ab=S(["AttachIconA",P,Y].join(""),Q._moWin),Z=+Y;
for(Z+=X;ab&&W(ab);Z+=X)
{
ab=S(["AttachIconA",P,Z].join(""),Q._moWin);
}
Z-=X;
if(!ab)
{
return;
}
var ad=ab.getAttribute('down'),ac=S(["AttachIconA",P,(Z-1)].join(""),Q._moWin);
if(ac&&ac.getAttribute('down')===ad)
{
return;
}
E({bBigAttach:"bigattach",sName:"filename",sUriFileName:"urifilename",sDown:"down",sDownPage:"downpage",sUrl:"url",sType:"viewmode",sBytesize:"filebyte",sThumb:"iconurl",sFileIdx:"idx",sAttid:"attid",sFid:"fid",sExptime:"exptime",bIsTimeout:"timeout"},function(ae,af){
aa[af]=Q.attr(ab,ae);
});
aa.sUrl=QMDistributeDomain.getHost()+aa.sUrl;
aa.sDown=QMDistributeDomain.getHost()+aa.sDown;
aa.sThumb=aa.sThumb&&(''+aa.sThumb).indexOf('xdisk')==-1?QMDistributeDomain.getHost()+aa.sThumb:null;
aa.sFrom=aa.bBigAttach?"bigattach":"attach";
aa.sSuffix=aa.sName?(aa.sName.split(".").pop()||""):"";
if(!aa.sAttid)
{
aa.sAttid=aa.sDown.split("att=").pop();
}
if(aa.sDown)
{
aa.sTwoDCodeUrl=twoDCodeImgUrl(aa.sDown);
}
return aa;
};
if(W(O))
{
return;
}
Q.getQMPreviewer(function(X){
var Y={fNext:function(Z){
var aa=parseInt(Z.sFileIdx)+1;
return V(aa,1);
},fPrev:function(Z){
var aa=parseInt(Z.sFileIdx)-1;
return V(aa,-1);
},fFrwd:function(Z){
var aa=function(ac,ab){
var ad=new RegExp([ab,"=([^&]*)"].join(""));
_oResult=ad.exec(ac);
return _oResult?_oResult[1]:"";
};
if(Z.bBigAttach)
{
goNewWin(d.replace({sid:getSid(),attachid:encodeURIComponent(Z.sAttid),urifilename:Z.sUriFileName,filesize:Z.sBytesize,exptime:Z.sExptime,k:aa(Z.sUrl,"k"),code:aa(Z.sUrl,"code"),fid:aa(Z.sUrl,"fid")}));
}
else{
goNewWin(c.replace({sid:getSid(),mailid:P,attachid:encodeURIComponent(Z.sAttid),attachname:Z.sAttid,fileextenal:Z.sSuffix,filebyte:Z.sBytesize}));
}
}};
X.show(V(Q.attr(O,"idx")),Y);
});
}
if(Q.attr(O,"ispoison")=="1")
{
Q.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u9884\u89C8\u3002",btnTxt:"\u7EE7\u7EED\u9884\u89C8",kvKey:"preview"},function(){
R();
});
return;
}
else{
R();
}
},previewAttach:function(O,P,N){
var Q=this,R=T(m).replace({sid:getSid(),mailid:P}),U=T("$url$&nocheckframe=true&t=attachpreviewer&select=$select$&selectfile=$selectfile$&seq=$seq$").replace({url:R,select:Q.attr(O,"select"),seq:Q.attr(O,"seq")||"",selectfile:Q.attr(O,"selectfile")||""});
if(getTop().QMDistributeDomain.isRelativeUrl(U))
{
U=getTop().getTopHost()+U;
}
if(Q.attr(O,"ispoison")=="1")
{
getTop().LogKV("attach|poison|previewAttach");
Q.confirmOpen({msg:"\u9644\u4EF6\u53EF\u80FD\u5305\u542B\u75C5\u6BD2\u6216\u6B3A\u8BC8\u4FE1\u606F\uFF0C\u8BF7\u52FF\u9884\u89C8\u3002",btnTxt:"\u7EE7\u7EED\u9884\u89C8",kvKey:"preview"},function(){
window.open(U,"_blank");
});
}
else{
window.open(U,"_blank");
}
preventDefault(N);
},playAttach:function(N){
var P=this,U=GelTags("span",N.parentNode.parentNode),R=U.length==0?{}:U[0],O=P.S(h._sMp3PlayerContainer);
if(R.getAttribute("player"))
{
show(O,true);
if(O.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(O.getAttribute("uin_play_id"));
}
var Q="uni_id"+(+new Date());
O.setAttribute("uin_play_id",Q);
audioPlay({id:Q,container:O,url:R.getAttribute("player"),title:R.innerHTML,autoplay:true,global:true});
return true;
}
return false;
},attachBatchSetFlag:function(O,P,N){
var U=attr(O,"action"),V,R=[];
if("set"===U)
{
var Q=finds(".attachitem a.needSetFlag[flag='0']",getMainWin());
E(Q,function(W){
V=attr(W,"attachKey");
R.push(V);
});
if(R.length===0)
{
showError("\u9644\u4EF6\u5DF2\u6536\u85CF");
return;
}
attachSetFlag(R.join(","),true,function(){
E(Q,function(W){
attr(W,"flag","1");
show(W,false);
show(W.nextSibling,true);
});
},{sLoc:"attachfolder,col_all",sOsstype:"attach_allCollect_atRead"});
getTop().LogKV({sValue:'kv_click|collect_all_attachs'});
}
},checkdownload:function(O,P,N){
new QMDialog({sId:"checkdownload",sTitle:"\u4E0B\u8F7D\u63D0\u901F",sUrl:T("/cgi-bin/readtemplate?sid=$sid$&t=readmail_checkdownload").replace({sid:getSid()}),nWidth:461,nHeight:175});
preventDefault(N);
return true;
},checkBcc:function(O,P,N){
var Q=this;
if(Q._moConfig.bBccToMe)
{
attr(Q.S(h._sQSource),"checkBcc",1);
new QMDialog({sId:"reply_dlg",sTitle:"\u56DE\u590D\u63D0\u793A:",sBodyHtml:u._REPLY_DLG.toString(),sFootHtml:u._REPLY_DLG_FOOT.toString(),onshow:function(){
this.S("replyall").focus();
},onload:function(){
var R=this;
addEvent(R.S("replyall"),"click",function(){
Q._moConfig.bBccToMe=false;
attr(Q.S(h._sQSource),"checkBcc",0);
if(O.tagName=="TEXTAREA")
{
Q._moQReply.focus();
}
else{
Q.optMail({opt:"reply_all"},P);
}
R.close();
});
addEvent(R.S("reply"),"click",function(U){
attr(Q.S(h._sQSource),"checkBcc",0);
Q.optMail({opt:"reply"},P);
R.close();
});
addEvent(R.S("cancel"),"click",function(){
R.close();
});
}});
preventDefault(N);
return true;
}
},setAutoDel:function(N,O){
var Q=this,R=Q._moWin,P=Q._moConfig;
if(P.xqqstyle=="6")
{
x({oWin:R,sAction:"/cgi-bin/mail_mgr"},{mailid:O,mailaction:"autodel",reporttype:_attr(N,"flag"),s:"autodel"}).submit();
}
},mailRecall:function(N,O){
var Q=getTop(),U=attr(N,"loccnt"),W=attr(N,"mid"),V=attr(N,"mdata"),Y=attr(N,"odd"),P=(Q.g_encryptuin==attr(N,"u")),R=0;
if(P)
{
if(U>0&&Y!="0")
{
R=1;
Q.recallConfirm(W,N,{oninit:function(aa){
this._moDom=aa;
this._msTime=aa.getAttribute("time");
this._msMailid=O;
},onbeforesend:function(){
},onsuccess:function(){
Q.reloadFrm(Q.getMainWin());
Q.rdVer("BaseVer",-1);
},onerror:function(){
this._moDom=null;
}});
}
else{
var X,Z;
if(Y=="0")
{
R=2;
Z='\u6B64\u90AE\u4EF6\u4E0D\u652F\u6301\u88AB\u64A4\u56DE';
X='\u6B64\u90AE\u4EF6\u8DDD\u53D1\u9001\u65F6\u5DF2\u8D85\u8FC715\u5929\uFF0C\u65E0\u6CD5\u64A4\u56DE\u3002';
}
else{
R=3;
Z='\u6B64\u90AE\u4EF6\u53D1\u5F80\u975EQQ\u90AE\u7BB1\uFF0C\u4E0D\u652F\u6301\u64A4\u56DE\u3002';
X='\u4EC5\u652F\u6301\u64A4\u56DE\u53D1\u5F80QQ\u90AE\u7BB1\uFF0C\u4E14\u5BF9\u65B9\u672A\u8BFB\u7684\u90AE\u4EF6\u3002';
}
msgBox(T(['<b class="b_size">$t$</b>','<div style="overflow:hidden;margin-top:5px;">','$m$','</div>']).replace({t:Z,m:X}),"dialog");
}
}
else{
msgBox("\u64A4\u56DE\u5931\u8D25\uFF0C\u6B64\u90AE\u4EF6\u53D1\u4EF6\u4EBA\u4E0D\u662F\u5F53\u524D\u8D26\u53F7\uFF0C\u65E0\u6CD5\u64A4\u56DE","dialog");
}
getTop().LogKV("sended|readmail|mailrecall");
getTop().QMMLCache.upVer();
},xfDl:function(){
var P=attr(arguments[0],"oXfLinkArray").split("&&&");
P=P.slice(0,P.length-1);
if(P.length<1)
{
return;
}
var N=function(R,Q){
switch(R)
{case "check":
showProcess(1,true,"\u6B63\u5728\u68C0\u6D4B\u65CB\u98CE...");
break;
case "get_url":
showProcess(1,true,"\u6B63\u5728\u83B7\u53D6\u4E0B\u8F7D\u94FE\u63A5...");
break;
case "load_err":
showProcess(0);
showError("\u65CB\u98CE\u52A0\u8F7D\u5931\u8D25,\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01");
break;
case "geturl_err":
showProcess(0);
showError(Q+"\u4E2A\u6587\u4EF6\u94FE\u63A5\u83B7\u53D6\u5931\u8D25");
break;
case "check_err":
showProcess(0);
if(confirm("\u60A8\u8FD8\u6CA1\u5B89\u88C5QQ\u65CB\u98CE\uFF0C\u73B0\u5728\u53BB\u4E0B\u8F7D\u5B89\u88C5\u4E48\uFF1F\u5B89\u88C5\u5B8C\u540E\u8BF7\u5237\u65B0\u672C\u9875\u9762\u3002"))
{
window.open("http://xf.qq.com/xf2/index.html");
}
break;
}
};
var O=new (getTop().clsXfBatchDownload)(P,N);
},markReadStatus:function(O){
var X=this,R=X._moWin,ab="menu_mark_read_status",aa="",Z="",V,N=T(['<div style="padding: 8px 2px 8px 0;">','<div style="height:14px;line-height:14px;">\u81EA\u52A8\u6807\u8BB0\u4E3A\u5DF2\u8BFB:</div>','<div id="switch_on" style="display:$displayon$;">','<div style="padding: 12px 12px;"><a class="btn_blue" href="javascript:;">\u5F00\u542F</a></div>','</div>','<div id="switch_off" style="display:$displayoff$;">','<div style="padding: 12px 12px;" class="green">\u5DF2\u5F00\u542F<a class="btn_gray" href="javascript:;" style="margin-left:10px;">\u5173\u95ED</a></div>','</div>','<div style="border-top:1px solid #ccc;padding-top:10px;white-space:normal;line-height:1.5;">\u5F00\u542F\u540E\uFF0C\u8BE5\u53D1\u4EF6\u4EBA\u7684\u65B0\u90AE\u4EF6\u5C06\u4F1A\u81EA\u52A8\u6807\u8BB0\u4E3A\u5DF2\u8BFB\uFF0C\u8BA9\u60A8\u4E0D\u53D7\u672A\u8BFB\u6570\u7684\u5E72\u6270\u3002</div>','</div>']),W=calcPos(arguments[0]),Q,U=finds(".autoMarkMail span",R)[0],Y=attr(O,"addr"),P=S("subject",R).clientWidth;
hasClass(U,"ico_autoMark_off")?(Z="none"):(aa="none");
Q={nArrowPos:W[1]-P+220,bAutoClose:false,oEmbedWin:R,sId:ab,nX:W[1]-19,nY:W[0]+19,nWidth:239,oItems:[{nHeight:"auto",bDisSelect:true,sItemValue:N.replace({displayon:aa,displayoff:Z})}],onshow:function(){
var ag=finds('#'+ab+'_QMMenu_switch_on div a',R)[0],ae=finds('#'+ab+'_QMMenu_switch_off div a',R)[0],ah=S(ab+"_QMMenu_switch_on",R),af=S(ab+"_QMMenu_switch_off",R),ad=this;
function ac(ai)
{
var aj=T(['/cgi-bin/config_blackwhitelist?','sid=$sid$&Fun=addad','&addr=$addr$:$status$','&from=self']).replace({sid:getSid(),addr:Y,status:(ai?'0':'1')});
return function(){
ad.close();
QMAjax.send(aj,{onload:function(ak,al){
if(ak)
{
X.clearCache();
showInfo("\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F",3000);
rmClass(U,ai?"ico_autoMark_on":"ico_autoMark_off");
addClass(U,ai?"ico_autoMark_off":"ico_autoMark_on");
}
else{
showError(ai?"\u5173\u95ED\u5931\u8D25":"\u6253\u5F00\u5931\u8D25");
}
}});
};
}
ag.onclick=ac(false);
ae.onclick=ac(true);
}};
V=new QMMenu(Q);
},optMail2:function(O,P,N){
var R=this,U=R._moWin,Y="_blank",W=R.attr(O,"opt"),X=T(m).replace({sid:getSid(),mailid:P});
switch(W)
{case "remind":
X=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&from=readmail&cmd=moncal,,new,$subject$,mail,$mailid$").replace({sid:getSid(),mailid:P,subject:encodeURIComponent(R._moMailInfo.subject||"(\u65E0\u4E3B\u9898)")});
Y="mainFrame";
rdVer(P,1);
break;
case "print":
X+=T("&t=readmail_print&s=$s$&filterflag=true").replace({s:R.attr(O,"s")||"print"});
break;
case "mime":
X+="&action=readmailmime";
break;
case "dleml":
X+="&action=downloademl";
Y="actionFrame";
break;
case "code":
X+="&action=readmailcode";
break;
case "fwgroup":
X+="&t=compose_group&s=forward";
Y="mainFrame";
break;
case "note":
X+="&notefmt=1&t=note_edit_show&from=readmail";
Y="mainFrame";
break;
case "fweml":
X+="&t=compose&s=forward&action=readmaileml";
Y="mainFrame";
break;
case "addc":
showProcess(1,true,"\u8054\u7CFB\u4EBA\u6DFB\u52A0\u4E2D...",null,false);
var Q=O.parentNode.parentNode.parentNode.getElementsByTagName('span');
var V='',Z='';
for(var aa=0,ab=Q.length;aa<ab;aa++)
{
if(R.attr(Q[aa],"mailhtml")=="operhidepanel")
{
V=R.attr(Q[aa],"e");
Z=R.attr(Q[aa],"n");
break;
}
}
if(V==''&&Z=='')
{
showError('\u8054\u7CFB\u4EBA\u65B0\u5EFA\u5931\u8D25');
return;
}
QMAjax.send(T('/cgi-bin/addr_addedit?sid=$sid$&category=&isqqgroup=&addr_errorflag=&OperType=ADD&Type=&GROUPLIST=&s=addfrommail&UseFreq=&USERNAME=$username$&USEREMAILNAME=$email$&USEREMAILNAME=&MOBILEPHONE=&PHS=&NICKNAME=&BRITHDAY=&MAILBOX_BACK=&STREET=&COMPANY=&NOTES=&list_index=&ef=js&inputcharset=utf8').replace({sid:getSid(),username:encodeURIComponent(Z),email:encodeURIComponent(V)}),{method:"POST",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(ac,ad){
var af=trim(ad);
if(ac&&(af.indexOf("(")==0||af.indexOf("{")==0))
{
var ae=evalValue('('+af+')');
if(ae)
{
showProcess(0);
if(ae.errmsg)
{
showError(ae.errmsg);
}
else{
showInfo(ae.msg);
O.style.display='none';
O.nextSibling.style.display='';
O.nextSibling.setAttribute('addrid',ae.addrid);
getTop().QMProfileTips.clearInfoCard(getTop().getMainWin());
rdVer(P,1);
}
}
}
else{
showError('\u8054\u7CFB\u4EBA\u65B0\u5EFA\u5931\u8D25');
}
}});
return;
break;
case "editc":
X=X.replace('readmail','addr_detail');
X+="&AddrID="+R.attr(O,"addrid")+"&t=addr_detail_edit&s=edit&s=edit&&grpid=&category=all&rmqqgroup=1";
Y="mainFrame";
break;
default:
break;
}U.open(X,Y);
preventDefault(N);
R.dealCustomUI('closePage');
},newWinRead:function(O,P,N){
getTop().QMMLCache.upVer();
goNewWin(this._moWin.location,false);
preventDefault(N);
},createRule:function(O,P,N){
var U=this,Q=U.getCBInfo().oMail[0].bAd,R=U.attr(O,"istuan")||0,V=getTop();
V.loadingBox({model:"\u53CD\u5783\u573E",js:["$js_path$webp/qmantispam264eed.js"],oncheck:function(){
return !!getTop().QMAntiSpam;
},onload:function(){
var W=new QMAntiSpam.qmExbookEmlMgr({sMailId:P,from:U.getMailInfo().from});
W.book2(R,function(){
},Q);
}});
preventDefault(N);
getTop().LogKV({sValue:'receiverule|readmail|createrule'});
},checkContactsEmails:function(O,P,N){
this.dealCustomUI('checkContactsEmails',arguments);
},delMail:function(N){
var P=this,Q=P._moWin,O=false;
getTop().QMMLCache.upVer();
O=rmMail(P.attr(N,"opt")||0,extend(P.getCBInfo(),{oncomplete:function(R,U){
P.dealCustomUI('MailMethod',[R,'delMail',U]);
var X=U.url||"";
if(X.indexOf("/cgi-bin/readmail?")!=-1)
{
var V=getUrlParams(X||P._moWin.location)["t"];
var W=(V=="readmail_ad"||V=="readmail_ad_conversation")?"collo":"";
P.prevandnext({mailid:getUrlParams(X||Q.location)["mailid"],type:W});
return true;
}
}}));
O&&QMHistory.recordActionFrameChange();
},markAsFinished:function(N){
var O=this,P=getTop(),Q=O._moWin;
P.markAsFinished("readmail",function(R){
P.removeSelf(P.S("pending_flag",Q));
O.clearCache();
});
},optMail:function(O,P,N){
var U=this,V=U._moWin,Q=U._moConfig,Y=U.attr(O,"opt"),Z=U.getEditorContent(),X=Q.folderid,W=n.replace({sid:getSid(),t:U.attr(O,"t"),s:Y,mailid:P,disptype:Q.disptype=="text"?"":"html"});
switch(Y)
{case "reply_all":
case "reply":
case "forward":
case "send_all_again":
case "draft":
var R=[U.attr(O,"more")||""];
if(Y=="draft")
{
R.push("&backurl="+encodeURIComponent(V.location.href));
}
if(Y=="send_all_again")
{
R.push("&kvclick=readmail|compose|send_all_again|1");
}
if(bnewwin)
{
R.push('&newwin=true&fwreplynewwin=true');
}
if(N&&N.shiftKey)
{
window.open(W+R.join(""));
}
else if(Z)
{
U.disableConfirm();
x({oWin:V,sTarget:"mainFrame",sMethod:"POST",sAction:W},{pluscontent:htmlEncode(Z)}).submit();
}
else{
var aa=W+R.join("");
if(U.dealCustomUI('optMail',{sAction:'closePage',sType:Y,sUrl:aa})!==false)
{
goUrl(V,aa,true);
}
}
preventDefault(N);
break;
}
},zoomup:function(O,N){
var P=this;
P._moMailZoomTool&&P._moMailZoomTool.zoomup(O,N);
},zoomdown:function(O,N){
var P=this;
P._moMailZoomTool&&P._moMailZoomTool.zoomdown(O,N);
},reset:function(O,N){
var P=this;
P._moMailZoomTool&&P._moMailZoomTool.reset(O,N);
},rmLanguage:function(N){
var R=N&&(N.innerText||N.textContent||"");
if(!R)
{
return;
}
var O=R.match(/[\u2100-\uFFFF]/g)||[],P=R.match(/[a-zA-Z]/g)||[],Q=R.match(/[a-zA-Z]+[\u2100-\uFFFF\s]/g,"")||[];
if(getTop().goUserInfo.get("DEF_TRANSLATE")!="1"&&Q.length/(O.length+Q.length)>0.5)
{
getTop().requestShowTip("tip74container","77",this._moWin);
}
},setStatus:function(N){
var O=this;
O._mnStatus=N;
},addCalEvent:function(O,N,P){
var V=this,W=getTop(),X=V._moWin,U=W.S("showcalpanel",X),Y=O.innerHTML,R=/((?!0000)[0-9]{4}\u5E74)?((0?[1-9]|1[0-2])\u6708(0?[1-9]|1[0-9]|2[0-8])\u65E5|(0?[13-9]|1[0-2])\u6708(29|30)\u65E5|(0?[13578]|1[02])\u670831\u65E5)/g,aa=T(['<span id="showcalpanel" class="showcalpanel" onmouseover="getTop().attr(this.parentNode, \'isout\', 0);QMReadMail.setStatus(1)" onmouseout="QMReadMail.setStatus(0);QMReadMail.hideCalEvent()">','<a onclick="QMReadMail.goCal(\'$date$\', \'$mailId$\')" class="add2calendar"><span class="ico_add2cal"></span>\u6DFB\u52A0\u5230\u65E5\u5386</a>','</span>']),Z=W.attr(O,"times")||"";
Z&&(Y+=(" "+W.trim(Z)));
if(Y.match(R))
{
Y=Y.replace(/\u5E74/,"-").replace(/\u6708/,"-").replace(/\u65E5/,"");
}
Y=Y.replace(/\//g,"-");
if(Y.indexOf("-")<4)
{
var Q=new Date();
Y=Q.getFullYear()+"-"+Y;
}
U&&W.removeSelf(U);
if(/^[\d\-\:\s]+$/.test(Y)&&!isNaN((new Date(Y.replace(/-/g,'/')).getTime())))
{
O.style.cssText="border-bottom:1px dashed #ccc;position:relative;_display:inline-block;";
W.insertHTML(O,"beforeEnd",aa.replace({date:Y,images_path:W.getPath("images"),mailId:P}));
}
},hideCalEvent:function(O,N){
var Q=this,R=getTop(),U=Q._moWin,P=R.S("showcalpanel",U);
setTimeout(function(){
if(P&&R.isShow(P)&&Q._mnStatus!=1)
{
R.removeSelf(P);
}
},100);
},goCal:function(N,O,P){
var Q=this,W=O||Q.getMailId(),V='mail',R=getTop(),X=P||(Q._moMailInfo.subject||R.tmpSubject);
if(Q._msModuleName=='qmGroupMail')
{
V='group';
}
else if(Q._msModuleName=='qmNote')
{
V='note';
}
var U=T("/cgi-bin/readtemplate?t=calendar&sid=$sid$&from=readmail&cmd=moncal,$date$,new,$subject$,$from$,$mailId$,&loc=readmail,calendar,,,0,1").replace({sid:R.getSid(),date:N,subject:encodeURIComponent(X||"(\u65E0\u4E3B\u9898)"),mailId:W,from:V});
goUrl(Q._moWin,U,true);
},showLocationTip:function(N){
var Q=getTop();
if(Q.hasClass(N,'ico_location'))
{
N=N.parentNode.parentNode;
}
if(Q.hasClass(N,'readmail_locationPanel'))
{
N=N.parentNode;
}
if(Q.attr(N,'over')==1)
{
return;
}
var P=Q.CN('readmail_locationPanel',this._moWin.document);
var O=Q.CN('readmail_locationPanel',N)[0];
for(var V=0,W=P.length;V<W;++V)
{
P[V].parentNode.style.zIndex='auto';
Q.removeSelf(P[V]);
}
var R=N.innerHTML;
var U=['http://map.qq.com/?what=',encodeURIComponent(R),'&type=poi&ref=',encodeURIComponent('QQ\u90AE\u7BB1')].join('');
Q.attr(N,'over',1);
N.style.zIndex=3;
Q.insertHTML(N,'beforeEnd','<a class="readmail_locationPanel" href="javascript:;" onclick="getTop().LogKV({sValue:\'readmail|location|identify|click\'});window.open(\''+U+'\',\'_blank\');" class="add2calendar" style="z-index:2;"><span class="ico_location"></span>\u5728\u5730\u56FE\u4E2D\u67E5\u770B</a>');
},hideLocationTip:function(N){
var P=getTop();
var O=P.CN('readmail_locationPanel',N)[0];
P.attr(N,'over',0);
setTimeout(function(){
P.attr(N,'over')!=1&&P.removeSelf(O);
N.style.zIndex='auto';
},200);
},showAD:function(){
debug("showAD");
var N=this._moMailInfo;
getTop().initAD(v);
},showQBTip:function(N){
J.call(this,N);
},hideQBTip:function(O,P,N){
B.call(this,N);
},showQBTipBtn:function(){
if(!gbIsQBWebKit&&!gbIsQBIE)
{
var N=this.S("QBPushTip");
N&&show(N,true);
}
}};
});
F.qmReminder=inherit("qmReminder",F._qmBaseDM,function(M){
return ({_ready:function(){
var N=this,O=N._moWin,P=N.getMailId();
QMAjax.send(T("/cgi-bin/read_reminder?t=read_reminder.json&linkid=mailid:$mailid$&sid=$sid$&rettype=calendar").replace({sid:getSid(),mailid:P}),{method:"GET",onload:function(Q,R){
if(Q)
{
var V=evalValue(R);
if(V&&V.id)
{
var U=S("reminderContainer_mailid:"+P,O);
U.innerHTML=TE("<span class='qm_ico_calendar'></span><span class='addrtitle'>\u4E8B\u4EF6\u65F6\u95F4\uFF1A$starttime$</span>&nbsp;<a href='/cgi-bin/readtemplate?sid=$sid$&t=calendar&cmd=moncal,$starttime$,view,$id$'>\u67E5\u770B\u65E5\u5386</a>").replace({starttime:V.starttime,allday:V.allday,sid:getSid(),id:V.id});
show(U,true);
show(S("addtoremind",O),false);
}
}
}});
}});
});
F.qmQReply=inherit("qmQReply",F._qmBaseDM,function(M){
return {_initMemVar:function(N,O,P){
var Q=this;
Q._moConfig=N;
Q._moReplyMail=O;
Q._moSendConfig=P;
Q._moSource=Q.S(h._sQSource);
Q._mbStopFold;
},getSource:function(){
var N=this._moSource;
return (N.className.indexOf('graytext')!=-1)?"":textToHtml(htmlEncode(N.value));
},getContent:function(){
return this._moEditor&&this._moEditor.getContent();
},_combineContent:function(N){
var U=this,O=U._moConfig,R=U.S(O.sMailContent),Q=U._moReplyMail,V=[N||textToHtml(htmlEncode(U.S(h._sQSource).value))];
try{
var W=getTop().goUserInfo.get('getRealUserSignature');
if(W)
{
W=W(O.folderid,O.saveFrom);
if(W)
{
V.push("<div>&nbsp;</div>"+W);
}
}
}
catch(P)
{
}
if(!O.noIncludeArtcle)
{
Q.orgcontent=R?filteSignatureTag(H(R.innerHTML)):"";
var X=u._REFERPART.replace(extend({},Q,O.titlePrefix=="1"?i._EN_US:i._ZH_CN,{'name':Q.from.name,'addr':Q.from.addr}));
if(Q.orgcontent)
{
V.push(X);
return {content:V.join("")};
}
else{
return {citeprev:"yes",rmref:X,content:V.join("")};
}
}
else{
return {content:V.join("")};
}
},_getValidHtmlContent:function(N){
return N&&trim(N.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},saveDraft:function(){
var R=this,W=R._moWin,N=R._moConfig,P=R._moEditor,U=R._moSendConfig,X=P&&P.getContent(false),V=R.S(h._sQSource);
if(!P||X==R._msDraftContent||!R._getValidHtmlContent(X)||isShow(h._sAfterSendingDiv,W))
{
return;
}
else{
var Q=R._moReplyMail,O=extend({actiontype:"save",ReAndFw:"reply",contenttype:"html",from_s:"comm_quick",t:"compose.json",ReAndFwMailid:R.getMailId(),to:a.replace({addrs:Q.replyTo}),cc:a.replace({addrs:Q.replyCc}),subject:(R._moConfig.titlePrefix=="1"?"Re:":"\u56DE\u590D\uFF1A")+Q.reSubject,savesendbox:1,sendname:"",sendmailname:R._moConfig.sendmailname},R._combineContent(X));
if(R._msDraftMailId)
{
O.fmailid=R._msDraftMailId;
}
waitFor(function(){
return !!(getTop().ComposeLib);
},function(Y){
if(!Y)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
ComposeLib.send(O,{onready:function(){
R._disableSendBtn(true);
showProcess(1,true,"\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1","",false);
},oncomplete:function(Z,aa){
var ac=R._moSource,ab=evalValue(aa),ad=formatDate(new Date(),"%hh%:%mm%","%");
if(Z)
{
R._msDraftMailId=ab.mailid;
R._msDraftContent=X;
showInfo(ad+" \u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1");
reloadLeftWin();
}
else{
showError(ad+" \u4FDD\u5B58\u8349\u7A3F\u5931\u8D25");
}
R._disableSendBtn(false);
}});
});
}
},removeSelf:function(){
var O=this,N=O.S('quickreply');
removeSelf(N);
},send:function(O,P,N){
var W=this,Z=W._moWin,Q=W._moConfig,U=W._moEditor,X=W._moSendConfig,Y=W._moSource;
if(O.disabled)
{
return;
}
W.stopFold(true);
if(!U||!W._getValidHtmlContent(U.getContent(false)))
{
showError('\u8BF7\u5148\u8F93\u5165\u56DE\u590D\u5185\u5BB9');
Y.focus();
}
else{
var V=W._moReplyMail,R=extend({ReAndFw:"reply",contenttype:"html",from_s:"comm_quick",t:"compose.json",s:X.s||"",ReAndFwMailid:P,to:a.replace({addrs:V.replyTo}),cc:a.replace({addrs:V.replyCc}),subject:(W._moConfig.titlePrefix=="1"?"Re:":"\u56DE\u590D\uFF1A")+V.reSubject,savesendbox:1,sendname:"",sendmailname:W._moConfig.sendmailname},W._combineContent(U.getContent(false)));
if(W._msDraftMailId)
{
R.fmailid=W._msDraftMailId;
}
waitFor(function(){
return !!getTop().ComposeLib&&("1"!=getTop().gbBackGroundSend||getTop().BackGroundSend);
},function(aa){
if(!aa)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
var ac,ab=("1"==getTop().gbBackGroundSend);
if(ab)
{
ac=getTop().BackGroundSend;
}
var ad={onready:function(){
if(ab)
{
var ae=W._moSource;
ae.value="";
ae.blur();
W.stopFold(false);
ae.view("sending");
}
else{
W._disableSendBtn(true);
show(W.S(h._sAfterSendingDiv),true);
}
},oncomplete:function(ae,af){
if(ab)
{
if(ae)
{
var ag=W._moSource;
_oData=evalValue(af);
if(_oData&&_oData.compose=="ok")
{
ag.view("init");
}
else if(X.fQReplyComplete)
{
callBack.call(W,X.fQReplyComplete,[af]);
}
}
}
else{
var ag=W._moSource;
if(ae)
{
getTop().QMMLCache.upVer();
ag.value="";
ag.blur();
ag.view("init");
showInfo("\u60A8\u7684\u90AE\u4EF6\u5DF2\u6210\u529F\u53D1\u9001");
show(W.S(h._sAfterSendDiv),true);
show(W.S(h._sQuickReplyPart),false);
callBack.call(W,X.fQReplyComplete,[af]);
}
else{
ag.focus();
show(W.S(h._sQuickReplyPart),true,Z);
}
W._disableSendBtn(false);
setTimeout(function(){
W._moEditor.resetFixHeight();
},500);
}
W._msDraftMailId="";
show(W.S(h._sAfterSendingDiv),false);
}};
if(ab)
{
ac.quickReply(R,"comm",ad);
}
else{
ComposeLib.send(R,ad);
}
},100);
}
preventDefault(N);
},readyToWrite:function(N,O){
var P=this;
show(P.S(h._sQuickReplyPart),true);
show(P.S(h._sAfterSendDiv),false);
P.S(h._sQSource).focus();
},checkBcc:function(){
callBack(this._moSendConfig.fCheckBcc,arguments);
},disableConfirm:function(){
setClass(this._moSource,'graytext qm_txt');
},jump:function(O,P,N){
if(O.disabled)
{
return;
}
var R=this,Q=R._moEditor,W=Q?Q.getContent(false):R.getSource(),U=R._moWin,V=n.replace({sid:getSid(),mailid:P,s:"reply_all",disptype:"html"});
R.disableConfirm();
x({oWin:U,sTarget:"_self",sAction:V+(getTop().bnewwin?"&newwin=true":"")},{pluscontent:getTop().htmlEncode(W)}).submit();
preventDefault(N);
},_disableSendBtn:function(N){
var O=this;
O.S(h._sJumpToNewWin).disabled=O.S(h._sQSendBtn).disabled=N;
return this;
},_setEvent:function(){
var U=this,X=U._moWin,W=U._moSource,V=U.S(h._sQSendBtn),Q=U.S(h._sQReplyTxtContainer),R=U.S('rteContainer'),P=U.S(h._sQReplyBtnContainer);
function Z(aa)
{
switch(aa)
{case "init":
U._moEditor&&U._moEditor.setContent("");
case "sending":
setClass(W,'graytext qm_txt').value=W.getAttribute('graytxt');
W.style.height="20px";
show(R,false);
show(Q,true);
show(P,false);
break;
case "show":
show(R,true);
show(Q,false);
show(P,true);
U._moEditor&&U._moEditor.focus&&U._moEditor.focus();
break;
default:
}show(U.S(h._sAfterSendDiv),aa=="init");
show(U.S(h._sAfterSendingDiv),aa=="sending");
}
;function O(aa)
{
var ac=0,ab=0;
while(aa&&aa.tagName!="BODY")
{
if(aa.style.position!="absolute")
{
ac+=aa.offsetTop;
ab+=aa.offsetLeft;
}
aa=aa.offsetParent;
}
return ({left:ab,top:ac});
}
;function N()
{
if(W.className.indexOf('graytext')!=-1&&attr(W,"checkBcc")!=1)
{
W.setAttribute('graytxt',W.value);
setClass(W,'qm_txt b_size').value='';
if(!U._moEditor)
{
U.S("tooBarContain").innerHTML=getTop().outputToolBarControlBtn&&getTop().outputToolBarControlBtn()||"";
show(S("editor_toolbar_btn_container",X),true);
}
qmAnimation.expand(W,{to:54,oncomplete:function(){
var ab=this;
show(P,true);
W.style.overflow="auto";
if(!U._moEditor)
{
var af=U._moSendConfig.sourceContent;
if(!af||trim(af)=='')
{
af=QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")});
}
var ae=(U._moContext.sAux==undefined?'':U._moContext.sAux);
QMEditor.createEditor({editorId:"newReadMailQuickSend",editorAreaId:'QMEditorArea'+ae,tbExternId:'QMEditorToolBarPlusArea'+ae,editorAreaWin:X,isNoEditScroll:true,height:"103px",funclist:QMEditor.CONST.FUNCLIST.READMAIL,photoCGI:getPhotoCGI(),onshowinstallactive:getTop().showInstallActiveXDialog&&getTop().showInstallActiveXDialog,onkeydown:function(ag){
if(D(ag))
{
fireMouseEvent(V,"click");
}
},onload:function(){
U._moEditor=this;
ab.view("show");
Y(false);
setTimeout(function(){
var ag=U.S("QuickReplyPart");
bodyScroll(X,"scrollTop",O(ag).top-document.body.clientHeight+250);
});
}}).initialize(af,false,U.S("QMEditorArea").getAttribute("tIndex"));
}
else{
ab.view("show");
var ac=GelTags("embed",U.S("QMEditorToolBarPlusArea"))[0],ad=ac.parentNode;
ad.parentNode.removeChild(ad);
U._moEditor.getTbExternInfo("Photo").funcObj.init_();
}
}});
var aa=[];
if(!getTop().ComposeLib)
{
aa.push("$js_path$webp/libcompose24e6ae.js");
}
if("1"==getTop().gbBackGroundSend&&!getTop().BackGroundSend)
{
aa.push("$js_path$webp/backsend24e6ae.js");
}
aa.length&&loadJsFileToTop(aa);
if(!U._mnAutoSaveTimer)
{
U._mnAutoSaveTimer=X.setInterval(function(){
U.saveDraft();
},300000);
}
}
}
;function Y(aa)
{
aa=aa==null?true:aa;
U._moEditor.showToolBar(aa);
var ad=getTop().S("editor_toolbar_btn_container",X);
if(!ad)
{
return false;
}
var ac=getTop().GelTags("span",ad);
getTop().show(ac[0],aa);
getTop().show(ac[1],!aa);
var ab=arguments.callee;
ad.onclick=function(){
ab(!aa);
return false;
};
}
;W.view=Z;
addEvents(setClass(W,'graytext qm_txt'),{keydown:function(aa){
if(D(aa))
{
fireMouseEvent(V,"click");
}
},focus:N});
if(U._moSendConfig.sourceContent&&trim(U._moSendConfig.sourceContent)!='')
{
N();
}
U.evt(["ck","md"],h._sQReply);
addEvent(X,"beforeunload",function(ab){
removeEvent(X,"beforeunload",arguments.callee);
var ac;
try{
ac=U._beforeCancelSend(ab);
}
catch(aa)
{
}
if(ac)
{
return ac;
}
});
},focus:function(){
var N=this;
if(N._moEditor)
{
N._moEditor&&N._moEditor.focus&&N._moEditor.focus();
}
else N._moSource.focus();
},stopFold:function(N){
this._mbStopFold=(N==undefined?true:N);
},_cancelSend:function(){
},_beforeCancelSend:function(N){
var P=this,Q=P._moSource,O=P._moEditor;
if(Q.className.indexOf('graytext')==-1&&(O&&P._getValidHtmlContent(O.getContent(false))||Q.value))
{
var R='\u60A8\u586B\u5199\u7684\u5185\u5BB9\u6CA1\u6709\u53D1\u9001\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F';
N.returnValue=R;
return R;
}
return false;
}};
});
F.qmPlayerParser=inherit("qmPlayerParser",F._qmBaseDM,function(M){
return {_get:function(N,O){
return decodeURIComponent(attr(N,O));
},_fPlay:function(N){
var Q=this;
if(!N.auto&&!confirm("\u64AD\u653E\u5916\u90E8\u97F3\u4E50\u6709\u98CE\u9669\uFF0C\u786E\u5B9A\u64AD\u653E\uFF1F"))
{
return;
}
var O=Q.S(h._sMp3PlayerContainer),P=Q.S(h._sMp3PlayerInfo);
if(N.sosoGet)
{
getMusicUrl(N.title,N.author,function(V,U,W){
Q._fPlay({auto:true,url:W||N.url,title:V,author:U,sosoGet:false});
});
return;
}
show(O,true);
if(O.getAttribute("uin_play_id"))
{
getTop().QMPlayer.delSkinById(O.getAttribute("uin_play_id"));
}
var R="uni_id"+(+new Date());
O.setAttribute("uin_play_id",R);
audioPlay({id:R,container:O,url:N.url,author:N.author,title:N.title,autoplay:true,global:true});
P.innerHTML=k.replace({images_path:getPath('image'),author:htmlEncode(N.author)||'\u672A\u77E5',title:htmlEncode(N.title)||'\u672A\u77E5'});
show(P,true);
},_fPlayBgMusic:function(R,O,N,Q){
var W=this,X=W._moWin,U=W.S(h._sBgMusic),V={auto:N,url:R,sosoGet:O?true:false,author:O&&O.author,title:O&&O.title};
if(R.indexOf("http")!=0)
{
return;
}
if(Q=='bgmusic')
{
show(U,true);
var P=GelTags("a",U);
P[0].href=R;
P[1].onclick=function(){
W._fPlay(V);
return false;
};
}
if(N)
{
W._fPlay(V);
}
show(W.S(h._sQQMailBgMusicInfo),false);
},_ready:function(N){
var X=GelTags("player",N.oContentDom);
if(!X.length)
{
return;
}
var Y=this,ab=Y._moWin,Q=Y.S(h._sAttachment);
for(var O=0;O<X.length;O++)
{
var V=X[O],ad=V.id||"",ac=ad.toLowerCase();
if(ac.indexOf("cmd:")==0)
{
ac=ac.split(":").pop();
switch(ac)
{case "voice":
if(!Q)
{
return;
}
var af=escape(attr(V,"param")),ae=attr(V,"media")||"voice",aa=GelTags("span",Q),P=aa.length,ag="";
for(var ak=0,P;ak<P;ak++)
{
var Z=aa[ak],ag=attr(Z,"player");
if(ag&&(Z.innerText||Z.textContent)==unescape(af))
{
var W=V.parentNode;
if(ae=="video")
{
if(!ab.sFlvPlayUrl)
{
ab.sFlvPlayUrl=ag;
W.innerHTML=generateFlashCode(unikey("flvplayer"),"/zh_CN/htmledition/swf/WebFlvPlayer.swf",{width:400,height:335},{wmode:"opaque"});
}
}
else{
W.innerHTML='<div style="padding-left:10px;" ></div>';
var U={id:af,container:W.firstChild,url:ag,title:V.getAttribute('alias')?V.getAttribute('alias')+'\u7684\u8BED\u97F3':'\u60A8\u670B\u53CB\u7684\u8BED\u97F3',dispInfo:{title:V.getAttribute("alias")?V.getAttribute("alias")+"\u7684\u8BED\u97F3":"\u60A8\u670B\u53CB\u7684\u8BED\u97F3"},autoplay:false};
O--;
audioPlay(U);
}
break;
}
}
break;
case "bgmusic":
var aj=attr(V,"url"),ai=Y._get(V,"song"),ah=Y._get(V,"singer");
Y._fPlayBgMusic(aj,aj&&!ai&&!ah?null:{author:ah,title:ai},!N.bManuPlay,ac);
break;
case "pcbgmusic":
var aj=attr(V,"url"),ai=Y._get(V,"song"),ah=Y._get(V,"singer"),R=ab.document.createElement('div');
R.innerHTML='\u64AD\u653E\u5668\u52A0\u8F7D\u4E2D...';
V.parentNode.insertBefore(R,V);
audioPlay({skin:'Global',id:"pcbgmusic",container:R,author:ah,title:ai,autoplay:X.length==1,url:aj});
break;
default:
break;
}
}
else if(ad)
{
Y._fPlayBgMusic(ad);
}
}
}};
});
F.qmMoreOptSel=inherit("qmMoreOptSel",F._qmBaseDM,function(M){
return {_ready:function(N){
var P=this;
_oData=P._moData={},_oMoreOpt=N.oMoreOpt,_oText=["\u5220\u9664\u90AE\u4EF6\u5907\u6CE8","\u6DFB\u52A0\u90AE\u4EF6\u5907\u6CE8","\u53D6\u6D88\u63D0\u9192","\u8BBE\u7F6E\u63D0\u9192","\u6253\u5370"],_oValue=["delremark","addremark","delremind","addremind","print"];
for(var O=_oValue.length-1;O>=0;O--)
{
_oData[_oValue[O]]=0;
}
for(var O=_oMoreOpt.length-1;O>=0;O--)
{
_oData[_oMoreOpt[O]]=1;
}
E(SN(l._sMoreOprContainer,N.oWin),function(Q){
new QMSelect({oContainer:Q,nWidth:86,sDefaultItemValue:"\u66F4\u591A\u64CD\u4F5C...",oMenu:{nWidth:"auto",nMaxWidth:180,nMaxItemView:10,oItems:QMMenu.makeMenuItem(_oText,_oValue)},onafteropenmenu:function(V,R){
for(var U=_oValue.length-1;U>=0;U--)
{
V.itemOption(_oValue[U],"bDisplay",_oData[_oValue[U]]);
}
},onselect:function(R){
callBack(N.fOnSelect,[R.sId]);
}});
});
},switchPair:function(N,O){
var P=this;
P._moData[N]=1;
P._moData[N]=0;
}};
});
F.qmRemark=inherit("qmRemark",F._qmBaseDM,function(M){
return {_initMemVar:function(N){
var O=this;
O._bFoucs=false;
O._mfOnChange=function(P){
O.dealCustomUI('remark',{sAction:P,oWin:O._moWin});
callBack(N,arguments);
};
O._mnDefHgt=O.S(h._sRemarkText).clientHeight;
},isFoucs:function(){
return this._bFoucs;
},_setEvent:function(){
var O=this,P=O._moWin,N=O.S(h._sRemarkText);
O.evt(["ck"],[h._sRemarkContainer,h._sRmd]);
addEvents(N,{focus:function(){
O._bFoucs=true;
O.onFocus();
},keydown:function(Q){
O.onKeydown(Q);
},blur:function(){
O._bFoucs=false;
O.onBlur();
}});
addEvent(P,"beforeunload",function(Q){
var R=O._hasModify();
if(R)
{
Q.returnValue=R;
return R;
}
});
addEvent(N,gbIsIE?"propertychange":"input",function(Q){
if(gbIsIE)
{
Q.propertyName=="value"&&O._resize();
}
else{
O._resize();
}
});
return O;
},_resize:function(){
if(gbIsIE&&gnIEVer==6)
{
return;
}
var P=this,O=P.S(h._sRemarkText),N=O.scrollHeight;
if(gbIsIE)
{
N>P._mnDefHgt&&(O.style.height=N+"px");
}
else{
O.style.height=P._mnDefHgt+"px";
if(O.clientHeight<N)
{
O.style.height=O.scrollHeight+"px";
}
}
},toggle:function(N){
var U=this,R=U.S(h._sRmd),O=U.S(h._sRemarkContainer),P=U.S(h._sRemarkText),Q=U.S(h._sRemarkWrite);
if(R&&R.title.indexOf("\u5220\u9664")>=0)
{
U.del();
}
else if(O&&getTop().isShow(O))
{
U.modify();
}
else{
N&&N.blur();
show(O,true);
show(Q,true);
P.focus();
}
return false;
},del:function(N){
var X=this,W=X.S(h._sRmd),Q=X.S(h._sRemarkContent),P=X.S(h._sRemarkContainer),U=X.S(h._sRemarkText),V=X.S(h._sRemarkWrite),R=X.S(h._sRemarkRead);
if(!Q.innerHTML)
{
show(P,false);
return false;
}
var Y=X.getMailId(),O=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=del");
O.onError=function(Z){
showError("\u5220\u9664\u5907\u6CE8\u5185\u5BB9\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
X._changeButtonMode(false);
};
O.onComplete=function(Z){
if(Z.responseText.indexOf("del successful")==-1)
{
return this.onError();
}
showInfo("\u5220\u9664\u6210\u529F");
if(W)
{
W.title="\u6DFB\u52A0\u90AE\u4EF6\u5907\u6CE8";
W.className="qm_ico_remarkoff";
}
U.value="";
Q.innerHTML="";
show(P,0);
show(V,0);
show(R,0);
X._changeButtonMode(false);
X._mfOnChange("del");
};
confirmBox({msg:"\u60A8\u786E\u5B9A\u8981\u5220\u9664\u6B64\u90AE\u4EF6\u5907\u6CE8\u5417\uFF1F",title:'QQ\u90AE\u7BB1\u63D0\u793A',cancelBtnTxt:"\u53D6\u6D88",confirmBtnTxt:"\u786E\u5B9A",onreturn:function(Z){
if(Z)
{
X._changeButtonMode(true);
O.send(T("mailaction=remarks&sid=$sid$&type=del&mailid=$mailid$").replace({sid:getSid(),mailid:Y}));
}
}});
return false;
},_text2html:function(N){
return htmlEncode(N).replace(/\n/gi,"<br/>").replace(/\x20/gi,"&nbsp;");
},_html2text:function(N){
return htmlDecode(N.replace(/&nbsp;/gi," ").replace(/<br\/?>/gi,"\n"));
},save:function(){
var U=this,V=U._moWin,O=U.S(h._sRemarkContent),Q=U.S(h._sRemarkText),R=U.S(h._sRemarkWrite),P=U.S(h._sRemarkRead),N=new QMAjax("/cgi-bin/mail_mgr?mailaction=remarks&type=mdy"),W=Q.value;
if(!W||W==f)
{
Q.focus();
return !!showError('\u8BF7\u5148\u8F93\u5165\u5907\u6CE8\u5185\u5BB9');
}
if(W.replace(/[^\x00-\xff]/g,"aa").length>=1000)
{
Q.focus();
return !!showError('\u90AE\u4EF6\u5907\u6CE8\u7684\u5B57\u7B26\u4E0D\u80FD\u8D85\u8FC71000\u4E2A');
}
N.onError=function(X){
showError("\u4FDD\u5B58\u5907\u6CE8\u5185\u5BB9\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");
U._changeButtonMode(false);
};
N.onComplete=function(X){
if(X.responseText.indexOf("mdy successful")==-1)
{
return this.onError();
}
showInfo("\u4FDD\u5B58\u6210\u529F");
var Y=U.S(h._sRmd);
if(Y)
{
Y.title="\u5220\u9664\u90AE\u4EF6\u5907\u6CE8";
Y.className="qm_ico_remarkon";
}
O.innerHTML=U._text2html(W);
U._changeButtonMode(false);
U.cancel();
U._mfOnChange("save");
};
if(O.innerHTML==W)
{
return N.onComplete({responseText:"mdy successful"});
}
U._changeButtonMode(true);
N.send(T("mailaction=remarks&sid=$sid$&resp_charset=UTF8&type=mdy&mailid=$mailid$&content=$content$").replace({sid:getSid(),mailid:U.getMailId(),content:encodeURI(W)}));
return false;
},cancel:function(){
var U=this,O=U.S(h._sRemarkContent),N=U.S(h._sRemarkContainer),Q=U.S(h._sRemarkText),R=U.S(h._sRemarkWrite),P=U.S(h._sRemarkRead);
if(O.innerHTML=="")
{
Q.value=U._html2text(f);
show(P,false);
show(R,false);
show(N,false);
}
else{
Q.value=U._html2text(O.innerHTML);
show(P,true);
show(R,false);
}
},modify:function(N){
var V=this,P=V.S(h._sRemarkContent),O=V.S(h._sRemarkContainer),R=V.S(h._sRemarkText),U=V.S(h._sRemarkWrite),Q=V.S(h._sRemarkRead);
R.value=V._html2text(P.innerHTML);
show(Q,false);
show(U,true);
R.focus();
V._resize();
},onFocus:function(){
var O=this,P=O._moWin,N=O.S(h._sRemarkText);
if(N.value==f)
{
N.value="";
}
N.style.color="#000";
N.style.fontSize="14px";
return false;
},onBlur:function(){
var O=this,N=O.S(h._sRemarkText);
if(N.value=="")
{
N.value=f;
N.style.color="#A0A0A0";
N.style.fontSize="12px";
}
return false;
},onKeydown:function(N){
if(N.ctrlKey&&N.keyCode==13||N.altKey&&N.keyCode==83)
{
this.save();
preventDefault(N);
}
},_changeButtonMode:function(N){
this.S(h._sRemarkSave).disabled=N;
},_hasModify:function(){
var Q=this,O=Q.S(h._sRemarkContent),P=Q.S(h._sRemarkText);
if(!P)
{
return '';
}
var N=(P.value.replace(/\r/gi,"")!=Q._html2text(O.innerHTML).replace(/\r/gi,""));
return (P&&P.value&&N&&P.value!=f)?'\u60A8\u586B\u5199\u7684\u5907\u6CE8\u6CA1\u6709\u4FDD\u5B58\uFF0C\u786E\u5B9A\u8981\u79BB\u5F00\u5417\uFF1F':'';
}};
});
F.qmAntiSpam=inherit("qmAntiSpam",F._qmBaseDM,function(M){
return {_initMemVar:function(N,O){
var P=this;
P._moMailInfo=O;
P._moConfig=N;
P._moCheatCodeBar=P.S(h._sCheatCodeBar);
},_setEvent:function(){
var N=this;
N.evt(["ck"],N.SN(l._sSpam));
},_locMore:function(N){
var O=this._moWin.location;
O.replace(appendToUrl(cookQueryString(O.href,{ver:""}),N));
},_createMailFrm:function(O,N){
x({oWin:this._moWin,sFormId:"mail_frm",sAction:"/cgi-bin/mail_mgr"},extend({s:"readmail_spam",s_reject_what:"11",isspam:'true',mailid:O,reporttype:"",location:"readmail",srcfolderid:this._moConfig.folderid,mailaction:"mail_spam"},N));
},reject:function(N,O){
var Q=this,U=attr(N,"type_reject"),R=attr(N,"subjectid");
var P=Q.getFromInfo_();
Q._moWin.QMReadMail&&Q._moWin.QMReadMail.clearCache();
QMMLCache.upVer();
if(U=="sys_reject")
{
Q._createMailFrm(O,{"type_reject":U,"subjectid":R});
doReject(true,attr(N,"groupmail"),Q._moWin,attr(N,"mimefrom")||P.addr,"\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u6B64\u680F\u76EE\u7684\u7CFB\u7EDF\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417?");
}
else{
Q._createMailFrm(O);
doReject(true,attr(N,"groupmail"),Q._moWin,attr(N,"mimefrom")||P.addr,T(['<div>\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F</div>','<div for="reject_confirm_$_idx_$" class="txtflow" style="width:320px;">','<span class="green bold">$name$</span>','<span class="graytext">&lt;$addr$&gt;</span>','</div>']).replace({name:htmlEncode(P.name),addr:P.addr}));
}
},notSpam:function(N,O){
var P=this,Q=P._moWin;
getTop().QMMLCache.upVer();
reportNoSpamJson({},{oWin:P._moWin,sFid:P._moConfig.folderid,oACB:null,bPop:false,bML:false,oMail:[{sMid:O,bUnr:false}]});
},reportSpam:function(P,Q,O,N){
var X=this,W=X._moConfig;
if(attr(P,"yellow")=="true")
{
LogKV({sValue:"getinvestigate|readmail|report_spam|yellowbar"});
}
else{
LogKV({sValue:"getinvestigate|readmail|report_spam|button"});
}
var R=X.attr(P,"noaddblack")!="1";
var U=0;
var V=new Array();
var Z=X.attr(P,"mimefrom");
var Y=X.attr(P,"mailfrom");
if(Z&&Z.length>0)
V[U++]=Z;
if(Y&&Y.length>0)
V[U++]=Y;
getTop().QMMLCache.upVer();
reportSpamJson({bBlackList:R,oAddrList:V},{oWin:X._moWin,sFid:X._moConfig.folderid,oACB:null,bPop:false,bML:false,oncomplete:function(aa){
return X.dealCustomUI('MailMethod',[aa,'reportSpam'])===true||callBack.call(this,N,arguments);
},oMail:[{sMid:Q,bUnr:false}]});
},showHttpImage_:function(){
var N='disptype=html&dispimg=1&clickshowimage=1';
if((!this._moMailInfo.bAsyn&&!this._moMailInfo.bAsynOrg)||!this._moContext.oMailInstance)
{
this._locMore("&"+N);
}
else{
this._moMailInfo.bShowContImg=true;
this._moContext.oMailInstance._asyncGetSubMail(N);
}
},addWhiteSubmit:function(O,P,N){
var Q=this,R=Q._moWin,U=Q.getFromInfo_().addr;
if(!checkMail(trim(U)))
{
return false;
}
x({oWin:R,sMethod:"POST",sAction:e.replace({sid:getSid(),fromaddr:U})}).submit();
runUrlWithSid(r.replace({rtype:1000006,rmsg:P}));
rdVer(P,1);
Q.showHttpImage_();
show(Q._moCheatCodeBar,false);
preventDefault(N);
},addSpamVote:function(N,O){
var P=this,R=P.attr(N,"rtype");
runUrlWithSid(r.replace({rtype:R,rmsg:O})+"&r_subtype=spamvote&fname="+P.getFromInfo_().addr);
if(R=="1")
{
P.S(h._sGreenBar).innerHTML='\u611F\u8C22\u53C2\u4E0E\uFF01\u60A8\u8FD8\u53EF\u4EE5\u5C06\u6B64\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\uFF0C\u5F52\u6863\u5230\u6307\u5B9A\u6587\u4EF6\u5939&nbsp;&nbsp;<a <a ck="exbookEmlMgr" book="1" href="javascript:;">\u81EA\u52A8\u5F52\u6863</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">\u4E0D\u9700\u8981</a>';
show(P.S(h._sGreenBarText),false);
}
else if(R=="2")
{
P.S(h._sGreenBar).innerHTML='\u611F\u8C22\u53C2\u4E0E\uFF01\u5982\u679C\u4E0D\u60F3\u518D\u6536\u5230\u6B64\u53D1\u4EF6\u4EBA\u7684\u90AE\u4EF6\uFF0C\u60A8\u53EF\u4EE5&nbsp;&nbsp;<a ck="reject" href="javascript:;">\u62D2\u6536</a>&nbsp;&nbsp;<a onclick="this.parentNode.parentNode.style.display=\'none\'" href="javascript:;">\u7EE7\u7EED\u6536\u53D6</a>';
show(P.S(h._sGreenBarText),false);
}
else{
getTop().showInfo("\u5DF2\u6210\u529F\u53CD\u9988\u60C5\u51B5");
var Q=P.S(h._sGreenBar).parentNode;
Q.style.display="none";
}
rdVer(O,1);
},openHttpImage:function(O,P,N){
runUrlWithSid(r.replace({rtype:"1000004",rmsg:P,rresult:1}));
this.showHttpImage_();
preventDefault(N);
},openUserEdu:function(N,O){
runUrlWithSid(r.replace({rtype:1000007,rresult:1,rmsg:O}));
},exbookEmlMgr:function(N,O){
var Q=this,R=Q.attr(N,"book"),P=Q.attr(N,"tuan")||0;
loadingBox({model:"\u53CD\u5783\u573E",js:["$js_path$webp/qmantispam264eed.js"],oncheck:function(){
return !!getTop().QMAntiSpam;
},onload:function(){
var U=new QMAntiSpam.qmExbookEmlMgr({sMailId:O,from:Q.getFromInfo_(),fOnReload:function(){
w(O,Q._moWin);
}});
if(R=="1")
{
U.book1();
}
else{
U.book2(P);
}
}});
}};
});
F.qmMarkAdMail=inherit("qmMarkAdMail",F._qmBaseDM,function(M){
return {_initMemVar:function(N,O){
var P=this;
P._moMailInfo=O;
P._moConfig=N;
},_setEvent:function(){
var N=this;
N.evt(["ck"],N.SN(l._sAdMail));
},reportAd:function(O,P,N){
var V=this;
var U=V.getFromInfo_();
var R=V._moConfig;
var Q=V.attr(O,'toad')!="0";
reportAdJson({bNotAd:!Q,bShowConfirm:true},{oWin:V._moWin,sFid:R.folderid,oACB:null,bPop:false,bML:false,oncomplete:function(W){
V.dealCustomUI('MailMethod',[W,'markAdMail',Q]);
},oMail:[{sMid:P,bUnr:false,sSName:U.name,sSEmail:U.addr}]});
}};
});
F.qmSenderInfo=inherit("qmSenderInfo",F._qmBaseDM,function(M){
return {_initMemVar:function(N,O){
this._moMail=O;
this._moConfig=N;
},_setEvent:function(){
var N=this;
N.evt(["ck"],[h._sSenderInfo,h._sSenderInfo2,h._sSenderInfo3]);
},_getBlogList:function(){
var N=this;
createIframe(N._moWin,t.replace({sid:getSid(),mail:N._moMail}),{id:"iframeRss"});
},_getMailList:function(){
var N=this;
QMAjax.send(s.replace({sid:getSid(),mailid:N.getMailId(),mail:N._moMail}),{method:"GET",onload:function(O,P){
if(O)
{
var Q=evalValue(P);
N.S("divMails_sidebar").innerHTML=Q.sHtml||"";
}
}});
},toggle:function(){
var Q=this,O=Q._moConfig,P=Q.S(h._sSenderInfo),N=!isShow(P);
P.style.zIndex=N?"21":"20";
show(P,N);
Q.S(h._sMainMail).className=N?"myleftbar":"";
Q.S(h._sPageEnd).className=N?"myleftbar":"";
Q.S(h._sContentDiv).className=N?"body myleftbar_":"body";
if(bnewwin)
{
show(Q.S(h._sNextMailTop),!N);
show(Q.S(h._sNextMailBt),!N);
P.style.marginTop="40px";
}
if(O.logintype!="2")
{
Q._getMailList();
}
}};
});
F.qmConvMail=inherit("qmConvMail",F.qmReadMail,function(M){
return {_initMemVar:function(){
var N=this;
M._initMemVar.apply(N,arguments);
N._moSubMails={};
N._mnNewSubMails=0;
N._moNewsSubMails=[];
},_setEvent:function(){
var N=this;
N.evt(["ck","md","dck","mor","mot"],N._moWin.document.body);
N._initSelectAllEvt();
},_rInsAsyn:function(){
var N=this;
var Q=N._moWin;
var O=getTop();
var P=N.S('submail_inner_body');
if(P)
{
O.E(O.finds('[asyninit=1]',Q),function(R){
P.appendChild(R);
});
}
},_initSelectAllEvt:function(){
var O=getTop(),N=this,P=N._moWin;
addEvent(P.document,"keydown",function(Q){
if(Q.ctrlKey&&Q.keyCode=="65")
{
N.S(N.msCurrent)&&N.doSelectAll(Q,N.S(N.msCurrent));
}
});
},_startSubMod:function(N){
var R=this,Q,P=R._moMailInfo,O=extend({},R._moContext,N,{oMailInstance:R});
switch(O.sModuleName)
{case "qmSubMail":
var U=P.oSubMails[O.sAux]||[{},{}],V=O.sContext||"";
U[0].cmailid=R.getMailId();
if(O.sAux!=0)
{
U[1].to=P.oSubMails[0][1].to;
U[1].cc=P.oSubMails[0][1].cc;
}
Q=new F.qmSubMail(U[0],U[1],O);
V&&(R._moSubMails[V]=Q);
break;
case "qmQReply":
var U=P.oSubMails[O.sAux]||[{},{}],W='';
if(R._moQReply)
{
W=R._moQReply.getContent();
R._moQReply.removeSelf();
}
Q=R._moQReply=new F.qmQReply(U[0],U[1],{fCheckBcc:function(){
callBack.call(R,R.checkBcc,arguments);
},fQReplyComplete:function(X){
var Y=evalValue(X);
if(Y)
{
this.S(h._sQSource).view("init");
R._qReplyComplete(Y.mailstr);
}
else{
this.S(h._sQSource).view("show");
}
},s:"conv_send",sourceContent:W},O);
break;
case "qmAntiSpam":
Q=R._moAntiSpam=new F.qmAntiSpam(R._moConfig,P,O);
break;
case "qmMarkAdMail":
Q=R._moMarkAdMail=new F.qmMarkAdMail(R._moConfig,P,O);
break;
}return Q;
},initQReply:function(N,O){
this._startSubMod({sModuleName:"qmQReply",sAux:N,sContext:O});
},_qReplyComplete:function(N){
var P=this,Q=P.S(h._sSubMailStartDiv);
insertHTML(Q,"afterEnd",N);
var O=finds('div[module="qmSubMail"]',P.S('submail_inner_body'));
P._startSubMod({sContext:O[0].getAttribute("context"),sModuleName:"qmSubMail",sAux:O[0].getAttribute("aux")});
},goCal:function(N,O){
var Q=this,P=Q._moSubMails[O];
var R=P._moMailInfo.subject;
M.goCal.call(this,N,O,R);
},optMail:function(O,P,N){
var V=this,Q=V.S('submail_inner_body'),U=finds('div[ck="dispSubMail"]',Q),R=V.parentToContextDom(U[0]);
if(R)
{
P=R.getAttribute('context');
}
M.optMail.call(V,O,P,N);
},_pageReady:function(){
var P=this,R=P._moWin,N=P._moConfig,O=P._moMailInfo,Q=O.oSubMails;
P._fakeReadMail();
P._readMailFinish();
P._rInsPageEnd();
P._rInsAsyn();
initMailSelect(N.oMoveItems,true,N.bOpenTag=="1",R,N.folderid,N.bAutoTag);
E(Q,function(V){
if(V)
{
P._startSubMod(V[2]);
}
V&&getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,V[2].sContext);
});
if(O.nLen>2&&Q[0][1].to.length>2&&getTop().g_encryptuin==Q[O.nLen-1][1].from.qq)
{
getTop().requestShowTip("tip74container","74",R);
}
if(N.nRet!=0&&N.bRetry=="")
{
var U=P._moWin.location.href+"";
U=U.replace(/#.*/gi,"")+"&retry=1";
P.clearCache();
P._moWin.location=U;
}
P._flushFolder();
N.bClearRDCache&&P.clearCache();
},getSubMailWithDom:function(N){
var Q=this,P=N,O=N.ownerDocument,U,R;
while(P&&P!=O)
{
if((U=attr(P,G._CON_ATTR))&&(R=Q._moSubMails[U]))
{
return R.getMailInfo();
}
P=P.parentNode;
}
return null;
},_delConvMail:function(N){
var O=this;
doRmMail(extend(O.getCBInfo(),{oncomplete:function(P,Q){
O.dealCustomUI('MailMethod',[P,'delMail',Q]);
var V=Q.url||"";
if(V.indexOf("/cgi-bin/readmail?")!=-1)
{
var R=getUrlParams(V||O._moWin.location)["t"];
var U=(R=="readmail_ad"||R=="readmail_ad_conversation")?"collo":"";
O.prevandnext({mailid:getUrlParams(V||O._moWin.location)["mailid"],type:U});
return true;
}
}}),["mailaction=mail_del&mailid=",O.getMailId(),(N?"&Fun=PerDel":"")]);
},showAdSenderMoreInfo:function(O,P,N){
this.dealCustomUI('showAdSenderMoreInfo',arguments);
},delMail:function(N,O){
var R=this,Q=finds("input[ck='selectSubMail']",R.S("submail_inner_body")).length,P=R.attr(N,"opt")=="1";
if(Q==1&&!P)
{
getTop().QMMLCache.upVer();
R._delConvMail(P);
return;
}
new QMDialog({sTitle:"\u5220\u9664\u786E\u8BA4",sBodyHtml:TE(['<div>','<div class="cnfx_content">','<span class="dialog_icon icon_info_b"></span>','<div class="dialog_f_c">','$@$if($isperdel$)$@$','$@$if($count$>1)$@$','<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u8FD9<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5F7B\u5E95\u5220\u9664\u540E\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6574\u7406\u90AE\u4EF6\u8FDB\u884C\u90E8\u5206\u5220\u9664\u3002</div>','$@$else$@$','\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F','$@$endif$@$','$@$else$@$','$@$if($count$>1)$@$','<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8FD9<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5220\u9664\u540E\u5C06\u79FB\u5230\u201C\u5DF2\u5220\u9664\u201D\u4E2D\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u901A\u8FC7\u6574\u7406\u90AE\u4EF6\u8FDB\u884C\u90E8\u5206\u5220\u9664\u3002</div>','$@$else$@$','\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u79FB\u5230\u201C\u5DF2\u5220\u9664\u201D\u4E2D\uFF0C\u60A8\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F','$@$endif$@$','$@$endif$@$','<div></div>','</div>','</div>']).replace({isperdel:P,count:Q}),sFootHtml:TE(['<div class=" txt_right cnfx_btn">','$@$if($count$>1)$@$','<a class="btn_gray btn_left" id="selectmail" href="javascript:;">\u6574\u7406\u90AE\u4EF6<span class="btn_dots">...</span></a>','$@$endif$@$','<a class="btn_gray confirm wd2" id="confirm" href="javascript:;">\u786E\u5B9A</a>','<a class="btn_gray cancelwd2" id="cancel" href="javascript:;">\u53D6\u6D88</a>','</div>']).replace({count:Q}),onshow:function(){
var U=this;
U.S("confirm")&&U.S("confirm").focus();
},onload:function(){
var U=this;
if(Q>1)
{
U.S("selectmail").onclick=function(){
R._changeToEditSubMail(true);
U.close();
};
}
U.S("confirm").onclick=function(){
getTop().QMMLCache.upVer();
R._delConvMail(P);
U.close();
};
U.S("cancel").onclick=function(){
U.close();
};
}});
},delManageMail:function(N,O){
var Q=this,P=Q.attr(N,"opt")=="1";
rmMail(P,extend(Q.getCBInfo(),{oncomplete:function(R,U){
var X=U.url||"";
var V=getUrlParams(X||Q._moWin.location)["t"];
var W=(V=="readmail_ad"||V=="readmail_ad_conversation")?"collo":"";
if(X.indexOf("/cgi-bin/readmail?")!=-1)
{
Q.prevandnext({mailid:getUrlParams(X||Q._moWin.location)["mailid"],type:W});
return true;
}
}}));
},reportSpam:function(P,Q,O,N){
this._moAntiSpam||this._startSubMod({sModuleName:"qmAntiSpam"});
this._moAntiSpam.reportSpam(P,Q,O,N);
},reject:function(N){
var R=this;
if(attr(N,"type_reject")=="sys_reject")
{
R._moAntiSpam||R._startSubMod({sModuleName:"qmAntiSpam"});
R._moAntiSpam.reject(N,R.getMailId());
return;
}
var P=[];
var Q=R._moMailInfo;
for(var V=0;V<Q.nLen;++V)
{
var U=Q.oSubMails[V][1].from;
var O=R._moWin['__relative_list_self__'][U.addr]||0;
if(O!=1)
{
P.push({sSName:U.name,sSEmail:U.addr,sMid:Q.oSubMails[V][2].sContext});
}
}
reportAddrConfirm({oMail:P},{sTitle:'\u62D2\u6536\u786E\u8BA4',sConfirmBtnTxt:'\u62D2\u6536',sTextTitle:'\u62D2\u6536\u540E\u60A8\u5C06\u4E0D\u518D\u6536\u5230\u6765\u81EA\u4EE5\u4E0B\u5730\u5740\u7684\u90AE\u4EF6\uFF0C\u786E\u8BA4\u62D2\u6536\u5417\uFF1F',onreturn:function(W,X,Z,Y){
if(W)
{
getTop().QMMLCache.upVer();
R._moAntiSpam||R._startSubMod({sModuleName:"qmAntiSpam"});
R._moAntiSpam._createMailFrm(R.getMailId(),{"addr":X.join(";"),"submailid":Z.join(";"),"nogopage":R.dealCustomUI('getModelName')=='floatRead4mailList'?'true':''});
_oFrm=S("mail_frm",R._moWin);
if(_oFrm.s_reject_what)
{
_oFrm.s_reject_what.value="10";
}
setMailType("reject","true",attr(N,"groupmail"),R._moWin);
setTimeout(function(){
R.dealCustomUI('MailMethod',[null,'reject']);
},300);
}
}});
},parentToContextDom:function(N){
return parents("div[module='qmSubMail']",N)[0];
},editSubMail:function(){
var N=this;
N._changeToEditSubMail(true);
},foldSubMail:function(N){
var V=this,Q=N,P=V.S("submail_inner_body"),R=finds("div[ck='dispSubMail']",P),O=true,U,W;
for(var X=0;X<R.length;X++)
{
if(!isShow(R[X]))
{
O=false;
break;
}
}
if(!O)
{
E(R,function(Y){
if(!isShow(Y))
{
U=V.parentToContextDom(Y);
if(U)
{
W=V._moSubMails[U.getAttribute("context")];
W&&W._fandx(true);
}
}
});
setTimeout(function(){
addClass(Q,"unfoldSubMail");
},250);
}
else{
U=V.parentToContextDom(R[0]);
if(U)
{
W=V._moSubMails[U.getAttribute("context")];
W&&W.dispSubMail(R[0]);
}
setTimeout(function(){
rmClass(Q,"unfoldSubMail");
},250);
}
},getCBInfo4EditMode:function(){
var R=this;
if(R.S("selectAllSubMail").checked)
{
return R.getCBInfo();
}
var P=[];
var U=R.S("submail_inner_body");
var N=R._moConfig;
var Q=R._moMailInfo;
var O=R.getFromInfo_();
;E(finds("input[ck='selectSubMail']",U),function(V){
if(V.checked)
{
var W=R.parentToContextDom(V);
P.push({sMid:attr(W,"context"),bSys:N.bSys,bUnr:attr(W,"newmail")=='true',bSubUnr:parseInt(attr(W,"newcnt")||'0',10)>0,bTms:false,sSName:O.name,sSEmail:O.addr,sDOMid:W.id});
}
});
return {oWin:R._moWin,sFid:N.folderid,bML:false,bReadmailEditMode:true,oMail:P};
},getFromInfo_:function(){
return this._moMailInfo.oSubMails[0][1].from||{};
},configPreRmMail:function(N,O){
var Q=this;
var P=N.oncomplete;
if(N.bReadmailEditMode)
{
switch(O)
{case 'moveMailJs':
N.oncomplete=function(R,U){
if(P)
{
P.apply(this,arguments);
}
E(R.oMail,function(V){
removeSelf(S(V.sDOMid,R.oWin));
});
Q.updateDelBtnCnt(0);
return true;
};
return true;
}
}
return false;
},delSomeSubMail:function(N,O){
var X=this,Q=attr(N,"opt")=="1",P=X.S("selectAllSubMail").checked,W=[],V=[],U=0,Y=X.S("submail_inner_body");
E(finds("input[ck='selectSubMail']",Y),function(Z){
if(Z.checked)
{
var aa=X.parentToContextDom(Z);
W.push(attr(aa,"context"));
V.push(aa.id);
}
U++;
});
if(V.length==0)
{
showError("\u8BF7\u5148\u52FE\u9009\u8981\u5220\u9664\u7684\u90AE\u4EF6");
return;
}
function R()
{
if(P)
{
X._delConvMail(Q);
}
else{
doRmMail(extend(X.getCBInfo(),{oncomplete:function(Z,aa){
E(V,function(ab){
removeSelf(S(ab,X._moWin));
});
X.updateDelBtnCnt(0);
return true;
}}),["mailaction=mail_del&mailid=",W.join("&mailid="),(Q?"&Fun=PerDel":"")]);
}
ossLog("delay","all","stat=nothing&locval=convmail,delsomesubmail,"+(Q?"1":"0"));
}
if(Q)
{
confirmBox({msg:T(['<div class="dialog_f_t">\u60A8\u786E\u5B9A\u8981\u5F7B\u5E95\u5220\u9664\u6240\u9009\u7684<span class="bold" style="margin:4px;">$count$</span>\u5C01\u90AE\u4EF6\u5417\uFF1F</div>','<div class="dialog_f_d">\u5F7B\u5E95\u5220\u9664\u540E\u90AE\u4EF6\u5C06\u65E0\u6CD5\u6062\u590D\u3002</div>']).replace({count:W.length}),title:"\u5220\u9664\u786E\u8BA4",cancelBtnTxt:"\u53D6\u6D88",confirmBtnTxt:"\u786E\u5B9A",onreturn:function(Z){
if(Z)
{
R();
}
}});
}
else{
R();
}
},selectAllSubMail:function(N){
var P=this,O=0;
E(finds("input[ck='selectSubMail']",P.S("submail_inner_body")),function(Q){
Q.checked=N.checked;
if(Q.checked)
{
O++;
}
});
P.updateDelBtnCnt(O);
},updateDelBtnCnt:function(N){
var O=this;
E(finds("a[ck='delSomeSubMail']",O._moWin.document),function(P){
P.innerHTML=P.innerHTML.replace(/\(.*?\)/,"")+"("+N+")";
if(0==N)
{
addClass(P,"btn_disabled");
}
else{
rmClass(P,"btn_disabled");
}
});
},_changeToEditSubMail:function(N){
var U=this,P=U.S("submail_inner_body"),O=U._moWin.document.body;
if(N)
{
var Q=finds("div[ck='dispSubMail']",P);
E(Q,function(V){
if(!isShow(V))
{
var W=U.parentToContextDom(V);
if(W)
{
var X=U._moSubMails[W.getAttribute("context")];
X&&X._fandx('auto');
}
}
});
addClass(O,"mail_select");
E(finds("div.qm_converstaion_summary_body",P),function(V){
attr(V,"_title",V.title);
V.title="";
attr(V.parentNode,"ck","selectSubMailOuter");
});
var R=U.S("selectAllSubMail");
R.checked=true;
U.selectAllSubMail(R);
}
else{
rmClass(O,"mail_select");
E(finds("div.qm_converstaion_summary_body",P),function(V){
V.title=attr(V,"_title");
attr(V.parentNode,"ck","dispSubMail");
});
}
},cancelEditSubMail:function(N,O){
var P=this;
P._changeToEditSubMail(false);
P.updateMailSize();
},getSubMailFrom:function(N){
var O=this._moSubMails[N];
if(O)
{
return O.getMailInfo().from.name;
}
},goback:function(P,Q,O){
var N=false;
if(this.getTipsInfo().unread>0)
{
N=true;
}
M.goback.call(this,P,Q,O,N);
},isCurrentConv:function(P,N,O){
var Q=this,R=Q.getMailId();
QMAjax.send(T('/cgi-bin/readmail?sid=$sid$&s=$submail$&isAdMail=$isAdMail$&t=check_submail.json&mode=pre&action=checksubmail&mailid=$mailid$&submailid=$submailid$').replace({sid:getSid(),mailid:R,submailid:P,isAdMail:Q._msModuleName=='qmAdConvMail'?1:0,submail:Q._msModuleName=='qmAdConvMail'?'adsubmail':'submail'}),{method:'GET',onload:function(U,V){
var W=evalValue(V);
if(U)
{
if(W.ret=='1')
{
N.call(O,true);
Q.updateNewMailTips(W.maildata);
LogKV({sValue:'convMail|newmail|tips|show'});
return;
}
}
N.call(O,false);
}});
},getTipsInfo:function(N){
return {'unread':this._mnNewSubMails||0};
},addNewSubMail:function(N){
var P=this,Q=P.S(h._sSubMailStartDiv);
insertHTML(Q,'afterEnd',N.mailstr);
var O=N.mailjson[2];
P._moMailInfo.oSubMails[N.mailjson[0].sIndex]=N.mailjson;
P._startSubMod({sContext:O.sContext,sModuleName:O.sModuleName,sAux:O.sAux});
},adjustTipsPosition:function(N,O){
var Q=this,U=getTop(),P=12,R=finds('a[ck="checkNewSubMail"]',Q._moWin)[0];
if(!Q._fDoAdjust)
{
Q._fDoAdjust=function(){
var V=U.bodyScroll(Q._moWin.document,'scrollTop');
if(O.top-V+O.height/2<P)
{
R.style.top=V-O.top+P+'px';
R.style.position='absolute';
}
else{
R.style.position='static';
}
};
}
Q._fDoAdjust();
if(N)
{
U.addEvent(Q._moWin,'scroll',Q._fDoAdjust);
}
else{
U.removeEvent(Q._moWin,'scroll',Q._fDoAdjust);
}
},toggleNewMailTips:function(N){
var P=this,R=getTop(),Q=finds('a[ck="checkNewSubMail"]',P._moWin),O=finds('a[ck="foldSubMail"]',P._moWin);
if(N)
{
P.adjustTipsPosition(true,R.calcPos(O[0],'json'));
show(Q[0],true);
show(O[0],false);
}
else{
show(Q[0],false);
show(O[0],true);
P.adjustTipsPosition(false);
}
},updateNewMailTips:function(N){
var P=this,O=S('newSubMailCnt',P._moWin);
P._mnNewSubMails++;
O.innerHTML=P._mnNewSubMails;
if(P._mnNewSubMails==1)
{
P.toggleNewMailTips(true);
}
P._moNewsSubMails.push(N);
},clearMailTips:function(){
var N=this,O=finds('a[ck="checkNewSubMail"]',N._moWin);
N._mnNewSubMails=0;
N._moNewsSubMails=[];
N.toggleNewMailTips(false);
N.updateMailSize();
},checkNewSubMail:function(N){
var R=this,V=getTop(),O=R.S('submail_inner_body');
for(var X=0;X<R._moNewsSubMails.length;X++)
{
var U=R._moNewsSubMails[X];
if(X==R._moNewsSubMails.length-1)
{
U.mailjson[1].bInitReply=true;
}
R.addNewSubMail(U);
}
var Q=finds('div[ck="dispSubMail"]',O),P=R.parentToContextDom(Q[0]);
if(P)
{
_oSubMail=R._moSubMails[P.getAttribute('context')];
_oSubMail&&_oSubMail.dispSubMail(Q[0]);
}
R._fakeReadMail();
R.clearCache();
var W=R._moConfig.folderid;
setFolderUnread(W,getFolderUnread(W)-1);
LogKV({sValue:'convMail|newmail|tips|click'});
V.bodyScroll(R._moWin,'scrollTop',0);
R.clearMailTips();
}};
});
F.qmSubMail=inherit("qmSubMail",F.qmReadMail,function(M){
return {_init:function(){
var N=this;
M._init.apply(N,arguments);
if(!N._moMailInfo.bAsyn)
{
N._fixAbsoluteContent();
}
},_setEvent:function(){
var N=this,O=N._moWin;
N.evt(["ck","md","dck","mot","mor"],h._sSubMail);
},_ready:function(){
var V=getTop(),U=this,W=U._moWin,N=U._moConfig,Q=U._moMailInfo,O=U.S(h._sContentDiv);
if(!Q.bAsyn)
{
N.bMusicManuPlay=N.sIndex!="0";
N.bBccToMe=C(Q);
swapLink(O,Q.disptype,W,U.getMailId());
if(N.bNeedIdentifyLocation)
{
V.locationIdentify(O,z({sMailId:U.getMailId()}));
}
U._sendCopyAction(O);
U.checkDecryptMail();
U._startSubMod({sModuleName:"qmRemark"});
U._startSubMod({sModuleName:"qmAntiSpam"});
U._startSubMod({sModuleName:"qmPlayerParser"});
if(Q.bInitReply==true)
{
var R=this._moWin.QMReadMail;
R.initQReply(U._moContext.sAux,U.getMailId());
}
else{
var P=U.S('quickreply');
removeSelf(P);
}
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(X){
U._startSubMod({sModuleName:I});
U.rmLanguage(O);
});
U.showQBTipBtn();
U.osslogImgAttach_();
}
else{
Q.bAsynOrg=true;
}
},getCMailId_:function(){
return this._moConfig.cmailid;
},selectSubMail:function(N){
var R=this,Q=S("selectAllSubMail",R._moWin),O=true,P=0;
E(finds("input[ck='selectSubMail']",S("submail_inner_body",R._moWin)),function(U){
if(!U.checked)
{
O=false;
}
else{
P++;
}
});
Q.checked=O;
R._moWin.QMReadMail.updateDelBtnCnt(P);
},selectSubMailOuter:function(N){
var P=this,O=finds("input[ck='selectSubMail']",N)[0];
O.checked=(O.checked?"":"checked");
P.selectSubMail(O);
},clearCache:function(){
getTop().QMMLCache.upVer();
rdVer(this._moConfig.cmailid,1);
},afterDecrytMail:function(){
var N=this;
showInfo("\u90AE\u4EF6\u89E3\u5BC6\u6210\u529F");
N._asyncGetSubMail();
N.clearCache();
},_asyncGetMail:function(P,N,O){
var Q=this;
QMAjax.send(T("/cgi-bin/readmail?sid=$sid$&t=readsubmail&s=$s$&mailid=$mailid$&submailid=$submailid$&frid=$frid$&classalias=qmbox$index$&index=$index$&folderidAlias=$folderidAlias$"+(O?'&'+O:'')).replace({sid:getSid(),mailid:Q.getCMailId_(),submailid:Q.getMailId(),frid:Q._moMailInfo.frid,s:P,index:Q._moContext.sAux,folderidAlias:getTop().S("ipt_folderid",getMainWin())&&getTop().S("ipt_folderid",getMainWin()).value}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(R,U){
var V=trim(U);
if(!R||V.indexOf("<!--cgi exception-->")==0)
{
N();
}
else{
N(evalValue(V));
Q.checkPoison();
}
}});
},_setRefer:function(O,N){
var U=this,V=N.innerHTML,P=0,R=GelTags("form",U.S(h._sContentDiv));
for(P=0;P<R.length;P++)
{
var Q=R[P];
if(attr(Q,"_refer_")=="1")
{
if(O.length)
{
if(P>=O.length)
{
break;
}
try{
Q.innerHTML=O[P].replace(/<\/q>/g,"</blockquote>");
}
catch(W)
{
debug("error:innerHTML readonly "+P);
}
}
Q.className=O?"":"qQmAIlcOnV";
}
}
if(O)
{
attr(N,"disp","0");
V=V.replace("\u663E\u793A","\u9690\u85CF");
}
else{
attr(N,"disp","1");
V=V.replace("\u9690\u85CF","\u663E\u793A");
}
N.innerHTML=V;
},setCurrent:function(O,P,N){
var Q=this._moWin.QMReadMail;
Q.msCurrent="contentDiv"+this.context("sAux");
},unsetCurrent:function(O,P,N){
var Q=this._moWin.QMReadMail;
Q.msCurrent="";
},seek:function(){
var N=this,O=N._moWin;
scrollIntoMidView(N.S(h._sSubMail),O.document.body);
},newWinRead:function(O,P,N){
getTop().QMMLCache.upVer();
goNewWin(T([m,'&t=readmail&folderid=$folderid$&folderidAlias=$folderidAlias$']).replace({folderid:this._moConfig.folderid,mailid:P,folderidAlias:getTop().S("ipt_folderid",getMainWin())&&getTop().S("ipt_folderid",getMainWin()).value}),false);
},delMail:function(N){
var P=this;
var O=P._moWin.QMReadMail;
if(O.updateMailSize(true).nTotal<=1)
{
O.delMail(N);
return;
}
rmMail(P.attr(N,"opt")||0,extend(P.getCBInfo(),{oncomplete:function(Q,R){
P.dealCustomUI('MailMethod',[Q,'delSubMail',R]);
P._fandx(true,function(){
removeSelf(P.S(h._sSubMail));
O.notify("delsubmail");
return true;
});
return true;
}}));
P.clearCache();
},getCBInfo:function(){
var Q=this,N=Q._moConfig,P=Q._moMailInfo,O=Q.getFromInfo_();
;return {oWin:Q._moWin,sFid:N.folderid,bML:false,oMail:[{sMid:Q.getMailId(),bSys:N.bSys,bUnr:false,bSubUnr:false,bTms:false,sSName:O.name,sSEmail:O.addr}]};
},fReportSpamCallBack:function(){
var N=this;
return function(){
var O=N._moWin.QMReadMail;
N._fandx(true,function(){
removeSelf(N.S(h._sSubMail));
O._moMailInfo.nLen>1&&O.notify("delsubmail");
return true;
});
return O._moMailInfo.nLen-1?true:false;
};
},moreOpt:function(N,O){
var W=calcPos(N),X=this,Y=X._moWin,U=Y.document&&Y.document.documentElement,V,R=W[2],P=185,Q=U?(U.clientHeight+U.scrollTop):0;
if(X._moConfig.bEncrypt)
{
V=[{sId:"reportSpam",sItemValue:"\u4E3E\u62A5"},{sId:"PerDel",sItemValue:"\u5F7B\u5E95\u5220\u9664"}];
}
else{
V=[{sId:"reportSpam",sItemValue:"\u4E3E\u62A5"},{sId:"PerDel",sItemValue:"\u5F7B\u5E95\u5220\u9664"},{sId:"fwgroup",sItemValue:"\u8F6C\u53D1\u5230\u7FA4\u90AE\u4EF6"},{sId:"note",sItemValue:"\u4FDD\u5B58\u5230\u8BB0\u4E8B\u672C"},{sId:"fweml",sItemValue:"\u4F5C\u4E3A\u9644\u4EF6\u8F6C\u53D1"},{sId:"dleml",sItemValue:"\u5BFC\u51FA\u4E3Aeml\u6587\u4EF6"},{sId:"mime",sItemValue:"\u663E\u793A\u90AE\u4EF6\u539F\u6587"},{sId:"code",sItemValue:"\u90AE\u4EF6\u6709\u4E71\u7801\uFF1F"}];
}
R+P>Q&&(R-=(P+15));
new QMMenu({oEmbedWin:X._moWin,sId:"menu_"+O,oItems:V,nX:W[3],nY:R,bAutoClose:false,onitemclick:function(aa,Z){
if(aa=="reportSpam")
{
X._moAntiSpam.reportSpam(N,O,null,X.fReportSpamCallBack());
X.clearCache();
}
else if(aa=="PerDel")
{
X.delMail({opt:"1"});
}
else{
X.optMail2({opt:aa},O);
}
}});
},dispRef:function(N){
var O=this,P=O.attr(N,"disp");
if(!N||N.disabled)
{
return;
}
if(P=="1")
{
O._setRefer(true,N);
}
else if(P=="asyn")
{
N.disabled=true;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
O._asyncGetMail("refer",function(Q){
showProcess(0);
if(Q)
{
O._setRefer(Q,N);
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
N.disabled=false;
});
}
else if(P=="0")
{
O._setRefer(false,N);
}
},dispDetail:function(N){
var W=this,U=W._moMailInfo,Y=W.attr(N,"disp"),Q=W.S(h._sDetailBtn),P=W.S(h._sDetail),X=W.S(h._sSum),R=GelTags("img",Q)[0],O=GelTags("a",Q)[0],V=W.S(h._sReferInfo);
if(Y=="1")
{
if(isShow(P))
{
return;
}
show(X,false);
qmAnimation.expand(P);
R.title=O.title="\u9690\u85CF\u90AE\u4EF6\u8BE6\u60C5";
R.className="qm_conversation_input_hidemail";
O.innerHTML="\u9690\u85CF";
attr(Q,"disp","0");
if(V&&V.innerHTML==""&&W._moWin.QMReadMail)
{
V.innerHTML=W._moWin.QMReadMail.getSubMailFrom(U.refermailid)||"";
}
}
else{
if(isShow(X))
{
return;
}
qmAnimation.fold(P,{oncomplete:function(){
show(X,true);
}});
R.title=O.title="\u663E\u793A\u90AE\u4EF6\u8BE6\u60C5";
R.className="qm_conversation_input_showmail";
O.innerHTML="\u90AE\u4EF6\u8BE6\u60C5";
attr(Q,"disp","1");
}
},_fandx:function(N,O){
debug("_fandx");
var X=this,Z=getTop(),W=X.S(h._sFold),V=X.S(h._sExpand),Y=X.S(h._sSubMail);
if(N=='auto')
{
N=!isShow(W);
}
if(N)
{
show(W,true);
var Q=W.scrollHeight;
show(W,false);
qmAnimation.fold(V,{speed:"fast",to:Q||48,oncomplete:function(){
if(O&&O()===true)
{
return;
}
setClass(Y,"qm_con_fold clearfix");
show(V,false);
show(W,true);
}});
}
else{
var P=W.scrollHeight;
show(W,false);
show(V,true);
setClass(Y,"qm_con_expand clearfix");
qmAnimation.expand(V,{from:P,speed:"fast",tween:"Sine",oncomplete:O});
var U=Z.finds("div[ui-type='attCon']",Y)[0],R=U&&Z.finds("a[ui-type='netdiskBind']",U)[0];
Z.QMNetDisk&&U&&R&&setTimeout(function(){
Z.QMNetDisk.route("tips","readmail",U,{offsetTop:80,offsetLeft:R.offsetLeft+R.clientWidth/2});
},3000);
}
},toReferMail:function(N){
var O=this;
O._moWin.QMReadMail.notify("toRefer",O._moMailInfo.refermailid);
},_asyncGetSubMail:function(N){
var O=this;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
O._bAsyncGetSubMail=true;
O._asyncGetMail("submail",function(P){
O._bAsyncGetSubMail=false;
if(P)
{
showProcess(0);
O.S(h._sSubMail).innerHTML=P.mailstr;
typeof (O._moWin.showNetDisk)=="function"&&O._moWin.showNetDisk(O.S(h._sSubMail));
O._fandx(false,function(){
O._fixAbsoluteContent();
});
O._moMailInfo.bAsyn=false;
O._ready();
y();
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
},N);
},dispSubMail:function(N){
var P=this;
if(P._bAsyncGetSubMail)
{
return;
}
if(P.attr(N,"asyn")=="1")
{
P._asyncGetSubMail();
if(P.attr(N,"newmail")=="true")
{
P.attr(N,"newmail","false");
hasClass(N,"mailunread")&&rmClass(N,"mailunread");
!hasClass(N,"mailread")&&addClass(N,"mailread");
_oSubmailCnt=S("submailCnt",P._moWin);
if(_oSubmailCnt)
{
var O=parseInt(_oSubmailCnt.innerHTML);
if(O>1)
{
O--;
_oSubmailCnt.innerHTML=O+"/";
}
else{
show(_oSubmailCnt,0);
}
}
}
}
else{
if(P.attr(N,"newmail")=="true")
{
P.attr(N,"newmail","false");
hasClass(N,"mailunread")&&rmClass(N,"mailunread");
!hasClass(N,"mailread")&&addClass(N,"mailread");
}
P._fandx('auto');
}
}};
});
F.qmAdConvMail=inherit("qmAdConvMail",F.qmConvMail,function(M){
return {_pageReady:function(){
M._pageReady.call(this,arguments);
this._startSubMod({sModuleName:"qmAntiSpam"});
this._startSubMod({sModuleName:"qmMarkAdMail"});
this._showAD();
this.showQBTipBtn();
},_startSubMod:function(N){
var R=this,Q,P=R._moMailInfo,O=extend({},R._moContext,N,{oMailInstance:R});
switch(O.sModuleName)
{case "qmAdSubMail":
var U=P.oSubMails[O.sAux]||[{},{}],V=O.sContext||"";
U[0].cmailid=R.getMailId();
U[0].oMoveItems=R._moConfig.oMoveItems;
Q=new F.qmAdSubMail(U[0],U[1],O);
V&&(R._moSubMails[V]=Q);
break;
case "qmQReply":
var U=P.oSubMails["0"];
Q=R._moQReply=new F.qmQReply(U[0],U[1],{fCheckBcc:function(){
callBack.call(R,R.checkBcc,arguments);
},fQReplyComplete:function(W){
R._qReplyComplete(W);
},s:"conv_send"},O);
break;
case "qmAntiSpam":
Q=R._moAntiSpam=new F.qmAntiSpam(R._moConfig,P,O);
break;
case "qmMarkAdMail":
Q=R._moMarkAdMail=new F.qmMarkAdMail(R._moConfig,P,O);
break;
}return Q;
},reportSpam:function(P,Q,O,N){
this._moAntiSpam||this._startSubMod({sModuleName:"qmAntiSpam"});
this._moAntiSpam.reportSpam(P,Q,O,N);
},parentToContextDom:function(N){
return parents("div[module='qmAdSubMail']",N)[0];
},starMail:function(N){
var P=this,O=hasClass(N,"qm_ico_flagoff");
starMail(O,extend(P.getCBInfo(),{oncomplete:function(R,Q){
P.dealCustomUI('MailMethod',[R,'starMail',Q]);
P.clearCache();
return true;
}}));
},_showAD:function(){
var N=this._moMailInfo;
getTop().initAD(v);
}};
});
F.qmAdSubMail=inherit("qmAdSubMail",F.qmSubMail,function(M){
return {_asyncGetSubMail:function(N){
var O=this;
O._bAsyncGetSubMail=true;
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
O._asyncGetMail("adsubmail",function(P){
O._bAsyncGetSubMail=false;
if(P)
{
showProcess(0);
O.S(h._sSubMail).innerHTML=P.mailstr;
typeof (showNetDisk)=="function"&&showNetDisk(O.S(h._sSubMail));
O._fandx(false,function(){
O._fixAbsoluteContent();
});
O._moMailInfo.bAsyn=false;
O._ready();
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
},N);
},getCBInfo:function(){
var Q=this,N=Q._moConfig,P=Q._moMailInfo,O=Q.getFromInfo_();
;return {oWin:Q._moWin,sFid:P.folderid,bML:false,oMail:[{sMid:Q.getMailId(),bSys:N.bSys,bUnr:false,bSubUnr:false,bTms:false,sSName:O.name,oTCont:document.createElement("div"),sSEmail:O.addr,oStar:{}}]};
},_ready:function(){
var U=getTop(),R=this,V=R._moWin,N=R._moConfig,P=R._moMailInfo,O=R.S(h._sContentDiv);
if(!P.bAsyn)
{
N.bMusicManuPlay=N.sIndex!="0";
N.bBccToMe=C(P);
swapLink(O,P.disptype,V,R.getMailId());
if(N.bNeedIdentifyLocation)
{
U.locationIdentify(O,z({sMailId:R.getMailId()}));
}
R.checkDecryptMail();
R._startSubMod({sModuleName:"qmRemark"});
R._startSubMod({sModuleName:"qmReadMail"});
R._startSubMod({sModuleName:"qmAntiSpam"});
R._startSubMod({sModuleName:"qmPlayerParser"});
if(R._moContext.sAux=="0")
{
var Q=this._moWin.QMReadMail;
}
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(W){
R._startSubMod({sModuleName:I});
R.rmLanguage(O);
});
R.showQBTipBtn();
R.osslogImgAttach_();
R.checkPoison(R.getMailId());
}
else{
P.bAsynOrg=true;
}
},showMenu:function(N){
var P=this,O=P._moConfig,R=["menu",O.cmailid,O.sIndex].join("_"),Q=P.getMailId();
new QMMenu({sId:R,oEmbedWin:P._moWin,oItems:P._generateMenuItem(),onitemclick:function(V,U){
var X=0;
if(V.indexOf("reply")!=0&&V.indexOf("_")!=-1)
{
var W=V.split("_");
V=W[0];
X=W[1];
}
switch(V)
{case "reply":
case "reply_all":
case "forward":
_sCpsMailUrl=n.replace({sid:getSid(),s:V,mailid:Q,disptype:O.disptype=="text"?"":"html"});
if(P.dealCustomUI('optMail',{sAction:'closePage',sType:V,sUrl:_sCpsMailUrl})!==false)
{
goUrl(P._moWin,_sCpsMailUrl,true);
}
break;
case 'deleteMail':
P.delMail({opt:0});
break;
case "predeleteMail":
P.delMail({opt:1});
break;
case "report":
P._moAntiSpam.reportSpam(N,Q,null,P.fReportSpamCallBack());
P.clearCache();
break;
case "print":
P.optMail2({opt:"print"},Q);
break;
case "star":
P.starMail(true);
break;
case "unstar":
P.starMail(false);
case "markAsTag":
QMTag.setMailTag(X,P.getCBInfo());
break;
case "newTag":
QMTag.newMailTag(extend(P.getCBInfo(),{oncomplete:function(Y,Z){
}}));
break;
case "newFolder":
case "moveToFolder":
moveMailJs(V==="moveToFolder"?U.sFolderId.split("_")[1]:"new",V==="moveToFolder"?U.sItemValue:"",P._moMailInfo.folderid,extend(P.getCBInfo(),{oncomplete:function(){
P._fandx(true,function(){
removeSelf(P.S(h._sSubMail));
P._moWin.QMReadMail.notify("delsubmail");
return true;
});
return true;
}}));
break;
case "openNew":
P.openInNewWin_(Q);
break;
case "remark":
P._moRemark.toggle();
break;
}
},nWidth:(getLocale()=="zh_CN")?100:160,nMaxWidth:180,nMaxItemView:15,bAnimation:true,onload:function(){
if(this.option("sId")===R)
{
var X=this,U=parseInt(X.option("nHeight"),10),V=parseInt(X.option("nWidth"),10),W=calcPos(N),Y=calcAdjPos(W.slice(0,4),V,U,P._moWin,3);
X.option("nX",W[1]-V).option("nY",Y[0]);
}
},onshow:function(){
return;
if(this.option("sId")===R)
{
var X=this,U=parseInt(X.option("nHeight"),10),V=parseInt(X.option("nWidth"),10),W=calcPos(N),Y=calcAdjPos(W.slice(0,4),V,U,P._moWin,3);
X.option("nX",W[1]-V).option("nY",Y[0]);
}
}});
},openInNewWin_:function(N){
var O=this;
goNewWin(T([m,'&t=readmail&folderid=$folderid$$ext$']).replace({folderid:O._moConfig.folderid,mailid:N,ext:O._moMailInfo.bShowContImg||getTop().getUrlParams(O._moWin.location).dispimg==1?'&disptype=html&dispimg=1&clickshowimage=1':''}),false);
},_generateMenuItem:function(){
var Q=this,P=[],O={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},N=Q.getCBInfo().oMail[0]&&Q.getCBInfo().oMail[0].bSys||false;
N||P.push({sId:"reply",sItemValue:"\u56DE\u590D"},{sId:"reply_all",sItemValue:"\u56DE\u590D\u5168\u90E8"});
P.push({sId:"forward",sItemValue:"\u8F6C\u53D1"},O,{sId:"deleteMail",sItemValue:"\u5220\u9664"},{sId:"predeleteMail",sItemValue:"\u5F7B\u5E95\u5220\u9664"});
N||P.push({sId:"report",sItemValue:"\u4E3E\u62A5"});
P.push(O,{sId:"print",sItemValue:"\u6253\u5370"});
P.push(O,{sId:"remark",sItemValue:"\u5907\u6CE8"});
if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",Q._moWin)).length>1)
{
P.push({sId:"openNew",sItemValue:"\u65B0\u7A97\u53E3\u6253\u5F00"});
}
return P;
},showDetail:function(){
var Q=this,O=Q._moMailInfo,N=Q.S(h._sDetail),R=Q.S(h._sSum),P=Q.S(h._sReferInfo);
if(isShow(N))
{
return;
}
show(R,false);
qmAnimation.expand(N,{from:25});
if(P&&P.innerHTML=="")
{
P.innerHTML=Q._moWin.QMReadMail.getSubMailFrom(O.refermailid)||"";
}
},hideDetail:function(){
var O=this,N=O.S(h._sDetail),P=O.S(h._sSum);
if(isShow(P))
{
return;
}
qmAnimation.fold(N,{oncomplete:function(){
show(P,true);
P.parentNode.style.zoom="";
P.parentNode.style.zoom="1";
}});
},showQBTip:function(N){
J.call(this,N);
},hideQBTip:function(O,P,N){
B.call(this,N);
}};
});
F.qmGroupQReply=inherit("qmGroupQReply",F._qmBaseDM,function(M){
return {_initMemVar:function(N,O,P){
var Q=this;
Q._moConfig=N;
Q._moReplyMail=O;
Q._moSendConfig=P;
Q._moSource=Q.S(h._sQSource);
},_setEvent:function(){
var N=this,P=N._moSource,R=N._moWin,Q=getTop(),O=N.S(h._sQSendBtn);
N.evt(["ck"],N.S(h._sQReply));
addEvent(P,"focus",function(U){
if(!N._moEditor)
{
QMEditor.createEditor({editorId:"readMailGroupQuickSend",editorAreaWin:R,funclist:{tbExtern:"Mo"},photoCGI:getPhotoCGI(),isNoEditScroll:true,height:"160px",onkeydown:function(W){
if(D(W))
{
fireMouseEvent(O,"click");
}
},onload:function(){
N._moEditor=this;
N._fandx(false);
}}).initialize(QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")}),false,Q.S("QMEditorArea",R).getAttribute("tIndex"));
var V=[];
if(!Q.ComposeLib)
{
V.push("$js_path$webp/libcompose24e6ae.js");
}
if("1"==Q.gbBackGroundSend&&!getTop().BackGroundSend)
{
V.push("$js_path$webp/backsend24e6ae.js");
}
V.length&&loadJsFileToTop(V);
}
else{
N._fandx(false);
}
});
if(!N._mnAutoSaveTimer)
{
N._mnAutoSaveTimer=R.setInterval(function(){
N.saveDraft();
},300000);
}
},saveDraft:function(){
var R=this,W=R._moWin,N=R._moConfig,P=R._moEditor,U=R._moSendConfig,X=P&&P.getContent(false),V=R.S(h._sQSource);
if(!P||X==R._msDraftContent||isShow(h._sAfterSendingDiv,W))
{
return;
}
else{
var Q=R._moReplyMail,O={actiontype:"save",t:"compose_send.json",s:"group",qqgroupid:Q.from.addr,groupname:Q.from.name,subject:Q.subject,content__html:X,fmailid:R.getMailId()};
waitFor(function(){
return !!(getTop().ComposeLib);
},function(Y){
if(!Y)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
ComposeLib.send(O,{sType:"group",onready:function(){
R._disableSendBtn(true);
showProcess(1,true,"\u90AE\u4EF6\u6B63\u5728\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1","",false);
},oncomplete:function(Z,aa){
var ac=S(h._sQSource,W),ab=evalValue(aa),ad=formatDate(new Date(),"%hh%:%mm%","%");
if(Z)
{
R._msDraftMailId=ab.mailid;
R._msDraftContent=X;
showInfo(ad+" \u90AE\u4EF6\u6210\u529F\u4FDD\u5B58\u5230\u8349\u7A3F\u7BB1");
reloadLeftWin();
}
else{
showError(ad+" \u4FDD\u5B58\u8349\u7A3F\u5931\u8D25");
}
R._disableSendBtn(false);
}});
});
}
},_fandx:function(N){
var Q=this,U=Q._moSource,P=Q._moEditor,R=Q.S(h._sQSendBtn),O=isShow(U);
if(O==N)
{
return;
}
show(U,N);
show(Q.S(h._sQMEditorArea).parentNode,!N);
show(Q.S(h._sQMEditorToolArea).parentNode,!N);
if(N)
{
setClass(R,"grptitle_tab bd right").style.cssText="height:42px;width:44px;cursor:pointer";
setClass(R.parentNode,"qm_right bd_ccc").style.cssText="";
R.focus();
R.blur();
P.setContent(QMEditor.getBreakLine(1,{family:goUserInfo.get("DEF_FONT_FAMILY"),size:goUserInfo.get("DEF_FONT_SIZE"),color:goUserInfo.get("DEF_FONT_COLOR")}));
}
else{
setClass(R,"right bd_upload grptitle_tab_ bold").style.cssText="height:26px;width:96px;cursor:pointer;";
if(getLocale()=="zh_CN")
{
setClass(R.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:449px;text-align:right;margin-top:2px;";
}
else{
setClass(R.parentNode,"").style.cssText="border:none;clear:left;height:26px;padding:3px 0;width:474px;text-align:right;margin-top:2px;";
}
show(Q.S(h._sQMEditorArea).parentNode,true);
show(Q.S(h._sQMEditorToolArea).parentNode,true);
P.focus();
}
},_disableSendBtn:function(N){
var O=this;
O.S(h._sQSendBtn).disabled=N;
return this;
},_getValidHtmlContent:function(N){
return N&&trim(N.replace(/<[^(img)]([^>]+)?>/gi,"").replace(/&nbsp;/g,""));
},getContent:function(){
return this._moEditor&&this._moEditor.getContent();
},disableConfirm:function(){
var N=this;
},send:function(O,P,N){
var W=this,Z=W._moWin,U=W._moEditor,Q=W._moConfig,X=W._moSendConfig,Y=W.S(h._sQSource);
if(O.disabled)
{
return;
}
if(!U||!W._getValidHtmlContent(U.getContent(false)))
{
showError('\u8BF7\u5148\u8F93\u5165\u56DE\u590D\u5185\u5BB9');
U.focus();
}
else{
var V=W._moReplyMail,R={qqgroupid:Q.gid+"@groupmail.qq.com",subject:V.subject||"\u65E0\u4E3B\u9898",content__html:U.getContent(),t:"compose.json",s:"group_send",fmailid:P};
waitFor(function(){
return !!getTop().ComposeLib&&("1"!=getTop().gbBackGroundSend||getTop().BackGroundSend);
},function(aa){
if(!aa)
{
debug("\u52A0\u8F7DComposeLib\u5931\u8D25");
return;
}
var ac,ab=("1"==getTop().gbBackGroundSend&&(ac=getTop().BackGroundSend)),ad={sType:"group",onready:function(){
if(ab)
{
show(h._sAfterSendingDiv,true,Z);
W._fandx(true);
}
else{
W._disableSendBtn(true);
}
},oncomplete:function(ae,af){
if(ab)
{
if(ae)
{
callBack(X.fQReplyComplete,[af]);
}
show(h._sAfterSendingDiv,false,Z);
}
else{
if(ae)
{
getTop().QMMLCache.upVer();
W._disableSendBtn(false);
showInfo("\u60A8\u7684\u8BC4\u8BBA\u5DF2\u6210\u529F\u53D1\u8868");
W._fandx(true);
callBack(X.fQReplyComplete,[af]);
}
else{
W._disableSendBtn(false);
}
setTimeout(function(){
U.resetFixHeight();
},500);
}
}};
if(ab)
{
ac.quickReply(R,"group",ad);
}
else{
ComposeLib.send(R,ad);
}
},100);
}
preventDefault(N);
}};
});
F.qmGroupMail=inherit("qmGroupMail",F.qmReadMail,function(M){
return {_pageReady:function(){
var R=getTop(),Q=this,U=Q._moWin,P=Q._moMailInfo,N=Q._moConfig,O=CN(h._sContentClassName,getTop().getMainWin().document);
Q._fakeReadMail();
E(O,function(V){
swapLink(V,P.disptype,U,Q.getMailId());
});
if(N.bNeedIdentifyLocation)
{
R.locationIdentify(O,z({sMailId:Q.getMailId()}));
}
Q._readMailFinish();
initMailSelect(N.oMoveItems,true,N.bOpenTag=="1",U,N.folderid,N.bAutoTag);
Q._startSubMod({sModuleName:"qmGroupQReply"});
Q._startSubMod({sModuleName:"qmAntiSpam"});
getTop().goUserInfo.deferget("DEF_TRANSLATE",function(V){
Q._startSubMod({sModuleName:I});
});
Q._flushFolder();
getTop().QMWebpushTip&&getTop().QMWebpushTip.read(1,Q.getMailId());
},osslogImgAttach_:function(){
this.checkAttachImgSize_(getTop().finds('.attachitem .readmail_limit_img_size',this._moWin));
},getEditorContent:function(){
var N=this;
return N._moGroupQReply.getContent();
},disableConfirm:function(){
var N=this;
N._moGroupQReply.disableConfirm();
},_initSelectAllEvt:function(){
var O=getTop(),N=this,P=N._moWin;
addEvent(P.document,"keydown",function(Q){
if(Q.ctrlKey&&Q.keyCode=="65")
{
N.doSelectAll(Q,N.S(h._sContentDiv));
}
});
},_startSubMod:function(N){
var U=this,R,O=U._moConfig,Q=U._moMailInfo,P=extend({},U._moContext,N,{oMailInstance:U});
switch(P.sModuleName)
{case "qmGroupQReply":
R=U._moGroupQReply=new F.qmGroupQReply(O,Q,{fQReplyComplete:function(V){
U._qReplyComplete(V);
}},P);
break;
default:
R=M._startSubMod.call(U,N);
}return R;
},_qReplyComplete:function(N){
var O=evalValue(N),P=this.S(h._sSubMailStartDiv);
O&&insertHTML(P,"afterEnd",O.mailstr);
this.clearCache();
QMMailCache.setExpire();
},_makeMailListUrl:function(){
var N=this._moConfig;
return j.replace({sid:getSid(),folderid:N.folderid,s:N.subtmpl,more:"&t=mail_list_group&groupid="+(N.groupid||"")});
},showSeqContent:function(N){
var O=this,P=O.attr(N,"seq");
show(h._sGpContent+P,true);
show(h._sGpAttach+P,true);
},settingGroup:function(N,O){
var Q=calcPos(N),R=this,U=R._moWin,P=R;
var V=new QMMenu({oEmbedWin:R._moWin,sId:"menu_"+h._sSettingGroup,nWidth:getLocale()=="zh_CN"?290:454,oItems:[{nHeight:"auto",sItemValue:q.replace({bReject:P._moConfig.bReject,bNewreply:P._moConfig.bNewreply,bNotify:P._moConfig.bNotify,sid:getSid()})}],nX:Q[3],nY:Q[2],onload:function(){
var X=this,W=X.S("container");
X.S("qqnotify").onclick=X.S("noqqnotify").onclick=function(){
show(X.S("setnewdiv"),true);
};
X.S("reject").onclick=function(){
show(X.S("setnewdiv"),false);
};
addEvent(X.S("cancel"),"click",function(){
V.toggle();
});
addEvent(X.S("save"),"click",function(){
var Y={};
E(GelTags("input",W),function(Z){
if(Z.type=="radio"&&Z.checked)
{
Y[Z.name]=Z.value;
}
});
QMAjax.send(T(['/cgi-bin/grouplist?t=mail_mgr2&mailaction=groupmgr','&oper1=$oper1$&oper2=$oper2$&sid=$sid$&gid=$gid$@groupmail.qq.com']).replace({oper1:Y["qqnotify"]||"",oper2:Y["unread"]||"",sid:getSid(),gid:P._moConfig.gid}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(Z,aa){
var ab=true;
if(Z)
{
try{
var ac=evalValue(aa);
showInfo("\u7FA4\u90AE\u4EF6\u8BBE\u7F6E\u4FDD\u5B58\u6210\u529F");
V.toggle();
U.QMReadMail.clearCache();
QMMailCache.setExpire();
extend(P._moConfig,ac);
}
catch(ad)
{
ab=false;
}
}
else{
ab=false;
}
!ab&&showError("\u64CD\u4F5C\u5931\u8D25");
}});
});
}});
},rejectGroup:function(O,P,N){
var Q=this,R=Q._moWin,U=Q.attr(O,"opt");
QMAjax.send(o.replace({sid:getSid(),gid:Q._moConfig.gid,yn:U}),{method:"GET",headers:{"If-Modified-Since":"0","Cache-Control":"no-cache, max-age=0"},onload:function(V,W){
var X=evalValue(W);
if(!V||W.indexOf("<!--cgi exception-->")==0)
{
showError("\u64CD\u4F5C\u5931\u8D25");
}
else{
toggle(h._sRejectGroupY,R);
toggle(h._sRejectGroupN,R);
showInfo((U=="yes"?"\u6210\u529F\u62D2\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6":"\u6210\u529F\u5F00\u542F\u63A5\u6536\u8BE5\u7FA4\u7684\u90AE\u4EF6"));
R.QMReadMail.clearCache();
QMMailCache.setExpire();
}
}});
},adminReject:function(N,O){
var P=getTop(),Q=T("/cgi-bin/groupmail_close?groupid=$gid$&mailid=$mailid$&action=$action$&sid=$sid$").replace({gid:P.attr(N,'gid'),mailid:O,action:P.attr(N,'action'),sid:P.getSid()});
P.QMAjax.send(Q,{onload:function(R,U){
if(R)
{
var V=P.evalValue(U);
if(V.retCode==0)
{
P.showInfo(V.action=="wall"?"\u5C4F\u853D\u7FA4\u90AE\u4EF6\u6210\u529F":"\u53D6\u6D88\u5C4F\u853D\u7FA4\u90AE\u4EF6\u6210\u529F");
P.rdVer(O,1);
if(V.action=="wall")
{
P.attr(N,'action',"unwall");
N.innerHTML="\u53D6\u6D88\u5C4F\u853D";
}
else{
P.attr(N,'action',"wall");
N.innerHTML="\u5C4F\u853D\u6B64\u90AE\u4EF6";
}
P.reloadAllFrm();
}
else if(V.retCode==1000)
{
P.showInfo(V.action=="wall"?"\u6B64\u7FA4\u90AE\u4EF6\u5DF2\u88AB\u5C4F\u853D":"\u6B64\u7FA4\u90AE\u4EF6\u672A\u88AB\u5C4F\u853D");
}
else{
P.showInfo("\u64CD\u4F5C\u5931\u8D25");
}
}
}});
},showVoter:function(O,N){
var Q=this,V;
if(!O)
{
return;
}
if(V=O.getAttribute("vid"))
{
toggle("voter_"+V,_oWin);
}
else{
var U=Q.S("voter_play_box"),R=GelTags("tr",U),P=(N==undefined||(typeof N=="string"))?!O.getAttribute("opt"):N;
for(var W=0,X=R.length;W<X;W++)
{
if(R[W].id)
{
qmAnimation[P?"expand":"fold"](R[W],{speed:"fast"});
}
}
O[P?"setAttribute":"removeAttribute"]("opt","1");
O.innerHTML=O.getAttribute(P?"hideText":"showText");
}
}};
});
F.qmAdSubMailML=inherit("qmAdSubMailML",F.qmAdSubMail,function(M){
var N=getTop();
return {_init:function(){
setDblClickNoSel(this.S('expand'));
return M._init.apply(this,arguments);
},_generateMenuItem:function(){
var U=this,R=[],Q={nHeight:10,sItemValue:'<div style="background:#CCC; height:1px; margin-top:7px; overflow:hidden;"></div>'},P=U.getCBInfo().oMail[0]&&U.getCBInfo().oMail[0].bSys||false;
var O=U._moMailInfo.bAsyn;
P||R.push({sId:"reply",sItemValue:"\u56DE\u590D"},{sId:"reply_all",sItemValue:"\u56DE\u590D\u5168\u90E8"});
R.push({sId:"forward",sItemValue:"\u8F6C\u53D1"},Q,{sId:"deleteMail",sItemValue:"\u5220\u9664"},{sId:"predeleteMail",sItemValue:"\u5F7B\u5E95\u5220\u9664"});
P||R.push({sId:"report",sItemValue:"\u4E3E\u62A5"});
R.push(Q,{sId:"print",sItemValue:"\u6253\u5370"});
O||R.push(Q,{sId:"remark",sItemValue:"\u5907\u6CE8"});
if(!bnewwin||finds("div[module='qmAdSubMail']",S("submail_inner_body",U._moWin)).length>1)
{
R.push({sId:"openNew",sItemValue:"\u65B0\u7A97\u53E3\u6253\u5F00"});
}
return R;
},openInNewWin_:function(O){
goNewWin(this._getReadMailURL()+(this._moMailInfo.bShowContImg?'&disptype=html&dispimg=1&clickshowimage=1':''));
rdVer(this.getCMailId_(),1);
},_getReadMailURL:function(){
var O=this;
var P=O.getCMailId_();
return RD.getURL(null,P,false,3,O._moConfig.folderid,0,false,0,'');
},readMoreMails:function(){
goNewWin(this._getReadMailURL()+'&s=adsubmail');
rdVer(this.getCMailId_(),1);
},_setEvent:function(){
var O=this;
O.evt(["ck","md","dck","mot","mor"],h._sSubMail);
},_asyncGetSubMail:function(P,O){
var R=this;
var Q=R.S('contentDivWarp');
var U=R._moWin;
R._bAsyncGetSubMail=true;
R._asyncGetMail(null,function(V){
R._bAsyncGetSubMail=false;
if(V)
{
R._moMailInfo.bAsyn=false;
if(V.mailid)
{
R._moContext.sContext=V.mailid;
}
R._moMailInfo.disptype=V.disptype;
O?O(V):R._insertHTML(V);
}
else{
showError("\u90AE\u4EF6\u8BFB\u53D6\u5931\u8D25");
}
},P);
},_asyncGetMail:function(Q,O,P){
var R=this;
QMAjax.send(R.getAsyncMailUrl()+(P?P:''),{method:"GET",onload:function(U,V){
var W=trim(V);
if(!U||W.indexOf("<!--cgi exception-->")==0)
{
O();
}
else{
O(N.evalValue(N.gbIsIE?W.replace(/\\x3cform/ig,'<from'):W));
}
}});
},getAsyncMailUrl:function(O){
var P=this;
var Q=P.getCMailId_();
return T("$cgi$sid=$sid$&t=readsubmail&mailid=$mailid$&frid=$frid$&index=$index$&fromModule=qmAdSubMailML&classalias=qmbox$index$&s=$s$&maxage=$maxage$&base=$base$&ver=$ver$").replace({cgi:O?'':'/cgi-bin/readmail?',sid:getSid(),mailid:Q,frid:P._moMailInfo.frid,index:P._moContext.sAux,s:Q.charAt(0)=='C'?'quickreadmail':'',maxage:rdVer.maxage(Q),base:rdVer("BaseVer",0),ver:rdVer(Q,0,234)});
},_insertHTML:function(P,O){
var Y=this;
var aa=Y._moWin;
var Z=Y.S(h._sSubMail);
var U=Y.S('contentDivWarp');
var V=Y.S(h._sExpand);
var W;
V.style.height=0;
V.style.borderWidth='0px';
show(V,true);
U.innerHTML=P.mailstr;
var Q=false;
function R()
{
if(!Q)
{
Q=true;
V.style.borderWidth='1px';
Y._fandx(false,function(){
V.style.zoom='1';
addClass(V,'expand_done');
aa.setTimeout(function(){
Y._gotoScrollTop();
callBack(O);
},Y._nIntervalFandx2scroll);
debug('fandx end');
if(!W)
{
Y._fixAbsoluteContent();
}
});
}
}
W=Y.S('readxqqmailIfarme');
if(W)
{
waitFor(function(){
return W.contentWindow.bindIframeWinHeight;
},function(ab){
if(ab)
{
W.contentWindow.bindIframeWinHeight(function(ac){
if(ac&&ac>0)
{
W.style.height=ac+'px';
R();
}
});
}
else{
R();
}
});
}
else{
aa.setTimeout(R,100);
}
var X;
waitFor(function(){
X=U.getElementsByTagName('iframe');
for(var ab=X.length;ab--;)
{
if(X[ab].contentWindow.document.body)
{
return true;
}
}
return false;
},function(ab){
if(ab)
{
aa.setTimeout(function(){
E(X,function(ac){
try{
addEvent(ac.contentWindow.document.body,'dblclick',function(){
Y.dispSubMail();
});
}
catch(ad)
{
debug('\u4E3A\u5E7F\u544A\u90AE\u4EF6\u7684iframe\u7ED1\u5B9Adblclick\u4E8B\u4EF6\u5931\u8D25');
}
});
},800);
}
});
(typeof (aa.showNetDisk)=="function")&&aa.showNetDisk(Z);
Y._ready();
y();
},_nIntervalFandx2scroll:0,_nFandxSpeed:400,_nScrollSpeed:150,_nMaxScrollTop:200,_getFandxMaxHeight:function(){
var R=this;
var U=R._moWin;
var P=R.S('mHead');
var Q=bodyScroll(U,'clientHeight')+10;
var O=Math.min(Q,R.S('contentDivWarp').clientHeight+P.clientHeight);
return Math.max(0,Math.min(O,bodyScroll(U,'scrollTop')+Q-calcPos(P,'json').top));
},_getFandxSpeedCfg:function(Q,O,P){
Q.speed=O*Math.abs(Q.from-Q.to)/P;
debug('maillist_ad fandx speed: '+Q.speed);
return Q;
},_fandx:function(O,P){
var W=this,Z=W._moWin,Y=getTop(),V=W.S(h._sFold),U=W.S(h._sExpand),X=W.S(h._sSubMail);
if(O=='auto')
{
O=!isShow(V);
}
if(O)
{
show(V,true);
show(V,false);
qmAnimation.play(U,W._getFandxSpeedCfg({tween:"Sine",easing:"easeOut",from:W._getFandxMaxHeight(),to:V.scrollHeight||48,onaction:function(aa){
U.style.height=aa+'px';
},oncomplete:function(ab,aa){
if(P&&P(aa)===true)
{
return;
}
setClass(X,"qm_con_fold clearfix");
show(U,false);
show(V,true);
}},W._nFandxSpeed,600));
}
else{
show(V,false);
show(U,true);
setClass(X,"qm_con_expand clearfix");
qmAnimation.play(U,W._getFandxSpeedCfg({from:V.scrollHeight||48,to:W._getFandxMaxHeight(),tween:"Sine",easing:"easeOut",onaction:function(aa){
U.style.height=aa+'px';
},oncomplete:function(ab,aa){
U.style.height='auto';
callBack(P,[aa]);
}},W._nFandxSpeed,600));
var R=Y.finds("div[ui-type='attCon']",X)[0],Q=R&&Y.finds("a[ui-type='netdiskBind']",R)[0];
Y.QMNetDisk&&R&&Q&&Z.setTimeout(function(){
Y.QMNetDisk.route("tips","readmail",R,{offsetTop:80,offsetLeft:Q.offsetLeft+Q.clientWidth/2});
},3000);
}
},dispSubMail:function(O){
var Q=this;
var R=Q._moWin;
var P=Q.S(h._sExpand);
if(Q.S('expand_c'))
{
P.innerHTML=Q.S('expand_c').value;
}
if(Q._bAsyncGetSubMail)
{
return;
}
if(!isShow(P)&&Q._moMailInfo.bAsyn)
{
showProcess(1,true,"\u90AE\u4EF6\u8BFB\u53D6\u4E2D...",null,false);
Q._prevGotoScrollTop();
Q._saveScrollTop();
Q._asyncGetSubMail(null,function(U){
Q._insertHTML(U,function(){
if(Q.attr(O,"newmail")=="true")
{
Q.attr(O,"newmail","false");
hasClass(O,"mailunread")&&rmClass(O,"mailunread");
!hasClass(O,"mailread")&&addClass(O,"mailread");
setMailRead(false,extend(QMMailList.getCBInfo(Q._moWin,Q.getCMailId_()),{bNoShowFilter:true,bNoSendMailMgr:true}));
}
showProcess(0);
});
});
}
else{
if(isShow(Q.S(h._sFold)))
{
Q._prevGotoScrollTop();
Q._saveScrollTop();
Q._fandx(false,function(U){
if(!U)
{
R.setTimeout(function(){
Q._gotoScrollTop();
},Q._nIntervalFandx2scroll);
}
});
}
else{
Q._loadScrollTop(function(U){
if(!U)
{
R.setTimeout(function(){
Q._fandx(true);
},Q._nIntervalFandx2scroll);
}
});
}
}
},_saveScrollTop:function(){
var O=this;
var P=O._moWin;
O._nPrevItemScrollPer=(calcPos(O.S(h._sFold).parentNode,'json').top-bodyScroll(P,'scrollTop'))/bodyScroll(P,'clientHeight');
},_loadScrollTop:function(O){
var Q=this;
var R=Q._moWin;
var P=0;
if(Q._nPrevItemScrollPer!==undefined)
{
P=calcPos(Q.S(h._sFold).parentNode,'json').top-(Q._nPrevItemScrollPer||0)*bodyScroll(R,'clientHeight');
}
qmAnimation.play(R.document.body,Q._getFandxSpeedCfg({win:R,from:Q._getScrollFrom(P),to:P,tween:'Sine',easing:"easeIn",onaction:function(U){
bodyScroll(R,'scrollTop',U);
},oncomplete:function(V,U){
bodyScroll(R,'scrollTop',P);
callBack(O,[U]);
}},Q._nScrollSpeed,Q._nMaxScrollTop));
},_prevGotoScrollTop:function(){
this._moWin._nSubMailGotoScrollTopMailId=this.getCMailId_();
},_gotoScrollTop:function(){
var R=this;
var V=R._moWin;
if(this._moWin._nSubMailGotoScrollTopMailId!=this.getCMailId_())
{
return false;
}
var U=R.S(h._sSubMail);
var Q=calcPos(U,'json');
var O=Math.max(Q.top-5,0);
var P=bodyScroll(V,'clientHeight');
qmAnimation.play(V.document.body,R._getFandxSpeedCfg({win:V,from:R._getScrollFrom(O),to:O,tween:'Sine',easing:"easeOut",onaction:function(W){
bodyScroll(V,'scrollTop',W);
},oncomplete:function(X,W){
bodyScroll(V,'scrollTop',O);
}},R._nScrollSpeed,R._nMaxScrollTop));
return true;
},_getScrollFrom:function(O){
var Q=this;
var R=Q._moWin;
var P=bodyScroll(R,'scrollTop');
if(O>P)
{
P=Math.max(O-Q._nMaxScrollTop,P);
}
else{
P=Math.min(O+Q._nMaxScrollTop,P);
}
return P;
},delMail:function(O){
var Q=this;
var P=Q.getCBInfo();
P.oMail[0].sMid=Q.getCMailId_();
rmMail(Q.attr(O,"opt")||0,extend(P,{oncomplete:function(R,U){
Q.dealCustomUI('MailMethod',[R,'delSubMail',U]);
Q._fandx(true,function(){
removeSelf(Q.S(h._sSubMail));
});
return true;
}}));
rdVer(Q.getMail,1);
},fReportSpamCallBack:function(){
var O=this;
return function(){
O._fandx(true,function(){
removeSelf(O.S(h._sSubMail));
});
return true;
};
}};
});
v.QMReadMail=F;
function K(N,M)
{
var ab=getTop();
var O=typeof (Worker)!='undefined';
var Z;
var ac=[];
var aa=[];
var Y;
var P=false;
var V=0;
var X=0;
var W=+new Date();
if(ab['goLocationWorker'])
{
return;
}
function U()
{
var ai=[];
var ah=[];
for(var aj in ac)
{
if(!ac[aj].oLocations||!ac[aj].oLocations.length)
continue;
for(var ak in ac[aj].oLocations)
{
ah.push('addr='+encodeURIComponent(getTop().trim(ac[aj].oLocations[ak])));
ai.push(aj);
}
}
if(ah.length)
{
var ag=+new Date();
QMAjax.send('/cgi-bin/check_chinaaddr?resp_charset=UTF8',{method:'POST',content:ah.join('&'),onload:function(al,am){
if(al)
{
var ao=getTop().evalValue(am);
var an=[];
if(ao)
{
for(var aq in ao)
{
if(ao[aq].isAddr)
{
var ap=ac[ai[aq]];
ap.addr=ao[aq].addr;
an.push({sLocation:ao[aq].addr,oNode:ap.oNode,sValue:ap.sValue});
}
}
Y.processCallback&&Y.processCallback(an);
}
}
Y.finishCallback&&Y.finishCallback(al);
P=false;
Q();
}});
}
else{
Y.finishCallback&&Y.finishCallback(false);
P=false;
Q();
}
}
if(O)
{
try{
Z=ab['goLocationWorker']=new Worker(N);
}
catch(ae)
{
Z=ab['goLocationWorker']=new Worker((N+'').replace('//'+ab.location.hostname,''));
}
Z.postMessage({importScriptUrl:M});
Z.onmessage=function(ag){
if(ag.data=='finished')
{
U();
}
else if(ag.data=='importScripts')
{
ab.LogKV('compose|locationidentifier|importscripts|kv');
}
else if(ag.data=='import error one')
{
ab.LogKV('compose|locationidentifier|importscripts|one');
}
else if(ag.data=='import error two')
{
ab.LogKV('compose|locationidentifier|importscripts|two');
}
else{
var ai=ag.data;
if(!ai||!ai.locations||!ai.locations.length)
{
return;
}
var ah=ai.index;
ac[ah].oLocations=ai.locations;
}
};
}
function R(ag)
{
V++;
if(!ag||ag.tagName=="A"||ag.tagName=="SCRIPT"||ag.tagName=="STYLE"||ag.className=="qqmailbgattach"||ag.tagName=="PRE"||ag.tagName=="CODE"||(Y.filterFunc&&Y.filterFunc(ag)))
{
return;
}
for(var ah=ag.firstChild,aj;ah;ah=aj)
{
aj=ah.nextSibling;
R(ah);
}
if(ag.nodeType==3)
{
X+=ag.nodeValue.length;
ac.push({oNode:ag,sValue:ag.nodeValue});
if(O)
{
Z.postMessage({index:ac.length-1,sValue:ag.nodeValue});
}
else if(ab.locationIdentifier)
{
var ai=ab.locationIdentifier(ag.nodeValue);
if(!ai||!ai.locations||!ai.locations.length)
{
return;
}
ac[ac.length-1].oLocations=ai.locations;
}
return;
}
}
var Q=function(){
if(P||!aa.length)
{
return;
}
P=true;
var ag=aa.shift();
af(ag.oDom,ag.oOptions);
};
var af=function(ag,ah){
ac=[];
Y=ah;
if(ag.length)
{
for(var ai=0,aj=ag.length;ai<aj;++ai)
{
R(ag[ai]);
}
}
else{
R(ag);
}
O?Z.postMessage('finished'):U();
};
var ad=function(ag,ah){
aa.push({oDom:ag,oOptions:ah});
Q();
};
ab['locationIdentify']=ad;
}
function L(N,O,M)
{
var P=getTop(),Q=N,R;
if(Q.location&&(/^(m\d+\.|set\d\.)?mail.qq.com$/.test(Q.location.hostname)||/webdev(\d)*.mail.qq.com$/.test(Q.location.hostname)))
{
(new Image()).src="//rl.mail.qq.com/cgi-bin/getinvestigate?kvclick="+O;
var V=Q.document.getElementById("webmail")||null,U=Q.document.getElementById("notWebmail")||null;
if(V)
{
V.style.display="";
}
if(U)
{
U.style.display="none";
}
if(M&&M.isNname)
{
R=P.getUserInfoText("alias");
if(R&&R!="")
{
Q.document.getElementById("qqmlNickName").innerHTML="Hi\uFF0C"+P.htmlEncode(R)+"\uFF1A";
}
}
}
}
v.readmailSpread=L;
})(window);
