document.addEventListener('DOMContentLoaded', function () {
  const faqSection = document.querySelector('.faq');

  faqSection.addEventListener('click', function (event) {
    const clickedElement = event.target;
    const titleElement = clickedElement.closest('.title');

    if (titleElement) {
      const faqCard = titleElement.closest('.faq-card');
      const textSection = faqCard.querySelector('.text');
      const titleSection = titleElement;
      const openButton = faqCard.querySelector('.open-btn');
      const closeButton = faqCard.querySelector('.close-btn');

      textSection.classList.toggle('show-text');
      titleSection.classList.toggle('open-corners');
      openButton.classList.toggle('show');
      closeButton.classList.toggle('show');
    }
  });
});
