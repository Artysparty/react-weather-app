import React from "react";
import Select from "react-select/";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";
import s from './Popup.module.scss';

interface Props {
}

export const Popup = (props: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '20° - ощущается как 17°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
  ];
  return (
    <>
    <div className={s.blur}></div>
    <div className={s.popup}>
      <div className={s.this__day_items}>{
        items.map(( item ) => 
          <ThisDayItem key={ item.icon_id } item={ item }/>
        )}
      </div>
    </div>
    </>
  )
}
