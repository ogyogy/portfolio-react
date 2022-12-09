import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CameraIcon from '@mui/icons-material/Camera';
import CloudIcon from '@mui/icons-material/Cloud';
import ComputerIcon from '@mui/icons-material/Computer';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SearchIcon from '@mui/icons-material/Search';
import SensorsIcon from '@mui/icons-material/Sensors';
import StorageIcon from '@mui/icons-material/Storage';
import TerminalIcon from '@mui/icons-material/Terminal';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

interface LicenseOrCertification {
  name: string;
  year: number;
  month: number;
  icon: JSX.Element;
}

export default function LicensesAndCertifications() {
  const monthArray: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const licenseOrCertificationList: LicenseOrCertification[] = [
    {
      name: '基本情報技術者試験',
      year: 2013,
      month: 6,
      icon: <ComputerIcon />,
    },
    {
      name: '普通自動車第一種運転免許',
      year: 2017,
      month: 9,
      icon: <DirectionsCarIcon />,
    },
    {
      name: 'IoTシステム技術検定中級',
      year: 2018,
      month: 12,
      icon: <SensorsIcon />,
    },
    {
      name: 'Python試験Python3エンジニア認定基礎試験',
      year: 2018,
      month: 12,
      icon: <TerminalIcon />,
    },
    { name: 'SEO検定2級', year: 2019, month: 5, icon: <SearchIcon /> },
    { name: 'LPIC-1', year: 2019, month: 7, icon: <StorageIcon /> },
    {
      name: 'JDLA Deep Learning for GENERAL 2019 #3',
      year: 2019,
      month: 11,
      icon: <PsychologyIcon />,
    },
    {
      name: '画像処理エンジニア検定エキスパート',
      year: 2020,
      month: 12,
      icon: <CameraIcon />,
    },
    {
      name: '品質管理検定3級',
      year: 2021,
      month: 4,
      icon: <EngineeringIcon />,
    },
    {
      name: '3級ファイナンシャル・プランニング技能士',
      year: 2021,
      month: 10,
      icon: <AttachMoneyIcon />,
    },
    {
      name: 'PythonZen & PEP 8 検定試験',
      year: 2022,
      month: 3,
      icon: <TerminalIcon />,
    },
    {
      name: '応用情報技術者試験',
      year: 2022,
      month: 6,
      icon: <ComputerIcon />,
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      year: 2022,
      month: 8,
      icon: <CloudIcon />,
    },
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      year: 2022,
      month: 8,
      icon: <CloudIcon />,
    },
  ];

  return (
    <List sx={{ width: '100%' }}>
      {licenseOrCertificationList.map((licenseOrCertification) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>{licenseOrCertification.icon}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={licenseOrCertification.name}
            secondary={`${monthArray[licenseOrCertification.month - 1]}, ${
              licenseOrCertification.year
            }`}
          />
        </ListItem>
      ))}
    </List>
  );
}
