function fullJustify(words, maxWidth) {
    const result = [];
    let line = [];
    let wordlineLength = 0;

    for (const word of words) {
        if (wordlineLength + line.length + word.length > maxWidth) {
            result.push(wordjustifyLine(line, maxWidth));
            line = [];
            wordlineLength = 0;
        }
        line.push(word);
        wordlineLength += word.length;
    }

    // Add the last line (left-justified with extra spaces)
    result.push(leftwordJustify(line, maxWidth));

    return result;
}

function wordjustifyLine(line, maxWidth) {
    const numWords = line.length;
    if (numWords === 1) {
        return line[0] + ' '.repeat(maxWidth - line[0].length);
    }
    
    const totalSpaces = maxWidth - line.reduce((acc, word) => acc + word.length, 0);
    const spacesBetweenWords = Math.floor(totalSpaces / (numWords - 1));
    const extraSpaces = totalSpaces % (numWords - 1);

    let justifiedLine = '';
    for (let i = 0; i < line.length - 1; i++) {
        justifiedLine += line[i];
        justifiedLine += ' '.repeat(spacesBetweenWords);
        if (i < extraSpaces) {
            justifiedLine += ' ';
        }
    }
    justifiedLine += line[line.length - 1];

    return justifiedLine;
}

function leftwordJustify(line, maxWidth) {
    return line.join(' ') + ' '.repeat(maxWidth - line.join(' ').length);
}

// Example usage:
const words = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth = 16;
console.log(fullJustify(words, maxWidth));
