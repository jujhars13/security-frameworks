import * as table from "./table.js";

const frameworkUrl = "https://raw.githubusercontent.com/jujhars13/security-controls/master/data/controls.json"

const tableDiv = document.getElementById('data-table');

// fetch the data and render table
fetch(frameworkUrl)
  .then((response) => response.json())
  .then((incoming) => {

    // render table
    table.renderTable(tableDiv, incoming.filter(r => r.source == 'nist_csf_v1.1'), { 'caption': 'NIST CSF 1.1' });

  })
  .catch((err) => console.error(err));
