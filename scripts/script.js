// 將0～100隨機整數 指定給 變數answer
var answer = Math.floor(Math.random() * 101);
// Math.random()函式會回傳 0 到 1 之間的隨機小數，而 0 到 1 不包含 0 跟 1 
// Math.floor()函式會回傳無條件捨去的數字
// 舉例 Math.random()函式回傳0.001，*101為0.101，Math.floor()函式轉換為0
// 舉例 Math.random()函式回傳0.12325，*101為12.44825，Math.floor()函式轉換為12
// 舉例 Math.random()函式回傳0.999，*101為100.899，Math.floor()函式轉換為100


// 檢查 猜測答案 與 最終答案 是否相符
// 並改變DOM元素之HTML內容
function checkAnswer() {
    var guess = document.querySelector('#guessNumber').value; // 把id：guessNumber的HTML中的value抓出來，成為DOM元素，指定給 變數guess
    // var g = parseInt(guess); // 把 DOM元素guess 解析為整數數字型態

    // 把 正確答案 與 錯誤答案 HTML元素抓出來，成為DOM元素，指定給變數
    var answerCorrect = document.querySelector('#answerCorrect');
    var answerIncorrect = document.querySelector('#answerIncorrect');

    // 方便用控制台工具檢查答案
    console.log(answer);

    // 判斷 猜測數 與 最終數 是否相符
    // 根據不同情形，針對不同DOM元素 替換不同文字
    if (guess == answer) {
        answerCorrect.innerHTML = '答對了！';
        answerIncorrect.innerHTML = '';
    }
    else if (guess < answer) {
        answerCorrect.innerHTML = '';
        answerIncorrect.innerHTML = '再大一點';
    }
    else {
        answerCorrect.innerHTML = '';
        answerIncorrect.innerHTML = '再小一點';
    };
};

// 點擊「送出答案」後 呼叫的函數:
function clickAnswerButton() {
    var guess = document.querySelector('#guessNumber').value; //抓出輸入輸入框的值 並轉換為value 成為DOM元素guess

    // 有輸入數字時，才會在點擊按鈕後，開始判斷答案是否正確
    // 否則跳提醒視窗
    if (guess != '') {
        checkAnswer();
    } 
    else {
        alert('請輸入猜測數字！');
    };
};



