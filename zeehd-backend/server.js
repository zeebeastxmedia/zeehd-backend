const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Multi-server aggregator generator endpoint
app.get('/api/servers/:type/:id', (req, res) => {
  const { type, id } = req.params;
  const { imdb, s, e } = req.query;

  let servers = [];

  if (type === 'movie') {
    servers = [
      { name: 'Server 1 (2Embed HD)', url: `https://www.2embed.cc/embed/${id}` },
      { name: 'Server 2 (VidSrc Pro)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}` },
      { name: 'Server 3 (VidSrc CC V2)', url: `https://vidsrc.cc/v2/embed/movie/${imdb || id}` },
      { name: 'Server 4 (MoviesAPI 4K)', url: `https://moviesapi.club/movie/${id}` },
      { name: 'Server 5 (MultiEmbed)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1` },
      { name: 'Server 6 (Vidplay HD)', url: `https://vidplayer.to/embed/${id}` },
      { name: 'Server 7 (Superstream)', url: `https://byse.su/embed/movie/${id}` },
      { name: 'Server 8 (FlixHQ Alt)', url: `https://vidsrc.me/embed/movie?tmdb=${id}` },
      { name: 'Server 9 (Hindi Dubbed)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=hi` },
      { name: 'Server 10 (Tamil Dubbed)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=ta` },
      { name: 'Server 11 (Telugu Dubbed)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=te` },
      { name: 'Server 12 (French Audio)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=fr` },
      { name: 'Server 13 (Spanish Audio)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=es` },
      { name: 'Server 14 (German Audio)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=de` },
      { name: 'Server 15 (Japanese Sub)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=ja` },
      { name: 'Server 16 (Korean Sub)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&ds_lang=ko` },
      { name: 'Server 17 (Max Stream)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1&provider=max` },
      { name: 'Server 18 (Netflix Mirror)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1&provider=netflix` },
      { name: 'Server 19 (Prime Mirror)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1&provider=prime` },
      { name: 'Server 20 (Ultra 4K)', url: `https://vidsrc.xyz/embed/movie?tmdb=${id}&quality=4k` }
    ];
  } else {
    // TV Shows layout with seasons and episodes
    const season = s || 1;
    const episode = e || 1;
    servers = [
      { name: 'Server 1 (2Embed TV)', url: `https://www.2embed.cc/embedtv/${id}&s=${season}&e=${episode}` },
      { name: 'Server 2 (VidSrc TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}` },
      { name: 'Server 3 (VidSrc CC V2)', url: `https://vidsrc.cc/v2/embed/tv/${imdb || id}/${season}/${episode}` },
      { name: 'Server 4 (MoviesAPI TV)', url: `https://moviesapi.club/tv/${id}-${season}-${episode}` },
      { name: 'Server 5 (MultiEmbed TV)', url: `https://multiembed.mov/?video_id=${id}&tmdb=1&s=${season}&e=${episode}` },
      { name: 'Server 6 (Hindi Dub TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&ds_lang=hi` },
      { name: 'Server 7 (Tamil Dub TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&ds_lang=ta` },
      { name: 'Server 8 (Telugu Dub TV)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&ds_lang=te` },
      { name: 'Server 9 (Alt Provider 1)', url: `https://vidsrc.me/embed/tv?tmdb=${id}&season=${season}&episode=${episode}` },
      { name: 'Server 10 (4K TV Stream)', url: `https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${season}&episode=${episode}&quality=4k` }
    ];
  }

  res.json({ success: true, servers });
});

app.listen(PORT, () => {
  console.log(`ZeeHD Backend running on port ${PORT}`);
});