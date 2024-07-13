export class SidebarConstants {
  public static menusForAdmin: Array<{
    id: number;
    text: string;
    route?: string;
    tagId: string;
    isChildren?: boolean;
    children?: any;
  }> = [
    {
      id: 1,
      text: 'Master',
      tagId: 'MasterMenuBtn',
      isChildren: true,
      children: [
        {
          id: 1,
          text: 'Post',
          route: '/admin/post',
          tagId: 'PostMenuBtn',
        },
        {
          id: 2,
          text: 'Category',
          route: '/admin/category',
          tagId: 'CategoryMenuBtn',
        },
      ],
    },
    {
      id: 2,
      text: 'Dashboard',
      tagId: 'DashboardMenuBtn',
      isChildren: false,
    },
  ];

  public static menusForClient: Array<{
    id: number;
    text: string;
    route: string;
    tagId: string;
  }> = [
    {
      id: 1,
      text: 'Post',
      route: '/post',
      tagId: 'PostMenuBtn',
    },
    {
      id: 2,
      text: 'Category',
      route: '/category',
      tagId: 'CategoryMenuBtn',
    },
  ];
}
