import Generic from '../components/Generic';
import { ReactComponent as Add } from '../assets/icons/add.svg';
import { ReactComponent as Down } from '../assets/icons/arrow_downward.svg';
import { ReactComponent as Up } from '../assets/icons/arrow_upward.svg';
import { ReactComponent as Remove } from '../assets/icons/remove.svg';
import { ReactComponent as Save } from '../assets/icons/save.svg';
import AddPage from '../components/Add';
import Invoice from '../components/Invoice';
export const data = [
  {
    id: 0,
    title: 'Создать',
    path: '/add',
    Icon: Add,
    Component: AddPage,
  },
  {
    id: 1,
    title: 'Входящие',
    path: '/inbox',
    Icon: Down,
    Component: Invoice,
  },
  {
    id: 2,
    title: 'Исходящие',
    path: '/outgoing',
    Icon: Up,
    Component: Generic,
  },
  {
    id: 3,
    title: 'Сохраненные',
    path: '/saved',
    Icon: Save,
    Component: Generic,
  },
  {
    id: 4,
    title: 'Выброшено',
    path: '/deleted',
    Icon: Remove,
    Component: Generic,
  },
];
