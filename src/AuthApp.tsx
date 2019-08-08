import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './components/Page/Page';
import NotFound from './pages/NotFound/NotFound';
import { Generate } from './pages/Generate/Generate';
import { Explore } from './pages/Explore/Explore';
import { Library } from './pages/Library/Library';
import { Details } from './pages/Details/Details';

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
                  path="/"
                  render={routeProps => (
                    <Page>
                      <Explore {...routeProps} />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/generate"
                  render={routeProps => (
                    <Page>
                      <Generate {...routeProps} />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/library"
                  render={routeProps => (
                    <Page>
                      <Library {...routeProps} />
                    </Page>
                  )}
                />
                <Route
                  exact
                  path="/palette/:id"
                  render={routeProps => (
                    <Page>
                      <Details {...routeProps} />
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
