import{i as l,j as m,l as o,b as r,k as c,g as p,s as u,S as g,I as h}from"./main-BXhKCHyo.js";l();const f=[{id:"T001",item:"Casio fx-991ES PLUS Calculator",with:"Andrea Reyes",date:"2026-11-10",amount:480,status:"done"},{id:"T002",item:"Anatomy Reviewer Bundle",with:"Grace Ramos",date:"2026-11-08",amount:120,status:"done"},{id:"T003",item:"PE Uniform (Large)",with:"Rafael Cruz",date:"2026-11-12",amount:150,status:"pending"},{id:"T004",item:"Canvas Tote + Bottle",with:"Trina Bautista",date:"2026-11-05",amount:180,status:"done"}],n=document.querySelectorAll(".profile-tab");n.forEach(t=>t.addEventListener("click",()=>{n.forEach(e=>e.setAttribute("aria-selected","false")),t.setAttribute("aria-selected","true"),document.querySelectorAll(".profile-panel").forEach(e=>e.classList.remove("is-active")),document.getElementById(`panel-${t.dataset.tab}`).classList.add("is-active")}));const i=m(),s=document.getElementById("my-listings");i.length?(s.innerHTML=i.map(o).join(""),r(s)):s.innerHTML=`
    <div class="empty-state">
      <h3>Nothing posted yet</h3>
      <p class="font-marker">Your future buyers are waiting — post your first item!</p>
      <a class="btn btn--primary" href="/pages/post-item.html">Post an Item</a>
    </div>`;const y=c(),a=document.getElementById("saved-items"),d=p().filter(t=>y.includes(t.id));d.length?(a.innerHTML=d.map(o).join(""),r(a)):a.innerHTML=`
    <div class="empty-state">
      <h3>No saved items yet</h3>
      <p class="font-marker">Tap the heart on any listing to pin it here.</p>
      <a class="btn btn--accent" href="/pages/marketplace.html">Browse Marketplace</a>
    </div>`;document.getElementById("tx-body").innerHTML=f.map(t=>`
  <tr>
    <td><strong>${t.item}</strong><br><span class="text-muted" style="font-size:.8125rem">with ${t.with}</span></td>
    <td>${t.date}</td>
    <td>₱${t.amount.toLocaleString()}</td>
    <td><span class="tx-status tx-status--${t.status}">${t.status==="done"?"Completed":"Pending"}</span></td>
  </tr>`).join("");document.querySelectorAll(".switch input").forEach(t=>{t.addEventListener("change",()=>{u(t.checked?"Setting turned on.":"Setting turned off.")})});document.getElementById("safety-tips").innerHTML=g.map(t=>`
  <li style="display:flex;gap:8px;align-items:flex-start;padding:8px 0;border-bottom:1px dashed rgba(42,42,42,.2)">
    <span style="color:var(--forest-green)" aria-hidden="true">${h.shield}</span><span style="font-size:.9375rem">${t}</span>
  </li>`).join("");
