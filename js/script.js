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

const calculateBtn = document.querySelector("#calculateBtn");

if (calculateBtn) {
  calculateBtn.addEventListener("click", () => {
    const pointsInput = document.querySelector("#points");
    const transportSelect = document.querySelector("#transport");

    const creditResult = document.querySelector("#creditResult");
    const ticketsResult = document.querySelector("#ticketsResult");
    const impactResult = document.querySelector("#impactResult");

    const points = Number(pointsInput.value);
    const ticketPrice = Number(transportSelect.value);
    const transportName = transportSelect.options[transportSelect.selectedIndex].text;

     if (!points || points < 100) {
      alert("Informe uma quantidade válida de pontos.");
      pointsInput.focus();
      return;
    }

    const credit = points / 100;
    const tickets = Math.floor(credit / ticketPrice);
    const impact = tickets * 0.35; 

    const formattedCredit = credit.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });

    creditResult.textContent = formattedCredit;
    ticketsResult.textContent = tickets;
    impactResult.textContent = `${impact.toFixed(1).replace(".", ",")} kg de CO₂ evitados`;

    document.querySelectorAll(".result-card").forEach((card) => {
      card.classList.remove("result-updated");

      setTimeout(() => {
        card.classList.add("result-updated");
      }, 10);
    });

    localStorage.setItem("movegreenCredit", formattedCredit);
    localStorage.setItem("movegreenTickets", tickets);
    localStorage.setItem("movegreenImpact", `${impact.toFixed(1).replace(".", ",")} kg de CO₂ evitados`);
    localStorage.setItem("movegreenTransport", transportName);
    localStorage.setItem("movegreenPoints", points);
  });
}

const validateVoucher = document.querySelector("#validateVoucher");

if (validateVoucher) {
  validateVoucher.addEventListener("click", () => {
    const voucherMessage = document.querySelector("#voucherMessage");
    const voucherTicket = document.querySelector(".voucher-ticket");

     voucherTicket.classList.add("voucher-validado");

    voucherMessage.textContent = "Voucher validado com sucesso. Benefício liberado para embarque.";
    voucherMessage.style.color = "#1f8a5b";

    validateVoucher.textContent = "Voucher validado";
    validateVoucher.disabled = true;
    validateVoucher.style.opacity = "0.85";
    validateVoucher.style.cursor = "not-allowed";
  });
}