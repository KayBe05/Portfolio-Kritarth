import { 
  Terminal, 
  Code, 
  PenTool, 
  Server, 
  Filter 
} from 'lucide-react';

export const technologies = [
  { 
    name: 'Python', 
    icon: Terminal, 
    color: 'bg-blue-500',
    description: 'Advanced programming with Python for data science and backend development'
  },
  { 
    name: 'React', 
    icon: Code, 
    color: 'bg-cyan-500',
    description: 'Building interactive and responsive web applications'
  },
  { 
    name: 'Machine Learning', 
    icon: PenTool, 
    color: 'bg-purple-500',
    description: 'Developing intelligent systems using advanced ML algorithms'
  },
  { 
    name: 'Cloud Computing', 
    icon: Server, 
    color: 'bg-green-500',
    description: 'Designing scalable cloud-native solutions with AWS and GCP'
  },
  { 
    name: 'Data Science', 
    icon: Filter, 
    color: 'bg-indigo-500',
    description: 'Advanced data analysis and visualization techniques'
  }
];
