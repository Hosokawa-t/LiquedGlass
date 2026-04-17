// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('lg-theme-dark');
  
  const icon = themeToggle.querySelector('i');
  if (body.classList.contains('lg-theme-dark')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

// Dynamic Island Logic
const island = document.getElementById('dynamic-island');
const islandContent = document.getElementById('island-content');

let islandTimeout;

window.triggerIsland = (action) => {
  clearTimeout(islandTimeout);
  
  if (action === 'music') {
    island.style.width = '240px';
    island.style.borderRadius = '32px';
    islandContent.innerHTML = `
      <div class="island-icon" style="background: #ff2e93;"><i class="fa-solid fa-music" style="color:white;font-size:10px;"></i></div>
      <div style="display:flex; flex-direction:column; align-items:flex-start; margin-left:8px;">
        <span style="font-size: 13px; font-weight: 600;">Now Playing</span>
        <span style="font-size: 11px; color: #a1a1a6;">Synthwave Radio</span>
      </div>
      <div style="margin-left:auto; display:flex; gap:8px;">
        <i class="fa-solid fa-chart-simple" style="color: #ff2e93; font-size:12px;"></i>
      </div>
    `;
  } 
  else if (action === 'call') {
    island.style.width = '280px';
    island.style.borderRadius = '32px';
    islandContent.innerHTML = `
      <div class="island-icon" style="background: #10B981;"><i class="fa-solid fa-phone" style="color:white;font-size:10px;"></i></div>
      <div style="display:flex; flex-direction:column; align-items:flex-start; margin-left:8px;">
        <span style="font-size: 13px; font-weight: 600; color: #10B981;">00:14</span>
        <span style="font-size: 11px; color: #a1a1a6;">Incoming Call...</span>
      </div>
      <div style="margin-left:auto; display:flex; gap:12px; align-items:center;">
        <div style="width:28px;height:28px;border-radius:50%;background:#ef4444;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-phone-slash" style="font-size:12px;color:white;"></i></div>
        <div style="width:28px;height:28px;border-radius:50%;background:#10B981;display:flex;align-items:center;justify-content:center;"><i class="fa-solid fa-phone" style="font-size:12px;color:white;"></i></div>
      </div>
    `;
  }
  else if (action === 'reset') {
    island.style.width = '50px';
    island.style.borderRadius = '9999px';
    islandContent.innerHTML = `
      <i class="fa-solid fa-lock" style="color: #86868b; margin:0 auto;"></i>
    `;
  }

  // Auto reset after some time unless it's a reset
  if (action !== 'reset') {
    islandTimeout = setTimeout(() => {
      triggerIsland('reset');
    }, 4000);
  }
};

// initialize island
triggerIsland('reset');
