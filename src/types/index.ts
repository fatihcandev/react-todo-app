export enum IconName {
  check = 'check',
  cross = 'cross',
  moon = 'moon',
  sun = 'sun',
}

export interface ITodo {
  id: string;
  label: string;
  completed: boolean;
}

export enum TodoFilter {
  all,
  active,
  completed,
}
