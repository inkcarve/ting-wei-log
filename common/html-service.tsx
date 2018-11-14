export function dangeriousHtmlMarkup(data:string) {
  return {__html: data};
}