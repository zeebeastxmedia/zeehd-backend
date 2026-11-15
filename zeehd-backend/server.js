const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('ZeeHD Backend is live and running!');
});

app.get('/api/servers/:type/:id', (req, res) => {
  const { type, id } = req.params;
  const { imdb, s, e } = req.query;

  let servers = [];

  if (type === 'movie') {
    servers = [
      { name: 'CineHD Server 1 (VidSrc VIP)', url: `https://vidsrc.me/embed/movie?tmdb=${id}` },
      { name: 'CineHD Server 2 (VidSrc PRO)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}` },
      { name: 'CineHD Server 3 (MultiEmbed HD)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1` },
      { name: 'CineHD Server 4 (2Embed Player)', url: `https://www.2embed.cc/embed/${id}` },
      { name: 'CineHD Server 5 (MoviesAPI 4K)', url: `https://moviesapi.club/movie/${id}` },
      { name: 'CineHD Server 6 (VidSrc CC)', url: `https://vidsrc.cc/v2/embed/movie/${imdb || id}` },
      { name: 'CineHD Server 7 (Hindi Dubbed)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=hi` },
      { name: 'CineHD Server 8 (Tamil Dubbed)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=ta` },
      { name: 'CineHD Server 9 (Telugu Dubbed)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=te` },
      { name: 'CineHD Server 10 (Ultra 4K Stream)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&quality=4k` }
    ];
  } else {
    const season = s || 1;
    const episode = e || 1;
    servers = [
      { name: 'CineHD TV Server 1 (VidSrc PRO)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}` },
      { name: 'CineHD TV Server 2 (VidSrc VIP)', url: `https://vidsrc.me/embed/tv?tmdb=${id}&season=${season}&episode=${episode}` },
      { name: 'CineHD TV Server 3 (MultiEmbed)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}` },
      { name: 'CineHD TV Server 4 (2Embed TV)', url: `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}` },
      { name: 'CineHD TV Server 5 (MoviesAPI TV)', url: `https://moviesapi.club/tv/${id}-${season}-${episode}` },
      { name: 'CineHD TV Server 6 (VidSrc CC)', url: `https://vidsrc.cc/v2/embed/tv/${imdb || id}/${season}/${episode}` },
      { name: 'CineHD TV Server 7 (Hindi Dub TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&ds_lang=hi` },
      { name: 'CineHD TV Server 8 (Tamil Dub TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&ds_lang=ta` },
      { name: 'CineHD TV Server 9 (Telugu Dub TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&ds_lang=te` },
      { name: 'CineHD TV Server 10 (4K TV Stream)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&quality=4k` }
    ];
  }

  res.json({ success: true, servers });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`ZeeHD Backend running smoothly on port ${PORT}`);
});