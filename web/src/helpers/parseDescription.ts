/* eslint-disable @typescript-eslint/no-explicit-any */
export const parseDescription = (htmlDescription: string) => {
  const cleanedHtml = htmlDescription.replace(/&nbsp;/g, " ");

  // Guard para SSR
  if (typeof window === "undefined") {
    const plainText = cleanedHtml.replace(/<[^>]*>/g, "").trim();
    return { descripcion: plainText, items: [] };
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(cleanedHtml, "text/html");

  const descripcion = doc.querySelector("p")?.textContent?.trim() || "";

  const items: any[] = [];
  const mainUl = doc.querySelector("ul");

  if (!mainUl) return { descripcion, items };

  const mainLis = mainUl.querySelectorAll(":scope > li");

  mainLis.forEach((li) => {
    const nestedUl = li.querySelector("ul");

    if (nestedUl) {
      const categoria = li.childNodes[0]?.textContent?.trim() || "";
      const subItems: string[] = [];
      nestedUl.querySelectorAll("li").forEach((subLi) => {
        subItems.push(subLi.textContent?.trim() || "");
      });
      items.push({ categoria, subItems });
    } else {
      items.push(li.textContent?.trim() || "");
    }
  });

  return { descripcion, items };
};