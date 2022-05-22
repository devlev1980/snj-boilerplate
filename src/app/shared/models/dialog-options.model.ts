export interface MatDialogOptions {
  isShowButtons: boolean;
  isShowTitle: boolean;
  isShowCloseButton: boolean;
  links: Link[]
}
interface Link{
  aHref: string;
  aText: string;
}
