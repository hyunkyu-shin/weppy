<%@ page contentType="text/html;charset=UTF-8" %>

<!DOCTYPE html>
<html lang="ko">
<head>
<!--//  header //-->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<title>Studio 3S</title>
<link rel="stylesheet" href="/ko/resources/css/studio3s.css" media="screen" />
<script src="/ko/resources/js/plugins.js"></script>
<script src="/ko/resources/js/studio3s.js"></script>

<link rel="shortcut icon" href="/ko/resources/images/favicon.ico">

<meta name="apple-mobile-web-app-title" content="studio3s" />
<meta name="title" content="studio3s" />
<meta name="author" content="studio3s" />
<meta name="description" content="We always create our own approach, seeking a continuous change.Experts, a group of total solution providers, are here for your greater tomorrow." />
<meta name="keywords" content="Studio 3S, Smart Factory, Factory Simulration, Digital twin, Factory Automation, Intra Logistic, Warehouse management, Process analysis, System Integrated, Quality control, AGV, ICT, CMMS, Factory Energy, Big data, KPI, Machine learning, Cross link, Factory Consulting, Smart farm." />

<meta property="og:site_name" content="studio3s" />
<meta property="og:type" content="website" />
<meta property="og:title" content="We are pioneers who can bring a better future - studio3s" />
<meta property="og:description" content="We always create our own approach, seeking a continuous change.Experts, a group of total solution providers, are here for your greater tomorrow." />
<meta property="og:image" content="http://localhost:8080/ko/resources/images/bg_contact_article1.png" />
<meta property="og:url" content="http://localhost:8080/ko/" />

<!--//  header //-->
<script>
  function RefreshImage(valImageId) {
	  var objImage = document.getElementById(valImageId)
	  if (objImage == undefined) {
		  return;
	  }
	  var now = new Date();
	  objImage.src = objImage.src.split('?')[0] + '?x=' + now.toUTCString();
  }

	function openFile() {
		$("#upload_file").click();
	}
	$(document).ready(function () {
			$("#upload_file").change(function () {
				$("#file").val($(this).val());
			});
	});
