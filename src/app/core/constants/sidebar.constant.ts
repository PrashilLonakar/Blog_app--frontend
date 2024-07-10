export class SidebarConstants {
  public static menusForAdmin: Array<{
    id: number;
    text: string;
    route: string;
    tagId: string;
  }> = [
    {
      id: 1,
      text: 'Post',
      route: 'admin/post',
      tagId: 'PostMenuBtn',
    },
    {
      id: 2,
      text: 'Category',
      route: '/admin/category',
      tagId: 'CategoryMenuBtn',
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
