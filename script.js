document.addEventListener("DOMContentLoaded", function () {
  
  // Мобильное меню (бургер)
  const burgerBtn = document.getElementById("burgerBtn");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
      });
    });
  }

  // Фильтрация меню
  const filterBtns = document.querySelectorAll(".filter-btn");
  const menuCards = document.querySelectorAll(".menu-card");

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });

      this.classList.add("active");

      const category = this.getAttribute("data-category");

      menuCards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");

        if (category === "all" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Валидация формы бронирования
  const bookingForm = document.getElementById("bookingForm");
  const formError = document.getElementById("formError");

  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = document.getElementById("userName").value.trim();
      const phoneInput = document.getElementById("userPhone").value.trim();

      if (nameInput === "") {
        formError.innerText = "Будь ласка, вкажіть ваше ім'я.";
        return;
      }

      if (phoneInput === "" || phoneInput.length < 10) {
        formError.innerText = "Вкажіть коректний номер телефону.";
        return;
      }

      formError.innerText = "";
      alert("Дякуємо, " + nameInput + "! Ваше бронювання успішно прийнято.");
      bookingForm.reset();
    });
  }

});