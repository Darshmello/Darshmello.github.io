import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
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

const Subtitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.text.light};
`;

const Text = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gray[100]};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: transform ${({ theme }) => theme.transitions.fast},
              box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const SkillTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.xl};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.light};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[600]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  &::before {
    content: "•";
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const About: React.FC = () => {
  const skills = {
    'Machine Learning': [
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning',
      'Transfer Learning',
    ],
    'Programming': [
      'Python',
      'TensorFlow',
      'PyTorch',
      'C++',
      'CUDA',
    ],
    'Tools & Technologies': [
      'Docker',
      'Kubernetes',
      'AWS',
      'Git',
      'CI/CD',
    ],
    'Research': [
      'Paper Writing',
      'Experimental Design',
      'Data Analysis',
      'Model Optimization',
      'Academic Collaboration',
    ],
  };

  return (
    <AboutContainer>
      <Section>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </Title>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a passionate Machine Learning Engineer with a focus on developing innovative AI solutions.
          With a strong background in deep learning and computer vision, I specialize in creating
          intelligent systems that solve real-world problems.
        </Text>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          My journey in AI began during my undergraduate studies, where I developed a keen interest
          in neural networks and their applications. Since then, I've worked on various projects
          ranging from computer vision systems to natural language processing applications.
        </Text>
      </Section>

      <Section>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Skills & Expertise
        </Subtitle>
        <SkillsGrid
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCard
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <SkillTitle>{category}</SkillTitle>
              <SkillList>
                {items.map((skill) => (
                  <SkillItem key={skill}>{skill}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Section>

      <Section>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          Education & Experience
        </Subtitle>
        <Text
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          I hold a Master's degree in Computer Science with a specialization in Machine Learning.
          Throughout my academic and professional career, I've had the opportunity to work with
          leading tech companies and research institutions, contributing to cutting-edge AI projects.
        </Text>
      </Section>
    </AboutContainer>
  );
};

export default About; 