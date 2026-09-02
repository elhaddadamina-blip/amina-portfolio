import * as si from 'react-icons/si';

const toCheck = ['SiAmazonwebservices','SiMicrosoftazure','SiOpenai','SiMicrosoftpowerbi','SiTableau'];
toCheck.forEach(n => console.log(n, !!si[n]));

console.log('\n--- Amazon/AWS ---');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('amazon') || k.toLowerCase().includes('aws')));

console.log('\n--- Azure ---');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('azure')));

console.log('\n--- OpenAI ---');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('open')));

console.log('\n--- PowerBI ---');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('power')));

console.log('\n--- Tableau ---');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('tableau')));

console.log('\n--- Microsoft ---');
console.log(Object.keys(si).filter(k => k.toLowerCase().includes('microsoft')));