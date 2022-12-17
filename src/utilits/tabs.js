import Agreements from '../components/Home/Agreements';
import Invoice from '../components/Home/Invoice';
import Act from '../components/Home/Act';
import Proxy from '../components/Home/Proxy';
import TTN from '../components/Home/TTN';

export let item = [
  {
    label: 'Договора',
    key: '1',
    children: <Agreements />,
  },
  {
    label: 'Счет фактуры',
    key: '2',
    children: <Invoice />,
  },
  {
    label: 'Акт',
    key: '3',
    children: <Act />,
  },
  {
    label: 'Доверенность',
    key: '4',
    children: <Proxy />,
  },

  {
    label: 'ТТН',
    key: '5',
    children: <TTN />,
  },
];
