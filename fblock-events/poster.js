const PRESETS = {
  "old-school-arena": {
    title: "The Old School Arena",
    slogan: "Khel wahi. Josh naya.",
    vernacular: [
      "HI: खेल वही। जोश नया।",
      "TA: அதே விளையாட்டு. புதிய உற்சாகம்.",
      "TE: అదే ఆట. కొత్త జోష్.",
      "ML: അതേ കളി. പുതിയ ജോഷ്.",
      "KN: ಅದೇ ಆಟ. ಹೊಸ ಜೋಷ್.",
      "BN: সেই খেলা। নতুন জোশ।",
      "EN: Same games. New energy."
    ].join("\n"),
    date: "26 August 2026",
    time: "10:00 AM to 12:00 PM",
    venue: "F Block Ground",
    audience: "Open to All Boys Hostels",
    entry: "FREE ENTRY",
    activities: [
      "🏃 Kho-Kho",
      "🪢 Tug-of-War",
      "🪨 Lagori (Pitthu)",
      "🍋 Lemon & Spoon Race",
      "🎒 Sack Race",
      "👫 Three-Legged Race"
    ],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Old-School Best — SEE YOU THERE!",
    organizer: "Organized by — The Old School Arena Core Team · F Block Hostel"
  },
  onam: {
    title: "Onaverse",
    slogan: "Where Tradition Meets Tomorrow",
    vernacular: "ഓണാശംസകൾ — F Block Onam",
    date: "26 August",
    time: "7:00 AM to 3:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: [
      "🌼 Pookalam",
      "🏆 Games & Challenges",
      "🪢 Tug of War",
      "🧠 Quiz",
      "😜 Tongue Twisters",
      "🎵 Music & Dance",
      "🎁 Sweet Prizes & More"
    ],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Onam Best — SEE YOU THERE!",
    organizer: "Organized by — Onaverse Core Team · F Block Hostel"
  },
  diwali: {
    title: "Deepverse",
    slogan: "Light Up the Block",
    vernacular: "शुभ दीपावली — F Block",
    date: "20 October",
    time: "5:30 PM to 9:30 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🪔 Diyas", "🪷 Rangoli", "✨ Safe spark zone", "🍬 Sweets", "🎵 Music", "🎮 Games", "📸 Photos"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Ethnic Best — SEE YOU THERE!",
    organizer: "Organized by — Deepverse Core Team · F Block Hostel"
  },
  holi: {
    title: "Rangverse",
    slogan: "Color the Corridor",
    vernacular: "होली है — F Block",
    date: "3 March",
    time: "8:00 AM to 1:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🎨 Color play", "🥁 Dhol", "🥛 Thandai", "🎮 Games", "🎵 Music", "📸 Photo booth"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Whitest White — SEE YOU THERE!",
    organizer: "Organized by — Rangverse Core Team · F Block Hostel"
  },
  pongal: {
    title: "Harvest @ F",
    slogan: "Sweet Start, Strong Block",
    vernacular: "இனிய பொங்கல் நல்வாழ்த்துக்கள்",
    date: "15 January",
    time: "7:00 AM to 1:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🍲 Pongal pot", "🌸 Kolam", "🎯 Folk games", "🎵 Music", "🍃 Feast"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Pongal Best — SEE YOU THERE!",
    organizer: "Organized by — Harvest Core Team · F Block Hostel"
  },
  eid: {
    title: "Eid @ F",
    slogan: "Together at the Table",
    vernacular: "Eid Mubarak",
    date: "TBA",
    time: "6:00 PM to 9:30 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🍽️ Feast", "🎮 Games", "📸 Photos", "🎵 Music", "🎁 Gifting"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Come Hungry, Leave Happy — SEE YOU THERE!",
    organizer: "Organized by — Eid Core Team · F Block Hostel"
  },
  christmas: {
    title: "F-Block Noel",
    slogan: "Hostel, Holly & Lights",
    vernacular: "Merry Christmas, F Block",
    date: "24 December",
    time: "7:00 PM to 10:30 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🎁 Secret Santa", "🎶 Carols", "☕ Cocoa", "🎮 Games", "🎬 Movie"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Noel Best — SEE YOU THERE!",
    organizer: "Organized by — Noel Core Team · F Block Hostel"
  },
  freshers: {
    title: "Freshers @ F",
    slogan: "New Faces, Same Block",
    vernacular: "Welcome to the corridor",
    date: "TBA",
    time: "6:00 PM to 10:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["👋 Icebreakers", "🎤 Talent", "🎧 DJ", "🎮 Games", "📸 Selfie wall"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your First-Impressions Best — SEE YOU THERE!",
    organizer: "Organized by — Freshers Core Team · F Block Hostel"
  },
  farewell: {
    title: "Farewell F",
    slogan: "One Last Corridor Walk",
    vernacular: "Thank you, seniors",
    date: "TBA",
    time: "5:30 PM to 9:30 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🗣️ Speeches", "🖼️ Memory wall", "🎤 Performances", "🍽️ Dinner"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Farewell Best — SEE YOU THERE!",
    organizer: "Organized by — Farewell Core Team · F Block Hostel"
  },
  "hostel-day": {
    title: "F Block Day",
    slogan: "Home Away From Home",
    vernacular: "Our block. Our day.",
    date: "TBA",
    time: "10:00 AM to 9:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🎤 Open mic", "🏅 Sports", "🍱 Food stalls", "🎧 DJ", "🏆 Awards"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Block Best — SEE YOU THERE!",
    organizer: "Organized by — F Block Day Core Team · F Block Hostel"
  },
  sports: {
    title: "F Block Sports Meet",
    slogan: "Play Hard, Block Proud",
    vernacular: "Jerseys on.",
    date: "TBA",
    time: "6:30 AM to 12:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🏏 Cricket", "⚽ Football", "🪢 Tug of War", "🏃 Relays", "🏆 Prizes"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Jersey Best — SEE YOU THERE!",
    organizer: "Organized by — Sports Core Team · F Block Hostel"
  },
  tech: {
    title: "Hack @ F",
    slogan: "Compile. Connect. Celebrate.",
    vernacular: "Laptops + hostel Wi-Fi + snacks",
    date: "TBA",
    time: "2:00 PM to 10:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["💻 Mini-hack", "🖥️ Demos", "🧠 Quiz", "🍕 Pizza"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Bring Your Laptop — SEE YOU THERE!",
    organizer: "Organized by — Hack @ F Core Team · F Block Hostel"
  },
  quiz: {
    title: "F Block Quiz Night",
    slogan: "Know It All? Prove It.",
    vernacular: "Buzzer ready.",
    date: "TBA",
    time: "8:00 PM to 10:30 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["📚 Rounds", "🔔 Buzzer", "🙋 Audience poll", "🎁 Prizes"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Bring Your Brain — SEE YOU THERE!",
    organizer: "Organized by — Quiz Core Team · F Block Hostel"
  },
  music: {
    title: "F Block Unplugged",
    slogan: "From Corridor to Chorus",
    vernacular: "Open mic + DJ",
    date: "TBA",
    time: "8:00 PM to 11:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🎤 Open mic", "💃 Dance", "🎧 DJ", "📝 Requests"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— Wear Your Night Best — SEE YOU THERE!",
    organizer: "Organized by — Unplugged Core Team · F Block Hostel"
  },
  "hostel-generic": {
    title: "Block Hangout",
    slogan: "Come Downstairs",
    vernacular: "F Block Hostel",
    date: "TBA",
    time: "6:00 PM to 9:00 PM",
    venue: "F Block Ground Floor",
    audience: "Exclusive to F Block residents",
    entry: "FREE ENTRY",
    activities: ["🎮 Games", "🎵 Music", "🍱 Food", "🎁 Prizes"],
    surprise: "+ Some Special Surprises + WE'RE NOT TELLING YOU YET! 😉",
    cta: "— See You Downstairs — SEE YOU THERE!",
    organizer: "Organized by — F Block Core Team · F Block Hostel"
  }
};

