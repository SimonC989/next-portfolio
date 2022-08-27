import NervComms from '../Assets/NervComms.png';
import AdminDashboard from '../Assets/AdminDashboard.png';
import Description from '../Assets/Description.png';
import Abodely from '../Assets/Abodely.png';

export const projectList = [
  {
    title: 'Nerv Comms',
    description:
      'Nerv Comms is a communications web app being built for dental practices to be an all-inclusive package. Most medical practices are underserved by modern technology, where they would need to manage multiple software services to fill their needs. We\'re trying to solve that problem by creating a single app that allows calling and texting patients, scheduling, and automated reminders. This is being developed to solve the frustration that my best friend sees in his brother in laws practice where not only are they dealing with multiple tools from different companies, but those tools aren’t even tailored to his use case. The team currently consists of me creating the front end, while my best friend manages the backend.',
    image: NervComms,
    alt: 'AdminDashboard landing page example',
    url: [],
  },
  {
    title: 'Admin Dashboard',
    description:
      'A admin dashboard made to learn tailwind since I wanted to move away from styled-components, along with try out Syncfusion for UI components. This is also the first bigger project made outside of smaller components like a week\'s weather or a friend filter.',
    image: AdminDashboard,
    alt: 'AdminDashboard landing page example',
    url: [
      { link: 'retail-admin-dashboard.netlify.app', label: 'Admin Dashboard Demo' },
    ],
  },
  {
    title: 'Description & Search Module',
    description:
      'The main information area replicated from a popular home hosting site back. As a team, we were tasked with replicating the frontend of a single listing and break each part of the page into microservices. I implemented the description and header (Nav Module) mircoservices and deployed them to AWS.',
    image: Description,
    alt: 'Description example',
    url: [],
  },
  {
    title: 'Abodely Module',
    description:
      'ABC',
    image: Abodely,
    alt: 'Abodely example',
    url: [],
  },
];
