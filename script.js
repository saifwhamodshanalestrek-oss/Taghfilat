// بيخلي النجوم تتخزن حتى لو قفلت الموقع
document.querySelectorAll('.card').forEach(card => {
  let id = card.dataset.id;
  let stars = card.querySelectorAll('.stars span');
  let text = card.querySelector('.rate-text');
  let saved = localStorage.getItem('rate-' + id);

  function paint(n){
    stars.forEach((s, i) => {
      if(i < n) s.classList.add('filled');
      else s.classList.remove('filled');
    });
    text.textContent = n > 0 ? `تقييمك: ${n} / 5 ⭐` : 'قيّم التغفيلة دي';
  }

  if(saved) paint(parseInt(saved));

  stars.forEach((s, i) => {
    s.onclick = () => {
      let val = i + 1;
      localStorage.setItem('rate-' + id, val);
      paint(val);
    };
  });
});