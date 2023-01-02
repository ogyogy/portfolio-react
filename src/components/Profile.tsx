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
      <Typography variant='h5'>Security architect</Typography>
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
            <Typography>AWSを活用したIoTサービス開発に従事。</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            2019 - 2022
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
              情報システム部門でDX推進に従事。業務支援システムの開発や画像処理の技術検証、組合せ最適化の研究などを担当。
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            2023 -
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant='h6' component='span'>
              ITサービス企業
            </Typography>
            <Typography>TBD</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default Profile;
