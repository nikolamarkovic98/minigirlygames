const path = require('path');
const express = require('express');
const pages = require('./src/pages');

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'; // Caddy proxies here

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', true); // behind Caddy

app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d' }));

for (const page of pages) {
  app.get(page.path, (req, res) => {
    res.render(`pages/${page.view}`, { ...page, currentPath: page.path });
  });
}

// Old .html links -> clean URLs
app.get('/:name.html', (req, res, next) => {
  const target = req.params.name === 'index' ? '/' : `/${req.params.name}`;
  if (pages.some((p) => p.path === target)) return res.redirect(301, target);
  next();
});

// Anything unknown -> home
app.use((req, res) => res.redirect('/'));

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
