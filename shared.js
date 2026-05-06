function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const text = document.getElementById('theme-text');
  
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    icon.textContent = '☀️';
    text.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = '🌙';
    text.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
}

// Check for saved theme preference or system preference
(function() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
    const icon = document.getElementById('theme-icon');
    const text = document.getElementById('theme-text');
    if (icon) icon.textContent = '☀️';
    if (text) text.textContent = 'Light';
  }
})();
