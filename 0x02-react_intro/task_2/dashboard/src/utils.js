export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
      if (isIndex === false) {return 'Holberton School main dashboard';}
      else {return 'Holberton School';}
  }