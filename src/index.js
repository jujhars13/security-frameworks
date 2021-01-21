import * as table from "./table.js";

const frameworkUrl = "https://raw.githubusercontent.com/jujhars13/security-controls/master/data/controls.json"

function component() {
  const element = document.getElementById('container');

  const arr = ['Hello', 'webpack', 'test'];
  element.innerHTML = arr.join(' ');

  return element;
}

document.body.appendChild(component());
const tableDiv = document.getElementById('data-table');

const margin = { top: 100, right: 100, bottom: 100, left: 100 };
const width = Math.min(1024, window.innerWidth - 10) - margin.left - margin.right;
const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
const color = d3.scale.category10();
// fetch the data and render  table
fetch(frameworkUrl)
  .then((response) => response.json())
  .then((incoming) => {
    //console.log(incoming);
    const filteredData= incoming.filter(r=>r.source=='nist_csf_v1.1');

    const radarChartOptions = {
      width,
      height,
      margin,
      maxValue: 1,
      levels: 4, // how may rings
      roundStrokes: true, // round or square edges
      strokeWidth: 3, // The width of the stroke around each blob,
      color,
      legendLabelFontSize: 19
    };

    // render table
    tableDiv.innerHTML = table.renderTable(filteredData);

  })
  .catch((err) => console.error(err));