</script>
</head>
<body>
<main id="wrap" class="sub-page contact send-message">
	<header id="header" class="">
		<button type="button" class="btn-back" onclick="location.href='/ko/contact.jsp'">이전</button>
		<button type="button" class="btn-menu">메뉴 열기</button>
		<!--//  gnb //-->
				<div class="header-inner"> <!-- [mobile] .open -->
			<h1><a href="/ko/">Studio 3S</a></h1>
			<nav class="gnb">
				<ul>
					<li class="m-home"><a href="/ko/" >Home</a></li>
					<li><a href="/ko/business.jsp" >Business</a></li>
					<li><a href="/ko/contact.jsp"  class='on'>Contact</a></li>
				</ul>
			</nav>
			<nav class="util-lang">
				<a href="ko">KOREAN</a>
				<ul class="">
					<li><a href="/ko/" class="on">KOREAN</a></li>
					<li><a href="/en/">ENGLISH</a></li>
					<li><a href="/cn/">CHINESE</a></li>
				</ul>
			</nav>
			<nav class="util-lang-m">
				<span>
					<select>
						<option value="/ko/">KOREAN</option>
						<option value="/en/">ENGLISH</option>
						<option value="/cn/">CHINESE</option>
					</select>
				</span>
			</nav>
			<button type="button" class="btn-menu-close">메뉴 닫기</button>
		</div>
		<div class="dimmed"></div>

		<!--//  gnb //-->
	</header>
	<section id="contents">
		<div class="contents-inner">
			<div class="spot">
				<img src="./resources/images/ico_contact_spot.png" alt="">
				<h2>CONTACT</h2>
			</div>
			<div class="content">
				<article>
					<h3 class="h-tit">SEND MESSAGE</h3>
					<form id="sendForm" enctype="multipart/form-data" method="post" action="send_post.jsp">
						<input type="hidden" id="to_email" 	name="to_email" value="jsm1030@studio3s.co.kr">
						<input type="hidden" id="to_name" 	name="to_name" 	value="ANDY">
						<input type="hidden" id="security_code_yn" 	name="security_code_yn" 	value="N">
						<ul class="send-message-list">
							<li class="to">
								<strong>받는 사람</strong>
								<p>
									<b>jsm1030@studio3s.co.kr</b><br class="m-br">
									<span>RESEARCH INSTITUTE MANAGING</span> <span>ANDY</span> <span>DIRECTOR</span>
								</p>
							</li>
							<li class="from">
								<strong>보내는 사람 <sup class="require">*</sup></strong>
								<input type="text" value="" id='from_name' name='from_name' maxlength="30">
							</li>
							<li class="country">
								<strong>국가</strong>
								<input type="text" value="" id='country' name='country' maxlength="30">
							</li>
							<li class="mail">
								<strong>메일<sup class="require">*</sup></strong>
								<input type="text" value="" id='from_mail_01' name='from_mail_01' maxlength="30">
								<i>@</i>
								<input type="text" value="" id='from_mail_02' name='from_mail_02' maxlength="30">
							</li>
							<li class="number">
								<strong>번호</strong>
								<input type="text" value="" id='number' name='number' maxlength="30">
							</li>
							<li class="subject">
								<strong>제목 <sup class="require">*</sup></strong>
								<input type="text" value="" id='subject' name='subject' maxlength="100">
							</li>
							<li class="message">
								<strong>메세지 <sup class="require">*</sup></strong>
								<textarea id="message" name='message' rows="4" cols="50"></textarea>
							</li>
							<li class="attachment">
								<strong>첨부파일</strong>
								<p class="file-wrap">
								<input type="text" class="file" value="" id='file'  name='file' readonly=""> <button class="btn-file" type="button" onclick="openFile();">파일 선택</button>
								<input type="file" id="upload_file"  name="upload_file" style="display:none">
								</p>
								<span>10MB 미만 파일만 가능</span>
							</li>

							<li class="security-code">
								<strong>보안 코드 <sup class="require">*</sup></strong>
								<!--<img src="./resources/images/captcha.png" alt="">-->
								<img src="/captcha/captcha.jsp" id="imgCaptcha" />

								<button class="btn-reset" type="button" onclick="RefreshImage('imgCaptcha');">새로고침</button>
								<input type="text" value="" id="security_code" name='security_code' maxlength="6"> <button class="btn-security" id="btn-captcha"  type="button">확인</button>
							</li>

							<li class="privacy-policy">
								<strong>개인정보 보호정책 <sup class="require">*</sup></strong>
								<div class="box-area">
									<div class="inner">
										<strong>수집되는 개인정보 항목</strong>
										<p>
										회사는 구독, 상담, 서비스 등에 대한 신청을 위해 개인 정보를 수집합니다.<br>
										· 수집 항목: 이름, 집 전화번호, 집 주소, 휴대전화 번호, 이메일<br>
										· 개인 정보 수집 방식: Web site (online job application)
										</p>
										<strong>개인 정보 수집 및 사용 목적</strong>
										<p>
										회사는 다음과 같은 목적으로 수집된 개인 정보를 사용합니다.<br>
										· 고객 질문의 응답 식별<br>
										· 결과 알림<br>
										</p>
										<strong>개인 정보 보관 및 사용 기간</strong>
										<p>
										개인 정보를 수집하고 사용 목적을 달성하고 나면 회사는 적당한 기간 내에 언급한 정보를 폐기합니다.
										</p>
									</div>
								</div>
							</li>
						</ul>
						<div class="checkbox-wrap">
							<input type="checkbox" id="agree_yn" name="agree_yn" value="Y">
							<label for="agree_yn">사용 약관을 읽었으며 동의합니다.</label>
						</div>
						<div class="btn-wrap">
							<button class="btn-send" id="btn-send" type="button">전송</button>
						</div>
					</form>
				</article>
			</div>
		</div>
	</section>
	<a href="#" class="btn-go-top">TOP</a>
	<!--// footer //-->
				<footer id="footer">COPYRIGHT © 2017 Studio 3S ALL RIGHTS RESERVED.</footer>
	<!--// footer //-->
