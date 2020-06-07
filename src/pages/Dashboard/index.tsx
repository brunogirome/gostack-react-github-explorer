import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore Github repositories.</Title>

      <Form action="">
        <input placeholder="Insert the repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/44439996?s=460&u=ee7ce67dcf08207fca548118c5f4a4f3e66644d1&v=4"
            alt="lnpc"
          />
          <div>
            <strong>repostiory name</strong>
            <p>A awesome text about the repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/44439996?s=460&u=ee7ce67dcf08207fca548118c5f4a4f3e66644d1&v=4"
            alt="lnpc"
          />
          <div>
            <strong>repostiory name</strong>
            <p>A awesome text about the repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/44439996?s=460&u=ee7ce67dcf08207fca548118c5f4a4f3e66644d1&v=4"
            alt="lnpc"
          />
          <div>
            <strong>repostiory name</strong>
            <p>A awesome text about the repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="test">
          <img
            src="https://avatars0.githubusercontent.com/u/44439996?s=460&u=ee7ce67dcf08207fca548118c5f4a4f3e66644d1&v=4"
            alt="lnpc"
          />
          <div>
            <strong>repostiory name</strong>
            <p>A awesome text about the repository</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
