const fs = require('fs');
const prompt = require('prompt-sync')();

const filePath = '/Users/edward.kemper/Dropbox/GratitudeTracker.json'

// Read the JSON file
fs.readFile(filePath, 'utf8', (err, data) => {
    const answer = prompt('What are you grateful for?   =>   ');

    if (err) {
        console.error(err);
        return;
    }

    // Parse the JSON string into a JavaScript object
    let obj = JSON.parse(data);

    // Add the new entry to the object
    const newDate = new Date()
    obj[newDate] = answer;

    // Stringify the updated object back into a JSON string
    // The second parameter is used to insert white space into the output JSON string for readability purposes
    const jsonString = JSON.stringify(obj, null, 2);

    // Write the updated JSON string back to the file
    fs.writeFile(filePath, jsonString, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('New entry added successfully');
        process.exit()
    });
});
