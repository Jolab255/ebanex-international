const fs = require('fs');
const path = require('path');
const { getMapJSON } = require('dotted-map');

try {
    console.log('Generating map data...');
    // Use the same settings as in dotted-map.tsx defaults
    const mapJsonString = getMapJSON({ height: 75, grid: 'diagonal' });

    const outputPath = path.resolve(__dirname, '../src/components/ui/map-data.json');
    fs.writeFileSync(outputPath, mapJsonString);

    console.log(`Map data successfully saved to ${outputPath}`);
    console.log(`Size: ${(mapJsonString.length / 1024).toFixed(2)} KB`);
} catch (error) {
    console.error('Error generating map data:', error);
    process.exit(1);
}
