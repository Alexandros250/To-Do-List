import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Button
        onClick={open}
        className="cursor-pointer transition-all bg-black text-white px-6 py-2 rounded-lg border-white border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] m-0"
      >
        Add Task
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className=" text-white px-4 py-5 rounded-lg mb-5 text-4xl font-bold"
              >
                Add Task
              </DialogTitle>

              <input
                className="bg-black text-white px-6 py-2 rounded-lg border-white border-b-[4px] m-0"
                placeholder="Write here..."
                maxLength={20}
              />

              <div className="mt-4">
                <Button
                  className="bg-black text-white px-6 py-2 rounded-lg border-white hover:border-black border-b-[4px] m-0 inline-flex items-center gap-2  text-sm/6 font-semibold shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-white hover:text-black data-open:bg-gray-700"
                  onClick={close}
                >
                  Commit
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
