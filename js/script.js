$(document).ready(function () {
  // --- [마우스 따라다니기 기능] ---
  $(document).on("mousemove", function (e) {
    // 마우스의 현재 좌표(e.pageX, e.pageY)를 이미지의 위치로 실시간 업데이트
    $("#key").css({
      left: e.pageX,
      top: e.pageY,
    });
  });
  // [공통 기능] id가 'lock'으로 시작하는 모든 요소를 클릭했을 때 실행
  $("[id^='lock']").on("click", function () {
    // 1. 클릭된 자물쇠가 누구인지 확인 (ID 가져오기)
    const $thisLock = $(this); // 클릭된 자물쇠 객체
    const lockId = $thisLock.attr("id"); // 예: "lock1", "lock2"...

    console.log("현재 클릭된 자물쇠:", lockId);

    // 2. 소리 재생 (항상 처음부터 재생)
    const audio = document.getElementById("sound-locking");
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(function (error) {
        console.log("소리 재생 에러(브라우저 정책 등):", error);
      });
    }

    // 3. 자물쇠 '철컥' 애니메이션 (클래스 추가 -> 0.3초 뒤 제거)
    // 이미 돌아가 있는 상태면 중복 실행 방지
    if (!$thisLock.hasClass("unlocked")) {
      $thisLock.addClass("unlocked");

      // CSS transition 시간(0.3s)과 동일하게 대기 후 복귀
      setTimeout(function () {
        $thisLock.removeClass("unlocked");
      }, 300);
    }

    // 4. [핵심] 자물쇠별 인형 트리거
    // switch 문 안에서 각 자물쇠에 맞는 인형을 움직입니다.
    switch (lockId) {
      case "lock1":
        console.log("별 나타나기 시작!");

        const $star = $("#star");

        // 클래스를 붙여서 애니메이션 실행 (투명도 0 -> 1)
        // 만약 토글(켰다 껐다)하고 싶으면 addClass 대신 toggleClass 사용
        $star.addClass("star-visible");

        const $t2 = $("#t2");
        setTimeout(function () {
          $t2.addClass("t2-visible");
        }, 2000);

        break;

      case "lock2":
        console.log("5번 인형 움직임 시작!");

        const $doll5 = $("#doll5");

        // 1. 애니메이션 클래스 붙이기 (점프 시작)
        $doll5.addClass("doll5-jump2-active");

        // 2. CSS 시간(3.5초) 뒤에 클래스 떼기 (lock7이랑 똑같은 방식!)
        // 3500 = 3.5초
        setTimeout(function () {
          $doll5.removeClass("doll5-jump2-active");
        }, 3500);

        const $t3 = $("#t3");
        setTimeout(function () {
          $t3.addClass("t3-visible");
        }, 2000);
        break;

      case "lock3":
        console.log("3번 인형 움직임 시작!");

        const $doll1 = $("#doll1");

        // 1. 애니메이션 클래스 붙이기 (점프 시작)
        $doll1.addClass("doll1-jump-active");

        // 2. CSS 시간(3.5초) 뒤에 클래스 떼기 (lock7이랑 똑같은 방식!)
        // 3500 = 3.5초
        setTimeout(function () {
          $doll1.removeClass("doll1-jump-active");
        }, 3000);

        const $t4 = $("#t4");
        setTimeout(function () {
          $t4.addClass("t4-visible");
        }, 2000);
        break;

      case "lock4":
        console.log("4번 인형 눈 뜨기!");

        // doll6이 doll3 위에 겹쳐져 있으므로, doll6만 켰다 끄면 됩니다.
        const $doll6 = $("#doll6");

        // 1. 애니메이션 클래스 붙이기
        $doll6.addClass("doll-eye-active");

        // 2. 3초 뒤에 클래스 제거 (다음 클릭을 위해 리셋)
        setTimeout(function () {
          $doll6.removeClass("doll-eye-active");
        }, 3500);

        const $title = $("#title"); // <-- 이걸로 변경

        // 2. 타이틀 등장
        setTimeout(function () {
          $title.addClass("title-visible");
        }, 1000);

        // 3. [신규] t1 이미지 (2초 뒤 -> 타이틀보다 1초 늦게)
        const $t1 = $("#t1");
        setTimeout(function () {
          $t1.addClass("t1-visible");
        }, 2000);

        break;

      case "lock5":
        console.log("달 나타나기 시작!");

        const $moon = $("#moon");

        // 클래스를 붙여서 애니메이션 실행 (투명도 0 -> 1)
        // 만약 토글(켰다 껐다)하고 싶으면 addClass 대신 toggleClass 사용
        $moon.addClass("moon-visible");

        const $t5 = $("#t5");
        setTimeout(function () {
          $t5.addClass("t5-visible");
        }, 2000);

        break;
      case "lock6":
        console.log("순식간 변신 & 긴 응시 시작!");

        const $doll7 = $("#doll7");
        const $doll4 = $("#doll4");

        // 1. 애니메이션 시작
        $doll7.addClass("doll7-morph-active");
        $doll4.addClass("doll4-morph-active");

        // 2. 5초 뒤 리셋 (CSS 시간 5s와 맞춤)
        setTimeout(function () {
          $doll7.removeClass("doll7-morph-active");
          $doll4.removeClass("doll4-morph-active");
        }, 5000);

        const $t6 = $("#t6");
        setTimeout(function () {
          $t6.addClass("t6-visible");
        }, 2000);
        break;

      case "lock7":
        console.log("7번 인형 움직임 시작!");

        // --- [여기만 추가되었습니다!] ---
        const $doll2 = $("#doll2"); // doll2 찾기

        // 애니메이션 클래스 붙이기
        $doll2.addClass("doll-active");

        // 1.2초 뒤에 클래스 떼기 (다시 클릭 가능하도록)
        setTimeout(function () {
          $doll2.removeClass("doll-active");
        }, 2500);

        const $t7 = $("#t7");
        setTimeout(function () {
          $t7.addClass("t7-visible");
        }, 200);
        // -----------------------------
        break;

      default:
        console.log("알 수 없는 자물쇠입니다.");
    }
  });
});
