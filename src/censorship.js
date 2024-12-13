/**
 * Write a function which returns a function to replace forbidden words in string by * symbols
 * Array 'forbidden' is specifying the words you have to detect and replace by *
 * Amount of * symbols should be equal word length (words and spaces between them if there are many words)
 *
 * ATTENTION: There might be one or several symbols '\n' or '\\n'.
 * That's a special symbol declaring a new line and should stay in a final string.
 *
 * Example:
 * forbidden = ['ship', 'blow', 'blew up']
 * str = 'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'
 * str = 'There once was a **** that put to sea\nThe name of the **** was the Billy of Tea\nThe winds *******, her bow dipped down\nOh ****, my bully boys, **** (huh)'
 * @param {Array} forbidden
 * @returns {function}
 */
module.exports.censorship = function censorship(forbidden) {
  return function censor(text) {
    // Sort forbidden words by length to handle longer phrases first
    forbidden.sort((a, b) => b.length - a.length);

    // Replace each forbidden word
    forbidden.forEach(word => {
      // Create a regex to match the word, allowing for spaces or overlaps
      const regex = new RegExp(
        word
          .split('')
          .map(char => (char === ' ' ? '\\s+' : char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')))
          .join(''),
        'gi'
      );

      text = text.replace(regex, match => '*'.repeat(match.length));
    });

    return text;
  };
};