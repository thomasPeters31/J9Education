// Term 1 / Term 2 tab switcher for the schedule panel: clicking a tab
// clears all active states, then re-activates just the clicked tab
// and its matching .term-content (matched via the data-term id).
document.querySelectorAll('.tab-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.term-content').forEach(c=>c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.term).classList.add('active');
  });
});
