/* eslint-disable no-console */
const { ANSI_COLORS } = require('../constants/ANSIEscapeCodes');

function colorText(color, text) {
  if (ANSI_COLORS[color]) {
    return `${ANSI_COLORS[color]}${text}${ANSI_COLORS.reset}`;
  }
  console.error(`Invalid color: ${color}`);
  return text;
}

module.exports = {
  colorText,
};
