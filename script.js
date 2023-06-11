//your code here
let bandNames = ['The Rolling Stones', 'Red Hot Chili Peppers', 'Led Zeppelin', 'The Beatles', 'Pink Floyd'];

function sortBandNames(names) {
  const articles = ['a', 'an', 'the'];
  
  // Custom comparison function to sort the band names
  const compare = (a, b) => {
    const aWords = a.toLowerCase().split(' ');
    const bWords = b.toLowerCase().split(' ');

    // Remove articles from band names for comparison
    const cleanA = aWords.filter(word => !articles.includes(word));
    const cleanB = bWords.filter(word => !articles.includes(word));

    return cleanA.join(' ').localeCompare(cleanB.join(' '));
  };

  // Sort the band names using the custom comparison function
  names.sort(compare);
}

sortBandNames(bandNames);

const ulElement = document.getElementById('band');
bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});

