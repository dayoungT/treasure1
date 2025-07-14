// 단서 목록
const clues = [
    "보물의 y좌표는 버려진 배의 y좌표와 같다.",
    "보물의 y좌표는 해골의 y좌표와 같다.",
    "해골은 버려진 배로부터 x축방향으로 +8 만큼 이동한 위치에 있다.",
    "해골의 x좌표는 –6이다.",
    "강이 일차방정식 3x+2y+26=0 의 그래프를 따라 흐른다. 버려진 배는 강 위에 있다.",
    "강은 일차방정식 3x+2y+26=0의 그래프를 따라 흐른다. 부서진 비행기가 강 위에 있다.",
    "부서진 비행기와 해골의 x좌표는 같다.",
    "오래된 다리로부터 y축의 방향으로 +12 만큼 이동하면 보물이 나온다.",
    "사람이 걸어간 흔적이 일차방정식 y-8=0 의 그래프를 따라 나타나 있다. 그 흔적 위에 버려진 배가 있다.",
    "보물은 해골과 버려진 배를 지나는 직선 위에 있다.",
    "부서진 비행기의 x좌표는 해골의 x좌표와 같다.",
    "부서진 비행기에서 y축방향으로 +12만큼 이동한 곳에 해골이 있다.",
    "부서진 비행기는 (-6, -4)에 위치해있다. 부서진 비행기를 지나고 기울기가 1인 직선을 그으면 그 위에 보물이 있다.",
    "낡은 집으로부터 x축방향으로 +6 y축방향으로 +8만큼 이동하면 야자수가 있다.",
    "낙타가 이동한 흔적이 x절편이 12이고 y절편이 16인 일차함수의 그래프를 따라 나타나 있다. 그 흔적 위에 야자수 나무가 있다.",
    "낙타가 이동한 흔적 위에 보물이 있다.",
    "보물과 오래된 다리, 낡은 집을 이으면 y축과 평행한 직선이 그려진다.",
    "보물은 오래된 다리와 낡은 집을 지나는 직선 위에 있다.",
    "낡은 집의 x좌표는 6이다.",
    "낡은 집과 야자수는 일차방정식 4x-3y=48의 그래프 위에 있다.",
    "오래된 다리는 낡은 집으로부터 y축방향으로 +4만큼 이동한 위치에 있다.",
    "오래된 다리와 야자수는 일차방정식 2x-3y-24=0의 그래프 위에 있다.",
    "부서진 비행기와 오래된 다리를 지나는 직선을 그리면 x축과 평행한 직선이 그려진다.",
    "야자수는 x축 위에 있다.",
    "당신은 지금 원점에 있다. 이곳으로부터 x축방향으로 –6만큼 y축방향으로 –4만큼 이동하면 부서진 비행기가 있다.",
    "부서진 비행기와 보물을 지나는 직선의 기울기는 +1이다."
];

const clueButtons = document.getElementById('clue-buttons');
const clueText = document.getElementById('clue-text');
const readCount = document.getElementById('read-count');
const totalCount = document.getElementById('total-count');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');

let readClues = 0;
let timerStarted = false;
let secondsElapsed = 0;
let timerInterval = null;

function updateTimer() {
    secondsElapsed++;
    const minutes = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const seconds = String(secondsElapsed % 60).padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if (secondsElapsed % 180 === 0) {
        message.textContent = "📌 단서 2개를 확인하세요!";
        setTimeout(() => message.textContent = "", 5000);
    }
}

totalCount.textContent = clues.length;

clues.forEach((clue, idx) => {
    const btn = document.createElement('button');
    btn.textContent = `단서 ${idx + 1}`;
    btn.classList.add('clue-btn');

    btn.addEventListener('click', () => {
        clueText.textContent = clue;

        if (!timerStarted) {
            timerInterval = setInterval(updateTimer, 1000);
            timerStarted = true;
        }

        if (!btn.classList.contains('read')) {
            btn.classList.add('read');
            readClues += 1;
            readCount.textContent = readClues;
        }
    });

    clueButtons.appendChild(btn);
});