const TYPE_LABELS = {
  "old-school-arena": "The Old School Arena",
  onam: "Onam",
  diwali: "Diwali",
  holi: "Holi",
  pongal: "Pongal",
  eid: "Eid",
  christmas: "Christmas",
  freshers: "Freshers",
  farewell: "Farewell",
  "hostel-day": "Hostel Day",
  sports: "Sports Meet",
  tech: "Tech / Hack night",
  quiz: "Quiz night",
  music: "Music / DJ",
  "hostel-generic": "Generic hostel event"
};

const fields = ["title", "slogan", "vernacular", "date", "time", "venue", "audience", "entry", "surprise", "cta", "organizer"];
const typeEl = document.getElementById("type");
const poster = document.getElementById("poster");
const actsEl = document.getElementById("p-acts");
const activitiesEl = document.getElementById("activities");

Object.keys(PRESETS).forEach((key) => {
  const opt = document.createElement("option");
  opt.value = key;
  opt.textContent = TYPE_LABELS[key];
  typeEl.appendChild(opt);
});

function parseActivities(text) {
  return text.split("\n").map((line) => line.trim()).filter(Boolean);
}

function renderQuotes(text) {
  const wrap = document.getElementById("p-quotes");
  wrap.innerHTML = "";
  String(text || "").split("\n").map((line) => line.trim()).filter(Boolean).forEach((line) => {
    const span = document.createElement("span");
    const match = line.match(/^([^:]{1,12}):\s*(.+)$/);
    if (match) {
      const lang = document.createElement("b");
      lang.textContent = match[1];
      span.appendChild(lang);
      span.appendChild(document.createTextNode(match[2]));
    } else {
      span.textContent = line;
    }
    wrap.appendChild(span);
  });
}

