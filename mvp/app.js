// Дані сценаріїв (скорочена версія для MVP)
const situations = [
  {
    id: "01",
    title: "Зупинка та перевірка документів",
    rights: [
      "Знати підставу зупинки і вимоги документів",
      "Вимагати, щоб поліцейський назвав прізвище, посаду, звання",
      "Вимагати пред’явлення службового посвідчення",
      "Фіксувати номер жетона, дані посвідчення, номер авто",
      "Не виконувати незаконні вимоги"
    ],
    duties: [
      "Назвати прізвище, посаду, спеціальне звання (ст. 18)",
      "Пред’явити службове посвідчення на вимогу",
      "Мати жетон на однострої і не перешкоджати його фіксації (ст. 20)"
    ],
    record: [
      "Номер жетона",
      "ПІБ, посада, звання",
      "Номер службового авто",
      "Час і місце",
      "Підстава, яку назвав поліцейський",
      "Свідки + відео/фото"
    ],
    law: "Закон «Про Національну поліцію» — ст. 18, 20, 32"
  },
  {
    id: "02",
    title: "Вимога ідентифікації поліцейського",
    rights: [
      "Вимагати назву прізвища, посади та звання",
      "Вимагати пред’явлення службового посвідчення",
      "Фіксувати жетон і дані посвідчення (фото/відео)"
    ],
    duties: [
      "Обов’язок назватися і показати посвідчення (ст. 18 ч. 3)",
      "Жетон має бути видимим, заборонено його приховувати (ст. 20)"
    ],
    record: [
      "Номер жетона (обов’язково)",
      "ПІБ як назвав",
      "Посада і звання",
      "Чи дав ознайомитися з посвідченням"
    ],
    law: "Закон «Про Національну поліцію» — ст. 18, 20"
  },
  {
    id: "03",
    title: "Доставлення / затримання",
    rights: [
      "Знати підстави затримання",
      "Отримати роз’яснення прав",
      "Вимагати ідентифікації всіх поліцейських",
      "Повідомити родичів / адвоката"
    ],
    duties: [
      "Ідентифікуватися",
      "Діяти лише на підставі закону",
      "Скласти протокол у передбачених випадках"
    ],
    record: [
      "Номери жетонів усіх поліцейських",
      "Хто прийняв рішення",
      "Час і місце",
      "Чи роз’яснили права"
    ],
    law: "Закон «Про Національну поліцію» + КПК України"
  },
  {
    id: "04",
    title: "Відмова прийняти заяву",
    rights: [
      "Подати заяву про злочин",
      "Вимагати реєстрації заяви",
      "Отримати документ про прийняття заяви",
      "Оскаржити відмову"
    ],
    duties: [
      "Приймати та реєструвати заяви про кримінальні правопорушення",
      "Ідентифікуватися"
    ],
    record: [
      "Дані поліцейського (жетон, ПІБ)",
      "Час і місце спроби подати заяву",
      "Причина відмови, яку назвали",
      "Свідки / відео"
    ],
    law: "КПК України + Закон «Про Національну поліцію» + Закон «Про звернення громадян»"
  },
  {
    id: "05",
    title: "Застосування сили або спецзасобів",
    rights: [
      "Знати підставу застосування сили",
      "Вимагати ідентифікації",
      "Фіксувати дії",
      "Отримати медичну допомогу при ушкодженнях",
      "Оскаржити законність і пропорційність"
    ],
    duties: [
      "Застосовувати силу лише в межах закону",
      "Попередити (якщо можливо)",
      "Ідентифікуватися",
      "Надати допомогу постраждалому"
    ],
    record: [
      "Номери жетонів",
      "Хто застосовував силу",
      "Чи було попередження",
      "Які засоби",
      "Тілесні ушкодження (медична фіксація!)"
    ],
    law: "Закон «Про Національну поліцію» (заходи примусу) + Конституція ст. 28"
  },
  {
    id: "06",
    title: "Особистий огляд / огляд речей",
    rights: [
      "Знати підстави огляду",
      "Вимагати ідентифікації",
      "Присутність понятих (у передбачених випадках)",
      "Отримати копію протоколу"
    ],
    duties: [
      "Діяти лише на законних підставах",
      "Ідентифікуватися",
      "Дотримуватися процедури"
    ],
    record: [
      "Номер жетона",
      "Підстава огляду",
      "Чи були поняті",
      "Чи складали протокол"
    ],
    law: "Закон «Про Національну поліцію» + КПК України"
  },
  {
    id: "07",
    title: "Грубість, образа, погроза",
    rights: [
      "На гідне ставлення",
      "Вимагати ідентифікації",
      "Фіксувати поведінку",
      "Подати скаргу на порушення етики"
    ],
    duties: [
      "Дотримуватися Правил етичної поведінки",
      "Ідентифікуватися",
      "Не допускати образ і грубощів"
    ],
    record: [
      "Номер жетона + ПІБ",
      "Точні слова / дії (краще на відео)",
      "Час, місце, свідки"
    ],
    law: "Закон «Про Національну поліцію» + Правила етичної поведінки поліцейських"
  }
];

