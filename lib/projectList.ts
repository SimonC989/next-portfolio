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
import NextBankLanding from '../Assets/NextBankLanding.png';
import NextBankProduct from '../Assets/NextBankProduct.png';
import NextBankTestimonials from '../Assets/NextBankTestimonials.png';

export interface ISocial {
  label: string,
  link: string,
  icon?: TablerIcon,
}

export type IImageList = {
  image: StaticImageData,
  alt: string,
};

export interface IProjectList {
  title: string,
  description: string,
  image: StaticImageData,
  alt: string,
  imageList?: IImageList[],
  url: ISocial[],
  github: ISocial[],
}

export const projectList = [
  {
    title: 'Nerv Comms',
    description:
      'Nerv Comms is a communications web app being built for dental practices to be an all-inclusive package. Most medical practices are underserved by modern technology, where they would need to manage multiple software services to fill their needs. We\'re trying to solve that problem by creating a single app that allows calling and texting patients, scheduling, and automated reminders. This is being developed to solve the frustration that my best friend sees in his brother in laws practice where not only are they dealing with multiple tools from different companies, but those tools aren’t even tailored to his use case. The team currently consists of me creating the frontend, while my best friend manages the backend.\n This is where I spend most of my time besides the occasional side project that catches my attention. I prefer to make a complete application than project types since it feels like it would replicate a production service more. It also leads to discovering more new and interesting problems that come from complications implementing multiple features and how they collide sometimes. Smaller projects felt like it is mostly made to discover a few hurdles you might face but I don’t like how most of the time spent was towards just rendering components, simple CSS, and setting up a new project.',
    image: NervComms,
    alt: 'Nerv Comms messenging page',
    imageList: [{
        image: NervComms,
        alt: 'Nerv Comms messenging page',
      },
    ],
    url: [],
    github: [],
  },
  {
    title: 'Next Bank',
    description:
      '',
    image: NextBankLanding,
    alt: 'Next Bank landing page',
    imageList: [{
        image: NextBankLanding,
        alt: 'Next Bank landing page',
      }, {
        image: NextBankProduct,
        alt: 'Next Bank product section',
      }, {
        image: NextBankTestimonials,
        alt: 'Next Bank Testimonials',
      },
    ],
    url: [{
        label: 'Next Bank',
        link: 'https://next-bank.netlify.app/',
      },
    ],
    github: [{
        label: 'Next Bank',
        link: 'https://github.com/SimonC989/NextBank',
      },
    ],
  },
  {
    title: 'Admin Dashboard',
    description:
      'An admin dashboard was made to learn tailwind since I wanted to move away from styled-components, along with trying out Syncfusion for UI components. This is the first project made outside of smaller components since coming back to coding and learning hooks since React moved away from class components. Probably won’t use Syncfusion again since the library size is so huge and would be better off using smaller individual component libraries.',
    image: AdminDashboard,
    alt: 'Admin Dashboard landing page',
    imageList: [{
        image: AdminDashboard,
        alt: 'Admin Dashboard landing page',
      }, {
        image: DashboardAreaChart,
        alt: 'Area Chart',
      }, {
        image: DashboardEmployees,
        alt: 'Employee list',
      },
    ],
    url: [
      { label: 'Admin Dashboard Demo', link: 'https://retail-admin-dashboard.netlify.app' },
    ],
    github: [{
        label: 'Dashboard',
        link: 'https://github.com/SimonC989/Dashboard',
      },
    ],
  },
  {
    title: 'Description & Search Module',
    description:
      'As a team, we were tasked with replicating the frontend of a single listing from a popular home hosting service and breaking each part of the page into microservices. I implemented the description and header (Nav Module) microservices and deployed them to AWS. \n The description module is a component that allows a homeowner to showcase their home\'s amenities and great attractions around, but also allows potential guests to have a general view and expectation of their host and lodging. \n The Nav Module is a header component with a mock search component to create a more complete page when all microservices are combined.',
    image: Description,
    alt: 'Description example',
    imageList: [{
        image: Description,
        alt: 'Description Module',
      }, {
        image: NavGif,
        alt: 'Nav Module',
      }, {
        image: SingleList,
        alt: 'Single listing composed from all microservices combined',
      },
    ],
    url: [],
    github: [{
        label: 'Description Module',
        link: 'https://github.com/lodge-io/description-module',
      }, {
        label: 'Nav Module',
        link: 'https://github.com/lodge-io/nav-module',
      },
    ],
  },
  {
    title: 'Abodely Module',
    description:
      'The similar homes module from Abode.ly was scaled and deployed through AWS EC2 instances to meet web-scale demand. An RDBMS(PostgreSQL) and a NoSQL DBMS(Apache Cassandra) were compared for optimal query speeds and their abilities to bulk load data in a timely manner. PostgreSQL was decided because a complex query was required and time constraints. Cassandra is known to be quick for reads but setting up clusters that allow for a complex query for more than two columns would take a significant amount of time. NGINX was used for load balancing and a simple Redis implementation was done to further improve throughput and response time by caching the most recent queries.',
    image: Abodely,
    alt: 'Abodely example',
    imageList: [{
        image: Abodely,
        alt: 'K6 load testing',
      }, {
        image: NewRelic,
        alt: 'New Relic testing on service deployed on AWS',
      }, {
        image: Cassandra,
        alt: 'Cassandra query test',
      }, {
        image: Postgres,
        alt: 'Postgres query test',
      },
    ],
    url: [],
    github: [{
        label: 'Abodely Backend',
        link: 'https://github.com/abodely/similar-homes-module',
      },
    ],
  },
  {
    title: 'BoardNite',
    description:
      'BoardNite was a two-day MVP sprint. I decided on a scoreboard since it felt nice to have for the number of rounds and different titles we were playing at the time. Yes, the CSS ain’t quite there.',
    image: BoardNite,
    alt: 'BoardNite landing page',
    imageList: [{
        image: BoardNite,
        alt: 'BoardNite landing page',
      }, {
        image: BoardNiteGif,
        alt: 'BoardNite in action',
      },
    ],
    url: [],
    github: [{
        label: 'BoardNite',
        link: 'https://github.com/SimonC989/MVP',
      },
    ],
  },
];
