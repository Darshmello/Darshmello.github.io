import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PhotographyContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.fontSize['4xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, #007AFF 0%, #5856D6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  max-width: 800px;
`;

const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.fast};

  ${PhotoCard}:hover & {
    transform: scale(1.05);
  }
`;

const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.spacing.lg};
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.fast};
`;

const PhotoTitle = styled.h3`
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PhotoLocation = styled.p`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90vh;
  object-fit: contain;
`;

const ModalContent = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  color: white;
`;

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ModalDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[200]};
  max-width: 600px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  background: none;
  border: none;
  color: white;
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: background-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const Photography: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const photos = [
    {
      id: 1,
      title: 'Mountain Sunrise',
      location: 'Swiss Alps, Switzerland',
      image: '/images/photography/mountain-sunrise.jpg',
      description: 'Captured during a breathtaking sunrise in the Swiss Alps. The golden light illuminates the snow-capped peaks, creating a magical atmosphere.',
    },
    {
      id: 2,
      title: 'Urban Reflections',
      location: 'New York City, USA',
      image: '/images/photography/urban-reflections.jpg',
      description: 'A rainy evening in Manhattan, where the city lights create beautiful reflections on the wet streets.',
    },
    {
      id: 3,
      title: 'Desert Dunes',
      location: 'Sahara Desert, Morocco',
      image: '/images/photography/desert-dunes.jpg',
      description: 'The endless sand dunes of the Sahara Desert, captured during the golden hour.',
    },
    // Add more photos as needed
  ];

  return (
    <PhotographyContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Photography
      </Title>

      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Capturing moments and landscapes through my lens. Each photograph tells a unique story,
        from breathtaking natural landscapes to urban cityscapes.
      </Description>

      <GalleryGrid
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PhotoImage src={photo.image} alt={photo.title} />
            <PhotoOverlay className="overlay">
              <PhotoTitle>{photo.title}</PhotoTitle>
              <PhotoLocation>{photo.location}</PhotoLocation>
            </PhotoOverlay>
          </PhotoCard>
        ))}
      </GalleryGrid>

      <AnimatePresence>
        {selectedPhoto && (
          <Modal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <ModalImage src={selectedPhoto.image} alt={selectedPhoto.title} />
            <ModalContent>
              <ModalTitle>{selectedPhoto.title}</ModalTitle>
              <ModalDescription>{selectedPhoto.description}</ModalDescription>
            </ModalContent>
            <CloseButton onClick={() => setSelectedPhoto(null)}>×</CloseButton>
          </Modal>
        )}
      </AnimatePresence>
    </PhotographyContainer>
  );
};

interface Photo {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
}

export default Photography; 