const STORAGE_KEY = "moveInChecklistItems";

const stockImages = {
  coating: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
  bath: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
  clean: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
  kitchen: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
  laundry: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80",
  storage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
  living: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  default: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
};

const productUrls = {
  "water-coating": "https://www.amazon.co.jp/dp/B0D3ZVHBRS",
  "bath-mold-smoke": "https://www.amazon.co.jp/dp/B0098FRW18",
  "insect-fogger": "https://www.amazon.co.jp/dp/B0837V26N7",
  "pipe-putty": "https://www.amazon.co.jp/dp/B0DXPWLBBF",
  "wall-floor-wipe": "https://www.amazon.co.jp/dp/B0DNFTV7PT",
  "ac-insect-cap": "https://www.amazon.co.jp/dp/B0FY352V8H",
  "roach-bait": "https://www.amazon.co.jp/dp/B07B9TWFDL",
  "fridge-mat": "https://www.amazon.co.jp/dp/B0BNX2NMRG",
  "stove-vent-cover": "https://www.amazon.co.jp/dp/B0F5M1PK37",
  "drain-plate": "https://www.amazon.co.jp/dp/B0FCLCMS3Z",
  "vent-filter": "https://www.amazon.co.jp/dp/B0BX4TCDWJ",
  "gap-cover": "https://www.amazon.co.jp/dp/B0F885TBMZ",
  "bath-pipe-clean": "https://www.amazon.co.jp/dp/B0DZ222M7N",
  "washer-hose-cover": "https://www.amazon.co.jp/dp/B0G58VN2PK",
  "shelf-sheet": "https://www.amazon.co.jp/dp/B0018NMFKQ\nhttps://www.amazon.co.jp/dp/B098N9J9NF",
  "felt-pads": "https://www.amazon.co.jp/dp/B082VJZ63B"
};

const productImages = {
  "water-coating": "https://image.sofmap.com/images/product/pim/4516825005534_A01.jpg",
  "bath-mold-smoke": "https://m.media-amazon.com/images/I/81BU9XfWkfL._AC_SL1500_.jpg",
  "insect-fogger": "https://m.media-amazon.com/images/I/71nfHCmQubL._AC_SL1500_.jpg",
  "pipe-putty": "https://m.media-amazon.com/images/I/71j2l1QBTEL._SL1500_.jpg",
  "wall-floor-wipe": "https://m.media-amazon.com/images/I/51D4wZwI1SL._AC_SL1179_.jpg",
  "ac-insect-cap": "https://m.media-amazon.com/images/I/71Pxabp64wL._AC_SL1500_.jpg",
  "roach-bait": "https://m.media-amazon.com/images/I/813O+Hz1CDL._AC_SL1500_.jpg",
  "fridge-mat": "https://m.media-amazon.com/images/I/61lHIv4g4uL._AC_SL1500_.jpg",
  "stove-vent-cover": "https://m.media-amazon.com/images/I/71srDVH+O9L._AC_SL1500_.jpg",
  "drain-plate": "https://m.media-amazon.com/images/I/71XZ8-LHm6L._AC_SL1500_.jpg",
  "vent-filter": "https://m.media-amazon.com/images/I/71wIsm+QEBL._AC_SL1210_.jpg",
  "gap-cover": "https://m.media-amazon.com/images/I/61mNqA8x2uL._SL1000_.jpg",
  "bath-pipe-clean": "https://m.media-amazon.com/images/I/81XwUZBtELL._AC_SL1500_.jpg",
  "washer-hose-cover": "https://m.media-amazon.com/images/I/51v5IRCbaQL._AC_SL1200_.jpg",
  "shelf-sheet": "https://m.media-amazon.com/images/I/81TdN4RLkFL._AC_SL1500_.jpg",
  "felt-pads": "https://m.media-amazon.com/images/I/71O8sbQkI4L._AC_SL1500_.jpg"
};

