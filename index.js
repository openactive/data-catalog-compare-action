const core = require('@actions/core');
const fs = require('fs');

try {
  const newJsonFilePath = core.getInput('new_json_file');
  const oldJsonFilePath = core.getInput('old_json_file');
  const newJson = JSON.parse(fs.readFileSync(newJsonFilePath, {encoding:'utf8'}));
  const oldJson = JSON.parse(fs.readFileSync(oldJsonFilePath, {encoding:'utf8'}));
  const newDatasets = newJson.dataset.filter(x => !oldJson.dataset.includes(x));

  if (newDatasets.length > 1) {
    throw new Error('Only one new dataset may be added per PR');
  }

  core.setOutput("url", newDatasets[0] || "");
} catch (error) {
  core.setFailed(error.message);
}