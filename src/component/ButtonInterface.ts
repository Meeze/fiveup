export type ButtonType = 'primary'|'secondary'|'default';
export interface ButtonInterface {
  link: string,
  label: string,
  type: ButtonType;
}
