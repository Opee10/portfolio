import React from 'react';
import { CgController, CgData, CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Research',
    hash: '#research',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;


export const experiencesData = [
  // Education Segment
  {
    title: 'B.Sc. in Computer Science & Engineering',
    place: 'American International University-Bangladesh (AIUB)',
    location: 'Dhaka, Bangladesh',
    description:
      'Major: Information Systems | CGPA: 3.79/4.00 | AIUB Academic Scholarship | Honorable Dean’s List Award',
    icon: React.createElement(LuGraduationCap),
    date: 'January, 2020 – June, 2023',
  },
  {
    title: 'Higher Secondary Certificate',
    place: 'Shahid Syed Nazrul Islam College, Mymensingh',
    location: '',
    description: 'Group: Science | GPA: 4.58/5.00',
    icon: React.createElement(CgController),
    date: '2017 – 2019',
  },

  // Job Experiences Segment
  {
    title: 'Jr. Software Quality Assurance Engineer',
    place: 'TechnoNext Software Limited, Dhaka-1212',
    location: '',
    description:
      'Key Responsibilities: Conducting API and performance testing, executing test cases and bug reports, collaborating with developers.',
    icon: React.createElement(CgWorkAlt),
    date: 'July, 2024 – Present',
  },
  {
    title: 'Research Intern',
    place: 'Advanced Machine Intelligence Research Lab - AMIR',
    location: 'Remote',
    description:
      'Key Responsibilities: Developing and implementing machine learning models, conducting experiments on real-world datasets, analyzing results and refining models, collaborating with a team of researchers to solve complex problems, and contributing to the publication of research findings.',
    icon: React.createElement(CgData),
    date: 'July, 2024 - Present',
  },
  {
    title: 'Trainee Software Quality Assurance Engineer',
    place: 'TechnoNext Software Limited, Dhaka-1212',
    location: '',
    description:
      'Key Responsibilities: Identified and reported software defects, performed API testing, and worked closely with developers.',
    icon: React.createElement(FaReact),
    date: 'January, 2024 – June, 2024',
  },
  {
    title: 'Software Quality Assurance Engineer – Intern',
    place: 'Aqualink Bangladesh Limited, Dhaka-1213',
    location: '',
    description:
      'Key Responsibilities: Executed test cases to ensure software functionality, executed bug reports, validated software products through hands-on manual testing.',
    icon: React.createElement(CgData),
    date: 'September , 2023 – December, 2023',
  },
] as const;

export const skillsData = {
  programmingLanguages: [
    'Python',
    'C++',
    'Java',
  ],
  concepts: [
    'OOP',
    'SDLC',
    'STLC',
  ],
  dataScienceAndAI: [
    'Data Visualization',
    'Data Analysis',
    'Computer Vision',
    'Deep Learning',
    'Machine Learning',
    'SVM',
    'Random Forest',
    'NumPy',
    'Pandas',
    'Scikit-learn',
    'Seaborn',
  ],
  testing: [
    'Performance Testing',
    'API Testing',
  ],
};

export const researchData = {
  journalPapers: [
    {
      title:
        "ELW-CNN: An Extremely Lightweight Convolutional Neural Network for Enhancing Interoperability in Colon and Lung Cancer Identification Using Explainable AI",
      authors: "S. A. Opee, A. A. Eva, A. T. Noor, S. M. Hasan, and M. F. Mridha",
      status: "Submitted",
    },
    {
      title: "State-of-the-Art Posture Detection Techniques: A Review of Methods and Applications",
      authors: "A. A. Eva, S. A. Opee, and M. F. Mridha",
      status: "In process (70%)",
    },
    {
      title:
        "The Impact of Deep Learning and Computer Vision on Plant Leaf Disease Detection: A Comprehensive Review",
      authors: "A. A. Eva, S. A. Opee, and M. F. Mridha",
      status: "In process (70%)",
    },
  ],
  conferencePapers: [
    {
      title: "Predictive Analytics for Dementia: Machine Learning on Healthcare Data",
      authors:
        "S. A. Opee, N. Fahad, F. Jahan, A. Sen, R. Ahmed, M. J. Hossen, M. K. Morol, and M. A.-A. Jubair",
      status: "Accepted",
    },
    {
      title:
        "CNNRF-Ensemble: A Multifaced Approach For Predicting White Spot Syndrome Virus In Shrimp Farming",
      authors: "S. A. Opee, et al.",
      status: "Accepted",
    },
  ],
  bookChapters: [
    {
      title: "Automated Plant Diseases Analysis Using Lightweight Deep Learning Models",
      authors: "S. A. Opee, A. A. Eva, S. M. Hasan, A. T. Noor",
      status: "Submitted",
    },
    {
      title:
        "Medical Imaging: MRI Brain Tumor Classification Using Convolutional Neural Networks (CNNs)",
      authors: "S. A. Opee, A. A. Eva, M. F. Mridha",
      status: "Ready to Submit",
    },
  ],
};


