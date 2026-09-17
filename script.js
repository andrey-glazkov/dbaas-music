document.querySelectorAll(".track-toggle").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const el=document.getElementById(btn.dataset.target);
    el.classList.toggle("open");
    btn.textContent=el.classList.contains("open")?"TRACKLIST −":"TRACKLIST +";
  });
});