'use strict';
const React = require('react');
const { Box, Text } = require('ink');
const axios = require('axios');

const App = ({ word = 'oblivion' }) => {
	const [lexiconData, setlexiconData] = React.useState(null);

	const lexicon = word => {
		const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

		return axios
			.get(url)
			.then((response) => response.data)
			.then((data) => {
				return data[0];
			});
	};

	React.useEffect(() => {
		lexicon(word).then((data) => {
			setlexiconData(data);
		});
	}, [word]);

	return (
		(lexiconData && (
			<Box>
				<Text>
					<Text color="yellowBright">Word:</Text>{" "}
					<Text bold color="magentaBright">
						{lexiconData?.word.toUpperCase()}
					</Text>
					{"\n"}
					<Text color="yellowBright">Definition:</Text>{" "}
					<Text color="greenBright" bold>
						{lexiconData?.meanings.map(
							(meanings) => meanings.definitions[0].definition
						)}
					</Text>
					{"\n"}
					<Text color="yellowBright">Synonym:</Text>{" "}
					<Text color="greenBright" bold>
						{lexiconData?.meanings.map((meanings) => meanings.synonyms[0])}
					</Text>
					{"\n"}
					<Text color="yellowBright">Antonym:</Text>{" "}
					<Text color="greenBright" bold>
						{lexiconData?.meanings.map((meanings) => meanings.antonyms[0])}
					</Text>
				</Text>
			</Box>
		)) || <Text>Loading...</Text>
	);
};

module.exports = App;
