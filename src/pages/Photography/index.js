import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Photography.css';

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    {
      title: 'Mountain Sunrise',
      location: 'Swiss Alps',
      image: '/images/photography/mountain-sunrise.jpg',
      description: 'A breathtaking view of the Swiss Alps at sunrise, capturing the first rays of light hitting the snow-capped peaks.'
    },
    {
      title: 'Urban Reflections',
      location: 'New York City',
      image: '/images/photography/urban-reflections.jpg',
      description: 'The vibrant city lights of New York reflected in a rain puddle, creating a mesmerizing urban landscape.'
    },
    {
      title: 'Desert Dunes',
      location: 'Sahara Desert',
      image: '/images/photography/desert-dunes.jpg',
      description: 'The endless golden dunes of the Sahara Desert, with their perfect curves and shadows creating a dramatic landscape.'
    }
  ];

  return (
    <div className="photography-container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Photography
      </motion.h1>

      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Capturing moments and landscapes through my lens, sharing the beauty of the world as I see it.
      </motion.p>

      <motion.div
        className="gallery-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {photos.map((photo, index) => (
          <motion.div
            key={photo.title}
            className="photo-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="photo-image">
              <img src={photo.image} alt={photo.title} />
            </div>
            <div className="photo-overlay">
              <h3 className="photo-title">{photo.title}</h3>
              <p className="photo-location">{photo.location}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="modal-image"
              />
              <div className="modal-info">
                <h2 className="modal-title">{selectedPhoto.title}</h2>
                <p className="modal-location">{selectedPhoto.location}</p>
                <p className="modal-description">{selectedPhoto.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Photography; 