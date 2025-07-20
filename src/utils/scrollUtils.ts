export const scrollToElement = (elementId: string): void => {
  const id = elementId.startsWith('#') ? elementId.substring(1) : elementId;
  
  const element = document.getElementById(id);
  
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};