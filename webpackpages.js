const fs = require("fs");
const templates = fs.readdirSync("./templates/");

const htmlTemplates = templates.filter(file => file.indexOf(".html") > 0);
const list = htmlTemplates.map(file => {
  return {
    from: `templates/${file}`,
    to: file
  };
});

module.exports = list;
