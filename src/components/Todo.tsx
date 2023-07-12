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
  {
    value: 'Do this other thingy that is longer than the first thingy',
  },
];

export default function Todo() {
  return (
    <main>
      <div className="mx-auto max-w-screen-sm">
        <div className="ui-timeline relative bg-white p-3 dark:bg-gray-900">
          <div
            className="absolute left-[2.4375rem] top-6 h-[calc(100%-6rem)] border-l-2 border-dashed border-neutral-300"
            style={{ zIndex: 1 }}
          ></div>
          <ul className="ui-list relative flex flex-col gap-2">
            {todoItems.map((todoItem, i) => (
              <li
                key={i}
                className="ui-list-item relative flex rounded-xl bg-neutral-100 dark:bg-neutral-800"
              >
                <div className="absolute left-0 top-0" style={{ zIndex: 2 }}>
                  <label className="relative flex h-14 w-14 select-none items-center justify-center rounded-full">
                    <input
                      type="checkbox"
                      className="h-6 w-6 rounded-full border-2 bg-transparent"
                    />
                    <div
                      className="pointer-events-none absolute h-8 w-8 rounded-full bg-neutral-100"
                      aria-hidden="true"
                      style={{ zIndex: -1 }}
                    ></div>
                  </label>
                </div>
                <div className="h-14 w-14 shrink-0"></div>
                <div className="flex grow flex-col p-3 pl-0">
                  <div className="text-base text-neutral-600 dark:text-neutral-300">
                    3:30 PM
                  </div>
                  <div className="text-lg font-semibold text-gray-800 dark:text-white">
                    {todoItem.value}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
