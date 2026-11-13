/* Student Hub: discussion boards, groups, community posts */

import { BOARD_THREADS, STUDENT_GROUPS, SUCCESS_STORIES, ICONS } from './data.js';
import { initSharedChrome, showToast } from './main.js';

initSharedChrome();

/* Boards */
const boards = [...new Set(BOARD_THREADS.map(t => t.board))];
document.getElementById('board-tabs').innerHTML = ['All', ...boards]
    .map((b, i) => `<button class="profile-tab" data-board="${b}" ${i === 0 ? 'aria-selected="true"' : ''}>${b}</button>`).join('');

const threadList = document.getElementById('thread-list');
function renderThreads(board) {
    const items = board === 'All' ? BOARD_THREADS : BOARD_THREADS.filter(t => t.board === board);
    threadList.innerHTML = items.map(t => `
    <article class="board-thread">
      <span class="avatar" style="background:${t.color}" aria-hidden="true">${t.init}</span>
      <div style="flex:1">
        <h3>${t.pinned ? `${ICONS.pin} ` : ''}${t.title}</h3>
        <p>${t.excerpt}</p>
        <div class="thread-meta">
          <span class="tag tag--brown">${t.board}</span>
          <span>by ${t.author}</span>
          <span>${t.replies} replies</span>
          <span>last reply ${t.last}</span>
        </div>
      </div>
    </article>`).join('');
}
renderThreads('All');

document.getElementById('board-tabs').addEventListener('click', (e) => {
    const tab = e.target.closest('[data-board]');
    if (!tab) return;
    document.querySelectorAll('#board-tabs .profile-tab').forEach(t => t.setAttribute('aria-selected', 'false'));
    tab.setAttribute('aria-selected', 'true');
    renderThreads(tab.dataset.board);
});

/* Groups */
document.getElementById('group-grid').innerHTML = STUDENT_GROUPS.map(g => `
  <article class="group-card">
    <h3>${g.name}</h3>
    <p>${g.desc}</p>
    <span class="tag tag--green">${g.tag}</span>
    <span class="members">${g.members} members</span>
    <button class="btn btn--sm btn--success" data-join-group="${g.name}">${ICONS.users} Join group</button>
  </article>`).join('');

document.getElementById('group-grid').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-join-group]');
    if (!btn) return;
    btn.disabled = true;
    btn.innerHTML = 'Joined ✓';
    showToast(`You joined ${btn.dataset.joinGroup}! Check your profile for updates.`);
});

/* Community posts (pinned corkboard) */
document.getElementById('community-posts').innerHTML = SUCCESS_STORIES.slice(0, 4).map(s => `
  <article class="pinned-card">
    <h3>${s.title}</h3>
    <p>${s.caption}</p>
    <span class="pin-meta">${s.quote}</span>
  </article>`).join('');
