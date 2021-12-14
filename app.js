const express = require('express');
const app = express();
const port = 3000;
app.get('/', (_req, res) => {
	res.send('BEWAREsss!!');
});

app.get('/test', (_req, res) => {
	res.status('418');
	res.set('X-my-custom-header', 'mumu');
	res.send('ddd')
})
app.listen(port, () => console.log(`App is running on port ${port}`));

