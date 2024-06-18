import BadgeStyles from "./Badge.module.scss";

const Color = {
  beige: BadgeStyles.beige,
  green: BadgeStyles.green,
  blue: BadgeStyles.blue,
  purple: BadgeStyles.purple,
};

const Badge = ({ children }) => {
  let boxColor;

  if (children === "동료") {
    boxColor = Color.purple;
  } else if (children === "지인") {
    boxColor = Color.beige;
  } else if (children === "가족") {
    boxColor = Color.green;
  } else if (children === "친구") {
    boxColor = Color.blue;
  }

  return (
    <div className={`${BadgeStyles["profile-relation"]} ${boxColor}`}>
      {children}
    </div>
  );
};

export default Badge;
