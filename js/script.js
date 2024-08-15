$(function() {

    // スティッキーヘッダー
        // 変数navPosに、nav要素の初期位置を代入
        let navPos = $(".sticky-nav").offset().top;

        let pageTop = $('#pageTop');

        // ブラウザをスクロール
        $(window).scroll(function () {
            // スクロール量とnav要素の初期位置を比較
            if ($(window).scrollTop() > navPos) {
                // 条件を満たした場合：nav要素をブラウザ上部に固定
                $(".sticky-nav").css("position", "sticky").css("top", 0).css("z-index", 999);
            } else {
                // 満たさない場合：nav要素を通常の配置にする
                $(".sticky-nav").css("position", "static");
            }
            // 500px 下へスクロールした時点でTOPへ戻るボタンを表じ
            if ($(this).scrollTop() > 400) {
                pageTop.fadeIn();
            } else {
                pageTop.fadeOut();
            }
        });

    // ハンバーガーメニュー動作
    $('.Toggle').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.NavMenu').addClass('active'); //クラスを付与
        } else {
            $('.NavMenu').removeClass('active'); //クラスを外す
        }
    });

    // スライドショー
    /* eslint-disable no-undef */
$(function() {
    // eslint-disable-next-line no-irregular-whitespace
    // スクロールの方向　-1の時には左、1の時には右
    let dir = -1;

    // スクロールのインターバル(何秒ごとにスクロールさせるか。3000ミリ秒に設定)
    let interval = 3000;

    // スクロールのスピード（700ミリ秒に設定）
    let duration = 700;

    // タイマー用の変数
    let timer;

    // リストの順番を変更（3番目を1番最初にする）
    $("#slide ul").prepend($("#slide li:last-child"));

    // リストの位置を変更（画像1枚分ずらす）
    $("#slide ul").css("left", -1000);

    // 3000ミリ秒（変数intervalの値）ごとにslideTimer関数を実行
    timer = setInterval(slideTimer, interval);

    // slideTimer()関数
    function slideTimer(){
      // スクロール方向の判断
      if(dir == -1){
        // 画像1枚分左へスクロール
        $("#slide ul").animate({"left" : "-=1000px"}, duration, function(){
          // リストの順番を変更
          $(this).append($("#slide li:first-child"));

          // リストの位置を変更
          $(this).css("left", -1000);
        });
      }else{
        // 画像1枚分右へスクロール
        $("#slide ul").animate({"left" : "+=1000px"}, duration, function(){
          // リストの順番を変更
          $(this).prepend($("#slide li:last-child"));

          // リストの位置を変更
          $(this).css("left", -1000);
          // 左方向へリセット
          dir = -1;
        });
      }
    }

    // 前へ戻るボタン
    $("#prevBtn").click(function(){
      // スクロール方向の切り替え（右）
      dir = 1;

      // タイマーを停止して再スタート
      clearInterval(timer);
      timer = setInterval(slideTimer, interval);

      // 初回の関数実行
      slideTimer();
    });

    // 次へ進むボタン
    $("#nextBtn").click(function(){
      // スクロール方向の切り替え（左）
      dir = -1;

      // タイマーを停止して再スタート
      clearInterval(timer);
      timer = setInterval(slideTimer, interval);

      // 初回の関数実行
      slideTimer();
    });
  });

  //クイズ

  const quiz = [
    {
        question: 'Q1. 発祥地は?',
        choices: [
            '京都府',
            '東京都',
            '愛知県',
            '大阪府'
        ],
        correct: '愛知県'
    },
    {
        question: 'Q2. 初めて作られた年は?',
        choices: [
            '1970年',
            '1990年',
            '2001年',
            '2009年'
        ],
        correct: '2009年'
    },
    {
        question: 'Q3. 麺を完食した後に、残った具材とご飯で食べることをなんというか?',
        choices: [
            '混ぜ飯',
            '追い飯',
            '追加飯',
            '完食飯'
        ],
        correct: '追い飯'
    },
    {
        question: 'Q4. 途中で味変としてよく使われるものは?',
        choices: [
            'みりん',
            'こんぶ酢',
            '醤油',
            '油'
        ],
        correct: 'こんぶ酢'
    },
    {
      question: 'Q5. 必ず入っている肉の種類は?',
      choices: [
          'ミンチ',
          '唐揚げ',
          'トンカツ',
          'チャーシュー'
      ],
      correct: '麺屋はなび'
  },
    {
        question: 'Q6. 発祥の店名は?',
        choices: [
            '麺屋マルショウ',
            '麺屋こころ',
            '麺屋やまひで',
            '麺屋はなび'
        ],
        correct: '麺屋はなび'
    },

]

// quizIndex = クイズの見出し

const Numberofquestions = quiz.length;
let quizIndex = 0;
let score = 0;

const button = document.getElementsByTagName('button');
const buttonLength = button.length;

const setupQuiz = () => {
    document.getElementById('question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        button[buttonIndex].textContent = quiz[quizIndex].choices[buttonIndex];
        buttonIndex++;
    }
}

setupQuiz();

//clickHandler = クリックした時に発動
const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！");
    }

    quizIndex++;

    if (quizIndex < Numberofquestions) {
        setupQuiz();
    } else {
        let okcancel = window.confirm(Numberofquestions + '問中' + score + '問正解です！');
        if (okcancel) {
            quizIndex = 0;
            setupQuiz();
        }

    }
}

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
});