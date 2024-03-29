import { UsergroupAddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

export const menuItems: MenuProps['items'] = [
  getItem('Пользователи', 'sub1', <UsergroupAddOutlined />, [
    getItem('Все пользователи', '/users'),
    getItem('Заявки на вывод', '/withdraw'),
    getItem('Пополнения', '/populate'),
  ]),
  getItem('Игры', 'sub2', <UsergroupAddOutlined />, [
    getItem('Список игр', '/games'),
    getItem('История игр', '/gameHistory'),
  ]),
];