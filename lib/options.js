const { Record } = require('immutable');

const DEFAULTS = {
    // Type of the code containers
    containerType: 'code_block',
    // Type of the code lines
    lineType: 'code_line',

    // Mod+Enter will exit the code container, into the given block type.
    // Backspace at start of empty code container, will turn it into the given block type.
    exitBlockType: 'paragraph',
    // Should the plugin handle the select all inside a code container
    selectAll: true,
    // Allow marks inside code blocks
    allowMarks: false
};

/**
 * The plugin options
 */
class Options extends new Record(DEFAULTS) {}

module.exports = Options;

