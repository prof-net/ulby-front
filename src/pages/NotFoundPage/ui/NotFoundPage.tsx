import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './NotFoundPage.module.scss'

interface IProps {
  className?: string
}
export const NotFoundPage: React.FC<IProps> = ({ className }) => {
  return (
        <div className={classNames(classes.NotFound, {}, [className])}>
            Страница не найдена
        </div>
  )
}
