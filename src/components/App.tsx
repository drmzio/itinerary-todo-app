import * as React from 'react';
import Todo from '~/components/Todo';
import { App as KonstaApp, Icon, Link, Navbar, NavbarBackLink, Page, Toolbar } from 'konsta/react';
// import { StatusBar, Style } from '@capacitor/status-bar';
import { Plus } from 'framework7-icons/react';


// window.matchMedia('(prefers-color-scheme: dark)').addListener(async (status) => {
//   try {
//     await StatusBar.setStyle({
//       style: status.matches ? Style.Dark : Style.Light,
//     });
//   } catch {
//     /* empty */
//   }
// });

export default function App() {
  return (
    <KonstaApp theme="ios" safeAreas>
      <Page>
        <Navbar
          transparent
          title="San Diego Trip 2023"
          left={<NavbarBackLink />}
        />
        {/*<header className="fixed left-0 top-0 z-50 w-full shrink-0 bg-gray-200/50 translucent dark:bg-black/50">
          <div className="relative flex h-16 items-center px-3 hairline-b">
            <div className="mr-auto" />
            <div className="shrink-0">
              <h1 className="cursor-default text-xl font-semibold dark:text-white">
                San Diego Trip 2023
              </h1>
            </div>
            <div className="ml-auto" />
            <div>
              <button
                type="button"
                className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent text-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:text-gray-300"
              >
                <Settings />
              </button>
            </div>
          </div>
        </header>*/}
        <Todo />
        <Toolbar className="sticky bottom-0 left-0 w-full">
          <Link navbar>
            <Icon
              ios={<Plus className="mr-1.5 h-5 w-5" />}
            />
            New Itinerary
          </Link>
        </Toolbar>
        {/*<div id="app-nav-bottom">
          <nav className="fixed bottom-0 left-0 z-50 w-full shrink-0 bg-gray-200/50 translucent dark:bg-black/25">
            <div className="relative flex h-16 items-center px-3 hairline-t">
              <button
                type="button"
                className="inline-flex h-[40px] items-center gap-x-1.5 rounded-full bg-transparent px-0 text-base font-medium leading-[40px] text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Plus />
                New Itinerary
              </button>
            </div>
          </nav>
          <div className="h-16 shrink-0" />
        </div>*/}
      </Page>
    </KonstaApp>
  );
}
