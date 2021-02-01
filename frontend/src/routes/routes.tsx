import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../containers/Layout';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route path="/" exact component={Home} />

          <Redirect to="/" />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
