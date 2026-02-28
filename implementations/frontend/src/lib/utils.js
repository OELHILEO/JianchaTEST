export function cn(...inputs) {
  let str = '', tmp;
  if (inputs && inputs.length) {
    for (let i = 0; i < inputs.length; i++) {
      if ((tmp = inputs[i]) && typeof tmp === 'string') {
        str && (str += ' ');
        str += tmp;
      }
    }
  }
  return str;
}
