import * as table from "./table.js";

const frameworkUrl =
  "https://raw.githubusercontent.com/jujhars13/security-controls/master/data/controls.json";

const tableDiv = document.getElementById("data-table");

const frameworkSelector = document.getElementById("framework-selector");

frameworkSelector.onchange = function () {
  let selectedFramework = this.value;
  tableDiv.innerHTML = "";
  renderTable(selectedFramework);
};

/**
 * fetch framework data and render html table
 * @param {string} frameworkToRender
 */
function renderTable(frameworkToRender) {
  fetch(frameworkUrl)
    .then((response) => response.json())
    .then((incoming) => {
      // render table
      table.renderTable(
        tableDiv,
        incoming.filter((r) => r.source == frameworkToRender)
      );
    })
    .catch((err) => console.error(err));
}

//use this framework for initial page load
renderTable("nist_csf_v1.1");
