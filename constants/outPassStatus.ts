interface OutPassStatus {
  id: number;
  status: string;
  iconName: 'add-circle' | 'hourglass' | 'checkmark-circle' | 'close-circle';
  color: string;
  text: string;
}

export const outPassStatus: OutPassStatus[] = [
  { id: 1, status: 'Generate', iconName: 'add-circle', color: '#0e294b', text: 'Generate Your OutPass' },
  { id: 2, status: 'Pending', iconName: 'hourglass', color: '#FFC107', text: 'Check Your Pending OutPass' },
  { id: 3, status: 'Approved', iconName: 'checkmark-circle', color: 'green', text: 'Check Your Approve OutPass' },
  { id: 4, status: 'Denied', iconName: 'close-circle', color: 'red', text: 'Check Your Denied OutPass' },
];

export const iconName: Record<
  string,
  'checkmark-done-circle' | 'alert-circle' | 'close-circle' | 'hourglass' | 'sync-sharp' | 'warning'
> = {
  ISSUED: 'checkmark-done-circle',
  EXPIRED: 'alert-circle',
  REJECTED: 'close-circle',
  REQUESTED: 'hourglass',
  IN_USE: 'sync-sharp',
  LATE: 'warning',
};

export const colorName = {
  ISSUED: '#21bf73',
  EXPIRED: '#fa9715',
  REJECTED: '#f45954',
  REQUESTED: '#fa9715',
  IN_USE: '#21bf73',
  LATE: '#f45954',
};