</main>
</body>

<script>
$(document).ready(function () {

		// Data Post
	$("#btn-send").click(function (event) {

		  //stop submit the form, we will post it manually.
		  event.preventDefault();

				var from_name			= jQuery('#from_name').val();
				var from_mail_01		= jQuery('#from_mail_01').val();
				var from_mail_02		= jQuery('#from_mail_02').val();
				var subject 			= jQuery('#subject').val();
				var message 			= jQuery('#message').val();
				var security_code_yn	= jQuery('#security_code_yn').val();
				var agree_yn 			= $('input[name=agree_yn]:checked').val();


				if(from_name.split(" ").join("").length < 1) {
					alert("이름을 입력하십시오.");
					jQuery('#from_name').focus();
					return false;
				}
				if(from_mail_01.split(" ").join("").length < 1) {
					alert("이메일 주소를 입력하십시오.");
					jQuery('#from_mail_01').focus();
					return false;
				}
				if(from_mail_02.split(" ").join("").length < 1) {
					alert("유효한 이메일 주소를 입력하십시오.");
					jQuery('#from_mail_02').focus();
					return false;
				}
				var fnEmailChk = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
				if(!fnEmailChk.test(from_mail_01+'@'+from_mail_02)) {
					alert("유효한 이메일 주소를 입력하십시오.");
					jQuery('#from_mail_01').focus();
					return false;
				}
				if(subject.split(" ").join("").length < 1) {
					alert("제목을 입력하십시오.");
					jQuery('#subject').focus();
					return false;
				}
				if(message.split(" ").join("").length < 1) {
					alert("메시지를 작성하십시오.");
					jQuery('#message').focus();
					return false;
				}
				if(security_code_yn!="Y"){
					alert("보안 코드를 입력하십시오.");
					jQuery('#security_code').focus();
					return false;
				}
				if(agree_yn!="Y"){
					alert("개인정보 보호정책에 동의하십시오");
					return false;
				}


				// Get form
				var form = $('#sendForm')[0];
				// Create an FormData object
				var data = new FormData(form);

				for (var pair of data.entries()) {
				//	alert(pair[0]+ ', ' + pair[1]);
				}

		$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
			url: "send_post.jsp",
			data: data,
			processData: false,
			contentType: false,
			cache: false,
			timeout: 600000,
			dataType: 'json',
			success: function (data) {

				if( data.file_ext_yn == "N" || data.file_size_yn == "N"  || data.security_code_yn == "N" ){
					if( data.file_ext_yn == "N" ){
						alert("업로드 할 수있는 파일 형식이 아닙니다.");
					}
					if( data.file_size_yn == "N" ){
						alert("최대 파일 업로드 사이즈는 10MB입니다.");
					}
					if( data.security_code_yn == "N" ){
						alert("유효한 보안 코드를 입력하십시오.");
					}
				}else{
					alert("메시지가 성공적으로 전송되었습니다.");
					location.href="/ko/";
				}

			},
			error: function (e) {
				console.log("ERROR : ", e);
			}
		});

	});

		// captcha
	$("#btn-captcha").click(function (event) {
		var security_code = jQuery('#security_code').val();
		if(security_code.split(" ").join("").length < 5) {
			alert("유효한 보안 코드를 입력하십시오.");
			jQuery('#security_code').focus();
			return false;
		}
		var dataString = 'security_code=' + security_code;
		$.ajax({
			type: "POST",
			url: "/captcha/info.jsp",
			data: dataString,
			processData: false,
			contentType: false,
			cache: false,
			timeout: 600000,
			dataType: 'json',
			success: function (data) {
				 alert(data.msg);
				 jQuery('#security_code_yn').val(data.return_val);
			},
			error: function (e) {
				console.log("ERROR : ", e);
			}
		});
	});
});
</script>
</html>
