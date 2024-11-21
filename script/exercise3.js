const text = prompt("Write a text:");
let count = 0;
let check = 0;

switch (true) {
    case true:
        while (check < text.length) {
            switch (text[check].toLowerCase()) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    count++;
                    break;
                default:
                    break;
            }
            check++; // Advance to the next character
        }
        alert(`The number of vowels in the text is: ${count}`);
        console.log(`The number of vowels in the text is: ${count}`);
        break;
}
