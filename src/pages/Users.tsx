import { Button, Tag, Typography, Table, Avatar, notification } from 'antd'
import { useEffect, useState } from 'react';
const { Text } = Typography;
import type { ColumnsType } from 'antd/es/table';
import axios from 'axios'


const Users = () => {
  const [appState, setAppState] = useState();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: `Игра недоступна`,
      placement: 'topRight',
    });
  };

  useEffect(() => {
    const apiUrl = 'http://78.155.194.209:3060/users';
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      console.log(allPersons)
      setAppState(allPersons);
    });
  }, []);


  const openGame = (id: number) => {
    setLoading(true);
    const apiUrl = 'http://78.155.194.209:9000/provider/openGame?idGame=' + id;
    axios.get(apiUrl).then((resp) => {
      const url = resp.data?.content?.game?.url;
      if (url) {
        window.open(url, '_blank'); // Открываем URL в новом окне
      }
      if (resp.data?.status === 'fail') {
        openNotification()
      }
      setLoading(false)
    });
  }

  const columns: ColumnsType<any> = [
    {
      title: 'Имя',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'Баланс',
      dataIndex: 'balance',
      key: 'balance',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'Заработано',
      dataIndex: 'earned',
      key: 'earned',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phone',
      key: 'phone',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'Почта',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <Text>{text}</Text>,
    },
    {
      title: 'TG',
      dataIndex: 'telegram_id',
      key: 'telegram_id',
      render: (text) => <Text>{text}</Text>,
    },
  ];

  return (
    <Table columns={columns} dataSource={appState} rowKey={meditation => meditation.id} />
  )
}

export default Users