const buildHTML = (XHR) => {
  const item = XHR.response.post;    //投稿の内容データを変数に代入
  //以下'から'までの表示の描写を変数htmlに代入
        const html = `
          <div class="post">
            <div class="post-date">
              投稿日時：${item.created_at}
            </div>
            <div class="post-content">
              ${item.content}
            </div>
          </div>`;
  return html;
};  

function post (){
  const form = document.getElementById("form"); // id formの要素を取得
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form); // フォームに入力された値を取得
    const XHR = new XMLHttpRequest();    // オブジェクトを変数XHRに格納
    XHR.open("POST", "/posts", true);    // リクエストの内容を指定
    XHR.responseType = "json";           // データ形式を指定   
    XHR.send(formData);                  // 送信
    XHR.onload = () => {                 //リクエストの送信が成功したときに呼び出される
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
}

window.addEventListener('turbo:load', post);