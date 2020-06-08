import React from 'react';
import { useRouteMatch } from 'react-router-dom';

interface RepostioryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepostioryParams>();

  return <h1>{params.repository}</h1>;
};

export default Repository;
