export function filter() {
  return location.pathname.split('/').filter(function(n){ return n != '' })[0] || 'all';
}
