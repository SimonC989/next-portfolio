import { StaticImageData } from 'next/image';
import NervComms from '../Assets/NervComms.png';
import AdminDashboard from '../Assets/AdminDashboard.png';
import Description from '../Assets/Description.png';
import SingleList from '../Assets/SingleList.png';
import NavGif from '../Assets/NavModule.gif';
import Abodely from '../Assets/Abodely.png';
import NewRelic from '../Assets/NewRelic.png';
import Cassandra from '../Assets/Cassandra.png';
import Postgres from '../Assets/Postgres.png';
import BoardNite from '../Assets/BoardNite.png';
import BoardNiteGif from '../Assets/BoardNite.gif';

export interface IProjectList {
  title: string,
  description: string,
  image: StaticImageData,
  imageList?: {
    image: StaticImageData,
    alt: string
  }[],
  alt: string,
  url: {
    label: string,
    link: string
  }[],
  github: {
    label: string,
    repo: string
  }[],
}

export const projectList = [
  {
    title: 'Nerv Comms',
    description:
      'Nerv Comms is a communications web app being built for dental practices to be an all-inclusive package. Most medical practices are underserved by modern technology, where they would need to manage multiple software services to fill their needs. We\'re trying to solve that problem by creating a single app that allows calling and texting patients, scheduling, and automated reminders. This is being developed to solve the frustration that my best friend sees in his brother in laws practice where not only are they dealing with multiple tools from different companies, but those tools aren’t even tailored to his use case. The team currently consists of me creating the front end, while my best friend manages the backend.\n This is where I spend most of my time beside the occasional side project that catches my attention. I prefer to do a complete application then project types since it feels like it would replicate a production service more. It also leads to discovering more new and interesting problems that come from complications implimenting multiple features and how they collide sometimes. Smaller projects felt like its mostly made to discover a few hurdles you might face but I felt most of the time spent was towards rendering components and CSS.',
    image: NervComms,
    imageList: [
      {
        image: NervComms,
        alt: 'Nerv Comms messenging page example',
      },
    ],
    alt: 'Nerv Comms messenging page example',
    url: [],
    github: [],
  },
  {
    title: 'Admin Dashboard',
    description:
      'A admin dashboard made to learn tailwind since I wanted to move away from styled-components, along with try out Syncfusion for UI components. This is the first project made outside of smaller components since coming back to coding and learning hooks since React moved away from class components. ',
    image: AdminDashboard,
    imageList: [
      {
        image: AdminDashboard,
        alt: 'Admin Dashboard landing page example',
      },
    ],
    alt: 'Admin Dashboard landing page example',
    url: [
      { label: 'Admin Dashboard Demo', link: 'https://retail-admin-dashboard.netlify.app' },
    ],
    github: [
      {
        label: 'Dashboard',
        repo: 'https://github.com/SimonC989/Dashboard',
      },
    ],
  },
  {
    title: 'Description & Search Module',
    description:
      'As a team, we were tasked with replicating the frontend of a single listing from a popular home hosting service, and break each part of the page into microservices. I implemented the description and header (Nav Module) mircoservices and deployed them to AWS. \n The description-module is a component that allows a homeowner to showcase their home\'s amenities and great attractions around, but also allows potential guest to have a general view and expectation of their host and lodging. \n The Nav Module is a header component with a mock search component to create a more complete page when all microservices are combined.',
    image: Description,
    imageList: [
      {
        image: Description,
        alt: 'Description Module example',
      },
      {
        image: NavGif,
        alt: 'Nav Module example',
      },
      {
        image: SingleList,
        alt: 'Single listing composed from all microservices combined',
      },
    ],
    alt: 'Description example',
    url: [],
    github: [
      {
        label: 'Description Module',
        repo: 'https://github.com/lodge-io/description-module',
      },
      {
        label: 'Nav Module',
        repo: 'https://github.com/lodge-io/nav-module',
      },
    ],
  },
  {
    title: 'Abodely Module',
    description: 'The similar homes module from Abode.ly was scaled and deployed through AWS EC2 instances to meet web-scale demand. An RDBMS(PostgreSQL) and a NoSQL DBMS(Apache Cassandra) was compared for optimal query speeds and their abilities to bulk load data in a timely manner. PostgreSQL was decided because a complex query was required and time constraint. Cassandra is known to be quick for reads but setting up clusters that allow for a complex query for more than two columns would take a significant amount of time.',
    image: Abodely,
    imageList: [
      {
        image: Abodely,
        alt: '',
      },
      {
        image: NewRelic,
        alt: '',
      },
      {
        image: Cassandra,
        alt: '',
      },
      {
        image: Postgres,
        alt: '',
      },
    ],
    alt: 'Abodely example',
    url: [],
    github: [
      {
        label: 'Abodely Backend',
        repo: 'https://github.com/abodely/similar-homes-module',
      },
    ],
  },
  {
    title: 'BoardNite',
    description: '',
    image: BoardNite,
    imageList: [
      {
        image: BoardNite,
        alt: '',
      },
      {
        image: BoardNiteGif,
        alt: '',
      },
    ],
    alt: '',
    url: [],
    github: [
      {
        label: 'BoardNite',
        repo: 'https://github.com/SimonC989/MVP',
      },
    ],
  },
];
