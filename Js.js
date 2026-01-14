script.js
document.addEventListener("DOMContentLoaded", function () {
  alert("PortCity Tanıtım Sitesine Hoş Geldiniz");

  const links = document.querySelectorAll(".menu a");

  links.forEach(link => {
    link.addEventListener("mouseover", () => {
      link.style.color = "orange";
    });

    link.addEventListener("mouseout", () => {
      link.style.color = "white";
    });

    link.addEventListener("click", () => {
      links.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  let like = 0;
  const likeBtn = document.getElementById("likeBtn");
  const likeNum = document.getElementById("likeNumber");

  if (likeBtn) {
    likeBtn.addEventListener("click", () => {
      like++;
      likeNum.textContent = like;
    });
  }

  const activities = [
    "Tekne Turu",
    "Dalış Deneyimi",
    "Marina Restoranları",
    "Gün Batımı Yürüyüşü"
  ];

  const list = document.getElementById("activityList");
  if (list) {
    activities.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

  const img = document.getElementById("mainImage");
  if (img) {
    img.addEventListener("click", () => {
      img.classList.toggle("large");
    });
  }

  const services = document.querySelectorAll(".service-item");
  services.forEach(s => {
    const info = s.querySelector(".info");
    s.addEventListener("mouseover", () => {
      info.style.display = "block";
    });
    s.addEventListener("mouseout", () => {
      info.style.display = "none";
    });
  });

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      if (!name.value || !email.value || !message.value) {
        alert("Lütfen tüm alanları doldurun");
      } else {
        alert("Mesajınız başarıyla gönderildi");
        form.reset();
      }
    });
  }
});
