import GitHubIcon from '@mui/icons-material/GitHub'
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography
} from '@mui/material'

function Works() {
  return (
    <Box>
      <Typography variant='h3' sx={{ fontWeight: 'bold' }}>
        Works
      </Typography>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              ogyogy&#39;s portfolio
            </Typography>
            <Typography mb={1.5}>このWebサイト。</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='TypeScript' />
              <Chip label='React.js' />
              <Chip label='Docker' />
              <Chip label='Visual Studio Code' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/portfolio-react'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              atcoder-tester
            </Typography>
            <Typography mb={1.5}>
              Atcoderの自動テストをサポートするPythonライブラリ。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='Python' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/atcoder-tester'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              雨降り通知Bot
            </Typography>
            <Typography mb={1.5}>
              指定時刻に降水確率をPush通知するLINE Bot。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='JavaScript' />
              <Chip label='AWS' />
              <Chip label='Node.js' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/line-bot-notify-rain'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              カフェ検索Bot
            </Typography>
            <Typography mb={1.5}>
              位置情報を送信すると周辺のカフェを返信するLINE Bot。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='JavaScript' />
              <Chip label='Google Cloud Platform' />
              <Chip label='Node.js' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/line-bot-search-cafe'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              AWS Bugets Bot
            </Typography>
            <Typography mb={1.5}>
              メッセージを送信するとAWS Budgetsで設定した予算を返信するLINE
              Bot。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='JavaScript' />
              <Chip label='Python' />
              <Chip label='AWS' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/line-bot-aws-budgets'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              ごみ収集日通知Bot
            </Typography>
            <Typography mb={1.5}>ごみ収集日をPush通知するLINE Bot。</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='JavaScript' />
              <Chip label='AWS' />
              <Chip label='Node.js' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/line-bot-trash-day'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
      <Box m={2}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant='h5' component='div' mb={1.5}>
              filecollector
            </Typography>
            <Typography mb={1.5}>
              ファイルの拡張子でフォルダを分けるPythonライブラリ。
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
              <Chip label='Python' />
            </Stack>
          </CardContent>
          <CardActions>
            <IconButton href='https://github.com/ogyogy/filecollector'>
              <GitHubIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Box>
  )
}

export default Works
