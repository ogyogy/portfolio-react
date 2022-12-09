import { DarkMode, LightMode } from '@mui/icons-material';
import {
  AppBar,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import BasicTabs from './components/BasicTabs';

function App() {
  // OSがダークモードの設定か取得
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  // 画面をダークモードにするかを表す状態
  const [isDarkMode, setDarkMode] = useState(prefersDarkMode);

  // 画面の状態を設定
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode]
  );

  // ダークモードとライトモードの切り替え
  const switchDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // 画面のモードが読み込み途中に変化したときに状態を切り替え
  // prefersDarkModeの値が変化したときに実行
  useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* タイトルバー */}
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            ogyogy&#39;s portfolio
          </Typography>
          <IconButton onClick={switchDarkMode} color='inherit'>
            {/* 画面モードにより表示するアイコンを切り替え */}
            {isDarkMode ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* タブを含む本文 */}
      <BasicTabs />
    </ThemeProvider>
  );
}

export default App;
