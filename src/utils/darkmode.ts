export default function toggleDarkMode() {
  if (typeof window !== 'undefined') {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
