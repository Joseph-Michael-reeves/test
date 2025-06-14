export function createPageUrl(page) {
  if (page === 'Portfolio') return '/';
  return '/' + page.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
