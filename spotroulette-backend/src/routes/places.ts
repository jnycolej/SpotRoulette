import { Router } from 'express';

const router = Router();

// Sample place data
const places = require('../data/places.json');

// 🧠 Filtering function
function filterPlaces(places: typeof places, type?: string, tag?: string) {
  let results = places;

  if (type) {
    results = results.filter(place =>
      place.type?.toLowerCase() === type.toLowerCase()
    );
  }

  if (tag) {
    results = results.filter(place =>
      place.tags?.map(t => t.toLowerCase()).includes(tag.toLowerCase())
    );
  }

  return results;
}

// 📄 GET /places
router.get('/', (req, res) => {
  const filtered = filterPlaces(
    places,
    req.query.type as string,
    req.query.tag as string
  );
  res.json(filtered);
});




// 🎲 GET /places/random
router.get('/random', (req, res) => {
  const filtered = filterPlaces(
    places,
    req.query.type as string,
    req.query.tag as string
  );

  if (filtered.length === 0) {
    return res.status(404).json({ message: 'No matching places found.' });
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  const randomPlace = filtered[randomIndex];

  res.json(randomPlace);
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    const placeSpec = places.find((place) => place.id === id);
    if(placeSpec){
        res.json(placeSpec);
    }
    else {
        return res.status(404).json({message: 'No matching place found.'});
    }
});

export default router;
