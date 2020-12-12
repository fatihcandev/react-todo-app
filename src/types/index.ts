export enum IconName {
  check = 'check',
  cross = 'cross',
  moon = 'moon',
  sun = 'sun',
}

export interface ITodo {
  label: string;
  completed: boolean;
  onCompleteClick: () => void;
  onDeleteClick: () => void;
}
