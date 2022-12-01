import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import List from './pages/List';
import Detail from './pages/Detail';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={List} exact />
        <Route path={`${match.path}/:todoId`} component={Detail} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
