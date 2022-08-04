import React from "react";
import style from "../../styles/ExpandCard.module.css";
import { Card } from "./Card";

const images = [
  {
    id: 1,
    title: "Golden",
    url: "https://xcien.com/img/SitioWeb_PromoAgo_xcien.png",
    active: "active",
  },
  {
    id: 2,
    title: "Golden",
    url: "https://xcien.com/img/SDWAN-JUL-XCIEN.png",
    active: "",
  },
  {
    id: 3,
    title: "Golden",
    url: "https://xcien.com/img/Banner-IPv6-XCIEN.png",
    active: "",
  },
  {
    id: 4,
    title: "Golden",
    url: "https://xcien.com/img/banner-tanarah-xcien.png",
    active: "",
  },
  {
    id: 5,
    title: "Golden",
    url: "https://xcien.com/img/bn_join.png",
    active: "",
  },
];

export const CardExpand = () => {
  return (
    <seccion className={style.cards}>
      <Card data={images} />
    </seccion>
  );
};
