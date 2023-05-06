// 첫번째 자리가 0인 경우 정답이 4자리가 되는 버그 고치기

const answer = Math.floor(Math.random() * 100000).toString(); // 랜덤으로 정답 정함

let submittedAnswer = "";

const button = document.querySelector("#submit");

let count = 0;
button.addEventListener("click", () => {
  count++;

  const inputs = document.querySelectorAll("#input");
  // 버튼 누르면 각 인풋들 가져옴

  inputs.forEach((e) => {
    submittedAnswer += e.value; // 각 인풋의 값들을 하나의 스트링으로 만들어 줌
  });

  let i = 0;
  inputs.forEach((e) => {
    if (inputs[i].value === answer[i]) {
      inputs[i].style.background = "lightGreen";
    } else {
      for (index = 0; index < answer.length; index++) {
        if (inputs[i].value === answer[index]) {
          inputs[i].style.background = "lightyellow";
          break;
        } else {
          inputs[i].style.background = "lightgray";
        }
      }
    }

    inputs[i].readOnly = true;
    inputs[i].removeAttribute("id");

    i++;
  });

  if (submittedAnswer === answer) {
    const succeedTemplet = `<h2>성공</h2>
    <h4>${count}번 만에 성공하셨네요!</h4>`;
    const succeed = document.querySelector(".succeed");
    succeed.insertAdjacentHTML("beforeend", succeedTemplet);
    button.remove();
    share.style.visibility = "visible";
  } else {
    const failTemplet = `<div class="addedBox">
  <input id="input" type="text" maxlength="1">
  <input id="input" type="text" maxlength="1">
  <input id="input" type="text" maxlength="1">
  <input id="input" type="text" maxlength="1">
  <input id="input" type="text" maxlength="1">
</div>
`;
    const main = document.querySelector(".main");
    main.insertAdjacentHTML("beforeend", failTemplet);

    submittedAnswer = "";
  }
});

const explain = document.querySelector("#explain");
explain.addEventListener("click", () => {
  alert(
    "각각의 칸에 0부터 9까지의 자연수 중 아무 수나 입력합니다.\n숫자와 자리가 모두 맞으면 초록색\n자리는 안 맞지만 해당 숫자가 어딘가에 포함되어 있으면 노란색\n해당 숫자가 포함되어 있지도 않으면 회색으로 표시됩니다."
  );
});

const share = document.querySelector("#share");
share.addEventListener("click", () => {
  alert("그런 기능 없다.");
});
