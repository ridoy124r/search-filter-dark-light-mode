const users = [
  {
    name: "Sheikh Ridoy",
    pic: "https://static.vecteezy.com/system/resources/previews/045/092/763/non_2x/successful-professional-business-man-with-crossed-arms-flat-illustration-on-white-background-free-vector.jpg",
    bio: "silent chaos in a loud world | not for everyone",
  },
  {
    name: "Sheikh Shahin",
    pic: "https://img.freepik.com/premium-vector/bearded-smiling-man-with-arms-crossed_165429-132.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "main character energy | coffee > everything",
  },
  {
    name: "Shamim",
    pic: "https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg",
    bio: "dreaming in code and sunsets | peace over perfection",
  },
  {
    name: "Isha",
    pic: "https://img.freepik.com/free-vector/woman-with-long-brown-hair_1308-175659.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "sarcasm is my cardio | soul of an artist",
  },
  {
    name: "Shamim Babu",
    pic: "https://static.vecteezy.com/system/resources/previews/045/092/763/non_2x/successful-professional-business-man-with-crossed-arms-flat-illustration-on-white-background-free-vector.jpg",
    bio: "building dreams | chai-powered mind",
  },
  {
    name: "Md Rabbi",
    pic: "https://t3.ftcdn.net/jpg/05/72/64/42/360_F_572644252_XNOHOOlknDnZdLoJjpusEZt8pjwJplZ4.jpg",
    bio: "lost between books and the moonlight",
  },
  {
    name: "Adiva",
    pic: "https://img.freepik.com/free-vector/woman-with-long-brown-hair_1308-175659.jpg?semt=ais_hybrid&w=740&q=80",
    bio: "minimalist | deep thinker | music = therapy",
  },
];

// DOM elements
const input = document.querySelector("input");
const container = document.querySelector(".card-container");

// Function to create user card
function createUserCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = user.pic;
  img.className = "bg-img";

  const blur = document.createElement("div");
  blur.className = "blurred-layer";
  blur.style.backgroundImage = `url('${user.pic}')`;

  const content = document.createElement("div");
  content.className = "content";

  const h3 = document.createElement("h3");
  h3.textContent = user.name;

  const p = document.createElement("p");
  p.textContent = user.bio;

  content.appendChild(h3);
  content.appendChild(p);
  card.appendChild(blur);
  card.appendChild(img);
  card.appendChild(content);

  return card;
}

// Render all users
function renderUsers(list) {
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = `<p class="text-gray-400 text-lg">No matching profiles found.</p>`;
    return;
  }
  list.forEach((user) => container.appendChild(createUserCard(user)));
}

// Initial render
renderUsers(users);

// Real-time search
input.addEventListener("input", (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = users.filter(
    (user) =>
      user.name.toLowerCase().includes(term) ||
      user.bio.toLowerCase().includes(term)
  );
  renderUsers(filtered);
});

// ================================
// 🌙 THEME TOGGLE LOGIC
// ================================

// Elements
const themeBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load preference or system default
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply theme on load
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  body.classList.add("dark-mode");
  themeBtn.textContent = "☀️ Light Mode";
} else {
  body.classList.remove("dark-mode");
  themeBtn.textContent = "🌙 Dark Mode";
}

// Toggle manually
themeBtn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark-mode");

  themeBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