const defaultItems = [
  {
    id: "water-coating",
    timing: "today",
    title: "水回りのコーティング",
    product: "超撥水コーティング剤",
    description: "キッチン、洗面台、お風呂などの水回りに使い、汚れや水垢をつきにくくします。入居直後のきれいな状態で塗ると管理しやすいです。",
    url: "https://item.rakuten.co.jp/alude/sk6679/?msclkid=a64d193e78c6122031f0732a4ec84604&scid=af_pc_etc&sc2id=af_113_0_10002874&ifd=131533&iasid=wem_icbs_&icm_acid=138339043&icm_cid=568929152&icm_agid=1175379727520531",
    image: stockImages.coating,
    done: false
  },
  {
    id: "bath-mold-smoke",
    timing: "today",
    title: "お風呂の防カビ対策",
    product: "防カビくん煙剤、貼るタイプの防カビ剤",
    description: "浴室にカビが広がる前に予防します。くん煙剤を使う場合は説明書を読み、換気や使用時間を確認します。",
    url: "",
    image: stockImages.bath,
    done: false
  },
  {
    id: "insect-fogger",
    timing: "today",
    title: "バルサン",
    product: "火災報知器が作動しないタイプの害虫対策剤",
    description: "家具を置く前に行うと作業しやすいです。部屋の広さに合うタイプを選び、火災報知器への影響が少ないものを確認します。",
    url: "",
    image: stockImages.living,
    done: false
  },
  {
    id: "pipe-putty",
    timing: "today",
    title: "排水管の隙間をふさぐ",
    product: "すきまパテ、防虫パテ",
    description: "シンク下や洗面台下の排水管まわりの隙間をふさぎ、虫の侵入やにおい上がりを防ぎます。",
    url: "",
    image: stockImages.kitchen,
    done: false
  },
  {
    id: "wall-floor-wipe",
    timing: "today",
    title: "壁拭き・床拭き",
    product: "クイックルワイパー、掃除シート",
    description: "荷物を運び込む前に壁や床を拭きます。家具を置く前なら隅まで掃除しやすいです。",
    url: "",
    image: stockImages.clean,
    done: false
  },
  {
    id: "damage-photos",
    timing: "today",
    title: "入居前の写真を撮る",
    product: "スマホカメラ",
    description: "傷、汚れ、設備不良を日付がわかる形で撮影します。退去時のトラブル防止にも役立ちます。",
    url: "",
    image: stockImages.default,
    done: false
  },
  {
    id: "ac-insect-cap",
    timing: "today",
    title: "エアコン防虫キャップをつける",
    product: "エアコン防虫キャップ",
    description: "エアコンのドレンホース先端に取り付け、虫の侵入を予防します。排水を妨げない形状を選びます。",
    url: "",
    image: stockImages.living,
    done: false
  },
  {
    id: "roach-bait",
    timing: "today",
    title: "ゴキブリ対策",
    product: "ブラックキャップ",
    description: "キッチン、洗面所、玄関付近などに設置します。小さな子どもやペットがいる場合は置き場所に注意します。",
    url: "",
    image: stockImages.kitchen,
    done: false
  },
  {
    id: "fridge-mat",
    timing: "today",
    title: "冷蔵庫用マットを敷く",
    product: "冷蔵庫用マット",
    description: "冷蔵庫の設置前に敷いて、床のへこみや傷を防ぎます。冷蔵庫サイズに合うものを選びます。",
    url: "",
    image: stockImages.kitchen,
    done: false
  },
  {
    id: "stove-vent-cover",
    timing: "later",
    title: "コンロ排気口カバーを置く",
    product: "コンロ排気口カバー",
    description: "油はねや食材落ちを防ぎ、掃除の手間を減らします。コンロの幅と排気口の形に合うものを選びます。",
    url: "",
    image: stockImages.kitchen,
    done: false
  },
  {
    id: "drain-plate",
    timing: "later",
    title: "排水口プレートを変える",
    product: "キッチン、お風呂、洗面所用の排水口プレート",
    description: "掃除しやすい形状に変えると髪の毛やぬめりの管理が楽になります。各場所のサイズを測ってから選びます。",
    url: "",
    image: stockImages.bath,
    done: false
  },
  {
    id: "vent-filter",
    timing: "later",
    title: "換気扇フィルターを貼る",
    product: "スターフィルター",
    description: "キッチン換気扇の汚れを減らします。フィルター交換のしやすさとサイズを確認します。",
    url: "",
    image: stockImages.kitchen,
    done: false
  },
  {
    id: "dust-filter",
    timing: "later",
    title: "埃取りフィルターを貼る",
    product: "エアコン上部、冷蔵庫上部、洗面所やトイレ換気扇用フィルター",
    description: "ほこりがたまりやすい場所に貼り、掃除頻度を下げます。空気の流れを妨げない貼り方にします。",
    url: "",
    image: stockImages.clean,
    done: false
  },
  {
    id: "gap-cover",
    timing: "later",
    title: "コンロ・トイレの隙間にカバーをつける",
    product: "ビルトインコンロ用すきまカバー、トイレすきまカバー",
    description: "汚れが入り込みやすい隙間をふさぎます。コンロは耐熱性、トイレは防水性を確認します。",
    url: "",
    image: stockImages.kitchen,
    done: false
  },
  {
    id: "bath-pipe-clean",
    timing: "later",
    title: "追い焚き洗浄",
    product: "追い焚き配管洗浄剤",
    description: "浴槽の追い焚き配管を洗浄します。入居後すぐに一度行うと気持ちよく使い始められます。",
    url: "",
    image: stockImages.bath,
    done: false
  },
  {
    id: "washer-hose-cover",
    timing: "later",
    title: "洗濯機のホースにカバーをつける",
    product: "洗濯機排水ホースカバー",
    description: "排水ホースまわりにほこりがたまるのを防ぎ、洗濯機下の掃除をしやすくします。",
    url: "",
    image: stockImages.laundry,
    done: false
  },
  {
    id: "shelf-sheet",
    timing: "later",
    title: "靴箱・引き出しにシートを敷く",
    product: "靴箱シート、引き出しシート",
    description: "棚や引き出しの汚れ、湿気、におい移りを防ぎます。場所に合わせてカットできるものが便利です。",
    url: "",
    image: stockImages.storage,
    done: false
  },
  {
    id: "felt-pads",
    timing: "later",
    title: "床傷防止フェルトを貼る",
    product: "椅子、テーブル、ソファ、ベッド用フェルト",
    description: "家具の脚に貼って床の傷や音を防ぎます。動かす頻度が高い家具は早めに貼ると安心です。",
    url: "",
    image: stockImages.living,
    done: false
  }
];

