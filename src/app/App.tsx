import { Outlet } from 'react-router-dom'
import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Navbar'
import { useTheme } from 'app/providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar'
import { type FC } from 'react'

const App: FC = () => {
  const { theme } = useTheme()

  return <div className={classNames('app', {}, [theme ?? ''])}>
        <Navbar/>
        <div className="content-page">
            <Sidebar/>
            <div className="page-wrapper">
                <Outlet/>
            </div>
        </div>
    </div>
}

export default App
