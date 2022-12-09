import { Box, Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import LicensesAndCertifications from './LicensesAndCertifications';

interface Skill {
  title: string;
  labels: string[];
}

function Skills() {
  const skills: Skill[] = [
    {
      title: 'Programming, scripting, and markup languages',
      labels: [
        'Python',
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'C',
        'C++',
        'Java',
        'VBA',
        'PowerShell',
        'Bash/Shell',
        'XML',
        'Go',
      ],
    },
    {
      title: 'Databases',
      labels: [
        'SQLite',
        'PostgreSQL',
        'MongoDB',
        'MySQL',
        'Microsoft SQL Server',
      ],
    },
    {
      title: 'Cloud platforms',
      labels: ['AWS', 'Microsoft Azure', 'Google Cloud Platform', 'Heroku'],
    },
    {
      title: 'Web frameworks and technologies',
      labels: [
        'Node.js',
        'Django',
        'Flask',
        'jQuery',
        'React',
        'Vue.js',
        'Bootstrap',
      ],
    },
    {
      title: 'Other frameworks and libraries',
      labels: [
        'OpenCV',
        'NumPy',
        'Pandas',
        'Keras',
        'TensorFlow',
        'Scikit-learn',
        'Apache Camel',
        'Apache ActiveMQ',
      ],
    },
    {
      title: 'Other tools',
      labels: ['npm', 'Docker', 'Ansible', 'Node-RED'],
    },
    {
      title: 'Integrated development environment',
      labels: [
        'Visual Studio Code',
        'Visual Studio',
        'Vim',
        'Emacs',
        'Eclipse',
        'Android Studio',
      ],
    },
  ];

  return (
    <Box>
      <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
        Skills
      </Typography>

      {skills.map((skill) => (
        <Box m={2}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant='h5' component='div' mb={1.5}>
                {skill.title}
              </Typography>
              <Stack
                direction={{ xs: 'column', sm: 'column', md: 'row' }}
                spacing={1}
              >
                {skill.labels.map((label) => (
                  <Chip label={label} />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      ))}

      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              Licenses and certifications
            </Typography>
            <LicensesAndCertifications />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}

export default Skills;
