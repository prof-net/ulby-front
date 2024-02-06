import React, { useState } from 'react'
import classes from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import Button from 'shared/ui/Button/Button'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
        <div className={classNames(classes.Sidebar, { [classes.Collapsed]: collapsed })}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={classes.Switchers}>
                <ThemeSwitcher />
            </div>
        </div>
  )
}
