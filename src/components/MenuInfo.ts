export type MenuItem = {
  to: string;
  description: string;
  iconName: string;
};

export const menuItems: MenuItem[] = [
  { to: "about", description: "Quiénes somos", iconName: "group" },
  { to: "videos", description: "Videos", iconName: "video" },
  { to: "eventos", description: "Eventos", iconName: "event" },
  { to: "blog", description: "Blog", iconName: "blog" },
  { to: "contact", description: "Contáctanos", iconName: "contact" },
];
