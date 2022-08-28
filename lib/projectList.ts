import { StaticImageData } from 'next/image';
import { TablerIcon } from '@tabler/icons';
import NervComms from '../Assets/NervComms.png';
import AdminDashboard from '../Assets/AdminDashboard.png';
import DashboardAreaChart from '../Assets/DashboardAreaChart.png';
import DashboardEmployees from '../Assets/DashboardEmployees.png';
import Description from '../Assets/Description.png';
import SingleList from '../Assets/SingleList.png';
import NavGif from '../Assets/NavModule.gif';
import Abodely from '../Assets/Abodely.png';
import NewRelic from '../Assets/NewRelic.png';
import Cassandra from '../Assets/Cassandra.png';
import Postgres from '../Assets/Postgres.png';
import BoardNite from '../Assets/BoardNite.png';
import BoardNiteGif from '../Assets/BoardNite.gif';

export interface ISocial {
  label: string,
  link: string,
  icon?: TablerIcon,
}

export interface IProjectList {
  title: string,
  description: string,
  image: StaticImageData,
  alt: string,
  imageList?: {
    image: StaticImageData,
    alt: string
  }[],
  url: ISocial[],
  github: ISocial[],
}

export const projectList = [
  {
    title: 'Nerv Comms',
    description:
      'Nerv Comms is a communications web app being built for dental practices to be an all-inclusive package. Most medical practices are underserved by modern technology, where they would need to manage multiple software services to fill their needs. We\'re trying to solve that problem by creating a single app that allows calling and texting patients, scheduling, and automated reminders. This is being developed to solve the frustration that my best friend sees in his brother in laws practice where not only are they dealing with multiple tools from different companies, but those tools aren’t even tailored to his use case. The team currently consists of me creating the front end, while my best friend manages the backend.\n This is where I spend most of my time beside the occasional side project that catches my attention. I prefer to do a complete application then project types since it feels like it would replicate a production service more. It also leads to discovering more new and interesting problems that come from complications implimenting multiple features and how they collide sometimes. Smaller projects felt like its mostly made to discover a few hurdles you might face but I felt most of the time spent was towards rendering components and CSS.',
    image: NervComms,
    alt: 'Nerv Comms messenging page',
    imageList: [
      {
        image: NervComms,
        alt: 'Nerv Comms messenging page',
      },
    ],
    url: [],
    github: [],
  },
  {
    title: 'Admin Dashboard',
    description:
      'A admin dashboard made to learn tailwind since I wanted to move away from styled-components, along with try out Syncfusion for UI components. This is the first project made outside of smaller components since coming back to coding and learning hooks since React moved away from class components. ',
    image: AdminDashboard,
    alt: 'Admin Dashboard landing page',
    imageList: [
      {
        image: AdminDashboard,
        alt: 'Admin Dashboard landing page',
      },
      {
        image: DashboardAreaChart,
        alt: 'Area Chart',
      },
      {
        image: DashboardEmployees,
        alt: 'Employee list',
      },
    ],
    url: [
      { label: 'Admin Dashboard Demo', link: 'https://retail-admin-dashboard.netlify.app' },
    ],
    github: [
      {
        label: 'Dashboard',
        link: 'https://github.com/SimonC989/Dashboard',
      },
    ],
  },
  {
    title: 'Description & Search Module',
    description:
      'As a team, we were tasked with replicating the frontend of a single listing from a popular home hosting service, and break each part of the page into microservices. I implemented the description and header (Nav Module) mircoservices and deployed them to AWS. \n The description-module is a component that allows a homeowner to showcase their home\'s amenities and great attractions around, but also allows potential guest to have a general view and expectation of their host and lodging. \n The Nav Module is a header component with a mock search component to create a more complete page when all microservices are combined.',
    image: Description,
    alt: 'Description example',
    imageList: [
      {
        image: Description,
        alt: 'Description Module',
      },
      {
        image: NavGif,
        alt: 'Nav Module',
      },
      {
        image: SingleList,
        alt: 'Single listing composed from all microservices combined',
      },
    ],
    url: [],
    github: [
      {
        label: 'Description Module',
        link: 'https://github.com/lodge-io/description-module',
      },
      {
        label: 'Nav Module',
        link: 'https://github.com/lodge-io/nav-module',
      },
    ],
  },
  {
    title: 'Abodely Module',
    description: 'The similar homes module from Abode.ly was scaled and deployed through AWS EC2 instances to meet web-scale demand. An RDBMS(PostgreSQL) and a NoSQL DBMS(Apache Cassandra) was compared for optimal query speeds and their abilities to bulk load data in a timely manner. PostgreSQL was decided because a complex query was required and time constraint. Cassandra is known to be quick for reads but setting up clusters that allow for a complex query for more than two columns would take a significant amount of time.',
    image: Abodely,
    alt: 'Abodely example',
    imageList: [
      {
        image: Abodely,
        alt: 'K6 load testing',
      },
      {
        image: NewRelic,
        alt: 'New Relic testing on service deployed on AWS',
      },
      {
        image: Cassandra,
        alt: 'Cassandra query test',
      },
      {
        image: Postgres,
        alt: 'Postgres query test',
      },
    ],
    url: [],
    github: [
      {
        label: 'Abodely Backend',
        link: 'https://github.com/abodely/similar-homes-module',
      },
    ],
  },
  {
    title: 'BoardNite',
    description: '',
    image: BoardNite,
    alt: '',
    imageList: [
      {
        image: BoardNite,
        alt: 'BoardNite landing page',
      },
      {
        image: BoardNiteGif,
        alt: 'BoardNite in action',
      },
    ],
    url: [],
    github: [
      {
        label: 'BoardNite',
        link: 'https://github.com/SimonC989/MVP',
      },
    ],
  },
];
