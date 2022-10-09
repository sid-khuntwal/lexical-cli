#!/usr/bin/env node
'use strict';
const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');
const meow = require('meow');

const ui = importJsx('./ui');

const cli = meow(`
	Usage
	  $ bookTree

	Options
		--word  Word To Search

	Examples
	  $ bookTree --name=oblivion
	  Word : OBLIVION
	  Definition: The state of forgetting completely, of being oblivious, unconscious, unaware, as when sleeping, drunk, or dead.To consign to oblivion; to efface utterly.
	  Synonym: forgetness
	  Antonym: resurrection
`);

render(React.createElement(ui, cli.flags));
