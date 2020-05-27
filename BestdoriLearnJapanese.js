// ==UserScript==
// @name         BestdoriLearnJapanese
// @namespace    https://github.com/GinRex/BestdoriLearnJapanese/
// @version      0.1.0
// @description  For questions or feedbacks https://github.com/GinRex/BestdoriLearnJapanese/
// @icon         https://pbs.twimg.com/profile_images/1255707256143790081/lPqmCBNc_400x400.jpg
// @author       ginrex
// @match        https://bestdori.com/tool/storyviewer/*
// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @connect      translate.google.com
// ==/UserScript==

(function () {
  "use strict";
  //$x("//canvas/../div")[0].innerText = "ginrex best boyfriend";
  // Your code here...
  //var xmlhttp = new XMLHttpRequest();
  //let dialogueSlide = xmlDoc.evaluate("//canvas/../div", xmlDoc, null, XPathResult.ANY_TYPE,null);
  console.log("ginrex best girl");

  const allStoriesUrl = "https://bestdori.com/api/misc/bandstories.5.json";

  const baseUrl = "https://bestdori.com/assets/en/scenario/band/{bandId}_rip/Scenario{scenarioId}.asset";

  const rootUrl = "https://bestdori.com/tool/storyviewer/band/en/";

  let currentUrl = window.location.href;

  let storyId = currentUrl.match(/(?<=band\/en\/)(.*)(?=\/)/i)[0];
  console.log(storyId);

  fetch(allStoriesUrl)
    .then((res) => {
      return res.json();
    })
    .then((stories) => {
        var selectedStoryId = Object.keys(stories).filter((k, i) => storyId in stories[k].stories);
        console.log(selectedStoryId);
        const story = stories[selectedStoryId];
        let bandIdWithPrefix =  story.bandId.toString().padStart(3, '0');
        let scenarioId = story.stories[storyId].scenarioId;
        let languageCode = 'jp';
        let scenarioDataUrl = `https://bestdori.com/assets/${languageCode}/scenario/band/${bandIdWithPrefix}_rip/Scenario${scenarioId}.asset`;

        console.log(scenarioDataUrl)
        fetch(scenarioDataUrl)
            .then((res) => {
            return res.json();
            })
            .then((data) => {
                console.log(data);
            })

    });
})();
