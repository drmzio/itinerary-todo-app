import clsx from 'clsx';
import React, {
  createContext,
  CSSProperties,
  Dispatch,
  Fragment,
  HTMLAttributes,
  SetStateAction,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';

const todoGroups = [
  {
    id: 'b4b45b3a-156c-4fd2-b753-1adb583464d6',
    label: 'Monday',
    items: [
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
    ],
  },
  {
    id: '0cca6018-8070-4294-9997-945a55e541d6',
    label: 'Tuesday',
    items: [
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
    ],
  },
];

type State = {
  offsetTop: number;
  pos: { x: number; y: number };
  list: number[];
  setList: Dispatch<SetStateAction<number[]>>;
};

const initialState: State = { offsetTop: 0, pos: { x: 0, y: 0 }, list: [], setList: undefined };

const StickyGroupContext = createContext(initialState);

interface StickyGroupProps extends HTMLAttributes<HTMLElement> {
  offsetTop?: number;
}

function StickyGroup({ offsetTop = 0, children }: StickyGroupProps) {
  const [list, setList] = useState<number[]>(initialState.list);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const handleScroll = () => {
      console.log('Scroll', window.scrollY);
      setPos({ x: window.scrollX, y: window.scrollY });
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      capture: false,
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('list', list);

  const value = useMemo(() => {
    return { offsetTop, pos, list, setList };
  }, [offsetTop, pos, list, setList]);

  return <StickyGroupContext.Provider value={value}>{children}</StickyGroupContext.Provider>;
}

interface StickyHeaderProps extends HTMLAttributes<HTMLElement> {
  offsetTop?: number;
}

function StickyHeader({ children, ...props }: StickyHeaderProps) {
  const { offsetTop, pos, list, setList } = useContext(StickyGroupContext);
  const [el, setEl] = useState<DOMRect>(undefined);

  const setElRef = useCallback((ref: HTMLElement) => {
    if (!ref) return;
    const _el = ref.getBoundingClientRect();
    setList((state) => [...state, _el.y]);
    setEl(_el);
  }, []);

  const stickyStyles: CSSProperties = useMemo(() => {
    if (!el) {
      return {
        position: 'static',
        top: 'auto',
      };
    }

    if (pos.y + offsetTop >= el.top) {
      return {
        position: 'fixed',
        top: offsetTop,
      };
    }

    return {
      position: 'static',
      top: 'auto',
    };
  }, [offsetTop, el, pos]);

  return (
    <Fragment>
      <header ref={setElRef} style={stickyStyles} {...props}>
        {children}
      </header>
    </Fragment>
  );
}

export default function Todo() {
  return (
    <StickyGroup offsetTop={64}>
      <div>
        {todoGroups.map((todoGroup) => (
          <div
            key={todoGroup.id}
            className="ui-timeline relative overflow-hidden bg-white dark:bg-gray-900"
          >
            <StickyHeader
              offsetTop={64}
              className="static left-0 top-0 z-40 w-full shrink-0 border-b bg-gray-200/30 backdrop-blur-md dark:border-gray-700 dark:bg-black/30"
            >
              <div className="mx-auto max-w-screen-sm">
                <div className="flex h-12 items-center px-3">
                  <div className="shrink-0">
                    <h1 className="cursor-default text-lg font-semibold dark:text-white">
                      {todoGroup.label}
                    </h1>
                  </div>
                  <div className="mr-auto" />
                  <div className="ml-auto" />
                </div>
              </div>
            </StickyHeader>
            <ul className="ui-list relative mb-2 flex flex-col gap-2 p-3">
              {todoGroup.items.map((todoItem, i) => (
                <li
                  key={i}
                  className={clsx('ui-list-item relative', {
                    ['ui-list-item--last-child']: todoGroup.items.length - 1 === i,
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
        ))}
      </div>
    </StickyGroup>
  );
}
