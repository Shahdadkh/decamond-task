import styles from "./input.module.scss";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: Props) {
  return <input className={styles.input} {...props} />;
}
