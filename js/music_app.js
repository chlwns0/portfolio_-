$(function () {
  const frame = document.querySelector("section");
  const lists = frame.querySelectorAll("article");
  const audio = frame.querySelectorAll("audio");
  const prev = document.querySelector(".btnPrev");
  const next = document.querySelector(".btnNext");
  const deg = 45; //각각의 article요소가 회전할 각도
  const len = lists.length - 1; //순번이 0부터 시작하므로 전체 갯수에서 1을 빼줌

  let i = 0;
  let num = 0;
  let active = 0;

  function activation(index, lists) {
    for (let el of lists) {
      el.classList.remove("on");
    }
    lists[index].classList.add("on");
  }

  //article의 갯수만큼 반복
  for (let el of lists) {
    let pic = el.querySelector(".pic");

    //각 article요소를 45도 씩 회전하고 아래로 배치=>css
    el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;

    pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
    i++;

    //각 article 요소 안쪽의 재생, 정지, 처음부터 재생버튼을 변수에 저장

    let play = el.querySelector(".play");
    let pause = el.querySelector(".pause");
    let load = el.querySelector(".load");

    //play버튼 클릭시 이벤트 적용

    play.addEventListener("click", function (e) {
      let isActive = e.currentTarget
        .closest("article")
        .classList.contains("on");

      if (isActive) {
        e.currentTarget
          .closest("article")
          .querySelector(".pic")
          .classList.add("on");

        e.currentTarget.closest("article").querySelector("audio").play();
      }
    });

    //pause버튼 클릭시

    pause.addEventListener("click", function (e) {
      let isActive = e.currentTarget
        .closest("article")
        .classList.contains("on");
      if (isActive) {
        e.currentTarget
          .closest("article")
          .querySelector(".pic")
          .classList.remove("on");

        e.currentTarget.closest("article").querySelector("audio").pause();
      }
    });

    //load버튼 클릭시

    load.addEventListener("click", function (e) {
      let isActive = e.currentTarget
        .closest("article")
        .classList.contains("on");

      if (isActive) {
        e.currentTarget
          .closest("article")
          .querySelector(".pic")
          .classList.add("on");

        e.currentTarget.closest("article").querySelector("audio").load();

        e.currentTarget.closest("article").querySelector("audio").play();
      }
    });
  }

  //모든 오디오 요소를 반복하면서 정지시키고 .pic요소의 모션을 중지해서 초기화 하는 함수

  function initMusic() {
    for (let el of audio) {
      el.pause();
      el.load();
      el.closest("article").querySelector(".pic").classList.remove("on");
    }
  }

  //prev버튼 클릭시
  prev.addEventListener("click", function () {
    //음악 초기화 함수 실행
    initMusic();

    //num값을 증가시키며 frame 45도 만큼 증가시키며 시계방향으로 계속 회전

    num++;
    frame.style.transform = `rotate(${deg * num}deg)`;

    //3항조건 연산자
    //기본형=> (조건)? 항1 : 항2; 조건이 참이면 항1을 출력, 거짓이면 항2를 출력

    active == 0 ? (active = len) : active--;
    activation(active, lists);
  });

  //next버튼 클릭시

  next.addEventListener("click", function () {
    //음악초기화 함수 실행
    initMusic();

    //num값을 감소시키며 frame을 45도 만큼 감소시키며 반시계방향으로 회전

    num--;
    frame.style.transform = `rotate(${deg * num}deg)`;

    active == len ? (active = 0) : active++;
    activation(active, lists);
  });
});
