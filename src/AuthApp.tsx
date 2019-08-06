import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './components/Page/Page';
import NotFound from './Pages/NotFound/NotFound';
import { Generate } from './Pages/Generate/Generate';

export const AuthApp: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <Switch location={location}>
                <Route
                  exact
                  path="/generate"
                  render={routeProps => (
                    <Page>
                      <Generate {...routeProps} />
                    </Page>
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Layout>
  </BrowserRouter>
);
