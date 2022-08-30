import { Carousel } from '@mantine/carousel';
import { Box, Title, Modal, Button, Center, Text } from '@mantine/core';
import { IconChevronDown, IconChevronUp } from '@tabler/icons';
import { EmblaCarouselType } from 'embla-carousel-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { projectList } from '../../lib/projectList';
import Project, { IModalCarousel } from './Project/Project';

export function useAnimationOffsetEffect(transitionDuration: number, embla?: EmblaCarouselType) {
  useEffect(() => {
    if (embla) {
      window.setTimeout(() => {
        embla.reInit();
      }, transitionDuration);
    }
  }, [embla, transitionDuration]);
}

const Projects: React.FC = (): JSX.Element => {
  const [amountShown, setAmountShown] = useState(3);
  const [active, setActive] = useState(false);
  const [modalCarousel, setModalCarousel] = useState<IModalCarousel[]>([]);
  const [embla, setEmbla] = useState<EmblaCarouselType>();
  const TRANSITION_DURATION = 200;

  useAnimationOffsetEffect(TRANSITION_DURATION, embla);

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
        color: theme.colorScheme === 'dark' ? theme.white : theme.colors.dark[1],
        padding: '40px 0 8px',
      })}
    >
      <Title align="center" weight={400}>
        Projects
      </Title>
      {projectList.slice(0, amountShown).map((project, i) => (
        <Project
          project={project}
          setModalCarousel={setModalCarousel}
          setActive={setActive}
          key={project.title}
          index={i}
        />
      ))}
      <Modal
        opened={active}
        onClose={() => setActive(false)}
        centered
        size="80%"
        transitionDuration={TRANSITION_DURATION}
      >
        <Carousel
          getEmblaApi={setEmbla}
          withIndicators
          slideGap="sm"
          styles={{
            control: {
              '&[data-inactive]': {
                opacity: 0,
                cursor: 'default',
              },
            },
          }}
        >
          {modalCarousel?.map((image, i) =>
            <Carousel.Slide key={i}>
              <Text pb="xs">{image.alt}</Text>
              <Image src={image.image} height={900} width={1600} />
            </Carousel.Slide>
          )}
        </Carousel>
      </Modal>
      <Center mb="md">
        {amountShown === 3 ? (
          <Button
            variant="subtle"
            onClick={() => showMore()}
            rightIcon={<IconChevronDown size={20} />}
            styles={(theme) => ({
              root: {
                color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[7],
                '&:hover': {
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.dark[3],
                },
              },
            })}
          >
            Show More
          </Button>
          ) : (
          <Button
            variant="subtle"
            onClick={() => showLess()}
            rightIcon={<IconChevronUp size={20} />}
            styles={(theme) => ({
              root: {
                color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.dark[7],
                '&:hover': {
                  backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.dark[3],
                },
              },
            })}
          >
            Show Less
          </Button>
        )}
      </Center>
    </Box>
  );
};

export default Projects;
