const user = {
  name: "Матвій",
  surname: "Гриценко",
  userPhoto: "кот.webp",
  qrQode: "qr-code.svg",
  dreams: [
    { src: "дом.jpg", alt: "дом кота" },
    { src: "машина.jpg ", alt: "машина для кота" },
    { src: "кот на танке.jpg", alt: "танк для кота" },
    { src: "марс.jpg", alt: "кот на марсе" },
  ],
};

// arr це середня місячна платня по рокам
const arr = [
  10.000,
  15.000,
  20.000,
  25.000,
  30.000,
  35.000,
  40.000,
  45.000,
  50.000,
  100.000,
  150.000,
  200.000,
];

const necessaryExpenses = 800;

const todo = [
  { month: "Червень", skill: "JavaScript" },
  { month: "Липень", skill: "Java" },
  { month: "Серпень", skill: "Python" },
  { month: "Вересень", skill: "Самостійність" },
  { month: "Жовтень", skill: "Гнучкість" },
  { month: "Листопад", skill: "Емоційний інтелект" },
  { month: "Грудень", skill: "Креативність" },
  { month: "Січень", skill: "Лідерство" },
  { month: "Лютий", skill: "Нетворкінг" },
  { month: "Березень", skill: "Особистий бренд" },
  { month: "Квітень", skill: "Управління фінансами" },
  { month: "Травень", skill: "Публічні виступи" },
];

export { user, arr, necessaryExpenses, todo };
