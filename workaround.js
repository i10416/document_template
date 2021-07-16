const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const Datauri = require('datauri/sync');

// prefix for temporary file
const PREFIX = '.mermaid';

// output format
const FORMAT = {
  WEBSITE: 'svg',
  OTHER: 'png'
};

let format = FORMAT.OTHER;

const DEBUG = false;

const processBlock = (block) => {
  const source = block.body;

  // compile mermaid.js code using cli
  const hash = crypto.createHash('sha1').update(source).digest('hex');
  const inputFilePath = path.resolve(path.join('.', `${PREFIX}_${hash}.mmd`));
  const outputFilePath = path.resolve(path.join('.', `${PREFIX}_${hash}.${format}`));
  const configFilePath = path.resolve(path.join('.', `puppeteer-config.json`));

  if (!fs.existsSync(inputFilePath))  {
            console.debug(`Input file not found. Writing ${inputFilePath}`);
    fs.writeFileSync(inputFilePath, source, { encoding: 'utf-8' });
  }
  if (!fs.existsSync(outputFilePath)) {
        const configFileOption = fs.existsSync(configFilePath) ? `-p ${configFilePath}` : '';
          console.debug(`Output file not found. Writing ${outputFilePath} with option ${configFileOption} `);
    const stdout = execSync(`npx mmdc ${configFileOption}  -i ${inputFilePath} -o ${outputFilePath}`);
    if (DEBUG) console.debug(stdout);
  }

  // make result
  let output = '';
  switch (format) {
    case 'svg':
      output = fs.readFileSync(outputFilePath, { encoding: 'utf-8' });
      break;
    default:
      const meta = Datauri(outputFilePath);
      output = `<img src="${meta.content}">`;
      if (DEBUG) console.log(output);
  }

  // delete temporary files
  fs.rmSync(outputFilePath);
  fs.rmSync(inputFilePath);

  return output;
};

module.exports = {
  blocks: {
    code: (block) => {
      const lang = block.kwargs.language;
      if (lang != 'mermaid') {
        return block;
      }
      try {
        block.body = processBlock(block);
      } catch(ex) {
        console.error(ex);
      }
      return block;
    }
  },
  hooks: {
    init: function () {
      // Switch output format depends on build type(websiet or not)
      if (DEBUG) console.log(this);
      const name = this.output.name.toString();
      switch (name) {
        case 'website': format = FORMAT.WEBSITE; break;
        default: format = FORMAT.OTHER;
      }
    },
    // page: (page) => {
    // }
  }
};
