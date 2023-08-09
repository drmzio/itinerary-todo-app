import * as React from 'react';
import { Plus, Settings } from 'lucide-react';
import Todo from '~/components/Todo';
import { App } from 'konsta/react';
// import { StatusBar, Style } from '@capacitor/status-bar';

// window.matchMedia('(prefers-color-scheme: dark)').addListener(async (status) => {
//   try {
//     await StatusBar.setStyle({
//       style: status.matches ? Style.Dark : Style.Light,
//     });
//   } catch {
//     /* empty */
//   }
// });

export default function MyApp() {
  return (
    <App theme="ios" safeAreas>
      <div id="app-nav-top">
        <header className="fixed left-0 top-0 z-50 w-full shrink-0">
          <div className="relative bg-gray-200/50 hairline-b translucent dark:border-gray-700 dark:bg-black/50">
            <div className="flex h-16 items-center px-3">
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
          </div>
        </header>
        <div className="h-16 shrink-0" />
      </div>
      <main className="grow">
        <Todo />
      </main>
      <div id="app-nav-bottom">
        <nav className="fixed bottom-0 left-0 z-50 w-full shrink-0 border-t bg-gray-200/50 translucent dark:border-gray-700 dark:bg-black/50">
          <div className="flex h-16 items-center px-3">
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
      </div>
    </App>
  );
}
