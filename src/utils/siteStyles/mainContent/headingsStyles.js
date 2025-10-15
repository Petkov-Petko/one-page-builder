export function HeadingsStyle2() {
  return `
.content-area h2 {
  display: inline-block;
  border-bottom: 3px solid var(--heading-color);
  padding-bottom: 4px;
}
  `;
}

export function HeadingsStyle3() {
  return `
.content-area h2 {
  display: inline-block;
  border-bottom: 2px dashed var(--heading-color);
  padding-bottom: 4px;
}
  `;
}

export function HeadingsStyle4() {
  return `
  .content-area h2 {
  position: relative;
  text-align: center;
}

.content-area h2::before,
.content-area h2::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--heading-color);
}

.content-area h2::before {
  top: -6px;
}

.content-area h2::after {
  bottom: -6px;
}
  `;
}

export function HeadingsStyle5() {
  return `
    .content-area h2 {
  position: relative;
  display: inline-block;
  padding-left: 16px;
}

.content-area h2::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 70%;
  background-color: var(--heading-color);
  border-radius: 2px;
}
  `;
}
export function HeadingsStyle6() {
  return `
    .content-area h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
}

.content-area h2::before,
.content-area h2::after {
  content: "";
  width: 40px;  
  height: 2px;
  background-color: var(--heading-color)  ;
}
    `;
}

// 🔥 MAIN: Function to get heading CSS based on style
export function getHeadingsCss(globalSettings = {}) {
  const headingsStyle = globalSettings.headingsStyle || "1";

  switch (headingsStyle) {
    case "2":
      return HeadingsStyle2();
    case "3":
      return HeadingsStyle3();
    case "4":
      return HeadingsStyle4();
    case "5":
      return HeadingsStyle5();
    case "6":
      return HeadingsStyle6();
    case "1":
    default:
      return "";
  }
}
