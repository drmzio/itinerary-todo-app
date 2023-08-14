import clsx from 'clsx';
import React from 'react';

const todoItems = [
  {
    value: 'Do this thingy',
  },
  {
    value: 'Do this other thingy that is longer than the first thingy',
  },
  {
    value: 'Do this thingy',
  },
  {
    value: 'Do this other thingy that is longer than the first thingy',
  },
  {
    value: 'Do this thingy',
  },
  {
    value: 'Do this other thingy that is longer than the first thingy',
  },
  {
    value: 'Do this thingy',
  },
  {
    value: 'Do this other thingy that is longer than the first thingy',
  },
  {
    value: 'Do this thingy',
  },
  {
    value: 'Do this other thingy that is longer than the first thingy',
  },
  {
    value: 'Do this thingy',
  },
];

export default function Todo() {
  return (
    <div className="ui-timeline relative overflow-hidden bg-white dark:bg-gray-900">
      <header className="static w-full shrink-0 border-b bg-gray-200/30 backdrop-blur-md dark:border-gray-700 dark:bg-black/30">
        <div className="mx-auto max-w-screen-sm">
          <div className="flex h-12 items-center px-3">
            <div className="shrink-0">
              <h1 className="cursor-default text-lg font-semibold dark:text-white">Monday</h1>
            </div>
            <div className="mr-auto" />
            <div className="ml-auto" />
          </div>
        </div>
      </header>
      <ul className="ui-list relative mb-2 flex flex-col gap-2 p-3">
        {todoItems.map((todoItem, i) => (
          <li
            key={i}
            className={clsx('ui-list-item relative', {
              ['ui-list-item--last-child']: todoItems.length - 1 === i,
            })}
          >
            <div className="ui-timeline-divider absolute left-[27px] top-[calc(56px/2)] z-[1] h-full border-l-2 border-dashed border-gray-300 dark:border-gray-700" />
            <div className="absolute left-0 top-0 z-[2]">
              <label className="relative flex h-14 w-14 select-none items-center justify-center rounded-full">
                <input
                  type="checkbox"
                  className="h-6 w-6 rounded-full border-2 bg-transparent dark:bg-transparent"
                />
                <div
                  className="pointer-events-none absolute z-[-1] h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800"
                  aria-hidden="true"
                ></div>
              </label>
            </div>
            <div className="flex rounded-xl border-2 border-transparent bg-gray-100 dark:bg-gray-800">
              <div className="h-14 w-14 shrink-0"></div>
              <div className="flex grow flex-col p-3 pl-0">
                <div className="-ml-2">
                  <div className="inline-flex h-6 cursor-default items-center rounded-full bg-transparent px-2 text-base text-neutral-600 hover:bg-gray-200 dark:text-neutral-400">
                    {`3:30 PM`}
                  </div>
                </div>
                <div className="text-lg font-semibold text-gray-800 dark:text-white">
                  {todoItem.value}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
