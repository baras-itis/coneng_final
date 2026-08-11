export interface SubMenu {
  id: number;
  title: string;
  link: string;
}

export interface Menu {
  id: number;
  title: string;
  link: string;
  submenu?: SubMenu[];
}

export interface BurgerMenuProps {
  items: Menu[];
}

export interface NavigationCard {
  id: string;
  title: string;
  link: string;
  text?: string;
  images?: string[];
  image_source: string;
}

export interface NavigationCardsProps {
  items: NavigationCard[];
}
