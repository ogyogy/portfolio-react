import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab';
import { Box, IconButton, Typography } from '@mui/material';

function Profile() {
  return (
    <Box>
      <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
        Profile
      </Typography>
      <Typography variant='h5'>Software engineer</Typography>
      <IconButton href='https://github.com/ogyogy'>
        <GitHubIcon></GitHubIcon>
      </IconButton>
      <Timeline position='alternate'>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            2016 - 2018
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6' component='span'>
              大学院情報科学研究科
            </Typography>
            <Typography>
              カメラ映像を用いた人物追跡手法について研究。
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            2018 - 2019
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6' component='span'>
              総合電機メーカー
            </Typography>
            <Typography>
              SI事業のIoTシステム開発を担う部署で、AWSを活用したIoTサービス開発を担当。詳細設計からリリースまでの一連のフェーズを経験。
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            2019 -
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6' component='span'>
              非鉄金属メーカー
            </Typography>
            <Typography>
              DX推進担当として、作業指示書作成支援システムの開発や画像処理技術の実証実験、組み合わせ最適化の研究など幅広い業務でアジャイル開発を経験。
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default Profile;
