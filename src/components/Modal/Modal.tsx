import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react'
import { Fragment, PropsWithChildren, useRef } from 'react'
import Container from '../Container/Container'
import { XCircleIcon } from '@heroicons/react/24/outline'
import Title from '../Typography/Title'

type Props = PropsWithChildren<{
  show: boolean
  onClose: (status: boolean) => void
  title?: string
}>
export default function Modal({ children, show, onClose, title }: Props) {
  const initialFocus = useRef(null)

  return (
    <Transition show={show} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40"
        onClose={onClose}
        initialFocus={initialFocus}
      >
        <div className="hidden" ref={initialFocus} />
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-2 text-center sm:items-center sm:p-0 w-full">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <DialogPanel className="relative transform w-5/6 sm:w-1/2 xl:w-1/2">
                {onclose && (
                  <Container className="flex justify-end pb-2">
                    <XCircleIcon
                      className="cursor-pointer h-10 w-10 text-white"
                      onClick={() => onClose(false)}
                    />
                  </Container>
                )}
                <Container className="bg-white rounded-xl px-4 sm:px-8 py-4 text-left transition-all">
                  {title && <Title className="mb-4">{title}</Title>}
                  {children}
                </Container>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export type { Props as ModalProps }
