import kuromoji from 'kuromoji';

export function analyzeWithTweets(tweets) {
  const text = tweets.map(tweet => tweet.text).join('\n');
  kuromoji.builder({dicPath: '/dict'}).build((err, tokenizer) => {
    if (err) {
      console.log(err);
      return;
    }
    const tokens = tokenizer.tokenize(text);
    console.log(tokens);
    wordCount(tokens);
  });
}

const wordCount = tokens => {
  let wordDict = {};

  tokens.forEach(token => {
    if (
      !['名詞'].includes(token.pos) ||
      !['サ変接続'].includes(token.pos_detail_1) ||
      token.basic_form === '*'
    ) {
      return;
    }
    const text = token.basic_form;
    if (Object.keys(wordDict).includes(text)) {
      wordDict[text]++;
    } else {
      wordDict[text] = 1;
    }
  });

  const words = Object.keys(wordDict)
    .map(word => {
      return {
        text: word,
        size: wordDict[word],
      };
    })
    .sort((a, b) => {
      if (a.size < b.size) return 1;
      if (a.size === b.size) return 0;
      if (a.size > b.size) return -1;
    });

  console.log(words);
};