let currentSituation = null;

// Ініціалізація
document.addEventListener("DOMContentLoaded", () => {
  renderSituations();
  document.getElementById("btn-to-form").addEventListener("click", showForm);
  document.getElementById("btn-generate").addEventListener("click", generateComplaint);
  document.getElementById("btn-copy").addEventListener("click", copyComplaint);
  document.getElementById("btn-restart").addEventListener("click", restart);

  // Поточна дата/час за замовчуванням
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  document.getElementById("datetime").value = now.toISOString().slice(0, 16);
});

function renderSituations() {
  const list = document.getElementById("situation-list");
  list.innerHTML = "";
  situations.forEach(s => {
    const btn = document.createElement("button");
    btn.className = "situation-btn";
    btn.textContent = s.title;
    btn.onclick = () => selectSituation(s);
    list.appendChild(btn);
  });
}

function selectSituation(s) {
  currentSituation = s;
  document.getElementById("step-situation").classList.add("hidden");
  
  const info = document.getElementById("step-info");
  info.classList.remove("hidden");
  document.getElementById("info-title").textContent = s.title;

  let html = "";
  html += `<div class="info-block"><h3>Ваші права</h3><ul>${s.rights.map(r => `<li>${r}</li>`).join("")}</ul></div>`;
  html += `<div class="info-block"><h3>Обов’язки поліцейського</h3><ul>${s.duties.map(d => `<li>${d}</li>`).join("")}</ul></div>`;
  html += `<div class="info-block"><h3>Що обов’язково зафіксувати</h3><ul>${s.record.map(r => `<li>${r}</li>`).join("")}</ul></div>`;
  html += `<div class="info-block"><h3>Нормативна база</h3><p>${s.law}</p></div>`;

  document.getElementById("info-content").innerHTML = html;
}

function showForm() {
  document.getElementById("step-info").classList.add("hidden");
  document.getElementById("step-form").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function generateComplaint() {
  const badge = document.getElementById("badge").value.trim();
  if (!badge) {
    alert("Вкажіть номер жетона — це ключове поле.");
    return;
  }

  const name = document.getElementById("fullname").value.trim() || "не назвав себе повністю";
  const rank = document.getElementById("rank").value.trim() || "не вказано";
  const car = document.getElementById("car").value.trim() || "не зафіксовано";
  const unit = document.getElementById("unit").value.trim() || "невідомо";
  const datetime = document.getElementById("datetime").value;
  const place = document.getElementById("place").value.trim() || "не вказано";
  const description = document.getElementById("description").value.trim() || currentSituation.title;
  const witnesses = document.getElementById("witnesses").value.trim() || "відсутні / не зафіксовані";

  const dtFormatted = datetime ? new Date(datetime).toLocaleString("uk-UA") : "не вказано";

  const text = `СКАРГА
на дії працівника поліції

Я, громадянин(ка) України, повідомляю про порушення з боку працівника Національної поліції.

Дата і час події: ${dtFormatted}
Місце події: ${place}

Дані поліцейського:
- Номер жетона: ${badge}
- ПІБ: ${name}
- Посада / звання: ${rank}
- Номер службового авто: ${car}
- Підрозділ: ${unit}

Суть ситуації:
${description}

Ситуація стосується: ${currentSituation.title}

Під час контакту поліцейський був зобов’язаний ідентифікуватися відповідно до статті 18 Закону України «Про Національну поліцію» (назвати прізвище, посаду, спеціальне звання та пред’явити службове посвідчення). Жетон має бути видимим згідно зі статтею 20 того ж Закону.

Свідки: ${witnesses}

Прошу:
1. Провести перевірку викладених фактів.
2. Надати мені письмову відповідь по суті з зазначенням конкретних заходів, які були вжиті.
3. Притягнути винних осіб до відповідальності в разі підтвердження порушень.

Додатки: (за наявності — фото/відео жетона, посвідчення, місця події тощо)

Дата складання скарги: ${new Date().toLocaleDateString("uk-UA")}

________________________
(підпис)`;

  document.getElementById("complaint-text").value = text;
  document.getElementById("step-form").classList.add("hidden");
  document.getElementById("step-complaint").classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function copyComplaint() {
  const text = document.getElementById("complaint-text");
  text.select();
  document.execCommand("copy");
  // Сучасний спосіб
  navigator.clipboard.writeText(text.value).then(() => {
    document.getElementById("copy-status").textContent = "✓ Текст скопійовано";
    setTimeout(() => {
      document.getElementById("copy-status").textContent = "";
    }, 3000);
  });
}

function restart() {
  currentSituation = null;
  document.getElementById("step-complaint").classList.add("hidden");
  document.getElementById("step-form").classList.add("hidden");
  document.getElementById("step-info").classList.add("hidden");
  document.getElementById("step-situation").classList.remove("hidden");
  document.getElementById("id-form").reset();
  const now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
  document.getElementById("datetime").value = now.toISOString().slice(0, 16);
  window.scrollTo({ top: 0, behavior: "smooth" });
}
