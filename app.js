const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
	res.send('BEWARE!!');
});

app.get('/test', (_req, res) => {
	res.status('418');
	res.set('X-my-custom-header', 'mumu');
})
app.listen(port, () => console.log(`App is running on port ${port}`));

