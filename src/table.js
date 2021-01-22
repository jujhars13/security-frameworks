
const renderTable = (domId, data = {}, options = undefined) => {
  const cfg = { sortAscending: true, caption: "" };

  // Put all of the options into a variable called cfg
  if (typeof options !== "undefined") {
    for (let i in options) {
      if (typeof options[i] !== "undefined") {
        cfg[i] = options[i];
      }
    }
  }

  const table = d3.select(domId).append("table").attr("id", "rendered-table").attr("class", "table table-striped table-bordered ");
  table.append("caption").text(cfg.caption);

  const headings = [
    { head: "id" },
    { head: "title" },
    { head: "description" },
    { head: "seq" }
  ];

  // table headers
  const headers = table
    .append("thead")
    .attr("class", "thead-dark")
    .append("tr")
    .selectAll("th")
    .data(headings).enter()
    .append("th")
    .attr("class","header")
    .text((d) => d.head)
    // sort headers
    .on("click", (d) => {
      console.log('set');
      if (cfg.sortAscending) {
        rows.sort((a, b) => d3.ascending(Object.values(b)[0].value, Object.values(a)[0].value));
        cfg.sortAscending = false;
        this.className = "aes";
      } else {
        rows.sort((a, b) => d3.descending(Object.values(b)[0].value, Object.values(a)[0].value));
        cfg.sortAscending = true;
        this.className = "des";
      }
    });

  // render rows
  const rows = table.append("tbody").attr("class", "").selectAll("tr").data(data).enter().append("tr");
  rows
    .selectAll("td")
    .data(data => {
      return headings.map((heading) => {
        let row = Object.assign({}, data);
        row.text = data[heading.head];

        // override Id field
        if (heading.head == 'id') {
          row.text = data.id_raw;
        }

        return row;
      })
    }).enter()
    .append("td")
    .text((d) => d.text)
    .attr('data-source', d => d.source)


  return table;
};

module.exports = {
  renderTable
}
