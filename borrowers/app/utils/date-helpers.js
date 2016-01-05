//export default function dateHelpersJs() {
//  return true;
//}

function formatDate(date, format){
  return window.moment(date).format(format);
}

export {
  formatDate
}
