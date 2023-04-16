import aboutStyles from "./description-img.module.scss";
type Props = {
  disableImage?: boolean;
  description: string | string[];
  imageUrl: string;
};
export default function ImageWithContent({
  description,
  imageUrl,
  disableImage = false,
}: Props) {
  const isMultiParagraph = Array.isArray(description);

  return (
    <div className={aboutStyles.description}>
      {isMultiParagraph ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {description.map((item) => (
            <div key={item} className={aboutStyles["description-text"]}>
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className={aboutStyles["description-text"]}>{description}</div>
      )}
      {!disableImage && (
        <div className={aboutStyles["description-img"]}>
          <div
            className={aboutStyles.categoryImg}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        </div>
      )}
    </div>
  );
}
