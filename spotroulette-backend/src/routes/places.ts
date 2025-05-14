import { Router } from 'express';
import { ZIP_TO_NEIGHBORHOOD } from '../data/zipcodes';
const router = Router();

const places = require('../data/places.json');

// Filtering function
function filterPlaces(
  places: typeof places,
  type?: string,
  tags: string[] = [],
  matchMode = "all" | "any" = "any"
) {
  let results = places;

  if (type) {
    results = results.filter(place =>
      place.type?.toLowerCase() === type.toLowerCase()
    );
  } 

  if (tags.length > 0) {
    results = results.filter(place => {
      const placeTags = place.tags?.map(t => t.toLowerCase()) || [];

      return matchMode === "any"
        ? tags.some(tag => placeTags.includes(tag.toLowerCase()))
        : tags.every(tag => placeTags.includes(tag.toLowerCase()));  
    });
  }

  return results;
}


// 📄 GET /places
router.get('/', (req, res) => {
  const rawTags = req.query.tags;
  const tags = typeof rawTags === "string" ? rawTags.split(",") : [];
  const matchMode = (req.query.match as string === "all") ? "all" : "any";


  const filtered = filterPlaces(
    places,
    req.query.type as string,
    tags,
    matchMode
  ).map(place => ({
    ...place,
    neighborhoods: ZIP_TO_NEIGHBORHOOD[place.zipcode] || "N/A"
  }));

  res.json(filtered);
});

// 🎲 GET /places/random
router.get('/random', (req, res) => {
  const rawTags = req.query.tags;
  const tags = typeof rawTags === "string" ? rawTags.split(",") : [];
  const matchMode = (req.query.match as string === "all") ? "all" : "any";

  const filtered = filterPlaces(
    places,
    req.query.type as string,
    tags,
    matchMode
  ).map(place => ({
    ...place,
    neighborhoods: ZIP_TO_NEIGHBORHOOD[place.zipcode] || ["N/A"]
  }));

  if (filtered.length === 0) {
    return res.status(404).json({ message: 'No matching places found.' });
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  const randomPlace = filtered[randomIndex];
 
  // res.json(randomPlace);
  res.json({
    ...randomPlace,
    neighborhoods: ZIP_TO_NEIGHBORHOOD[randomPlace.zipcode] || "N/A"
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const placeSpec = places.find(place => place.id === id);

  if (placeSpec) {
    res.json({
      ...placeSpec,
      neighborhoods: ZIP_TO_NEIGHBORHOOD[placeSpec.zipcode] || ["N/A"]
    });
  } else {
    return res.status(404).json({ message: 'No matching place found.' });
  }
});


export default router;
