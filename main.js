var cards = [
  {
    icon: "fa-regular fa-star",
    header: "الأفضل مشورة",
    content:
      "بالإضافة إلي استقلاليتنا في دراية ,فقد طورنا العديد من الآليات الحصرية التي تساعد المستثمر علي تكوين محافظ متنوعة وعلي انتقاء المنتجات الأفضل",
  },
  {
    icon: "fa-regular fa-face-smile",
    header: "اﻟﺄﻛﺜﺮ راﺣﺔ",
    content:
      "لن تحتاج إلى فتح حسابات متعددة؛ أو حفظ أسماء دخول مختلفة لأن دراية تتيح لك الاستثمار في كافة المنتجات الاستثمارية من مكان واحد، بل أصبح بإمكانك متابعة كل استثماراتك وإدارتها عبر موقع واحد وحساب واحد.",
  },
  {
    icon: "fa-solid fa-layer-group",
    header: "الأكثر تنويعاً",
    content:
      "تمكنك دراية من الاستثمار في أكثر من 60 منتج استثماري من 10 مدراء مختلفين. هذه المنتجات تستثمر في كافة الفئات الاستثمارية (كالأسهم، والصكوك، والمرابحة...إلخ) والأسواق كما يمكنك التداول في ما يزيد عن 1,200 من صناديق المؤشرات المتداولة ETF",
  },
  {
    icon: "fa-regular fa-dollar-sign",
    header: "وبلا تكلفة إضافية",
    content:
      "كافة المنتجات الاستثمارية متاحة بنفس التكلفةالمتاحة عند الاستثمار مع الجهة الاستثمارية مباشرة (اي بدون أي رسوم إضافية).",
  },
  {
    icon: "fa-solid fa-arrow-trend-up",
    header: "الأكثر شفافية",
    content:
      "أصبح من السهل عليك المقارنة بين المنتجات التي تقدمها دراية من خلال حساب موحد بشكل شفاف لانتقاء الأفضل من بينها.",
  },
  {
    icon: "fa-regular fa-thumbs-up",
    header: "الأكثر استقلالية",
    content:
      "دراية تركز على جمع كافة المنتجات الاستثمارية تحت سقف واحد بدلأ من التركيز على بيع منتجات بعينها، الأمر الذي يعطيها قدر أكبر من الاستقلالية والحيادية في تعاملها ومشورتها.",
  },
];
charlimit = 120;
paragraphlimit = 300;
const wrapper = document.getElementById("features-wrapper");

for (let card of cards) {
  const cardElement = document.createElement("div");
  const cardCol = document.createElement("div");
  cardCol.classList.add("col-12", "col-sm-4");
  cardElement.classList.add("feature-card");
  const iconWrapper = document.createElement("div");
  const iconElement = document.createElement("i");
  iconElement.className = card.icon;
  iconWrapper.append(iconElement);
  const headerElement = document.createElement("h1");
  headerElement.innerText = card.header;
  const contentElement = document.createElement("p");
  contentElement.innerText = card.content;
  cardElement.append(iconWrapper, headerElement, contentElement);

  const cardButton = document.createElement("button");
  cardButton.innerText = "إقرأ المزيد";
  cardButton.classList.add("card-button", "text-white", "border-0", "rounded");

  if (card.content.length > charlimit) {
    cardElement.append(cardButton);
    contentElement.innerText = card.content.slice(0, charlimit);
  }
  const popup = document.createElement("div");
  popup.classList.add("popup", "d-none");
  const closeButton = document.createElement("button");
  closeButton.setAttribute = ("id", "closeButton");
  const popupContent = document.createElement("div");
  popupContent.classList.add("d-flex", "gap-4", "mt-4", "mb-3");
  const popuptitle = card.header;
  closeButton.innerText = "X";
  popupContent.append(closeButton, popuptitle);
  popup.append(popupContent, card.content);

  cardButton.onclick = function () {
    popup.classList.remove("d-none");
    document.body.classList.add("scroll-lock");
  };
  closeButton.onclick = function () {
    popup.classList.add("d-none");
    document.body.classList.remove("scroll-lock");
  };
  cardCol.append(cardElement);
  wrapper.append(cardCol, popup);
}
const pageContent = document.getElementById("page-content");
if (pageContent.innerText.length > paragraphlimit) {
  pageContent.innerText =
    pageContent.innerText.slice(0, paragraphlimit) + "........";
}

const greenSwitchBtn = document.getElementById("green-switch");
greenSwitchBtn.onclick = function () {
  document.body.classList.add("green-theme");
};
const purpleSwitchBtn = document.getElementById("purple-switch");
purpleSwitchBtn.onclick = function () {
  document.body.classList.remove("green-theme");
};
