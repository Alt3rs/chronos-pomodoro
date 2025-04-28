import styles from './styles.module.css';

type GenericcHtmlProps = {
  children: React.ReactNode;
};

export function GenericHtml({ children }: GenericcHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
