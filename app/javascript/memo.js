function post (){
  const form = document.getElementById("form"); //id formの要素を取得
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  form.addEventListener("submit", () => {       //ボタンを押したらイベント発火
    const formData = new FormData(form);        //フォームに入力された値を取得
    const XHR = new XMLHttpRequest();           //オブジェクトを変数XHRに格納
    XHR.open("POST", "/posts", true);           //リクエストの内容を指定
    XHR.responseType = "json";                  //データ形式を指定   
    XHR.send(formData);                         //送信！！！！！
  });
};

window.addEventListener('turbo:load', post);