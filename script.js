const phoneNumber = "16155895995";

const siteHeader = document.querySelector("#siteHeader");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#siteNav");
const quoteForm = document.querySelector("#quoteForm");
const smsPreview = document.querySelector("#smsPreview");
const formError = document.querySelector("#formError");
const mailtoFallback = document.querySelector("#mailtoFallback");

function updateHeader() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
}

function closeMenu() {
  siteNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.setAttribute("aria-label", "Open navigation");
}

function buildSmsBody() {
  const data = new FormData(quoteForm);
  const contactMethod = data.get("contactMethod") || "Text";
  const vehicle = [data.get("year"), data.get("make"), data.get("model")]
    .map((value) => String(value || "").trim())
    .filter(Boolean)
    .join(" ");

  return [
    "Hello, I need a repair quote.",
    "",
    `Name: ${String(data.get("name") || "").trim()}`,
    `Phone: ${String(data.get("phone") || "").trim()}`,
    `Vehicle: ${vehicle}`,
    `Service Needed: ${String(data.get("service") || "").trim()}`,
    `Problem: ${String(data.get("problem") || "").trim()}`,
    `Preferred Contact: ${contactMethod}`,
  ].join("\n");
}

function updatePreview() {
  if (!quoteForm) return;
  const body = buildSmsBody();
  smsPreview.textContent = body;
  mailtoFallback.href = `mailto:?subject=${encodeURIComponent("Repair Quote Request")}&body=${encodeURIComponent(body)}`;
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.pushState(null, "", link.getAttribute("href"));
  });
});

quoteForm.addEventListener("input", updatePreview);
quoteForm.addEventListener("change", updatePreview);

quoteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formError.textContent = "";

  if (!quoteForm.checkValidity()) {
    formError.textContent = "Please fill out your name, phone number, service needed, and problem description.";
    quoteForm.reportValidity();
    return;
  }

  const body = buildSmsBody();
  const smsHref = `sms:${phoneNumber}?body=${encodeURIComponent(body)}`;
  mailtoFallback.href = `mailto:?subject=${encodeURIComponent("Repair Quote Request")}&body=${encodeURIComponent(body)}`;
  window.location.href = smsHref;
});

updatePreview();
