import { contactPage1Css, contactPage1 } from "./siteStyles/contact/style1.js";
import { contactPage2Css, contactPage2 } from "./siteStyles/contact/style2.js";
import { contactPage3Css, contactPage3 } from "./siteStyles/contact/style3.js";
import { contactPage4Css, contactPage4 } from "./siteStyles/contact/style4.js";

export function cssBodyPattern(patternId, selector = ".website-preview") {
  switch (String(patternId)) {
    case "0":
      return "";
    case "1":
      return `${selector} {
  background: repeating-linear-gradient(
    45deg,
    #92c9b1,
    #92c9b1 20px,
    #b3e0d2 20px,
    #b3e0d2 40px
  );
}`;
    case "2":
      return `${selector} {
  background: none;
  background-color: #313131;
  background-image: radial-gradient(rgba(255,255,255,0.171) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px;
}`;
    case "3":
      return `${selector} {
  background: none;
  --color: rgba(114,114,114,0.3);
  background-color: #191a1a;
  background-image: linear-gradient(0deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent),
                    linear-gradient(90deg, transparent 24%, var(--color) 25%, var(--color) 26%, transparent 27%, transparent 74%, var(--color) 75%, var(--color) 76%, transparent 77%, transparent);
  background-size: 55px 55px;
}`;
    case "4":
      return `${selector}::after {
  content: "";
  inset: 0;
  z-index: 1;
  background-image: radial-gradient(
    ellipse 1.5px 2px at 1.5px 50%,
    #0000 0,
    #0000 90%,
    #000 100%
  );
  background-size: 25px 8px;
}

${selector} {
  position: relative;
  --c: #09f;
  background-color: #000;
  background-image: radial-gradient(4px 100px at 0px 235px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 235px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 117.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 252px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 252px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 126px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 150px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 150px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 75px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 253px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 253px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 126.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 204px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 204px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 102px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 134px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 134px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 67px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 179px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 179px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 89.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 299px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 299px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 149.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 215px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 215px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 107.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 281px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 281px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 140.5px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 158px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 158px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 79px, var(--c) 100%, #0000 150%),
    radial-gradient(4px 100px at 0px 210px, var(--c), #0000),
    radial-gradient(4px 100px at 300px 210px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 105px, var(--c) 100%, #0000 150%);
  background-size:
    300px 235px,
    300px 235px,
    300px 235px,
    300px 252px,
    300px 252px,
    300px 252px,
    300px 150px,
    300px 150px,
    300px 150px,
    300px 253px,
    300px 253px,
    300px 253px,
    300px 204px,
    300px 204px,
    300px 204px,
    300px 134px,
    300px 134px,
    300px 134px,
    300px 179px,
    300px 179px,
    300px 179px,
    300px 299px,
    300px 299px,
    300px 299px,
    300px 215px,
    300px 215px,
    300px 215px,
    300px 281px,
    300px 281px,
    300px 281px,
    300px 158px,
    300px 158px,
    300px 158px,
    300px 210px,
    300px 210px,
    300px 210px;
  animation: hi 150s linear infinite;
}

@keyframes hi {
  0% {
    background-position:
      0px 220px,
      3px 220px,
      151.5px 337.5px,
      25px 24px,
      28px 24px,
      176.5px 150px,
      50px 16px,
      53px 16px,
      201.5px 91px,
      75px 224px,
      78px 224px,
      226.5px 350.5px,
      100px 19px,
      103px 19px,
      251.5px 121px,
      125px 120px,
      128px 120px,
      276.5px 187px,
      150px 31px,
      153px 31px,
      301.5px 120.5px,
      175px 235px,
      178px 235px,
      326.5px 384.5px,
      200px 121px,
      203px 121px,
      351.5px 228.5px,
      225px 224px,
      228px 224px,
      376.5px 364.5px,
      250px 26px,
      253px 26px,
      401.5px 105px,
      275px 75px,
      278px 75px,
      426.5px 180px;
  }

  to {
    background-position:
      0px 6800px,
      3px 6800px,
      151.5px 6917.5px,
      25px 13632px,
      28px 13632px,
      176.5px 13758px,
      50px 5416px,
      53px 5416px,
      201.5px 5491px,
      75px 17175px,
      78px 17175px,
      226.5px 17301.5px,
      100px 5119px,
      103px 5119px,
      251.5px 5221px,
      125px 8428px,
      128px 8428px,
      276.5px 8495px,
      150px 9876px,
      153px 9876px,
      301.5px 9965.5px,
      175px 13391px,
      178px 13391px,
      326.5px 13540.5px,
      200px 14741px,
      203px 14741px,
      351.5px 14848.5px,
      225px 18770px,
      228px 18770px,
      376.5px 18910.5px,
      250px 5082px,
      253px 5082px,
      401.5px 5161px,
      275px 6375px,
      278px 6375px,
      426.5px 6480px;
  }
}
`;
    case "5":
      return `${selector} {  background: #121212;
  background: linear-gradient(
    135deg,
    #121212 25%,
    #1a1a1a 25%,
    #1a1a1a 50%,
    #121212 50%,
    #121212 75%,
    #1a1a1a 75%,
    #1a1a1a
  );
  background-size: 40px 40px;
  animation: move 4s linear infinite;}
  @keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 40px 40px;
  }
}`;
    default:
      return "";
  }
}