function renderActivities(list) {
  actsEl.innerHTML = "";
  list.forEach((line) => {
    const li = document.createElement("li");
    const parts = line.match(/^(\p{Extended_Pictographic}|\d\uFE0F?\u20E3)\s*(.*)$/u);
    const ico = document.createElement("div");
    ico.className = "ico";
    ico.textContent = parts ? parts[1] : "✦";
    li.appendChild(ico);
    li.appendChild(document.createTextNode(parts ? parts[2] : line));
    actsEl.appendChild(li);
  });
}

function applyPreset(key, fillForm) {
  const data = PRESETS[key];
  poster.className = "poster theme-" + key;
  if (fillForm) {
    fields.forEach((id) => { document.getElementById(id).value = data[id]; });
    activitiesEl.value = data.activities.join("\n");
  }
  paint();
}

function paint() {
  const type = typeEl.value;
  poster.className = "poster theme-" + type;
  document.getElementById("p-title").textContent = document.getElementById("title").value;
  document.getElementById("p-title").classList.toggle("long", document.getElementById("title").value.length > 16);
  document.getElementById("p-slogan").textContent = document.getElementById("slogan").value;
  renderQuotes(document.getElementById("vernacular").value);
  document.getElementById("p-date").textContent = document.getElementById("date").value;
  document.getElementById("p-time").textContent = document.getElementById("time").value;
  document.getElementById("p-venue").textContent = document.getElementById("venue").value;
  document.getElementById("p-audience").textContent = document.getElementById("audience").value;
  document.getElementById("p-entry").textContent = document.getElementById("entry").value;
  document.getElementById("p-surprise").textContent = document.getElementById("surprise").value;
  document.getElementById("p-cta").textContent = document.getElementById("cta").value;
  document.getElementById("p-credits").textContent = document.getElementById("organizer").value;
  renderActivities(parseActivities(activitiesEl.value));
}

function whatsappCopy() {
  const acts = parseActivities(activitiesEl.value).map((a) => "• " + a).join("\n");
  const text = [
    "F BLOCK HOSTEL PRESENTS",
    document.getElementById("title").value + "  |  " + document.getElementById("slogan").value,
    document.getElementById("vernacular").value.replace(/\n/g, "  ·  "),
    "",
    "📅 " + document.getElementById("date").value,
    "🕖 " + document.getElementById("time").value,
    "📍 " + document.getElementById("venue").value,
    "👥 " + document.getElementById("audience").value,
    "🎟️ " + document.getElementById("entry").value,
    "",
    "What's waiting:",
    acts,
    document.getElementById("surprise").value,
    "",
    document.getElementById("cta").value,
    "See you downstairs.",
    "— " + document.getElementById("organizer").value
  ].join("\n");
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById("wa-btn").textContent = "Copied";
    setTimeout(() => { document.getElementById("wa-btn").textContent = "Copy WhatsApp"; }, 1400);
  });
}

typeEl.addEventListener("change", () => applyPreset(typeEl.value, true));
fields.forEach((id) => document.getElementById(id).addEventListener("input", paint));
activitiesEl.addEventListener("input", paint);
document.getElementById("print-btn").addEventListener("click", () => window.print());
document.getElementById("wa-btn").addEventListener("click", whatsappCopy);

applyPreset("old-school-arena", true);
