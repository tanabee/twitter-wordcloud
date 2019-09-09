import kuromoji from 'kuromoji';

export function wordCount(tweets) {
  const text = tweets.map(tweet => tweet.text).join('\n');
  return new Promise((resolve, reject) => {
    kuromoji.builder({dicPath: '/dict'}).build((err, tokenizer) => {
      if (err) {
        reject(err);
        return;
      }
      const tokens = tokenizer.tokenize(text);
      resolve(wordCountWithTokens(tokens));
    });
  });
}

const wordCountWithTokens = tokens => {
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
        value: wordDict[word],
      };
    })
    .sort((a, b) => {
      if (a.size < b.size) return 1;
      if (a.size > b.size) return -1;
      return 0;
    });

  return words;
};
