import React from 'react';
import { StatusBar, Style } from '@capacitor/status-bar';
import Todo from '~/components/Todo';
import { Plus, Settings } from 'lucide-react';

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
    <div className="mx-auto flex max-w-screen-sm flex-col">
      <header className="fixed left-0 top-0 z-50 w-full shrink-0 border-b bg-gray-200/30 backdrop-blur-md">
        <div className="mx-auto max-w-screen-sm">
          <div className="flex h-16 items-center px-3">
            <div className="mr-auto" />
            <div className="shrink-0">
              <h1 className="cursor-default text-xl font-semibold">My Itineraries</h1>
            </div>
            <div className="ml-auto" />
            <div>
              <button
                type="button"
                className="inline-flex h-[40px] w-[40px] items-center justify-center rounded-full bg-transparent text-gray-600 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                <Settings />
              </button>
            </div>
          </div>
        </div>
      </header>
      <nav className="fixed bottom-0 left-0 z-50 w-full shrink-0 border-t bg-gray-200/30 backdrop-blur-md">
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
  );
}
