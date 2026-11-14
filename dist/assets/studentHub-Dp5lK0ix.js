import{i as o,B as s,m as i,I as n,s as d,d as l}from"./main-BXhKCHyo.js";o();const c=[...new Set(s.map(e=>e.board))];document.getElementById("board-tabs").innerHTML=["All",...c].map((e,t)=>`<button class="profile-tab" data-board="${e}" ${t===0?'aria-selected="true"':""}>${e}</button>`).join("");const p=document.getElementById("thread-list");function r(e){const t=e==="All"?s:s.filter(a=>a.board===e);p.innerHTML=t.map(a=>`
    <article class="board-thread">
      <span class="avatar" style="background:${a.color}" aria-hidden="true">${a.init}</span>
      <div style="flex:1">
        <h3>${a.pinned?`${n.pin} `:""}${a.title}</h3>
        <p>${a.excerpt}</p>
        <div class="thread-meta">
          <span class="tag tag--brown">${a.board}</span>
          <span>by ${a.author}</span>
          <span>${a.replies} replies</span>
          <span>last reply ${a.last}</span>
        </div>
      </div>
    </article>`).join("")}r("All");document.getElementById("board-tabs").addEventListener("click",e=>{const t=e.target.closest("[data-board]");t&&(document.querySelectorAll("#board-tabs .profile-tab").forEach(a=>a.setAttribute("aria-selected","false")),t.setAttribute("aria-selected","true"),r(t.dataset.board))});document.getElementById("group-grid").innerHTML=i.map(e=>`
  <article class="group-card">
    <h3>${e.name}</h3>
    <p>${e.desc}</p>
    <span class="tag tag--green">${e.tag}</span>
    <span class="members">${e.members} members</span>
    <button class="btn btn--sm btn--success" data-join-group="${e.name}">${n.users} Join group</button>
  </article>`).join("");document.getElementById("group-grid").addEventListener("click",e=>{const t=e.target.closest("[data-join-group]");t&&(t.disabled=!0,t.innerHTML="Joined ✓",d(`You joined ${t.dataset.joinGroup}! Check your profile for updates.`))});document.getElementById("community-posts").innerHTML=l.slice(0,4).map(e=>`
  <article class="pinned-card">
    <h3>${e.title}</h3>
    <p>${e.caption}</p>
    <span class="pin-meta">${e.quote}</span>
  </article>`).join("");
