import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
