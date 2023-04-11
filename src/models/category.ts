import { useEffect, useState } from 'react';

import Api from '@/pages/Goods/services';

const cookie = localStorage.getItem('token');
export default () => {
  const [category, setCategory] = useState<any[]>([]);

  useEffect(() => {
    getCategoryList();
  }, []);

  const getCategoryList = () => {
    if (cookie) {
      Api.Goods.Category({}).then((res) => {
        setCategory(res.entry || []);
      });
    }
  };

  return {
    category,
    getCategoryList,
  };
};
