import CheckoutBar from '../components/CheckoutBar';
import {useRecoilState} from 'recoil';
import {chainState} from '../store';

import {useRoute} from 'wouter';
import en from '../constants/en.json';

const Project = () => {
  const [chain] = useRecoilState(chainState);
  const [, parameters] = useRoute('/project/:id');

  if (parameters == undefined) {
    return (
      <div>
        <h1>{en.projectNotFound}</h1>
      </div>
    );
  }
  return (
    <div>
      <h3>Project name...</h3>
      <h2>Chain: {chain.chain}</h2>
      <h2>ID: {parameters.id}</h2>
      <CheckoutBar />
    </div>
  );
};
export default Project;
