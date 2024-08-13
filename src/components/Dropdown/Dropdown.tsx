import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { classNames } from '../../libs/classNameUtils'
import { DropdownProps } from './type'

type Props = DropdownProps
export default function Select({
  options,
  placeholder = 'Select item',
  selected,
  onChange,
  disabled,
  renderIcon,
  renderClassName,
  optionPosition = 'absolute',
}: Props) {
  const disabledClassName = disabled ? 'cursor-not-allowed' : 'cursor-default'

  return (
    <Listbox value={selected} onChange={onChange} disabled={disabled}>
      <div className="relative">
        <ListboxButton
          className={classNames(
            'relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg border border-gray-300 focus:outline-none focus-visible:border-primary-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm',
            disabledClassName,
            renderClassName,
          )}
        >
          <span
            className={classNames(
              'block truncate',
              disabled ? 'text-black/30' : '',
            )}
          >
            {selected ? selected.label : placeholder}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            {!renderIcon && (
              <ChevronUpDownIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            )}
            {renderIcon && renderIcon(selected)}
          </span>
        </ListboxButton>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            className={classNames(
              optionPosition,
              'z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black/5 focus:outline-none sm:text-sm',
            )}
          >
            {options.map((item, index) => {
              const isSelected = selected?.value === item.value
              return (
                <ListboxOption
                  key={`item-${item.value}-${index}`}
                  className={({ selected }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      selected
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-900'
                    }`
                  }
                  value={item}
                >
                  <>
                    <span
                      className={`block truncate ${
                        isSelected ? 'font-medium' : 'font-normal'
                      }`}
                    >
                      {item.label}
                    </span>
                    {isSelected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                </ListboxOption>
              )
            })}
            {options.length === 0 && (
              <ListboxOption
                className="relative py-2 pl-10 pr-4 text-gray-900 cursor-default select-none"
                value={null}
              >
                <span className="block font-normal truncate">
                  No options available
                </span>
              </ListboxOption>
            )}
          </ListboxOptions>
        </Transition>
      </div>
    </Listbox>
  )
}
