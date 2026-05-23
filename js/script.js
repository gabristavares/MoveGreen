const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");

if (menu && navbar) {
  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-toggle");
  menuButton.setAttribute("aria-label", "Abrir menu");
  menuButton.innerHTML = "☰";

  navbar.insertBefore(menuButton, menu);

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu-open");

    if (menu.classList.contains("menu-open")) {
      menuButton.innerHTML = "×";
    } else {
      menuButton.innerHTML = "☰";
    }
  });
}

const links = document.querySelectorAll(".menu a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach((link) => {
  const linkPage = link.getAttribute("href").split("/").pop();

  link.classList.remove("active");

  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");
    const assunto = document.querySelector("#assunto");
    const mensagem = document.querySelector("#mensagem");

    if (!nome.value.trim() || !email.value.trim() || !assunto.value.trim() || !mensagem.value.trim()) {
      alert("Preencha todos os campos antes de enviar.");
      return;
    }

        if (!email.checkValidity()) {
    alert("Digite um e-mail válido. Exemplo: nome@email.com");
    email.focus();
    return;
    }

    alert("Mensagem enviada com sucesso! Obrigado por entrar em contato com a MoveGreen.");

    contactForm.reset();
  });
}

const primaryButton = document.querySelector(".primary");

if (primaryButton) {
  primaryButton.addEventListener("mouseenter", () => {
    primaryButton.textContent = "Vamos lá!";
  });

  primaryButton.addEventListener("mouseleave", () => {
    primaryButton.textContent = "Conhecer proposta";
  });
}

const phone = document.querySelector(".phone");

if (phone) {
  phone.addEventListener("click", () => {
    phone.classList.toggle("phone-active");
  });
}