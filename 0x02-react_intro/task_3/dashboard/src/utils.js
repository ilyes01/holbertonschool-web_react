export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  if (isIndex === false) {
    return "Holberton School main dashboard";
  } else {
    return "Holberton School";
  }
}
export function getLatestNotification() {
  return (

      '<strong>Urgent requirement</strong> - complete by EOD'
  );
}
export default getLatestNotification;