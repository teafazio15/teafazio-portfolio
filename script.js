(() => {
  const dialog = document.querySelector('.lightbox');
  const image = document.getElementById('viewer-image');
  const caption = document.getElementById('viewer-caption');
  let previousFocus;
  if (!dialog || typeof dialog.showModal !== 'function') return;
  document.querySelectorAll('.image-link').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const source = link.querySelector('img');
      previousFocus = link;
      image.src = link.href;
      image.alt = source.alt;
      caption.textContent = link.closest('figure').querySelector('figcaption')?.textContent || source.alt;
      dialog.showModal();
      document.body.classList.add('viewer-open');
    });
  });
  document.querySelector('.close-viewer').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('viewer-open');
    previousFocus?.focus({preventScroll:true});
  });
})();
