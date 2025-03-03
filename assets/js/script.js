document.addEventListener("DOMContentLoaded", function() {
    const emailUser = "pan1403sharma";
    const emailDomain = "gmail.com";
    const email = `${emailUser}@${emailDomain}`;

    const emailLink = document.getElementById("email-link");
    const emailPlaceholder = document.getElementById("email-placeholder");

    if (emailLink) {
        emailLink.setAttribute("href", `mailto:${email}`);
        emailLink.textContent = "Say Hello";
    }

    if (emailPlaceholder) {
        emailPlaceholder.textContent = email;
    }
});