const template = document.querySelector("#taskTemplate");
const todayList = document.querySelector("#todayList");
const laterList = document.querySelector("#laterList");
const addForm = document.querySelector("#addForm");
const doneCount = document.querySelector("#doneCount");
const remainingCount = document.querySelector("#remainingCount");
const progressPercent = document.querySelector("#progressPercent");
const resetChecks = document.querySelector("#resetChecks");

let items = loadItems();

function applyProductUrls(item) {
  return {
    ...item,
    url: productUrls[item.id] || item.url,
    image: productImages[item.id] || item.image
  };
}

function loadItems() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    return defaultItems.map(applyProductUrls);
  }

  try {
    return JSON.parse(saved).map(applyProductUrls);
  } catch {
    return defaultItems.map(applyProductUrls);
  }
}

function saveItems() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function render() {
  todayList.innerHTML = "";
  laterList.innerHTML = "";

  items.forEach((item) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const checkbox = node.querySelector(".task-check");
    const image = node.querySelector(".task-card__image");
    const tag = node.querySelector(".tag");
    const title = node.querySelector("h3");
    const product = node.querySelector(".product");
    const description = node.querySelector(".description");
    const urlLinks = node.querySelector(".url-links");
    const deleteButton = node.querySelector(".delete-button");

    node.dataset.id = item.id;
    node.classList.toggle("is-done", item.done);
    checkbox.checked = item.done;
    image.src = item.image || stockImages.default;
    image.alt = `${item.title}のイメージ写真`;
    tag.textContent = item.timing === "today" ? "当日" : "後日OK";
    title.textContent = item.title;
    product.textContent = item.product || "未入力";
    description.textContent = item.description || "説明文を追加してください。";
    renderProductLinks(urlLinks, item.url);

    checkbox.addEventListener("change", () => {
      item.done = checkbox.checked;
      saveItems();
      render();
    });

    deleteButton.addEventListener("click", () => {
      items = items.filter((candidate) => candidate.id !== item.id);
      saveItems();
      render();
    });

    if (item.timing === "today") {
      todayList.append(node);
    } else {
      laterList.append(node);
    }
  });

  updateSummary();
}

function renderProductLinks(container, urls) {
  container.innerHTML = "";
  const links = (urls || "")
    .split(/\s+/)
    .map((url) => url.trim())
    .filter(Boolean);

  if (!links.length) {
    const empty = document.createElement("span");
    empty.className = "empty-link";
    empty.textContent = "商品URL未設定";
    container.append(empty);
    return;
  }

  links.forEach((url, index) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.className = "product-link";
    link.textContent = links.length > 1 ? `商品ページ ${index + 1}` : "商品ページを開く";
    container.append(link);
  });
}

function updateSummary() {
  const done = items.filter((item) => item.done).length;
  const remaining = items.length - done;
  const percent = items.length ? Math.round((done / items.length) * 100) : 0;

  doneCount.textContent = done;
  remainingCount.textContent = remaining;
  progressPercent.textContent = `${percent}%`;
}

function createItemFromForm(formData) {
  const timing = formData.get("timing");
  const imageUrl = formData.get("image").trim();
  return {
    id: `custom-${Date.now()}`,
    timing,
    title: formData.get("title").trim(),
    product: formData.get("product").trim(),
    description: formData.get("description").trim(),
    url: formData.get("url").trim(),
    image: imageUrl || (timing === "today" ? stockImages.clean : stockImages.default),
    done: false
  };
}

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = createItemFromForm(new FormData(addForm));
  items.push(item);
  saveItems();
  addForm.reset();
  render();
  document.querySelector(`#${item.timing}`).scrollIntoView({ behavior: "smooth", block: "start" });
});

resetChecks.addEventListener("click", () => {
  items = items.map((item) => ({ ...item, done: false }));
  saveItems();
  render();
});

render();
