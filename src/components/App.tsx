import React from 'react';
import { StatusBar, Style } from '@capacitor/status-bar';
import Todo from '~/components/Todo';
import { Plus } from 'lucide-react';
import { itineraries } from '~/data/itineraries';

window.matchMedia('(prefers-color-scheme: dark)').addListener(async (status) => {
  try {
    await StatusBar.setStyle({
      style: status.matches ? Style.Dark : Style.Light,
    });
  } catch {
    /* empty */
  }
});

export default function App() {
  return (
    <div className="flex h-full max-h-screen min-h-screen items-center bg-gray-100">
      <div className="mx-auto flex h-[calc(100vh-8rem)] w-full max-w-screen-md flex-col overflow-hidden rounded-xl border bg-white">
        <div className="shrink-0 border-b bg-white">
          <div className="flex h-14 items-center px-4">
            <h1 className="cursor-default text-xl font-medium text-gray-800 dark:text-white">
              My Itineraries
            </h1>
          </div>
        </div>
        <div className="flex grow flex-row overflow-hidden">
          <div className="w-72 overflow-y-auto border-r">
            <ul>
              {[...itineraries, ...itineraries, ...itineraries].map((itinerary) => (
                <li key={itinerary.id}>
                  {itinerary.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1 overflow-y-auto">
            <Todo />
          </div>
        </div>
        <div className="shrink-0 border-t bg-white">
          <div className="flex h-14 items-center px-4">
            <button
              type="button"
              className="inline-flex h-[40px] items-center gap-x-1.5 rounded-full bg-transparent px-0 text-base font-medium leading-[40px] text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Plus />
              New Itinerary
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  /*return (
    <div className="mx-auto flex max-w-screen-sm flex-col">
      <header className="fixed left-0 top-0 z-50 w-full shrink-0 border-b bg-gray-200/50 backdrop-blur-md dark:border-gray-700 dark:bg-black/50">
        <div className="mx-auto max-w-screen-sm">
          <div className="flex h-16 items-center px-3">
            <div className="mr-auto" />
            <div className="shrink-0">
              <h1 className="cursor-default text-xl font-medium dark:text-white">
                My Itineraries
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
      <nav className="fixed bottom-0 left-0 z-50 w-full shrink-0 border-t bg-gray-200/50 backdrop-blur-md dark:border-gray-700 dark:bg-black/50">
        <div className="mx-auto max-w-screen-sm">
          <div className="flex h-16 items-center px-3">
            <button
              type="button"
              className="inline-flex h-[40px] items-center gap-x-1.5 rounded-full bg-transparent px-0 text-base font-medium leading-[40px] text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              <Plus />
              New Itinerary
            </button>
          </div>
        </div>
      </nav>
      <main className="grow">
        <div className="h-16 shrink-0" />
        <Todo />
        <Todo />
        <Todo />
        <div className="h-16 shrink-0" />
      </main>
    </div>
  );*/
}
