import { Box, Title, Modal, Button, Center } from '@mantine/core';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import { projectList } from '../../lib/projectList';
import Project from './Project/Project';

export interface IModal {
  image: string | StaticImageData,
  alt: string,
}

const Projects: React.FC = () => {
  const [amountShown, setAmountShown] = useState(3);
  const [active, setActive] = useState(false);
  const [modalImage, setModalImage] = useState<IModal>({
    image: '',
    alt: '',
  });

  const showMore = () => {
    setAmountShown(projectList.length);
  };

  const showLess = () => {
    setAmountShown(3);
  };

  return (
    <Box
      id="projects"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.dark[4],
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[2],
        padding: '40px 0 8px',
      })}
    >
      <Title align="center" weight={400}>
        Projects
      </Title>
      {projectList.slice(0, amountShown).map((project, i) => (
        <Project
          project={project}
          setModalImage={setModalImage}
          setActive={setActive}
          key={project.title}
          index={i}
        />
      ))}
      <Modal
        opened={active}
        onClose={() => setActive(false)}
        title={modalImage.alt}
        centered
        size="80%"
      >
        <Image src={modalImage.image} alt={modalImage.alt} height={900} width={1600} />
      </Modal>
      <Center mb="md">
        {amountShown === 3 ? (
          <Button variant="subtle" onClick={() => showMore()}>Show More</Button>
          ) : (
          <Button variant="subtle" onClick={() => showLess()}>Show Less</Button>
        )}
      </Center>
    </Box>
  );
};

export default Projects;
