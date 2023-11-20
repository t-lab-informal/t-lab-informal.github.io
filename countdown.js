//カウントダウンの終了日時を指定
const EndTime1 = new Date("2024/2/15 09:00:00");
const EndTime2 = new Date("2024/3/15 09:00:00");
//タイマーを表示する要素
const output1 = document.getElementById("count_down_timer1");
const output2 = document.getElementById("count_down_timer2");

//タイマーを表示させる関数
function displayTime1(diff) {
  if (diff > 0) {
      output1.innerHTML= d1 + '日' + h1 + '時間' + m1 + '分' + s1 + '秒';
  }
  else{
      output1.innerHTML= '締め切りました!!!!';
  }
}

function displayTime2(diff) {
  if (diff > 0) {
      output2.innerHTML= d2 + '日' + h2 + '時間' + m2 + '分' + s2 + '秒';
  }
  else{
      output2.innerHTML= '締め切りました!!!!';
  }
}

//指定日時までの時間を計算する関数を定義
function calcRemainingTime() {
  //現在日時を取得
  const NowTime = new Date();
  //差分
  const diff1 = EndTime1 - NowTime;
  const diff2 = EndTime2 - NowTime;
  //計算
  d1 = Math.floor(diff1 / 24 / 60 / 60 / 1000);
  h1 = Math.floor(diff1 / 1000 / 60 / 60) % 24;
  m1 = Math.floor(diff1 / 1000 / 60) % 60;
  s1 = Math.floor(diff1 / 1000) % 60;

  d2 = Math.floor(diff2 / 24 / 60 / 60 / 1000);
  h2 = Math.floor(diff2 / 1000 / 60 / 60) % 24;
  m2 = Math.floor(diff2 / 1000 / 60) % 60;
  s2 = Math.floor(diff2 / 1000) % 60;
  //表示
  displayTime1(diff1);
  displayTime2(diff2);
}


//一定間隔で上記の関数を実行
calcRemainingTime();
setInterval(calcRemainingTime, 1000);