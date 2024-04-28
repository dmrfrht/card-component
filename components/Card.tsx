import React from "react";
import styles from "./Card.module.scss";

export enum CardLayout {
  ImageLeft = "imageLeft",
  ImageRight = "imageRight",
  ImageTop = "imageTop",
  ImageBottom = "imageBottom",
}

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
  layout: CardLayout;
};

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  layout,
}) => {
  const isHorizontal =
    layout === CardLayout.ImageLeft || layout === CardLayout.ImageRight;
  const imageClass = isHorizontal
    ? styles["fixed-width"]
    : styles["fixed-height"];
  const cardClass = isHorizontal ? styles.horizontal : styles.vertical;

  const trimmedDescription =
    description.length > 300
      ? description.substring(0, 297) + "..."
      : description;

  const image = (
    <img
      src={imageUrl}
      alt={title}
      className={`${styles.image} ${imageClass}`}
    />
  );
  const text = (
    <div className={styles.text}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{trimmedDescription}</p>
    </div>
  );

  let content;
  switch (layout) {
    case CardLayout.ImageLeft:
      content = [image, text];
      break;
    case CardLayout.ImageRight:
      content = [text, image];
      break;
    case CardLayout.ImageTop:
      content = [image, text];
      break;
    case CardLayout.ImageBottom:
      content = [text, image];
      break;
  }

  return <div className={`${styles.card} ${cardClass}`}>{content}</div>;
};

export default Card;
