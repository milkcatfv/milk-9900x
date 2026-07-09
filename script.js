// imagesフォルダに入れた画像名をここに書くだけ
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.png",
  "img4.jpg",
  "img5.png"
];

const gallery = document.getElementById("images");
const moreBtn = document.getElementById("moreBtn");

let shown = 0;        // 今何枚表示してるか
const perLoad = 4;    // 一回で何枚読み込むか

function loadImages() {
  for (let i = shown; i < shown + perLoad && i < images.length; i++) {
    const img = document.createElement("img");
    img.src = "images/" + images[i];
    img.loading = "lazy"; // 読み込み高速化
    gallery.appendChild(img);
  }

  shown += perLoad;

  if (shown >= images.length) {
    moreBtn.style.display = "none"; // 全部読み込んだらボタン消す
  }
}

// 最初に4枚表示
loadImages();

// ボタン押したら追加読み込み
moreBtn.addEventListener("click", loadImages);
