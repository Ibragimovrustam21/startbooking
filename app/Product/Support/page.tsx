
import { DialogWindow, MessageInput } from "modules/Product/Support/components";

export default function Support() {
  return (
    <div className="wrapper bg-page-color-2">
      <p className="font-medium text-3xl mb-7">
        Поддержка
      </p>
      {/* dialog window */}
      <DialogWindow />
      {/* input */}
      <MessageInput />
    </div>
  )
}