export function chooseContactPageHtml(templateIndex, globalSettings) {
  console.log(templateIndex);
  switch (templateIndex) {
    case 1:
      return contactPage1(globalSettings.email, heroClass(globalSettings));
    case 2:
      return contactPage2(globalSettings.email, heroClass(globalSettings));
    case 3:
      return contactPage3(globalSettings.email, heroClass(globalSettings));
    case 4:
      return contactPage4(globalSettings.email, heroClass(globalSettings));
    default:
      return;
  }
}

export function chooseContactPageCss(templateIndex) {
  console.log(templateIndex);

  switch (templateIndex) {
    case 1:
      return contactPage1Css();
    case 2:
      return contactPage2Css();
    case 3:
      return contactPage3Css();
    case 4:
      return contactPage4Css();
    default:
      return;
  }
}

export function heroClass (globalSettings) {
  if (globalSettings.transparentHero) {
    return "hero-section transparent-hero";
  } else if (globalSettings.heroBg) {
    return "hero-section with-bg";
  } else {
    return "hero-section gradient-bg";
  }
};

export function isColorDark(hex) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
}

export function convertTextToHtml(input) {
  if (!input) return "";

  const lines = input.split(/\r?\n/);
  let html = "";
  let listBuffer = [];
  let listType = null; // "ul", "ul-dash", "ol", "ol-alpha"

  function flushList() {
    if (listBuffer.length === 0) return;

    if (listType === "ul") {
      html += "<ul>\n";
      for (const item of listBuffer) html += `  <li>${item}</li>\n`;
      html += "</ul>\n\n";
    } else if (listType === "ul-dash") {
      html += `<ul style="list-style-type: '- ';">\n`;
      for (const item of listBuffer) html += `  <li>${item}</li>\n`;
      html += "</ul>\n\n";
    } else if (listType === "ol") {
      html += "<ol>\n";
      for (const item of listBuffer) html += `  <li>${item}</li>\n`;
      html += "</ol>\n\n";
    } else if (listType === "ol-alpha") {
      html += '<ol style="list-style-type: lower-alpha;">\n';
      for (const item of listBuffer) html += `  <li>${item}</li>\n`;
      html += "</ol>\n\n";
    }

    listBuffer = [];
    listType = null;
  }

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();

    // Empty line ends any list
    if (!trimmed) {
      flushList();
      continue;
    }

    // Already HTML → keep as is
    if (trimmed.startsWith("<")) {
      flushList();
      html += rawLine + "\n";
      continue;
    }

    // 🔹 Dash list: "- item"  => <ul style="list-style-type: '- ';"><li>...</li></ul>
    if (/^-\s+/.test(trimmed)) {
      const itemText = trimmed.replace(/^-+\s+/, "");
      if (listType !== "ul-dash") {
        flushList();
        listType = "ul-dash";
      }
      listBuffer.push(itemText);
      continue;
    }

    // 🔹 Bullet list: "• item"
    if (/^•/.test(trimmed)) {
      const itemText = trimmed.replace(/^•\s*/, "");
      if (listType !== "ul") {
        flushList();
        listType = "ul";
      }
      listBuffer.push(itemText);
      continue;
    }

    // 🔹 Numbered list: "1. item" or "1) item"
    if (/^\d+[\.)]/.test(trimmed)) {
      const itemText = trimmed.replace(/^\d+[\.)]\s*/, "");
      if (listType !== "ol") {
        flushList();
        listType = "ol";
      }
      listBuffer.push(itemText);
      continue;
    }

    // 🔹 Alphabetical list: "a. item" or "a) item"
    if (/^[a-zA-Z][\.)]/.test(trimmed)) {
      const itemText = trimmed.replace(/^[a-zA-Z][\.)]\s*/, "");
      if (listType !== "ol-alpha") {
        flushList();
        listType = "ol-alpha";
      }
      listBuffer.push(itemText);
      continue;
    }

    // 🔹 Normal paragraph
    flushList();
    html += `<p>${trimmed}</p>\n`;
  }

  flushList();
  return html.trim();
}

