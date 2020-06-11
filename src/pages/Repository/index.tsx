import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepostioryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepostioryParams>();

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="data:image/jpeg;base64,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"
            alt="avatar"
          />
          <div>
            <strong>user/respository</strong>
            <p>Repository Description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>11</strong>
            <span>Starts</span>
          </li>
          <li>
            <strong>01</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>2005</strong>
            <span>Opened Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="/">
          <div>
            <strong>Issue title</strong>
            <p>Issue description</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
