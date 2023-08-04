import clsx from 'clsx';
import React, {
  ChangeEvent, useEffect, useLayoutEffect, useRef,
  useState,
} from 'react';
import { Block, BlockTitle, Checkbox, ListInput } from 'konsta/react';
import TextareaAutosize from 'react-textarea-autosize';

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

// type State = {
//   offsetTop: number;
//   pos: { x: number; y: number };
//   list: number[];
//   setList: Dispatch<SetStateAction<number[]>>;
// };

// const initialState: State = { offsetTop: 0, pos: { x: 0, y: 0 }, list: [], setList: undefined };

// const StickyGroupContext = createContext(initialState);
//
// interface StickyGroupProps extends HTMLAttributes<HTMLElement> {
//   offsetTop?: number;
// }

// function StickyGroup({ offsetTop = 0, children }: StickyGroupProps) {
//   const [list, setList] = useState<number[]>(initialState.list);
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//
//   useLayoutEffect(() => {
//     const handleScroll = () => {
//       console.log('Scroll', window.scrollY);
//       setPos({ x: window.scrollX, y: window.scrollY });
//     };
//
//     handleScroll();
//
//     window.addEventListener('scroll', handleScroll, {
//       capture: false,
//       passive: true,
//     });
//
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
//
//   console.log('list', list);
//
//   const value = useMemo(() => {
//     return { offsetTop, pos, list, setList };
//   }, [offsetTop, pos, list, setList]);
//
//   return <StickyGroupContext.Provider value={value}>{children}</StickyGroupContext.Provider>;
// }

// interface StickyHeaderProps extends HTMLAttributes<HTMLElement> {
//   offsetTop?: number;
// }
//
// function StickyHeader({ children, ...props }: StickyHeaderProps) {
//   const { offsetTop, pos, list, setList } = useContext(StickyGroupContext);
//   const [el, setEl] = useState<DOMRect>(undefined);
//
//   const setElRef = useCallback((ref: HTMLElement) => {
//     if (!ref) return;
//     const _el = ref.getBoundingClientRect();
//     setList((state) => [...state, _el.y]);
//     setEl(_el);
//   }, []);
//
//   const stickyStyles: CSSProperties = useMemo(() => {
//     if (!el) {
//       return {
//         position: 'static',
//         top: 'auto',
//       };
//     }
//
//     if (pos.y + offsetTop >= el.top) {
//       return {
//         position: 'fixed',
//         top: offsetTop,
//       };
//     }
//
//     return {
//       position: 'static',
//       top: 'auto',
//     };
//   }, [offsetTop, el, pos]);
//
//   return (
//     <Fragment>
//       <header ref={setElRef} style={stickyStyles} {...props}>
//         {children}
//       </header>
//     </Fragment>
//   );
// }

export default function Todo() {
  return (
    <div>
      {todoGroups.map((todoGroup) => (
        <div
          key={todoGroup.id}
          className="ui-timeline relative"
        >
          {/*<header className="static left-0 top-0 z-40 w-full shrink-0 bg-gray-200/25 dark:bg-black/25">
            <div className="relative flex h-12 items-center px-3 hairline-b translucent">
              <div className="shrink-0">
                <h1 className="cursor-default text-lg font-medium dark:text-white">
                  {todoGroup.label}
                </h1>
              </div>
              <div className="mr-auto" />
              <div className="ml-auto" />
            </div>
          </header>*/}
          <BlockTitle medium>
            Monday
          </BlockTitle>
          <Block>
            <ul className="ui-list relative flex flex-col gap-2">
              {todoGroup.items.map((todoItem, i) => (
                <li
                  key={i}
                  className={clsx('ui-list-item relative', {
                    ['ui-list-item--last-child']: todoGroup.items.length - 1 === i,
                  })}
                >
                  <div className="ui-timeline-divider absolute left-[27px] top-[calc(56px/2)] z-[1] h-full border-l border-dashed border-gray-300 dark:border-gray-700" />
                  {/*<div className="absolute left-0 top-0 z-[2]">
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
                  </div>*/}
                  <TodoItem
                    value={todoItem.value}
                  />
                </li>
              ))}
            </ul>
          </Block>
        </div>
      ))}
    </div>
  );
}

interface TodoItemProps {
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

function TodoItem({ value }: TodoItemProps) {
  const [input, setInput] = useState<HTMLTextAreaElement>(undefined);
  const [isEdit, setIsEdit] = useState(false);
  const [checked, setChecked] = useState(false);

  useLayoutEffect(() => {
    if (isEdit && input) {
      input.focus();
      input.setSelectionRange(
        input.value.length,
        input.value.length
      );
    }
  }, [input, isEdit]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setChecked(e.target.checked);
  }

  const handleClick = () => {
    setIsEdit(true);
  }

  return (
    <div
      className={clsx(
        'relative flex rounded-xl bg-ios-light-surface-2 dark:bg-ios-dark-surface-1',
        isEdit && 'ring-1 ring-inset'
      )}
    >
      <div className="h-14 w-14 shrink-0" aria-hidden="true" />
      <div className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center">
        <div className="z-[2] flex h-8 w-8 items-center justify-center rounded-full bg-ios-light-surface-2 dark:bg-ios-dark-surface-1">
          <Checkbox
            name="checkbox-1"
            checked={checked}
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className="flex grow flex-col p-3 pl-0"
        onClick={handleClick}
      >
        <div className="-ml-2">
          <div className="inline-flex h-6 cursor-default items-center rounded-full bg-transparent px-2 text-base text-gray-600 hover:bg-gray-200 dark:text-gray-400">
            {/*{`3:30 PM`}*/}
            {JSON.stringify(isEdit)}
          </div>
        </div>
        <div>
          {isEdit ? (
            <TextareaAutosize
              ref={setInput}
              defaultValue={value}
              className="block w-full appearance-none bg-transparent text-lg font-medium text-gray-900 focus:outline-none dark:text-white"
            />
          ) : (
            <div className="text-lg font-medium text-gray-900 dark:text-white">
              {value}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
