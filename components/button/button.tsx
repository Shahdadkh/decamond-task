import styles from "./button.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
  return <button className={styles.button} {...props} />;
}
